/* App logic: state, theme, tabs, notes, flashcards, quiz. */
/* ================= STATE ================= */
const KEY = "olhum001-review-v1";
function load(){ try{ const r=localStorage.getItem(KEY); return r?JSON.parse(r):{}; }catch(e){ return {}; } }
let store = Object.assign({known:{}, best:{}, theme:null}, load());
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(store)); }catch(e){} }

let tab = "home", scope = "all";
let deck = {ids:[], i:0, shuffle:false, hide:false};
let qz = {phase:"setup", count:10, list:[], i:0, chosen:null, score:0, missedIdx:[]};
let resetArmed = false;

const $ = s => document.querySelector(s);
const inScope = x => scope==="all" || x.ch===scope;
const shuffle = a => { for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
const cc = n => n==="all" ? "" : `--cc:var(--c${n});--ccon:var(--c${n}on)`;

/* ================= THEME ================= */
function effectiveTheme(){
  const t = document.documentElement.getAttribute("data-theme");
  if(t) return t;
  return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function applyTheme(){
  if(store.theme) document.documentElement.setAttribute("data-theme", store.theme);
  $("#themeLbl").textContent = effectiveTheme()==="dark" ? "Light mode" : "Dark mode";
}
$("#themeBtn").addEventListener("click", ()=>{
  store.theme = effectiveTheme()==="dark" ? "light" : "dark";
  save(); applyTheme();
});

/* ================= TABS ================= */
const ICONS = {
  home:'<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="7" height="7" rx="1"/><rect x="13.5" y="3.5" width="7" height="7" rx="1"/><rect x="3.5" y="13.5" width="7" height="7" rx="1"/><rect x="13.5" y="13.5" width="7" height="7" rx="1"/></svg>',
  notes:'<svg viewBox="0 0 24 24"><path d="M5 4h11l3 3v13H5z"/><path d="M8.5 10h7M8.5 13.5h7M8.5 17h4"/></svg>',
  cards:'<svg viewBox="0 0 24 24"><rect x="3" y="6" width="14" height="12" rx="2"/><path d="M7 3.5h12a2 2 0 0 1 2 2V15"/></svg>',
  quiz:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M9.6 9.6a2.5 2.5 0 1 1 3.4 2.3c-.7.3-1 .8-1 1.6"/><path d="M12 16.6v.1"/></svg>'
};
const TABS = [["home","Home"],["notes","Notes"],["cards","Flashcards"],["quiz","Quiz"]];
function drawTabs(){
  $("#tabs").innerHTML = TABS.map(([k,l])=>`<button class="tab" data-tab="${k}" ${tab===k?'aria-current="page"':''}>${ICONS[k]}<span>${l}</span></button>`).join("");
}
$("#tabs").addEventListener("click", e=>{
  const b = e.target.closest("[data-tab]"); if(!b) return;
  go(b.dataset.tab);
});
function go(t, newScope){
  if(newScope!==undefined) scope = newScope;
  tab = t;
  if(t==="cards") buildDeck();
  if(t==="quiz") qz = {phase:"setup", count:qz.count||10, list:[], i:0, chosen:null, score:0, missedIdx:[]};
  drawTabs(); render(); window.scrollTo(0,0);
}

/* ================= RENDER ================= */
function render(){
  const v = $("#view");
  if(tab==="home") v.innerHTML = homeHTML();
  else if(tab==="notes") v.innerHTML = scopeHTML() + notesHTML();
  else if(tab==="cards") { v.innerHTML = scopeHTML() + '<div id="deckArea"></div>'; drawDeck(); }
  else if(tab==="quiz") { v.innerHTML = scopeHTML() + '<div id="quizArea"></div>'; drawQuiz(); }
  const row = document.querySelector(".scope"), on = row && row.querySelector('[aria-pressed="true"]');
  if(row && on) row.scrollLeft = Math.max(0, on.offsetLeft - 18);
}
function scopeHTML(){
  const chips = [["all","All chapters"],[1,"Chapter 1"],[2,"Chapter 2"],[3,"Chapter 3"],[4,"Chapter 4"]];
  return `<div class="scope" role="group" aria-label="Chapter filter">${chips.map(([k,l])=>
    `<button class="chip" data-scope="${k}" style="${cc(k)}" aria-pressed="${scope===k}"><i></i>${l}</button>`).join("")}</div>`;
}
$("#view").addEventListener("click", e=>{
  const s = e.target.closest("[data-scope]");
  if(s){ scope = s.dataset.scope==="all" ? "all" : Number(s.dataset.scope); if(tab==="cards") buildDeck(); if(tab==="quiz") qz={phase:"setup",count:qz.count||10,list:[],i:0,chosen:null,score:0,missedIdx:[]}; render(); return; }
});

/* ---------- Home ---------- */
const COMP = {1:"--t1:9%;--h1:40%;--t2:56%;--h2:30%", 2:"--t1:12%;--h1:30%;--t2:48%;--h2:38%", 3:"--t1:8%;--h1:44%;--t2:58%;--h2:28%", 4:"--t1:14%;--h1:34%;--t2:54%;--h2:32%"};
function chapterStats(n){
  const ids = CARDS.map((c,i)=>[c,i]).filter(([c])=>c.ch===n);
  const known = ids.filter(([,i])=>store.known[i]).length;
  return {known, total:ids.length, best: store.best[n]};
}
function homeHTML(){
  const tiles = [1,2,3,4].map(n=>{
    const s = chapterStats(n);
    return `<button class="canvas" data-open="${n}" style="${cc(n)}" aria-label="Chapter ${n}: ${CH[n].name}. Open notes.">
      <span class="frame"><span class="field" style="${COMP[n]}"><i class="b1"></i><i class="b2"></i></span></span>
      <span class="placard"><b>Chapter ${n}</b><span>${CH[n].name}</span>
      <em>${s.known} of ${s.total} cards known</em><span class="meter"><i style="width:${s.total?Math.round(100*s.known/s.total):0}%"></i></span></span>
    </button>`; }).join("");
  const totalK = Object.keys(store.known).filter(k=>store.known[k]).length;
  const bests = Object.values(store.best);
  const bestAll = store.best.all;
  return `
    <h1>Review Chapters 1 to 4</h1>
    <p class="lede">Pick a chapter to open its notes, or use the buttons below to work through all four.</p>
    <div class="gallery">${tiles}</div>
    <div class="quick">
      <button class="btn" data-go="notes">Read all notes</button>
      <button class="btn ghost" data-go="cards">Drill flashcards</button>
      <button class="btn ghost" data-go="quiz">Take the quiz</button>
    </div>
    <div class="stats ui">
      <div><span>Flashcards marked known</span><span>${totalK} of ${CARDS.length}</span></div>
      <div><span>Best quiz score, all chapters</span><span>${bestAll!==undefined ? bestAll+"%" : "Not taken yet"}</span></div>
    </div>
    <button class="linkbtn" id="resetBtn">${resetArmed?"Tap again to erase all progress":"Reset progress"}</button>`;
}
$("#view").addEventListener("click", e=>{
  const o = e.target.closest("[data-open]"); if(o){ go("notes", Number(o.dataset.open)); return; }
  const g = e.target.closest("[data-go]"); if(g && tab==="home"){ go(g.dataset.go, "all"); return; }
  if(e.target.id==="resetBtn"){
    if(!resetArmed){ resetArmed=true; render(); setTimeout(()=>{ if(resetArmed){ resetArmed=false; if(tab==="home") render(); } },4000); }
    else { store.known={}; store.best={}; save(); resetArmed=false; render(); }
  }
});

/* ---------- Notes ---------- */
function entriesHTML(es){
  return `<div class="entries">${es.map(e=>`<div class="entry"><div class="term">${e.term}</div><div class="parts">${
    e.parts.map(([l,t])=>`<div class="part">${(e.parts.length>1 && l)?`<span class="plabel">${l}</span>`:""}<span>${t}</span></div>`).join("")}</div></div>`).join("")}</div>`;
}
function notesHTML(){
  const chs = [1,2,3,4].filter(n=>scope==="all"||scope===n);
  const open = scope==="all" ? "" : "open";
  const body = chs.map(n=>`
    <section class="chapter" style="${cc(n)}">
      <header><h2>Chapter ${n}: ${CH[n].name}</h2><p>${CH[n].sub}</p></header>
      ${NOTES[n].map(s=>`
        <details class="sec" ${open}>
          <summary><h3>${s.t}</h3></summary>
          <div class="secbody">
            ${s.note?`<p class="note">${s.note}</p>`:""}
            ${s.bullets?`<ul class="bul">${s.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>`:""}
            ${s.entries?entriesHTML(s.entries):""}
          </div>
        </details>`).join("")}
    </section>`).join("");
  return `<div class="deckbar ui"><span class="count">Tap a heading to open or close it</span>
      <div class="toggles"><button class="tog" id="expandAll" aria-pressed="false">${scope==="all"?"Expand all":"Collapse all"}</button></div></div>
    ${body}
    <aside class="trap"><h2>Exam traps</h2><ul class="bul">${TRAPS.map(t=>`<li>${t}</li>`).join("")}</ul></aside>`;
}
$("#view").addEventListener("click", e=>{
  if(e.target.id==="expandAll"){
    const ds = document.querySelectorAll("details.sec");
    const anyClosed = [...ds].some(d=>!d.open);
    ds.forEach(d=>d.open = anyClosed);
    e.target.textContent = anyClosed ? "Collapse all" : "Expand all";
  }
});

/* ---------- Flashcards ---------- */
function buildDeck(){
  let ids = CARDS.map((c,i)=>i).filter(i=>inScope(CARDS[i]));
  if(deck.hide) ids = ids.filter(i=>!store.known[i]);
  if(deck.shuffle) shuffle(ids);
  deck.ids = ids; deck.i = 0;
}
function drawDeck(focus){
  const area = $("#deckArea");
  const bar = `<div class="deckbar ui">
      <div class="toggles">
        <button class="tog" data-tog="shuffle" aria-pressed="${deck.shuffle}">Shuffle</button>
        <button class="tog" data-tog="hide" aria-pressed="${deck.hide}">Hide known</button>
      </div>
      <span class="count">${Math.min(deck.i+1,deck.ids.length)} of ${deck.ids.length}</span></div>`;
  if(!deck.ids.length){
    area.innerHTML = bar + `<div class="panel"><h2>No cards to show</h2><p>Every card in this selection is marked known. Turn off “Hide known”, or reset your progress from the Home tab.</p></div>`;
    return;
  }
  if(deck.i >= deck.ids.length){
    const known = deck.ids.filter(i=>store.known[i]).length;
    area.innerHTML = `<div class="panel"><h2>Deck finished</h2>
      <p>You marked ${known} of ${deck.ids.length} cards as known in this round.</p>
      <div class="quick" style="margin:14px 0 0">
        <button class="btn" data-act="again">Start over</button>
        ${known<deck.ids.length?'<button class="btn ghost" data-act="learning">Study only the ones still learning</button>':'<button class="btn ghost" data-go2="quiz">Take the quiz</button>'}
      </div></div>`;
    return;
  }
  const id = deck.ids[deck.i], c = CARDS[id];
  const isKnown = !!store.known[id];
  area.innerHTML = bar + `
    <div class="progress" style="--cc:var(--c${c.ch})"><i style="width:${Math.round(100*deck.i/deck.ids.length)}%"></i></div>
    <div class="flipbtn" id="flip" role="button" tabindex="0" aria-label="Flashcard. Press Enter or Space to flip." style="--cc:var(--c${c.ch})">
      <span class="flip">
        <span class="face front"><span class="tag">Chapter ${c.ch}${isKnown?", marked known":""}</span><span class="txt">${c.q}</span><span class="hint">Tap to see the answer</span></span>
        <span class="face back" aria-hidden="true"><span class="tag">Answer</span><span class="txt">${c.a}</span><span class="hint">Tap to flip back</span></span>
      </span>
    </div>
    <div class="actions">
      <button class="btn ghost" data-act="learning1">Still learning</button>
      <button class="btn" data-act="known1">Got it</button>
    </div>
    <div class="nav ui">
      <button class="btn ghost small" data-act="prev" ${deck.i===0?"disabled":""}>Previous</button>
      <button class="btn ghost small" data-act="next">Skip</button>
    </div>`;
  if(focus) $("#flip").focus({preventScroll:true});
}
$("#view").addEventListener("click", e=>{
  if(tab!=="cards") return;
  const f = e.target.closest("#flip");
  if(f){ flipCard(f); return; }
  const t = e.target.closest("[data-tog]");
  if(t){ deck[t.dataset.tog] = !deck[t.dataset.tog]; buildDeck(); drawDeck(); return; }
  const g = e.target.closest("[data-go2]"); if(g){ go(g.dataset.go2); return; }
  const a = e.target.closest("[data-act]"); if(!a) return;
  const act = a.dataset.act, id = deck.ids[deck.i];
  if(act==="known1"){ store.known[id]=true; save(); deck.i++; drawDeck(true); }
  else if(act==="learning1"){ delete store.known[id]; save(); deck.i++; drawDeck(true); }
  else if(act==="next"){ deck.i++; drawDeck(true); }
  else if(act==="prev"){ deck.i=Math.max(0,deck.i-1); drawDeck(true); }
  else if(act==="again"){ buildDeck(); drawDeck(true); }
  else if(act==="learning"){ deck.ids = deck.ids.filter(i=>!store.known[i]); deck.i=0; drawDeck(true); }
});
function flipCard(f){
  f.classList.toggle("flipped");
  const flipped = f.classList.contains("flipped");
  f.querySelector(".back").setAttribute("aria-hidden", String(!flipped));
  f.querySelector(".front").setAttribute("aria-hidden", String(flipped));
}
document.addEventListener("keydown", e=>{
  if(tab!=="cards" || !deck.ids.length || deck.i>=deck.ids.length) return;
  if(e.target.id==="flip" && (e.key===" " || e.key==="Enter")){ e.preventDefault(); flipCard(e.target); return; }
  if(e.key==="ArrowRight"){ deck.i++; drawDeck(true); }
  else if(e.key==="ArrowLeft" && deck.i>0){ deck.i--; drawDeck(true); }
});

/* ---------- Quiz ---------- */
function poolIdx(){ return QUIZ.map((q,i)=>i).filter(i=>inScope(QUIZ[i])); }
function startQuiz(idxs){
  const list = shuffle(idxs.slice()).map(i=>{
    const q = QUIZ[i];
    const opts = shuffle([{t:q.ok,ok:true}, ...q.bad.map(t=>({t,ok:false}))]);
    return {idx:i, q:q.q, ch:q.ch, e:q.e, opts, ok:q.ok};
  });
  qz = {phase:"run", count:qz.count, list, i:0, chosen:null, score:0, missedIdx:[]};
  drawQuiz();
}
function drawQuiz(){
  const area = $("#quizArea"); if(!area) return;
  const pool = poolIdx();
  if(qz.phase==="setup"){
    const opts = [10,20].filter(n=>n<pool.length);
    const sel = qz.count==="all" || !opts.includes(qz.count) ? "all" : qz.count;
    const label = scope==="all" ? "all four chapters" : "Chapter "+scope;
    const best = store.best[scope];
    area.innerHTML = `<div class="panel setup">
      <h2>Multiple-choice quiz</h2>
      <p>${pool.length} questions available for ${label}. You get an explanation after each answer, and missed questions are listed at the end.</p>
      <label id="lblc">How many questions?</label>
      <div class="toggles" role="group" aria-labelledby="lblc">
        ${opts.map(n=>`<button class="tog" data-count="${n}" aria-pressed="${sel===n}">${n}</button>`).join("")}
        <button class="tog" data-count="all" aria-pressed="${sel==="all"}">All ${pool.length}</button>
      </div>
      ${best!==undefined?`<p class="ui" style="color:var(--muted);margin:14px 0 0">Your best score here: ${best}%</p>`:""}
      <div class="quick" style="margin:18px 0 0"><button class="btn" data-q="start">Start quiz</button></div>
    </div>`;
    return;
  }
  if(qz.phase==="run"){
    const q = qz.list[qz.i], total = qz.list.length;
    const letters = ["A","B","C","D"];
    const answered = qz.chosen!==null;
    area.innerHTML = `
      <div class="deckbar ui"><span class="count">Question ${qz.i+1} of ${total}</span><span class="count">Score ${qz.score}</span></div>
      <div class="progress" style="--cc:var(--c${q.ch})"><i style="width:${Math.round(100*qz.i/total)}%"></i></div>
      <p class="ui" style="margin:0;color:var(--muted);font-size:.85rem">Chapter ${q.ch}</p>
      <p class="qtext">${q.q}</p>
      <div role="group" aria-label="Answer choices">${q.opts.map((o,i)=>{
        let cls="opt", mark="";
        if(answered){ if(o.ok){cls+=" right"; mark="✓";} else if(i===qz.chosen){cls+=" wrong"; mark="✕";} }
        return `<button class="${cls}" data-pick="${i}" ${answered?"disabled":""}><span class="k">${mark||letters[i]}</span><span>${o.t}${answered&&o.ok?'<span class="sr"> (correct answer)</span>':''}${answered&&i===qz.chosen&&!o.ok?'<span class="sr"> (your answer, incorrect)</span>':''}</span></button>`; }).join("")}</div>
      ${answered?`<div class="explain" style="--cc:var(--${q.opts[qz.chosen].ok?"ok":"bad"})"><b>${q.opts[qz.chosen].ok?"Correct.":"Not quite."}</b> ${q.opts[qz.chosen].ok?"":"The answer is “"+q.ok+"”. "}${q.e}</div>
        <button class="btn" data-q="next" id="nextBtn">${qz.i+1<total?"Next question":"See results"}</button>`:""}`;
    if(answered) $("#nextBtn").focus({preventScroll:false});
    return;
  }
  if(qz.phase==="done"){
    const total = qz.list.length, pct = Math.round(100*qz.score/total);
    const msg = pct>=90 ? "Excellent. You’re exam ready." : pct>=75 ? "Solid. Review the missed items below." : pct>=50 ? "Getting there. Reread the notes for the missed items." : "Go back to the notes and flashcards, then try again.";
    area.innerHTML = `<div class="panel">
      <p class="ui" style="margin:0 0 6px;color:var(--muted)">Your score</p>
      <div class="bigscore">${qz.score}<span style="font-size:.4em;color:var(--muted)"> of ${total}</span></div>
      <p style="margin:10px 0 0"><b class="ui">${pct}%.</b> ${msg}</p>
      <div class="quick" style="margin:16px 0 0">
        ${qz.missedIdx.length?`<button class="btn" data-q="retry">Retry ${qz.missedIdx.length} missed</button>`:""}
        <button class="btn ${qz.missedIdx.length?"ghost":""}" data-q="new">New quiz</button>
        <button class="btn ghost" data-go2="notes">Open notes</button>
      </div>
      ${qz.missedIdx.length?`<ul class="missed">${qz.missedIdx.map(i=>`<li style="--cc:var(--c${QUIZ[i].ch})"><div class="qq">${QUIZ[i].q}</div><div class="aa">Answer: ${QUIZ[i].ok}</div><div class="ee">${QUIZ[i].e}</div></li>`).join("")}</ul>`:""}
    </div>`;
  }
}
$("#view").addEventListener("click", e=>{
  if(tab!=="quiz") return;
  const c = e.target.closest("[data-count]");
  if(c){ qz.count = c.dataset.count==="all" ? "all" : Number(c.dataset.count); drawQuiz(); return; }
  const g = e.target.closest("[data-go2]"); if(g){ go(g.dataset.go2); return; }
  const p = e.target.closest("[data-pick]");
  if(p && qz.chosen===null){
    const q = qz.list[qz.i], i = Number(p.dataset.pick);
    qz.chosen = i;
    if(q.opts[i].ok) qz.score++; else qz.missedIdx.push(q.idx);
    $("#live").textContent = q.opts[i].ok ? "Correct" : "Incorrect";
    drawQuiz(); return;
  }
  const a = e.target.closest("[data-q]"); if(!a) return;
  const act = a.dataset.q;
  if(act==="start"){ const pool=poolIdx(); const n = qz.count==="all" ? pool.length : Math.min(qz.count||10,pool.length); startQuiz(shuffle(pool.slice()).slice(0,n)); }
  else if(act==="next"){
    if(qz.i+1<qz.list.length){ qz.i++; qz.chosen=null; drawQuiz(); window.scrollTo(0,0); }
    else{
      qz.phase="done";
      const pct = Math.round(100*qz.score/qz.list.length);
      const complete = qz.list.length>=poolIdx().length;
      if(complete && (store.best[scope]===undefined || pct>store.best[scope])){ store.best[scope]=pct; save(); }
      drawQuiz(); window.scrollTo(0,0);
    }
  }
  else if(act==="retry"){ startQuiz(qz.missedIdx.slice()); window.scrollTo(0,0); }
  else if(act==="new"){ qz={phase:"setup",count:qz.count||10,list:[],i:0,chosen:null,score:0,missedIdx:[]}; drawQuiz(); window.scrollTo(0,0); }
});

/* ================= INIT ================= */
applyTheme(); drawTabs(); render();
if(window.matchMedia) matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", applyTheme);
