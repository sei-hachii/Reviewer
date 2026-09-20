
const CH = {
  1:{name:"Assumptions and Nature of Arts", sub:"What art is and four assumptions about it"},
  2:{name:"Functions of Art and Philosophy", sub:"Physical, social, personal; Plato to Tolstoy"},
  3:{name:"The Subject and Content of Art", sub:"What is shown vs. what it means"},
  4:{name:"Art and Artisans", sub:"Process, medium, technique, curation"}
};
function T(head, rows){ return rows.map(r=>({term:r[0], parts:head.slice(1).map((h,i)=>[h,r[i+1]])})); }

const NOTES = {
1:[
 {t:"What is art?", bullets:[
   "The word <i>art</i> comes from the Latin <b>ars</b>, meaning <b>“skill”</b> or <b>“ability.”</b>",
   "Today, art is a human activity that communicates <b>ideas, emotions, experiences, and imagination</b> through various forms and media."]},
 {t:"How the meaning of art evolved", note:"Memorize the order.", entries:T(["Period","Meaning"],[
   ["Ancient","A specialized skill or craft"],
   ["Medieval","Included grammar, logic, astrology, and other intellectual pursuits"],
   ["Renaissance","Associated with craftsmanship and mastery"],
   ["17th century","<b>Aesthetics</b> (the study of beauty) became separate from technical skills"],
   ["18th century","Distinction between <b>fine arts</b> (painting, sculpture, music) and <b>useful arts</b> (practical crafts)"]])},
 {t:"Four assumptions about art", entries:T(["Assumption","Meaning","Example"],[
   ["Art is universal","Every society, culture, and period creates art; its emotions cross cultural boundaries.","A Filipino student is inspired by a Japanese animated movie about perseverance."],
   ["Art is cultural","Reflects a group’s beliefs, traditions, values, and experiences.","<b>Manunggul Jar</b> (Palawan; early Filipino beliefs about life, death, afterlife), <b>Tinikling</b>, K-pop."],
   ["Art is not nature","Nature exists without humans. Art is a human interpretation, transformation, and reimagining of nature.","Two students draw the same tree, one realistic and one abstract."],
   ["Art involves experience","See the four stages below.","A student writes a poem after overcoming challenges."]])},
 {t:"Four stages of artistic experience", entries:T(["Stage","What happens"],[
   ["Artist’s experience","The artist experiences something meaningful and wants to communicate it."],
   ["Creative experience","The artist turns it into an artwork through techniques and materials."],
   ["Accomplishment experience","The artist feels fulfilled after completing the work."],
   ["Audience experience","Viewers, listeners, or readers interact with it and form their own interpretations and emotional responses."]])},
 {t:"Nature of art", entries:T(["Aspect","Meaning","Example"],[
   ["Art as expression","People naturally express emotions, thoughts, beliefs, and experiences, including things hard to say in ordinary language.","Songs about heartbreak, hope, or social issues."],
   ["Art as creation","The intentional making of something new: planning, experimentation, revision, problem-solving.","A student designing a presentation."],
   ["Art and imagination","Every artwork begins with imagination; it transforms thoughts into reality.","An architect imagines a building before designing it."]])},
 {t:"Key takeaways", bullets:[
   "Art has evolved and can’t be limited to a single definition.",
   "It is universal, cultural, and not nature; it involves shared experience (creator and audience).",
   "It serves expression, creation, and imagination."]}
],
2:[
 {t:"Three functions of art", entries:T(["Function","Meaning","Examples"],[
   ["Physical","Serves a practical or utilitarian purpose; appreciated aesthetically <i>and</i> performs a task.","Designed chair, ceramic bowl, historic war shield, churches, museums, bridges, a coffee mug with a creative design."],
   ["Social","Addresses issues affecting communities and societies: raises awareness, encourages discussion, inspires action.","Documentary photography on poverty, protest songs, environmental murals, films on inequality, mental health posters."],
   ["Personal","Expresses emotions, communicates ideas, relieves stress, gives satisfaction. Viewers also find personal meaning.","Poetry after a hard experience, music for happiness or sadness, drawing as relaxation, a sketch journal during exams."]])},
 {t:"Four philosophers", entries:T(["Philosopher","Idea","Key points"],[
   ["Plato<small>427 to 347 BCE</small>","<b>Art as imitation</b>","Reality exists in a perfect <b>World of Forms</b>. Physical objects are imperfect copies, and art imitates them, so art is an <b>imitation of an imitation</b>, <b>twice removed from reality</b>. Art appeals to emotion over reason and may distract from truth. Example: a painting of a tree."],
   ["Aristotle<small>384 to 322 BCE</small>","<b>Art as representation</b>","Also says art imitates reality but sees it <b>positively</b>. Art provides pleasure, teaches lessons about human experience, and represents possibilities rather than mere copies. Example: a movie about friendship."],
   ["Immanuel Kant<small>1724 to 1804</small>","<b>Art as disinterested judgment</b>","Beauty is subjective, yet people expect others to agree. Appreciation requires <b>objectivity</b>: set personal preferences aside. Beauty can be appreciated from a <b>universal</b> perspective. Example: you dislike classical music but still recognize its excellence."],
   ["Leo Tolstoy<small>1828 to 1910</small>","<b>Art as communication of emotion</b>","The primary purpose of art is to communicate emotions across time and space. Art creates <b>empathy</b> and promotes <b>social unity</b> and understanding. Example: a song about grief."]])},
 {t:"Representational vs. non-representational", entries:T(["Type","Meaning","Examples"],[
   ["Representational (figurative)","Depicts recognizable people, places, objects, or events.","Portraits, landscapes, historical paintings, realistic sculptures, a family photograph."],
   ["Non-representational","Doesn’t depict real-world subjects. Uses shapes, colors, lines, and forms to communicate ideas and emotions.","Abstract paintings, geometric art, color field paintings."]])},
 {t:"Subject vs. content", bullets:[
   "<b>Subject = the “what”:</b> the visible image, object, person, or scene.",
   "<b>Content = the “why”:</b> the meaning, message, emotion, or idea.",
   "Common subjects in this chapter: still life, landscape, nature, portraiture, abstract, and <b>cultural and historical subjects</b>."]},
 {t:"Levels of meaning", entries:T(["Level","Meaning","Example"],[
   ["Factual","Literal and observable","A painting shows a farmer harvesting rice."],
   ["Conventional","Based on symbols and cultural interpretations","A dove symbolizes peace."],
   ["Subjective","Personal interpretation based on individual experiences","A sunset reminds one person of hope, another of loss."]])}
],
3:[
 {t:"Subject vs. content", bullets:[
   "<b>Subject</b> answers <b>“What is shown?”</b> Content answers <b>“What does it mean?”</b>",
   "<b>Same subject, different meaning:</b> in the cat-catching-a-bird example, sharp lines and dark colors create fear or violence, while soft lines and balanced shapes look calm or symbolic.",
   "Artists shape impact through <b>form: line, shape, color, size, and balance.</b>"]},
 {t:"Six main kinds of subject", entries:T(["Kind","Meaning","Example"],[
   ["Still life","Inanimate objects arranged in a specific way","Fruits, flowers, books, bottles; a photo of coffee, notebooks, and a laptop on a study table."],
   ["Landscape","Natural scenery","Mountains, rivers, forests, oceans; Taal Volcano, rice fields, a beach sunset."],
   ["Nature","Specific natural elements","A close-up of a flower, a bird on a branch."],
   ["Portraiture","A particular person, animal, or group; focus on face, expression, personality, identity","Graduation photo, family portrait, profile picture."],
   ["Abstract","No recognizable objects; colors, lines, shapes, and forms express emotions or ideas","A digital wallpaper of colorful shapes."],
   ["Day of the Dead","Mexican holiday with skulls, colorful decorations, flowers, and symbols of memory and honoring loved ones","Art inspired by cultural celebrations."]])},
 {t:"Representational vs. non-representational", entries:T(["Type","Concerned with","Examples"],[
   ["Representational (objective)","<b>WHAT</b> is being shown. May copy reality closely or interpret it personally.","Still life, portraits, landscapes, cityscapes, religious paintings, mythological scenes, artworks based on dreams or fantasies."],
   ["Non-representational (non-objective)","<b>HOW</b> feelings, ideas, or visual experiences are expressed, using colors, shapes, lines, textures, forms.","Red, black, and gray lines expressing finals-week stress."]])},
 {t:"Five sources of subject", entries:T(["Source","What it covers"],[
   ["Nature","Animals, plants, landscapes, weather, natural forms"],
   ["History","Events, heroes, wars, revolutions, social movements"],
   ["Greek and Roman mythology","Gods, goddesses, heroes, mythical creatures"],
   ["Religion","Beliefs, sacred figures, rituals, spiritual stories"],
   ["Sacred Oriental texts","Texts, teachings, and traditions from Asian cultures and religions"]])},
 {t:"The content of art", bullets:[
   "Content is the meaning, message, feeling, or idea. It is communicated through <b>imagery, symbols, colors, the place where the artwork is displayed, cultural customs and beliefs, and written explanations or historical background.</b>",
   "Example: a painting of a candle. The subject is the candle. The content may be hope, prayer, remembrance, or guidance."]},
 {t:"Three levels of meaning", entries:T(["Level","Meaning","Examples"],[
   ["Factual","Literal meaning; what we can directly see and identify","A mother holding a child."],
   ["Conventional","Meanings accepted by a culture or group through symbols, colors, gestures, or objects","Dove = peace; heart = love; white = purity in some cultures; flag = national identity; graduation gown = achievement."],
   ["Subjective","Personal interpretation shaped by experiences, emotions, memories, background","Rain = loneliness to one person, peace to another. Both are valid."]])},
 {t:"Keeping art", bullets:[
   "Societies preserve art because it carries <b>historical, cultural, emotional, and economic value.</b> Art is kept in museums, galleries, private collections, churches, public spaces, and heritage sites.",
   "<b>National pride and glory:</b> the <b>San Agustin Church</b> (built 1586 to 1607) is preserved for its historical, religious, architectural, and cultural significance. It also attracts visitors and supports tourism and the economy.",
   "<b>Museums</b> preserve art for public viewing, education, research, and conservation. <b>Private collectors</b> keep art for personal enjoyment, cultural value, investment, or status.",
   "<b>Preservation and restoration:</b> art can be damaged by time, weather, pollution, disasters, or human actions, so experts preserve and restore it for future generations."]}
],
4:[
 {t:"Artist vs. artisan", note:"Neither is more important. Both contribute to culture, creativity, identity, and everyday life.", entries:T(["","Purpose","Examples","Sample"],[
   ["Artist","Expression, imagination, aesthetic appreciation","Painters, sculptors, writers, poets, musicians, dancers, choreographers, filmmakers","A painting of Filipino farmers’ struggles; a spoken-word poem about academic pressure."],
   ["Artisan","Functional, useful, and decorative","Carpenters, weavers, potters, carvers, blacksmiths, embroiderers, furniture makers","A clay jar for water or food; a handwoven bag."]])},
 {t:"Robert Fritz: five steps of the creative process", entries:T(["Step","Meaning"],[
   ["1. Conceive the result","Imagine what you want to create; have a vision or goal. (Example: imagining a poster’s design, colors, message, layout.)"],
   ["2. Know what currently exists","Understand what has already been done. (Example: researching other logos.)"],
   ["3. Take action","Work, test, revise, improve. (Example: a musician records a rough version and revises the lyrics.)"],
   ["4. Develop creativity","Every completed work teaches you something and shows you your own style."],
   ["5. Learn the rhythm of the creative process","Stages feel exciting, confusing, and tiring. This is normal."]])},
 {t:"Two sets of three stages", note:"Don’t mix these up: one is the creative process, the other is art-making.", entries:T(["Stage","Meaning"],[
   ["Creative process: Germination","The idea stage, like planting a seed (choosing a theme)."],
   ["Creative process: Assimilation","Planning and development: gather materials, organize ideas. Can feel messy."],
   ["Creative process: Completion","The finishing stage: finalize and prepare for presentation. Don’t get stuck on small details."],
   ["Art-making: Pre-production (subject development)","Planning what to create, the message, and the materials. (Sketching, choosing colors.)"],
   ["Art-making: Production (medium manipulation)","The actual creation. (A sculptor shapes clay, a painter applies paint, a filmmaker records scenes.)"],
   ["Art-making: Post-production (exhibition)","The work is displayed, performed, shared, sold, or preserved."]])},
 {t:"Medium vs. technique", entries:T(["","Meaning","Examples"],[
   ["Medium","The <b>material</b> used to create an artwork (plural: <i>media</i>). Makes an idea visible, audible, or tangible.","Paint, clay, wood, stone, metal, fabric, digital tools, sound, movement."],
   ["Technique","The artist’s <b>skill and method</b> in using the medium; how the artist controls the material to get the desired effect.","Two students both use watercolor: one blends soft colors, the other uses strong lines and sharp contrast."]])},
 {t:"Curation", bullets:[
   "The process of <b>selecting, organizing, interpreting, and presenting</b> artworks.",
   "A curator manages collections in museums, galleries, foundations, archives, and cultural institutions. Curators also research artists, write descriptions, plan exhibitions, and help audiences understand the works.",
   "<b>Qualities of a good curator:</b> organized, knowledgeable, passionate, good at research, skilled in writing, able to manage many tasks."]},
 {t:"Filipino artists and artisans", entries:T(["Name","Known for"],[
   ["Fernando Amorsolo","<b>First National Artist</b> of the Philippines; bright, warm paintings of Filipino life, rural scenes, landscapes."],
   ["José Joya","Pioneer of <b>Abstract Expressionism</b> in the Philippines; bold colors, textures, spontaneous brushwork."],
   ["Pacita Abad","Vibrant colors, mixed materials, socially relevant themes."],
   ["Kidlat Tahimik","<b>Father of Philippine independent cinema</b>; films on culture, identity, social issues."],
   ["Carlos “Botong” Francisco","Muralist with historical and cultural themes; helped <b>revive mural painting</b>."],
   ["James Gabriel Mamalias<small>artisan</small>","<b>Capiz shell</b> crafts; supports local artisans and preserves shell craftsmanship."],
   ["Fidel Antiporda Go<small>artisan</small>","<b>Burnay pottery</b> in <b>Vigan</b>; helped preserve the burnay tradition."],
   ["Ariosto Dale Bagtas, Kathleen Dagum, Mark Anthony P. Laza","Contemporary artists whose works reflect contemporary issues, human experiences, and social realities."]])}
]};

const TRAPS = [
 "<b>Subject = WHAT, content = WHY.</b> Chapter 3’s wording: “What is shown?” vs. “What does it mean?”",
 "<b>Two different three-stage lists.</b> Creative process: Germination, Assimilation, Completion (<b>GAC</b>). Art-making: Pre-production, Production, Post-production.",
 "<b>Plato vs. Aristotle:</b> both say art imitates. Plato sees it negatively (twice removed, distracting). Aristotle sees it positively (teaches, shows possibilities).",
 "<b>Kant</b> = objective and disinterested: set your taste aside. <b>Tolstoy</b> = emotion, empathy, unity.",
 "<b>Subject lists differ slightly.</b> Chapter 3 has six kinds (still life, landscape, nature, portraiture, abstract, Day of the Dead). Chapter 2 lists cultural and historical subjects instead of Day of the Dead. Use whichever list your professor uses.",
 "<b>Artist = expression. Artisan = function plus beauty.</b> <b>Medium = material. Technique = method or skill.</b>",
 "<b>First National Artist = Amorsolo.</b> <b>Father of Philippine independent cinema = Kidlat Tahimik.</b>"
];


const CARDS = [
 [1,"What does “ars” mean?","Skill or ability. It is the Latin root of the word “art.”"],
 [1,"How was art viewed in the Ancient period?","As a specialized skill or craft."],
 [1,"How was art viewed in the Medieval period?","It included areas of learning such as grammar, logic, astrology, and other intellectual pursuits."],
 [1,"How was art viewed in the Renaissance?","Associated with craftsmanship and mastery."],
 [1,"What changed in the 17th century?","People began discussing aesthetics (the study of beauty) as separate from technical skills."],
 [1,"What distinction emerged in the 18th century?","Fine arts (painting, sculpture, music) vs. useful arts (practical crafts)."],
 [1,"Name the four assumptions about art.","Art is universal, cultural, not nature, and involves experience."],
 [1,"“Art is universal” means…","Every society, culture, and historical period creates art, and its emotions can transcend cultural boundaries. Example: a Filipino student inspired by a Japanese animated movie."],
 [1,"What does the Manunggul Jar show?","That art is cultural. Found in Palawan, it reveals early Filipino beliefs about life, death, and the afterlife."],
 [1,"“Art is not nature” means…","Nature exists without humans; art is created by humans. Artists interpret, transform, and reimagine nature instead of copying it (two students drawing the same tree)."],
 [1,"Four stages of artistic experience?","Artist’s experience, creative experience, accomplishment experience, audience experience."],
 [1,"What is the accomplishment experience?","The artist feels fulfillment after completing the work."],
 [1,"Three aspects of the nature of art?","Art as expression, art as creation, art and imagination."],
 [1,"What does art as creation require?","Planning, experimentation, revision, and problem-solving."],

 [2,"Three functions of art?","Physical, social, and personal."],
 [2,"Physical function of art","Serves a practical or utilitarian purpose. Examples: a designed chair, ceramic bowl, war shield, bridges, a coffee mug with a creative design."],
 [2,"Social function of art","Addresses issues affecting communities: raises awareness, encourages discussion, inspires action. Examples: protest songs, documentary photography, mental health posters."],
 [2,"Personal function of art","Expresses emotions, communicates ideas, relieves stress, gives personal satisfaction. Example: a student’s sketch journal during exam weeks."],
 [2,"Plato: what is his view of art?","Art as imitation. Physical objects are imperfect copies of the World of Forms, so art is an imitation of an imitation, twice removed from reality. It appeals to emotion and may distract from truth."],
 [2,"Why is a painting of a tree “twice removed from reality” for Plato?","The painting copies the actual tree, which is itself only an imperfect version of the ideal Form of a tree."],
 [2,"Aristotle: what is his view of art?","Art as representation. He viewed imitation positively: art provides pleasure, teaches lessons about human experience, and represents possibilities rather than mere copies."],
 [2,"Kant: what is his view of art?","Art as disinterested judgment. Appreciation requires objectivity; set personal preferences aside and appreciate beauty from a universal perspective."],
 [2,"Tolstoy: what is his view of art?","Art as communication of emotion. Art communicates emotions, creates empathy, and promotes social unity and understanding."],
 [2,"Dates of Plato, Aristotle, Kant, Tolstoy","Plato 427 to 347 BCE; Aristotle 384 to 322 BCE; Kant 1724 to 1804; Tolstoy 1828 to 1910."],
 [2,"Another name for representational art (Chapter 2)?","Figurative art."],
 [2,"Subject vs. content: what and why?","Subject is the “what” (the visible image). Content is the “why” (the meaning, message, emotion, or idea)."],

 [3,"Which question does the subject answer? The content?","Subject: “What is shown?” Content: “What does it mean?”"],
 [3,"What do artists use to shape an artwork’s impact when the subject stays the same?","Form: line, shape, color, size, and balance."],
 [3,"Still life","Inanimate objects arranged in a specific way (fruits, flowers, books, bottles, household items)."],
 [3,"Landscape","Natural scenery such as mountains, rivers, forests, fields, cliffs, or oceans. Example: Taal Volcano, rice fields."],
 [3,"Nature (as a subject)","Specific natural elements such as flowers, animals, trees, clouds, or bodies of water."],
 [3,"Portraiture","A particular person, animal, or group, focusing on face, expression, personality, or identity."],
 [3,"Abstract art","Doesn’t always show recognizable objects. Uses colors, lines, shapes, and forms to express emotions or ideas."],
 [3,"Day of the Dead","A Mexican holiday with a strong artistic tradition: skulls, colorful decorations, flowers, and symbols of memory, death, and honoring loved ones."],
 [3,"Representational (objective) art is concerned with…","WHAT is being shown (recognizable people, objects, places, events)."],
 [3,"Non-representational (non-objective) art is concerned with…","HOW feelings, ideas, or visual experiences are expressed, using colors, shapes, lines, textures, and forms."],
 [3,"Five sources of subject","Nature, history, Greek and Roman mythology, religion, sacred Oriental texts."],
 [3,"How is content communicated?","Imagery, symbols, colors, the place where the artwork is displayed, cultural customs and beliefs, written explanations or historical background."],
 [3,"Factual meaning","The literal meaning: what we can directly see and identify. Example: a mother holding a child."],
 [3,"Conventional meaning","Meaning accepted by a culture or group through symbols, colors, gestures, or objects. Example: a dove = peace; white = purity in some cultures."],
 [3,"Subjective meaning","Personal interpretation based on the viewer’s experiences, emotions, memories, and background. Example: rain = sadness to one, peace to another."],
 [3,"Why do societies preserve art?","Because it carries historical, cultural, emotional, and economic value."],
 [3,"Why is San Agustin Church preserved?","Built 1586 to 1607. Preserved for its historical, religious, architectural, and cultural significance; it also supports tourism and the economy."],
 [3,"Why do private collectors keep art?","Personal enjoyment, cultural value, investment, or status."],
 [3,"What can damage artworks, and who helps?","Time, weather, pollution, disasters, or human actions. Experts preserve and restore important artworks."],

 [4,"Artist vs. artisan: purpose","Artist: expression, imagination, aesthetic appreciation. Artisan: functional, useful, and decorative."],
 [4,"Examples of artisans","Carpenters, weavers, potters, carvers, blacksmiths, embroiderers, furniture makers."],
 [4,"Robert Fritz: five steps of the creative process","1) Conceive the result 2) Know what currently exists 3) Take action 4) Develop creativity 5) Learn the rhythm of the creative process."],
 [4,"Germination","The idea stage of the creative process, like planting a seed (choosing a theme)."],
 [4,"Assimilation","The planning and development stage: gather materials, organize ideas. It can feel messy."],
 [4,"Completion","The finishing stage of the creative process: finalize and prepare for presentation. Don’t get stuck on small details."],
 [4,"Pre-production (subject development)","Art-making planning stage: decide what to create, the message, and the materials."],
 [4,"Production (medium manipulation)","Art-making stage where the artist uses materials and techniques to produce the artwork."],
 [4,"Post-production (exhibition)","Art-making stage after completion: the work is displayed, performed, shared, sold, or preserved."],
 [4,"Medium","The material used by the artist to create an artwork (plural: media). Examples: paint, clay, wood, stone, metal, fabric, digital tools, sound, movement."],
 [4,"Technique","The artist’s skill and method in using the medium. Two artists can use the same medium and get different results because of technique."],
 [4,"Curation","Selecting, organizing, interpreting, and presenting artworks. Curators also research, write descriptions, and plan exhibitions."],
 [4,"Qualities of a good curator","Organized, knowledgeable, passionate, good at research, skilled in writing, able to manage many tasks."],
 [4,"Fernando Amorsolo","First National Artist of the Philippines; bright, warm paintings of Filipino life, rural scenes, landscapes."],
 [4,"José Joya","Pioneer of Abstract Expressionism in the Philippines; bold colors, textures, spontaneous brushwork."],
 [4,"Pacita Abad","Vibrant colors, mixed materials, socially relevant themes."],
 [4,"Kidlat Tahimik","Father of Philippine independent cinema; films on culture, identity, social issues."],
 [4,"Carlos “Botong” Francisco","Major muralist with historical and cultural themes; helped revive mural painting."],
 [4,"James Gabriel Mamalias (artisan)","Capiz shell crafts; supports local artisans and preserves shell craftsmanship."],
 [4,"Fidel Antiporda Go (artisan)","Burnay pottery in Vigan; helped preserve the burnay tradition."],
 [4,"Contemporary Filipino artists named in the module","Ariosto Dale Bagtas, Kathleen Dagum, and Mark Anthony P. Laza."]
].map(c=>({ch:c[0],q:c[1],a:c[2]}));


const QUIZ = [
 [1,"The word “art” comes from the Latin word ars, which means:","Skill or ability",["Beauty","Imitation","Expression"],"Ars means “skill” or “ability.”"],
 [1,"In which century did people begin discussing aesthetics as separate from technical skills?","Seventeenth century",["Eighteenth century","Renaissance period","Medieval period"],"17th century: aesthetics separated from technical skill. The 18th century is when fine arts and useful arts were distinguished."],
 [1,"Which period viewed art as including grammar, logic, and astrology?","Medieval period",["Ancient period","Renaissance period","Eighteenth century"],"In the Medieval period, art included areas of learning such as grammar, logic, astrology, and other intellectual pursuits."],
 [1,"The Manunggul Jar, which reveals early Filipino beliefs about life, death, and the afterlife, best illustrates which assumption?","Art is cultural",["Art is universal","Art is not nature","Art involves experience"],"Art is cultural because it reflects the beliefs, traditions, and values of a group."],
 [1,"Two students draw the same tree, one realistically and one with abstract colors. Which assumption does this show?","Art is not nature",["Art is universal","Art is cultural","Art is imagination only"],"Art is a human response to nature: artists interpret, transform, and reimagine it."],
 [1,"A Filipino student is inspired by a Japanese animated movie about perseverance. Which assumption does this show?","Art is universal",["Art is cultural","Art is not nature","Art is a fine art"],"Art exists in every society, and its emotions transcend cultural boundaries."],
 [1,"Which stage of artistic experience is when viewers form their own interpretations?","Audience experience",["Artist’s experience","Creative experience","Accomplishment experience"],"The four stages are artist’s, creative, accomplishment, and audience."],
 [1,"An architect imagines a building’s appearance, function, and impact before designing it. Which aspect of the nature of art is this?","Art and imagination",["Art as expression","Art as nature","Art as imitation"],"Every artwork begins with imagination, which turns thoughts into reality."],

 [2,"You choose a coffee mug because it looks attractive and it holds your drink. Which function of art is this?","Physical function",["Social function","Personal function","Philosophical function"],"Physical function means art serves a practical purpose while also being appreciated aesthetically."],
 [2,"A university organization makes posters promoting mental health awareness. Which function is this?","Social",["Physical","Personal","Historical"],"Social art addresses community issues by raising awareness, encouraging discussion, or inspiring action."],
 [2,"A student writes poetry after a difficult experience. Which function is this?","Personal",["Physical","Social","Political"],"Personal function: expressing emotions, relieving stress, or achieving personal satisfaction."],
 [2,"Which philosopher said art is an “imitation of an imitation,” twice removed from reality?","Plato",["Aristotle","Immanuel Kant","Leo Tolstoy"],"For Plato, physical objects are imperfect copies of the World of Forms, and art copies those objects."],
 [2,"How does Aristotle’s view of imitation differ from Plato’s?","Aristotle viewed imitation positively, as a way to represent possibilities and teach about life",["Aristotle believed art has nothing to do with reality","Aristotle said art must be objective and disinterested","Aristotle said art’s only purpose is to communicate emotion"],"Both say art imitates, but Aristotle saw it positively: art gives pleasure, teaches lessons, and represents possibilities."],
 [2,"You dislike classical music personally but still recognize its artistic excellence. Whose idea does this reflect?","Kant’s disinterested judgment",["Plato’s World of Forms","Tolstoy’s communication of emotion","Aristotle’s representation"],"Kant: true appreciation requires objectivity; set personal preferences aside."],
 [2,"According to Leo Tolstoy, the primary purpose of art is to:","Communicate emotions",["Copy reality accurately","Teach moral lessons only","Be judged objectively"],"Tolstoy: art communicates emotions, creates empathy, and promotes social unity."],
 [2,"In Chapter 2, another name for representational art is:","Figurative art",["Abstract art","Color field art","Geometric art"],"Representational art depicts recognizable subjects and is often called figurative art."],

 [3,"A painting shows a simple candle that may represent hope, prayer, or remembrance. What are the subject and content?","Subject: the candle. Content: hope, prayer, or remembrance.",["Subject: hope. Content: the candle.","Subject and content are both the candle.","Subject: the artist. Content: the candle."],"Subject is the “what” (the candle). Content is the “why” (the meaning)."],
 [3,"Two artworks both show a cat catching a bird, but one feels violent and the other calm. What causes the difference?","Form: line, shape, color, size, and balance",["A different subject","A different medium","The museum where they are displayed"],"The subject is the same. Artists use form to shape the artwork’s impact."],
 [3,"A photo of coffee, notebooks, and a laptop arranged on a study table is an example of:","Still life",["Landscape","Portraiture","Abstract art"],"Still life shows inanimate objects arranged in a specific way."],
 [3,"A graduation photo or family portrait is an example of:","Portraiture",["Still life","Nature","Landscape"],"Portraiture presents a particular person, animal, or group."],
 [3,"Day of the Dead, a holiday with a strong artistic tradition, comes from which country?","Mexico",["Spain","The Philippines","Japan"],"Day of the Dead is a Mexican holiday with skulls, flowers, and symbols honoring loved ones."],
 [3,"Which statement correctly distinguishes representational from non-representational art?","Representational is concerned with WHAT is shown; non-representational with HOW feelings, ideas, or visual experiences are expressed",["Representational is concerned with HOW feelings are expressed; non-representational with WHAT is shown","Representational art never uses color","Non-representational art always shows real objects"],"Representational (objective) art depicts recognizable subjects; non-representational (non-objective) art focuses on colors, shapes, lines, textures, and forms."],
 [3,"A student makes an artwork with only red, black, and gray lines to express finals-week stress, with no books or students shown. This is:","Non-representational art",["Representational art","Still life","Portraiture"],"It shows no recognizable objects but communicates a feeling."],
 [3,"Which of the following is NOT one of the five sources of subject in Chapter 3?","Modern advertising",["Greek and Roman mythology","Sacred Oriental texts","Religion"],"The five sources are nature, history, Greek and Roman mythology, religion, and sacred Oriental texts."],
 [3,"A painting shows a mother holding a child. “There is a mother and child in the artwork” is which level of meaning?","Factual",["Conventional","Subjective","Symbolic"],"Factual meaning is literal: what we can directly see and identify."],
 [3,"“A dove symbolizes peace” and “a flag symbolizes national identity” are examples of which level of meaning?","Conventional",["Factual","Subjective","Personal"],"Conventional meaning is accepted by a culture or group, often through symbols."],
 [3,"A painting of rain makes one person feel lonely and another feel peaceful. Which level of meaning is this?","Subjective",["Conventional","Factual","Historical"],"Subjective meaning is personal interpretation shaped by the viewer’s experiences, emotions, and memories."],
 [3,"Which of these is NOT listed as a value that leads societies to preserve art?","Political propaganda",["Historical value","Cultural value","Economic value"],"The module lists historical, cultural, emotional, and economic value."],
 [3,"The San Agustin Church (built 1586 to 1607) is preserved mainly because of its:","Historical, religious, architectural, and cultural significance",["Private ownership and resale value","Modern design","Use as museum storage"],"It also attracts visitors and contributes to tourism and the economy."],

 [4,"A potter makes a clay jar for storing water. It is useful and also beautiful. Who made it?","An artisan",["An artist, because it is beautiful","A curator","A philosopher"],"Artisans are skilled workers who make objects by hand that are functional, useful, and decorative."],
 [4,"A student writes a spoken-word poem about academic pressure. It has no practical function. Whose work is this, according to Chapter 4?","An artist’s",["An artisan’s","A curator’s","A carpenter’s"],"Artists create mainly for expression and aesthetic appreciation."],
 [4,"Which is the FIRST step in Robert Fritz’s creative process?","Conceive the result",["Take action","Know what currently exists","Develop creativity"],"Steps: conceive the result, know what exists, take action, develop creativity, learn the rhythm."],
 [4,"“The idea stage, like planting a seed” describes which stage of the creative process?","Germination",["Assimilation","Completion","Pre-production"],"Germination is the idea stage. Assimilation is planning and development. Completion is finishing."],
 [4,"A group gathers materials, organizes ideas, and revises the flow of their work. It feels messy. Which stage is this?","Assimilation",["Germination","Completion","Post-production"],"Assimilation is the planning and development stage, and it can feel messy."],
 [4,"A sculptor shapes clay and a painter applies paint. Which stage of art-making is this?","Production (medium manipulation)",["Pre-production","Post-production","Germination"],"Production is the actual creation stage."],
 [4,"A finished painting is placed in an exhibit. Which stage of art-making is this?","Post-production (exhibition)",["Pre-production","Production","Germination"],"Post-production: the work is displayed, performed, shared, sold, or preserved."],
 [4,"What is a medium?","The material used to create an artwork",["The artist’s skill and method","The place where art is displayed","The meaning of an artwork"],"Medium = material (paint, clay, wood, sound, movement). Technique = skill and method."],
 [4,"Two students both use watercolor. One creates soft blended colors and the other uses strong lines and sharp contrast. What is different?","The technique",["The medium","The subject","The curation"],"The medium is the same. Technique is how the artist controls it."],
 [4,"Which best describes what a curator does?","Selects, organizes, interprets, and presents artworks",["Creates functional handmade objects","Only paints murals for museums","Judges art using disinterested judgment"],"Curators also research artists, write descriptions, and plan exhibitions."],
 [4,"Who was the first National Artist of the Philippines?","Fernando Amorsolo",["José Joya","Kidlat Tahimik","Carlos “Botong” Francisco"],"Amorsolo is known for bright, warm paintings of Filipino life and rural scenes."],
 [4,"Who is known as the father of Philippine independent cinema?","Kidlat Tahimik",["Fernando Amorsolo","José Joya","Pacita Abad"],"Kidlat Tahimik’s films address culture, identity, and social issues."],
 [4,"Who was a pioneer of Abstract Expressionism in the Philippines?","José Joya",["Fernando Amorsolo","Carlos “Botong” Francisco","Kidlat Tahimik"],"José Joya used bold colors, textures, and spontaneous brushwork."],
 [4,"Which Filipino muralist helped revive mural painting in the Philippines?","Carlos “Botong” Francisco",["Pacita Abad","José Joya","Fernando Amorsolo"],"He is known for historical and cultural themes."],
 [4,"Who is known for burnay pottery in Vigan?","Fidel Antiporda Go",["James Gabriel Mamalias","Pacita Abad","Kathleen Dagum"],"His craftsmanship helped preserve the burnay tradition."],
 [4,"Who is known for Capiz shell crafts?","James Gabriel Mamalias",["Fidel Antiporda Go","Mark Anthony P. Laza","Ariosto Dale Bagtas"],"His work supports local artisans and preserves traditional shell craftsmanship."]
].map(q=>({ch:q[0],q:q[1],ok:q[2],bad:q[3],e:q[4]}));
