export type Category = { slug: string; name: string; blurb: string; emoji: string };
export type Tool = {
  slug: string; name: string; url: string; category: string; ai?: boolean; creator?: boolean;
  what: string; grades: string; price: "Free" | "Free tier available" | "Paid"; privacy: string; why: string;
};

export const categories: Category[] = [
  { slug: "ai-tools", name: "AI tools for teachers", emoji: "✨", blurb: "Teacher-facing AI assistants for planning, differentiation, and feedback." },
  { slug: "coding-computer-science", name: "Coding & computer science", emoji: "💻", blurb: "Block coding, typing, and CS lessons for young learners." },
  { slug: "classroom-management", name: "Classroom management & communication", emoji: "🧑‍🏫", blurb: "Run your class and keep families in the loop." },
  { slug: "games-assessment", name: "Games & quick assessment", emoji: "🎮", blurb: "Review games and formative checks students enjoy." },
  { slug: "creation-portfolios", name: "Student creation & portfolios", emoji: "🎨", blurb: "Let students make books, slides, designs, and show their thinking." },
  { slug: "interactive-lessons", name: "Interactive lessons & presentations", emoji: "📽️", blurb: "Slides and lessons with built-in student interaction." },
  { slug: "math-science-reading", name: "Math, science & reading", emoji: "📚", blurb: "Core-subject practice and content." },
  { slug: "digital-citizenship", name: "Digital citizenship & AI literacy", emoji: "🛡️", blurb: "Teach safe, smart technology use, including AI." },
  { slug: "creator-resources", name: "From the creator", emoji: "🍎", blurb: "Free classroom resources made by the site's creator." },
];

const P = "Check your district's approved-software list and privacy policy before using with students.";
const PA = "Review the vendor's privacy policy and your district's AI policy before using with student data. Avoid entering student names or personal information.";

export const tools: Tool[] = [
  // From the creator
  { slug: "math-fluency-sprint", name: "Math Fluency Sprint", url: "https://school.math-fluency-sprint.here.now/", category: "creator-resources", creator: true,
    what: "A free, browser-based math fact fluency practice game made by an elementary teacher.", grades: "Elementary", price: "Free",
    privacy: "Made by the site's creator. As always, check with your district before using any web tool with students.", why: "Built by a working elementary teacher for real classroom practice time." },
  { slug: "badge-quest", name: "Badge Quest: Net Guardians", url: "https://badgequestedu.github.io/badge-quest-net-guardians/", category: "creator-resources", creator: true,
    what: "A free, game-style web activity for learning online safety and digital citizenship.", grades: "Elementary", price: "Free",
    privacy: "Made by the site's creator. As always, check with your district before using any web tool with students.", why: "Turns digital citizenship into a quest students want to finish." },

  // AI
  { slug: "magicschool", name: "MagicSchool", url: "https://www.magicschool.ai/", category: "ai-tools", ai: true,
    what: "An AI platform for teachers with many generators for lesson plans, rubrics, differentiation, and more.", grades: "K–12", price: "Free tier available", privacy: PA, why: "A big library of purpose-built teacher tools in one place." },
  { slug: "brisk-teaching", name: "Brisk Teaching", url: "https://www.briskteaching.com/", category: "ai-tools", ai: true,
    what: "An AI assistant that works alongside the websites and docs teachers already use, such as Google Docs and Slides.", grades: "K–12", price: "Free tier available", privacy: PA, why: "Works where teachers already are, so there is little new to learn." },
  { slug: "khanmigo", name: "Khanmigo (Khan Academy)", url: "https://www.khanacademy.org/khan-labs", category: "ai-tools", ai: true,
    what: "Khan Academy's AI-powered tutor and teaching assistant.", grades: "Varies by feature", price: "Free tier available", privacy: PA, why: "Backed by a trusted nonprofit education brand." },
  { slug: "diffit", name: "Diffit", url: "https://web.diffit.me/", category: "ai-tools", ai: true,
    what: "Creates leveled reading passages and related materials from a topic, text, or link so you can differentiate quickly.", grades: "K–12", price: "Free tier available", privacy: PA, why: "Fast way to adapt one text for many reading levels." },
  { slug: "curipod", name: "Curipod", url: "https://curipod.com/", category: "ai-tools", ai: true,
    what: "Generates interactive lessons with polls, drawings, and open-ended responses from a topic.", grades: "K–12", price: "Free tier available", privacy: PA, why: "Turns a topic into an interactive lesson in minutes." },
  { slug: "schoolai", name: "SchoolAI", url: "https://schoolai.com/", category: "ai-tools", ai: true,
    what: "A teacher-supervised AI platform where teachers create learning spaces for students.", grades: "K–12", price: "Free tier available", privacy: PA, why: "Teachers stay in the loop on what students do with the AI." },
  { slug: "snorkl", name: "Snorkl", url: "https://snorkl.app/", category: "ai-tools", ai: true,
    what: "Students explain their thinking with voice, drawing, and writing; AI gives instant feedback while teachers see class insights.", grades: "K–12 (strong elementary fit)", price: "Free tier available", privacy: PA, why: "Makes student reasoning visible—great for math explanations and exit tickets." },
  { slug: "conker", name: "Conker", url: "https://www.conker.ai/", category: "ai-tools", ai: true,
    what: "AI quiz and assessment generator with standards-aligned question banks, read-aloud accessibility, and Google Forms export.", grades: "K–12", price: "Free tier available", privacy: PA, why: "Fast quizzes you can tweak and export into tools you already use." },
  { slug: "eduaide", name: "Eduaide.ai", url: "https://www.eduaide.ai/", category: "ai-tools", ai: true,
    what: "An AI workspace for teachers that creates lesson plans, worksheets, graphic organizers, games, and standards-aligned assessments through guided workflows, with export to Google Docs, Google Forms, DOCX, or PDF.", grades: "K–12", price: "Free tier available", privacy: PA + " Eduaide states it does not sell user data.", why: "Guided templates mean no prompt-writing, and it can work from your own documents and standards." },
  { slug: "microsoft-reading-coach", name: "Microsoft Reading Coach", url: "https://coach.microsoft.com/", category: "math-science-reading", ai: true,
    what: "Free AI-powered reading fluency practice: students read aloud and get feedback on challenging words, using AI-generated choose-your-path stories, leveled ReadWorks passages, or passages you add.", grades: "Emerging readers and up", price: "Free", privacy: PA + " Students sign in with a school Microsoft 365 or personal Microsoft account; your IT team may need to enable it.", why: "Independent read-aloud practice with progress tracking, so you can work with small groups while others practice." },
  { slug: "flint", name: "Flint", url: "https://flintk12.com/", category: "ai-tools", ai: true,
    what: "A school AI platform where teachers build activities (tutoring, writing feedback, quizzes) for an AI assistant called Sparky that coaches students with hints instead of handing over answers, while teachers watch progress and grade against their own rubrics.", grades: "Grades 3 and up (typical rollout)", price: "Free tier available", privacy: PA + " Flint states it can be used by students under 13, flags messages about self-harm or harassment to moderators, and is free for up to 80 users.", why: "Teacher-designed AI practice that pushes students to think, with real-time insight into who needs help." },
  { slug: "quill", name: "Quill.org", url: "https://www.quill.org/", category: "math-science-reading", ai: true,
    what: "Free nonprofit writing and grammar practice: students combine sentences, proofread passages, and answer reading-for-evidence prompts, getting instant AI-powered feedback on each revision, with diagnostics and teacher reports.", grades: "Upper elementary and up", price: "Free tier available", privacy: P + " Quill has earned the Common Sense Privacy Seal; all activities are free, and an optional Premium adds extra progress reports.", why: "Ten-minute, self-correcting sentence and grammar practice that frees you to pull small groups." },
  { slug: "read-along", name: "Read Along by Google", url: "https://readalong.google.com/", category: "math-science-reading", ai: true,
    what: "A reading app where an in-app buddy named Diya uses text-to-speech and voice recognition to listen as students read aloud, giving real-time feedback and help, with illustrated stories in many languages plus reading and spelling games. Works on a computer or Android device, and the Android app works offline after download.", grades: "Early readers (K–3 sweet spot)", price: "Free tier available", privacy: P + " Google collects personal information when kids use it (see the Read Along Privacy Notice). Teachers can track progress with Android reading groups or assign stories in Google Classroom; some Classroom progress tracking requires a paid Workspace for Education edition.", why: "Independent read-aloud practice with instant help, plus Classroom assignments that report accuracy, speed, and comprehension." },
  { slug: "teachai", name: "TeachAI", url: "https://www.teachai.org/", category: "digital-citizenship", ai: true,
    what: "An initiative offering guidance and toolkits to help schools and education systems think about AI.", grades: "Teachers & leaders", price: "Free", privacy: "Informational resource; no student accounts.", why: "A solid starting point for writing or understanding school AI guidance." },
  { slug: "ai-for-education", name: "AI for Education", url: "https://www.aiforeducation.io/", category: "digital-citizenship", ai: true,
    what: "Resources, training, and guidance on using AI in education.", grades: "Teachers & leaders", price: "Free tier available", privacy: "Informational and training resource; no student accounts needed.", why: "Practical AI literacy training aimed at educators." },
  { slug: "quick-draw", name: "Quick, Draw!", url: "https://quickdraw.withgoogle.com/", category: "digital-citizenship", ai: true,
    what: "A Google Creative Lab game built with machine learning: you get 20 seconds to doodle a word while a neural network tries to guess what you are drawing, then you see what it thought your drawing looked like.", grades: "All ages (teacher-led demo for K–5)", price: "Free", privacy: "No account needed. Drawings are added to a doodle data set that Google shares publicly for machine learning research, so consider running it as a teacher-led demo on the board. Check with your district for web-tool approval.", why: "A quick, playful way to show students how AI learns from examples and why it sometimes guesses wrong." },
  { slug: "teachable-machine", name: "Teachable Machine", url: "https://teachablemachine.withgoogle.com/", category: "digital-citizenship", ai: true,
    what: "A free Google web tool for training a computer to recognize your own images, sounds, or poses (from a webcam, image files, or one-second mic clips) with no coding, then testing the model live and exporting it for projects.", grades: "All ages (teacher-led demo for K–2, guided for 3–5)", price: "Free",
    privacy: "No account needed to try it. Google states training happens in your browser tab and samples are not sent to its servers unless you save the project to your own Google Drive; if you publish a model, only the model (not the samples) goes to Google's servers. Avoid recording students' faces or voices without permission, and check with your district for web-tool approval.", why: "Students see first-hand that AI learns from the examples people give it, and what happens when those examples are too few or too similar." },
  { slug: "day-of-ai", name: "Day of AI (MIT RAISE)", url: "https://dayofai.org/", category: "digital-citizenship", ai: true,
    what: "Free, ready-to-teach AI literacy curriculum from MIT RAISE, with grade-by-grade units from Pre-K up (for example, Kindergarten: Machines All Around Us; Grade 1: Learning from Patterns, taught unplugged; Grade 2: Data All Around Us) plus lessons on topics like verifying AI information.", grades: "Pre-K–12 (grade-by-grade K–5 units)", price: "Free",
    privacy: "Curriculum resource for teachers; many early-grade lessons are unplugged, so no student accounts are required. A free educator registration may be needed for some materials.", why: "Gives you a sequenced, research-backed AI literacy path instead of one-off activities." },
  { slug: "autodraw", name: "AutoDraw", url: "https://www.autodraw.com/", category: "creation-portfolios", ai: true,
    what: "A free drawing tool from Google Creative Lab that pairs machine learning with drawings from artists: as you sketch, it guesses what you are trying to draw and suggests polished clip-art versions you can swap in. Nothing to download, and it works on phones, tablets, laptops, and desktops.", grades: "All ages (great for K–5)", price: "Free",
    privacy: "No account needed. Google says there is nothing to download and nothing to pay for. It uses the same guessing technology as Quick, Draw!, so preview it first, and check with your district for web-tool approval.", why: "Kids who say \"I can't draw\" can make clean icons for posters, slides, and books, and it shows AI guessing from patterns in a friendly way." },
  { slug: "blob-opera", name: "Blob Opera (Google Arts & Culture)", url: "https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw", category: "creation-portfolios", ai: true,
    what: "A machine learning music experiment by David Li with Google Arts & Culture: students drag four singing blobs up and down to change pitch and side to side to change vowel sounds, and a model trained on 16 hours of singing by four opera singers harmonizes in real time. No singing skills needed.", grades: "All ages (great for K–5 music and AI talks)", price: "Free tier available",
    privacy: "No account needed to play. You hear the model's idea of opera singing, not the singers' actual recordings. Google notes it uses newer web audio technology and may not run well on older devices, so test on student devices first, and check with your district for web-tool approval.", why: "A joyful way to explore pitch, harmony, and voice types while asking students how an AI can \"sing\" by learning patterns from real people." },
  { slug: "canva-education", name: "Canva for Education", url: "https://www.canva.com/education/", category: "creation-portfolios", ai: true,
    what: "Design tool for posters, slides, worksheets, and videos, with classroom features and AI-assisted design tools.", grades: "K–12", price: "Free tier available", privacy: P + " Ask whether AI features are enabled for students.", why: "Makes professional-looking classroom materials quick." },
  { slug: "kami", name: "Kami", url: "https://www.kamiapp.com/", category: "creation-portfolios", ai: true,
    what: "A digital classroom and PDF annotation tool that works with Google Drive and OneDrive: students draw, highlight, type, and voice-type right on worksheets, PDFs, and docs, with read aloud, a multilingual dictionary, and accessibility fonts. Paid plans add Google Classroom, Canvas, Schoology, and Teams integration plus AI features such as AI-powered Understand tools and Questions AI.", grades: "K–12 (great for turning worksheets into digital ones)", price: "Free tier available",
    privacy: PA + " The free Basic plan includes 10+ essential tools; the Teacher plan (40+ tools and LMS integrations) is paid, and new teacher accounts get a 30-day free trial.", why: "Turns the worksheets and PDFs you already use into interactive, accessible assignments that young students can mark up with a finger or stylus." },

  // Coding
  { slug: "scratch", name: "Scratch", url: "https://scratch.mit.edu/", category: "coding-computer-science",
    what: "A free block-based coding platform from the MIT Media Lab for making stories, games, and animations.", grades: "Ages 8+", price: "Free", privacy: P, why: "Huge community and endless project ideas." },
  { slug: "scratchjr", name: "ScratchJr", url: "https://www.scratchjr.org/", category: "coding-computer-science",
    what: "An introductory programming app for young children to make interactive stories and games.", grades: "Ages 5–7 (K–2)", price: "Free", privacy: P, why: "A gentle first step into coding for the youngest students." },
  { slug: "code-org", name: "Code.org", url: "https://code.org/", category: "coding-computer-science",
    what: "Free computer science curriculum and activities for all grade levels, plus teacher training.", grades: "K–12", price: "Free", privacy: P, why: "Ready-made, standards-friendly CS lessons, including unplugged ones." },
  { slug: "typing-com", name: "Typing.com", url: "https://www.typing.com/", category: "coding-computer-science",
    what: "Keyboarding lessons and games with progress tracking for teachers.", grades: "K–12", price: "Free tier available", privacy: P, why: "Structured typing practice with classroom reports." },
  { slug: "tynker", name: "Tynker", url: "https://www.tynker.com/", category: "coding-computer-science",
    what: "A coding platform for kids with block-based courses and school offerings.", grades: "K–8", price: "Free tier available", privacy: P, why: "Guided courses help teachers new to coding." },
  { slug: "tinkercad", name: "Tinkercad", url: "https://www.tinkercad.com/", category: "coding-computer-science",
    what: "Free browser-based tool for 3D design, circuits, and code blocks from Autodesk.", grades: "Upper elementary and up", price: "Free", privacy: P, why: "Easy 3D design that works in a browser." },
  { slug: "machine-learning-for-kids", name: "Machine Learning for Kids", url: "https://machinelearningforkids.co.uk/", category: "coding-computer-science", ai: true,
    what: "A free, web-based tool where students train machine learning models to recognize text, numbers, images, or sounds, then use them to build games and projects in Scratch, with ready-made one-lesson project worksheets.", grades: "Upper elementary and up (easiest with some Scratch experience)", price: "Free",
    privacy: P + " Created by Dale Lane. Its \"Try it now\" mode needs no login, collects no personal information, and deletes projects after four hours; teacher-managed student accounts use a username only (no email or real name). Text projects use IBM Watson, so tell students not to type personal information.", why: "Moves students from using AI to building with it, inside the Scratch environment many already know." },
  { slug: "kodable", name: "Kodable", url: "https://www.kodable.com/", category: "coding-computer-science",
    what: "A K–5 platform of self-guided coding, typing, and STEM games: Kodable Basics teaches sequencing and logic to early and pre-readers, and Kodable Creator lets grades 3–5 design their own games with loops and functions. Students sign in with Google Classroom, Clever, or class codes on iPads, Chromebooks, or the web, and a teacher dashboard tracks progress.", grades: "K–5", price: "Free tier available",
    privacy: P + " Kodable says it is ad-free. The free Kickstart plan includes introductory coding lessons; paid school plans unlock the full library, Kodable Typing, rostering, and an AI STEM tutor.", why: "A no-prep, standards-aligned coding path that even kindergartners can start on their own, so it works well for centers or a specials rotation." },

  // Classroom mgmt
  { slug: "google-classroom", name: "Google Classroom", url: "https://edu.google.com/workspace-for-education/products/classroom/", category: "classroom-management",
    what: "Assign, collect, and give feedback on work, and communicate with your class.", grades: "K–12", price: "Free tier available", privacy: "Usually set up and managed by your district's Google Workspace for Education admin. Check with your district.", why: "Often already set up by your school." },
  { slug: "classdojo", name: "ClassDojo", url: "https://www.classdojo.com/", category: "classroom-management",
    what: "Classroom community app for behavior, student portfolios, and family messaging.", grades: "K–8", price: "Free tier available", privacy: P, why: "Strong for family communication." },
  { slug: "seesaw", name: "Seesaw", url: "https://seesaw.com/", category: "classroom-management",
    what: "A learning platform where students capture work with photos, drawings, and voice, and families can follow along.", grades: "Elementary focus", price: "Free tier available", privacy: "Seesaw states it is FERPA- and COPPA-compliant. Still check with your district.", why: "Designed for young learners who cannot type yet." },

  // Games
  { slug: "kahoot", name: "Kahoot!", url: "https://kahoot.com/", category: "games-assessment",
    what: "Game-based quizzes students join with a code.", grades: "K–12", price: "Free tier available", privacy: P, why: "High-energy review games students love." },
  { slug: "blooket", name: "Blooket", url: "https://www.blooket.com/", category: "games-assessment",
    what: "Question-set games with many game modes, played live or as homework.", grades: "Upper elementary and up", price: "Free tier available", privacy: P, why: "Variety of game modes keeps review fresh." },
  { slug: "gimkit", name: "Gimkit", url: "https://www.gimkit.com/", category: "games-assessment",
    what: "Quiz games with an in-game economy, played live or assigned.", grades: "Upper elementary and up", price: "Free tier available", privacy: P, why: "Students stay engaged by strategy and earning." },
  { slug: "quizizz-wayground", name: "Quizizz (now Wayground)", url: "https://wayground.com/", category: "games-assessment",
    what: "Interactive quizzes and lessons; the Quizizz site now redirects to Wayground.", grades: "K–12", price: "Free tier available", privacy: P, why: "Self-paced option works well for stations." },
  { slug: "wordwall", name: "Wordwall", url: "https://wordwall.net/", category: "games-assessment",
    what: "Create interactive and printable activities such as matching, word searches, and quizzes from one set of content.", grades: "K–12", price: "Free tier available", privacy: P, why: "One activity, many formats, including printable." },
  { slug: "bookwidgets", name: "BookWidgets", url: "https://www.bookwidgets.com/", category: "games-assessment",
    what: "Tool for building interactive exercises and assessments that work with learning platforms.", grades: "K–12", price: "Free tier available", privacy: P, why: "Many activity types in one toolbox." },

  // Creation
  { slug: "book-creator", name: "Book Creator", url: "https://bookcreator.com/", category: "creation-portfolios",
    what: "Create multimedia books with text, images, audio, and video.", grades: "K–12", price: "Free tier available", privacy: P, why: "Simple publishing for every learner." },
  { slug: "padlet", name: "Padlet", url: "https://padlet.com/", category: "creation-portfolios",
    what: "A digital bulletin board for collecting ideas, images, and responses.", grades: "K–12", price: "Free tier available", privacy: P, why: "Quick to set up, great for exit tickets." },
  { slug: "genially", name: "Genially", url: "https://genially.com/", category: "creation-portfolios",
    what: "Create interactive presentations, infographics, and learning games.", grades: "K–12", price: "Free tier available", privacy: P, why: "Lots of templates to start from." },
  { slug: "chrome-music-lab", name: "Chrome Music Lab", url: "https://musiclab.chromeexperiments.com/", category: "creation-portfolios",
    what: "Free browser experiments that make music and sound exploration hands-on.", grades: "All ages", price: "Free", privacy: "Runs in the browser; check with your district for web-tool approval.", why: "No login and instantly playable." },

  // Interactive lessons
  { slug: "nearpod", name: "Nearpod", url: "https://nearpod.com/", category: "interactive-lessons",
    what: "Interactive lessons with polls, quizzes, and activities delivered live or self-paced.", grades: "K–12", price: "Free tier available", privacy: P, why: "Large library of ready-made lessons." },
  { slug: "pear-deck", name: "Pear Deck", url: "https://www.peardeck.com/", category: "interactive-lessons",
    what: "Add interactive questions to Google Slides or PowerPoint presentations.", grades: "K–12", price: "Free tier available", privacy: P, why: "Turn slides you already have into interactive lessons." },
  { slug: "mystery-science", name: "Mystery Science", url: "https://mysteryscience.com/", category: "interactive-lessons",
    what: "Ready-to-teach science lessons built around kid-friendly questions.", grades: "K–5", price: "Free tier available", privacy: P, why: "Low-prep lessons built for elementary." },

  // Math/science/reading
  { slug: "desmos", name: "Desmos", url: "https://www.desmos.com/", category: "math-science-reading",
    what: "Free math tools including calculators and classroom activities.", grades: "K–12", price: "Free", privacy: P, why: "Beautiful, visual math exploration." },
  { slug: "geogebra", name: "GeoGebra", url: "https://www.geogebra.org/", category: "math-science-reading",
    what: "Interactive math tools for geometry, algebra, and more, with a library of shared activities.", grades: "K–12", price: "Free", privacy: P, why: "Thousands of shareable visual activities." },
  { slug: "khan-academy-kids", name: "Khan Academy Kids", url: "https://learn.khanacademy.org/khan-academy-kids/", category: "math-science-reading",
    what: "A free learning app for early learners covering reading, math, and more.", grades: "PreK–2", price: "Free", privacy: P, why: "Nonprofit-backed with no ads." },
  { slug: "readworks", name: "ReadWorks", url: "https://www.readworks.org/", category: "math-science-reading",
    what: "Reading passages and comprehension resources for teachers.", grades: "K–12", price: "Free", privacy: P, why: "Large free library of passages." },
  { slug: "newsela", name: "Newsela", url: "https://newsela.com/", category: "math-science-reading",
    what: "Leveled articles and instructional content.", grades: "K–12", price: "Free tier available", privacy: P, why: "Same article at multiple reading levels." },
  { slug: "boom-learning", name: "Boom Learning", url: "https://www.boomlearning.com/", category: "math-science-reading",
    what: "Self-checking digital task cards and decks, made and shared by teachers.", grades: "PreK–12", price: "Free tier available", privacy: P, why: "Self-checking cards save grading time." },
  { slug: "mote", name: "Mote", url: "https://www.mote.com/", category: "math-science-reading",
    what: "A literacy and accessibility tool that works in Chrome and Google Workspace: students can have webpages, Docs, Slides, PDFs, and images read aloud in natural-sounding voices, translate text into 60+ languages, and use speech-to-text, while teachers leave voice notes on work in Google Docs, Slides, Forms, and Classroom.", grades: "K–12 (great for emerging readers and ELLs)", price: "Free tier available",
    privacy: P + " Mote states it is COPPA and FERPA compliant. The free plan limits voice recordings (20 per month, 1 minute each); paid plans add more.", why: "Gives young and struggling readers independent access to text, and lets you give quick, personal voice feedback instead of typed comments." },
  { slug: "epic", name: "Epic", url: "https://www.getepic.com/", category: "math-science-reading",
    what: "A digital library of books and videos for kids.", grades: "K–5", price: "Free tier available", privacy: P, why: "Large library to support independent reading." },

  // Digital citizenship
  { slug: "be-internet-awesome", name: "Be Internet Awesome (Google)", url: "https://beinternetawesome.withgoogle.com/en_us/", category: "digital-citizenship", ai: true,
    what: "Google's online safety program built with experts like ConnectSafely: a downloadable curriculum aligned to ISTE Standards, Interland (a free browser game with four lands on sharing, spotting fakes, strong passwords, and kindness), and an AI Literacy Guide with lesson plans on machine learning, data, and algorithms for grades 2–8.", grades: "Elementary (AI Literacy Guide: grades 2–8)", price: "Free",
    privacy: "Google states the resources are free for everyone. Interland can be played in the browser and assigned through Google Classroom. Preview the games first and check with your district for web-tool approval.", why: "One free, ready-made package for digital citizenship and beginner AI literacy, with a game students actually want to play." },
  { slug: "ai-for-oceans", name: "AI for Oceans (Code.org)", url: "https://code.org/oceans", category: "digital-citizenship", ai: true,
    what: "A free Code.org Hour of AI activity where students train a real machine learning model by labeling images as \"fish\" or \"not fish\" to clean trash out of the ocean, then pick their own labels for new sea creatures, with short videos on training data and bias. Code.org lists it for ages 7–11, and the lesson plan runs about 45 minutes.", grades: "Ages 7–11 (about grades 2–5)", price: "Free",
    privacy: P + " Code.org's lesson plan notes the activity does not tell students whether a level is \"correct\", so circulate and prompt discussion. Test it on student devices first.", why: "A ready-to-teach, hands-on lesson that shows students how the examples people choose shape what an AI learns, including how bias creeps in." },
  { slug: "common-sense-education", name: "Common Sense Education", url: "https://www.commonsense.org/education", category: "digital-citizenship",
    what: "Free digital citizenship curriculum and independent tool reviews for educators.", grades: "K–12", price: "Free", privacy: "Informational resource; their reviews can help when vetting other tools.", why: "Trusted, teacher-friendly digital citizenship lessons." },
];

export const catBySlug = (s: string) => categories.find((c) => c.slug === s);
export const toolBySlug = (s: string) => tools.find((t) => t.slug === s);
export const SITE = { name: "TeachToolbox", tagline: "Free tech & AI tools directory for K–5 teachers", url: process.env.NEXT_PUBLIC_SITE_URL || "https://teachtoolbox.vercel.app" };
