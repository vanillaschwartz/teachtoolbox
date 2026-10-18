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
  { slug: "teachai", name: "TeachAI", url: "https://www.teachai.org/", category: "digital-citizenship", ai: true,
    what: "An initiative offering guidance and toolkits to help schools and education systems think about AI.", grades: "Teachers & leaders", price: "Free", privacy: "Informational resource; no student accounts.", why: "A solid starting point for writing or understanding school AI guidance." },
  { slug: "ai-for-education", name: "AI for Education", url: "https://www.aiforeducation.io/", category: "digital-citizenship", ai: true,
    what: "Resources, training, and guidance on using AI in education.", grades: "Teachers & leaders", price: "Free tier available", privacy: "Informational and training resource; no student accounts needed.", why: "Practical AI literacy training aimed at educators." },
  { slug: "canva-education", name: "Canva for Education", url: "https://www.canva.com/education/", category: "creation-portfolios", ai: true,
    what: "Design tool for posters, slides, worksheets, and videos, with classroom features and AI-assisted design tools.", grades: "K–12", price: "Free tier available", privacy: P + " Ask whether AI features are enabled for students.", why: "Makes professional-looking classroom materials quick." },

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
  { slug: "epic", name: "Epic", url: "https://www.getepic.com/", category: "math-science-reading",
    what: "A digital library of books and videos for kids.", grades: "K–5", price: "Free tier available", privacy: P, why: "Large library to support independent reading." },

  // Digital citizenship
  { slug: "common-sense-education", name: "Common Sense Education", url: "https://www.commonsense.org/education", category: "digital-citizenship",
    what: "Free digital citizenship curriculum and independent tool reviews for educators.", grades: "K–12", price: "Free", privacy: "Informational resource; their reviews can help when vetting other tools.", why: "Trusted, teacher-friendly digital citizenship lessons." },
];

export const catBySlug = (s: string) => categories.find((c) => c.slug === s);
export const toolBySlug = (s: string) => tools.find((t) => t.slug === s);
export const SITE = { name: "TeachToolbox", tagline: "Free tech & AI tools directory for K–5 teachers", url: process.env.NEXT_PUBLIC_SITE_URL || "https://teachtoolbox.vercel.app" };
