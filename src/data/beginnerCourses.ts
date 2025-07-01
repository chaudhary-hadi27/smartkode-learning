// Course type
export interface Course {
  title: string;
  id: string;
  image: string;
  description: string;
  longDescription?: string;
  points?: {
    title: string;
    topics: string[];
  }[];
}

// Beginner course data
export const beginnerCourses: Course[] = [
  {
    title: "Python Essentials: From Zero to Hero",
    id: "python-essentials",
    image: "/python.jpg",
    description:
      "Master Python from scratch in just 8 weeks — Perfect for beginners aiming to learn real-world coding skills, build portfolio projects, and kickstart a career in web development, automation, Hacking or AI. No prior experience needed — just curiosity and commitment!",
    longDescription: `
### 🚀 Future Career Growth with Python

By 2030, Python developers are expected to see **salary growth up to 40–60%** due to the rising demand in **AI, Data Science, and Automation**. Python has become the backbone of cutting-edge technologies, and this course sets the perfect foundation to ride that wave.

---

### 📌 Why Python?

- 🏆 **#1 Programming Language** (TIOBE Index 2024)
- 🌐 Used by tech giants like **Google, Netflix, NASA, and Meta**
- 💼 Over **1M+ job listings** demand Python worldwide

---

### 🧠 What You'll Gain

- Confidence to write code and build real-world solutions  
- Skills to enter **Web Development**, **Data Science**, or **AI**  
- Portfolio projects to show your abilities  
- A launchpad for freelancing or full-time careers

---

### 📅 Weekly Learning Format

- **Mon–Thu**: Live Classes + Hands-on Coding  
- **Fri**: Weekly Revision + Concept Strengthening  
- **Sat–Sun**: Assignments + Mini/Final Projects
    `,
    points: [
      {
        title: "📅 Week 1: Python Basics & Setup",
        topics: [
          "Python Installation & Setup",
          "Syntax, Comments & Code Structure",
          "Variables & Data Types",
          "User Input and Output Handling",
        ],
      },
      {
        title: "📅 Week 2: Flow Control",
        topics: [
          "If, Else, Elif Conditions",
          "Nested Logic & Logical Operators",
          "For and While Loops",
          "Control Statements (break, continue)",
        ],
      },
      {
        title: "📅 Week 3: Functions & Modular Programming",
        topics: [
          "Function Definitions & Parameters",
          "Return Statements & Scope",
          "Lambda Functions",
          "Importing & Using Modules",
        ],
      },
      {
        title: "📅 Week 4: Data Structures I",
        topics: [
          "Strings – Slicing, Methods, Immutability",
          "Lists – Indexing, Slicing, List Comprehension",
          "Tuples – Syntax, Use Cases",
          "Data Iteration Techniques",
        ],
      },
      {
        title: "📅 Week 5: Data Structures II",
        topics: [
          "Dictionaries – Key/Value Access, Nesting",
          "Sets – Unique Collections",
          "Useful Built-in Methods",
          "Combining Data Structures",
        ],
      },
      {
        title: "📅 Week 6: File & Error Handling",
        topics: [
          "File Reading/Writing (Text/JSON)",
          "Try/Except Blocks",
          "Exception Types & Custom Errors",
          "Best Practices for File Access",
        ],
      },
      {
        title: "📅 Week 7: Object-Oriented Programming",
        topics: [
          "Classes and Objects",
          "Constructors (__init__)",
          "Inheritance & Encapsulation",
          "Polymorphism with Examples",
        ],
      },
      {
        title: "📅 Week 8: Final Project + Interview & Freelancing Prep",
        topics: [
          "Build a Real-World Python App",
          "Git/GitHub Basics for Portfolio",
          "Freelancing Guidance",
          "Common Interview Questions & Problem-Solving",
        ],
      },
      {
        title: "📘 Weekly Plan",
        topics: [
          "4 Days: Live Classes + Hands-on Practice (Mon–Thu)",
          "1 Day: Weekly Revision (Friday)",
          "2 Days: Assignments & Projects (Sat–Sun)",
        ],
      },
      {
        title: "🎯 Final Output",
        topics: [
          "Portfolio-ready Python Application",
          "Source Code & GitHub Repository",
          "Certificate of Completion",
        ],
      },
      {
        title: "🧠 Additional Perks",
        topics: [
          "Lifetime Mentorship & Career Guidance",
          "Personalized Freelance Strategy",
        ],
      },
    ],
  },


  {
    title: "Frontend Crash Course: HTML5, CSS3 & JavaScript (ES6+)",
    id: "frontend-crash-course",
    image: "/frontend.webp",
    description:
      "Master the building blocks of the web — HTML5, CSS3, and modern JavaScript — in 8 beginner-friendly weeks. Build responsive websites and launch your frontend journey.",
    longDescription: `
  ### 💡 Why Learn Frontend Development?
  
  Frontend skills are essential for anyone entering tech. They let you build interactive, user-friendly websites and are the foundation of web careers — from freelancing to full-stack roles.
  
  ---
  
  ### 🛠️ Tools & Technologies Covered
  
  - 🧱 **HTML5** – Web structure and semantic markup  
  - 🎨 **CSS3** – Styling, Flexbox, Grid, Responsive Design  
  - ⚙️ **JavaScript (ES6+)** – Logic, interactivity & DOM  
  - 🌍 Bonus: **GitHub Pages** deployment
  
  ---
  
  ### 🚀 What You'll Build
  
  - Personal Portfolio Website  
  - Responsive Landing Page  
  - Interactive JavaScript Quiz  
  - GitHub-hosted Live Website  
  - Resume-ready Projects
  
  ---
  
  ### 📅 Weekly Learning Format
  
  - **Mon–Thu**: Live Classes + Practice  
  - **Fri**: Doubt Clearing & Quizzes  
  - **Sat–Sun**: Assignments + Final Project
    `,
    points: [
      {
        title: "📅 Week 1: HTML5 Fundamentals",
        topics: [
          "Introduction to the Internet & HTML",
          "Basic Tags – Headings, Paragraphs, Links, Lists",
          "Forms & Inputs (Text, Checkbox, Radio)",
          "Semantic Elements: header, main, footer, article, section",
        ],
      },
      {
        title: "📅 Week 2: Page Structure & Media",
        topics: [
          "Divs & Spans for Layout Control",
          "Images, Videos & Embeds",
          "Using iframes (YouTube, Maps)",
          "Accessibility & Best Practices",
        ],
      },
      {
        title: "📅 Week 3: CSS Basics & Styling",
        topics: [
          "Inline, Internal, and External CSS",
          "Selectors, Classes & IDs",
          "Colors, Fonts, Backgrounds",
          "Box Model: Padding, Border, Margin",
        ],
      },
      {
        title: "📅 Week 4: Layouts & Responsiveness",
        topics: [
          "Display Property & Positioning",
          "Flexbox: 1D Layout",
          "Grid: 2D Layout",
          "Media Queries for Mobile-First Design",
          "Responsive Navbar",
        ],
      },
      {
        title: "📅 Week 5: JavaScript (ES6+) Basics",
        topics: [
          "Variables (let, const), Data Types, Operators",
          "Conditionals (if-else), Loops (for, while)",
          "Functions & Arrow Functions",
          "Events and Event Handling",
        ],
      },
      {
        title: "📅 Week 6: DOM Manipulation & Interactivity",
        topics: [
          "querySelector, getElementById",
          "Changing Styles with JavaScript",
          "Creating Interactive Elements (toggle, tabs)",
          "Form Validation & Alert Systems",
        ],
      },
      {
        title: "📅 Week 7: Mini Projects + GitHub",
        topics: [
          "JS Quiz App / To-do List App",
          "Live Clock or Tip Calculator",
          "Version Control with Git",
          "GitHub Basics & Hosting a Website",
        ],
      },
      {
        title: "📅 Week 8: Final Project + Freelance & Career Prep",
        topics: [
          "Build & Launch a Personal Portfolio",
          "Add Interactivity & Mobile Optimization",
          "Host Live on GitHub Pages",
          "Intro to Freelancing Profiles",
          "Frontend Interview Q&A Basics",
        ],
      },
      {
        title: "📘 Weekly Plan",
        topics: [
          "4 Days: Live Classes + Hands-on Practice (Mon–Thu)",
          "1 Day: Weekly Revision + Quiz (Friday)",
          "2 Days: Assignments + Projects (Sat–Sun)",
        ],
      },
      {
        title: "🎯 Final Output",
        topics: [
          "Fully Responsive Portfolio Website",
          "Live Hosted GitHub Demo",
          "Ready for React, Tailwind & Next.js",
          "Certificate of Completion",
        ],
      },
      {
        title: "🧠 Additional Perks",
        topics: [
          "Resume Optimization + Mentorship Access",
          "Career & Freelance Strategy Guide",
        ],
      },
    ],
  },

  {
    title: "AI for Everyone: No-Code Introduction to Artificial Intelligence",
    id: "ai-for-everyone",
    image: "/basic-ai.jpg",
    description:
      "Discover how AI works, how it’s shaping the future, and how you can use tools like ChatGPT, DALL·E, and more — without writing a single line of code.",
    longDescription: `
  ### 🤖 Why This Course?
  
  Artificial Intelligence is changing every industry — from business to education. Whether you're a student, entrepreneur, teacher, or professional, this course gives you the power to understand and use AI in your daily life or career.
  
  ---
  
  ### 🧰 What You'll Learn
  
  - How AI systems like ChatGPT and Google Translate work  
  - Basics of Machine Learning, Neural Networks & Natural Language Processing  
  - Real-world tools: ChatGPT, DALL·E, Bard, Gemini, Notion AI  
  - Future career options in AI — even if you're not a programmer
  
  ---
  
  ### 📅 Weekly Learning Format
  
  - **Mon–Thu**: Concept Explainers + Guided Tool Usage  
  - **Fri**: Case Studies, Demos, Industry Use  
  - **Sat–Sun**: Interactive Assignments & Career Exercises
    `,
    points: [
      {
        title: "📅 Week 1: What is AI?",
        topics: [
          "The Evolution of Artificial Intelligence",
          "AI vs Machine Learning vs Deep Learning",
          "Where You See AI Today (Google, Netflix, Siri)",
          "Major Milestones in AI History",
        ],
      },
      {
        title: "📅 Week 2: AI Tools You Can Use Today",
        topics: [
          "Hands-on with ChatGPT, DALL·E, Bard, Notion AI",
          "Prompt Engineering Basics (How to Ask Better Questions)",
          "Using AI for Content Creation (Text, Images, Summarization)",
          "Real-life Examples: Resume, Email, Planning, etc.",
        ],
      },
      {
        title: "📅 Week 3: Machine Learning Simplified",
        topics: [
          "What is Machine Learning? (Visuals & Demos)",
          "Supervised vs Unsupervised Learning",
          "Common ML Use Cases: Recommendations, Fraud Detection",
          "Try out Google Teachable Machine (No-code ML Tool)",
        ],
      },
      {
        title: "📅 Week 4: Natural Language & Computer Vision",
        topics: [
          "What is Natural Language Processing (NLP)?",
          "How ChatGPT & Voice Assistants Understand You",
          "Intro to Computer Vision (Image AI like DALL·E)",
          "Try Image Generation & Text-to-Speech Tools",
        ],
      },
      {
        title: "📅 Week 5: Ethics & Bias in AI",
        topics: [
          "What Can Go Wrong with AI?",
          "Bias in Training Data & Model Decisions",
          "Real World Cases: Facial Recognition, Hiring Systems",
          "How to Use AI Responsibly",
        ],
      },
      {
        title: "📅 Week 6: AI in Careers & Industries",
        topics: [
          "AI in Healthcare, Business, Marketing, Education",
          "Top Career Paths: AI Product Manager, Prompt Engineer, Researcher",
          "Freelancing with AI: Writing, Art, Voice-over",
          "Create Your First AI Resume or Portfolio",
        ],
      },
      {
        title: "📅 Week 7: Mini Projects with AI Tools",
        topics: [
          "Create a Blog Post with ChatGPT",
          "Generate a Logo/Image with DALL·E",
          "Design a Learning Plan using Notion AI",
          "Build a No-Code Chatbot (Bonus Tool: Poe or Tidio)",
        ],
      },
      {
        title: "📅 Week 8: Final Project + AI Literacy Certification",
        topics: [
          "Create Your Own AI-Enhanced Portfolio/Presentation",
          "Review Key Concepts & Tools",
          "How to Stay Updated in AI",
          "Download Certificate + Share on LinkedIn",
        ],
      },
      {
        title: "📘 Weekly Plan",
        topics: [
          "4 Days: Concept Videos + Tool Practice (Mon–Thu)",
          "1 Day: Case Study + Discussion (Friday)",
          "2 Days: Project Work + Review (Sat–Sun)",
        ],
      },
      {
        title: "🎯 Final Output",
        topics: [
          "AI-Enhanced Resume, Portfolio or Project",
          "Hands-on Experience with Modern AI Tools",
          "Certificate of Completion (AI Literacy)",
          "Confidence to Explore AI Careers or Courses",
        ],
      },
      {
        title: "🧠 Additional Perks",
        topics: [
          "Community Access + Q&A Support",
          "AI Career & Freelance Starter Kit (Templates & Tips)",
          "Mentorship for Next Steps in AI",
        ],
      },
    ],
  },
  
  

  {
    title: "Game Development with Python: Build Games from Scratch",
    id: "game-dev-python",
    image: "/games.jpg",
    description:
      "Design and code your own games using Python’s Turtle library — master logic, events, and visuals in 8 fun-packed weeks. Perfect for beginners with zero coding or game design background.",
    longDescription: `
  ### 🎮 Why Learn Game Development with Python?
  
  Game development builds logic, creativity, and problem-solving — and it’s insanely fun! With Python’s beginner-friendly Turtle library, you’ll build real games like Snake and Ping Pong while learning key coding concepts step by step.
  
  ---
  
  ### 🧰 What You'll Learn
  
  - Python logic, loops, functions & event handling  
  - 2D game visuals with the Turtle graphics library  
  - Build playable games: Ping Pong, Snake, Car Race, and more  
  - Game design thinking: scoring, collision, boundaries, and more
  
  ---
  
  ### 📅 Weekly Learning Format
  
  - **Mon–Thu**: Concept Building + Game Logic Coding  
  - **Fri**: Debugging Sessions + Challenges  
  - **Sat–Sun**: Mini Projects or Feature Additions
    `,
    points: [
      {
        title: "📅 Week 1: Python & Turtle Basics",
        topics: [
          "Intro to Python & Turtle Graphics Setup",
          "Drawing with Turtle: Colors, Shapes, Movements",
          "Loops, Conditions & Simple Logic",
          "Build Your First Drawing Bot",
        ],
      },
      {
        title: "📅 Week 2: Movement & Keyboard Control",
        topics: [
          "Turtle Directions and Animation",
          "User Input & Keyboard Binding",
          "Game Loop with `ontimer` and `onkey`",
          "Make a Movable Character",
        ],
      },
      {
        title: "📅 Week 3: Collision & Scoring",
        topics: [
          "Collision Detection Techniques",
          "Keeping Score: Variables + Text",
          "Basic Sound and Win Conditions",
          "Build a Catch-the-Food Game",
        ],
      },
      {
        title: "📅 Week 4: Pong Game Clone",
        topics: [
          "Bouncing Logic + Paddle Movement",
          "Wall Detection & Ball Physics",
          "Scoreboard & Two-Player Mode",
          "Complete Your Ping Pong Game",
        ],
      },
      {
        title: "📅 Week 5: Snake Game Clone",
        topics: [
          "Creating Snake Body with Turtle Shapes",
          "Growing Snake on Food Collision",
          "Game Over Logic & Resetting",
          "Snake Game with Scoring",
        ],
      },
      {
        title: "📅 Week 6: Racing Game",
        topics: [
          "Track Design & Lap Logic",
          "Multiple Player Control",
          "Lap Timer and Finish Line",
          "Make Your Own Race Track Game",
        ],
      },
      {
        title: "📅 Week 7: Final Game Design Principles",
        topics: [
          "Adding Sound Effects (Using Pygame optional)",
          "Improving Game Design: UI, Feedback & Polish",
          "Bug Fixing, Testing & User Experience",
          "Prepare Final Game Project",
        ],
      },
      {
        title: "📅 Week 8: Final Game Project + Portfolio",
        topics: [
          "Build Your Final Game (Any Theme)",
          "Host or Share Your Game via GitHub",
          "Create a Game Portfolio or Showreel",
          "Certificate + LinkedIn Showcase",
        ],
      },
      {
        title: "📘 Weekly Plan",
        topics: [
          "4 Days: Coding + Practice (Mon–Thu)",
          "1 Day: Debug + Logic Challenge (Friday)",
          "2 Days: Mini Game Features or Projects (Sat–Sun)",
        ],
      },
      {
        title: "🎯 Final Output",
        topics: [
          "4+ Playable Python Games (Ping Pong, Snake, Race)",
          "Game Portfolio (Hosted or GitHub)",
          "Beginner Certificate in Python Game Development",
          "Strong Base for Pygame, Unity or Advanced Dev",
        ],
      },
      {
        title: "🧠 Additional Perks",
        topics: [
          "Game Dev Templates + Code Snippets",
          "Access to Beginner Game Developer Community",
          "Mentorship for Next Learning Path (Pygame, Unity)",
        ],
      },
    ],
  }
  

//   {
//     title: "Web Development with HTML, CSS & JS",
//     id: "html-css-js",
//     image: "/web-development.png",
//     description:
//       "Foundation of frontend – design and build your first website using HTML, CSS, and JavaScript.",
//     longDescription: `
// 🌍 **Why This Course Matters:**
// Every company, startup, and brand needs a professional website. This course teaches you how to build beautiful, responsive websites using HTML, CSS, and JavaScript — no prior coding required.

// 📖 **Course Overview:**
// In this practical beginner course, you’ll learn the building blocks of the web. By the end, you'll be able to create your own personal website, blog, or landing page from scratch.

// ---

// 🚀 **What You’ll Learn:**
// - HTML structure, elements, and semantic tags
// - CSS styling, Flexbox, Grid & responsiveness
// - JavaScript logic for interactive web pages
// - DOM manipulation & event handling

// 🛠️ **Projects You’ll Build:**
// - Personal Portfolio Website
// - Responsive Landing Page
// - Contact Form with JavaScript Validation

// 🎓 Certificate & Live Demo Support Included
//     `,
//     points: [
//       "🔹 HTML Elements – Headings, Links, Forms, Tables",
//       "🔹 CSS Styling – Colors, Fonts, Box Model, Animations",
//       "🔹 Layout Techniques – Flexbox, Grid, Positioning",
//       "🔹 JavaScript – Variables, Events, DOM Interaction",
//       "🔹 Responsive Design – Mobile-first layout techniques",
//       "🔹 Build Projects: Portfolio, Blog Page, Landing Page",
//       "🎯 Great for aspiring frontend developers & freelancers",
//       "🎓 Certificate + Demo Showcase + Community Support"
//     ]
//   },

//   {
//     title: "Intro to Programming with Games (Python Turtle)",
//     id: "turtle-games",
//     image: "/games.jpg",
//     description:
//       "Learn coding by building fun and visual games using Python Turtle – perfect for kids & beginners.",
//     longDescription: `
// 🧩 **Why This Course is Special:**
// This is the most playful way to learn programming logic. Using Python’s Turtle module, you’ll build fun, visual games that make learning programming exciting and easy for beginners.

// 📖 **Course Overview:**
// Perfect for kids, teens, and first-time coders, this course teaches Python logic using visuals. You’ll draw shapes, animate objects, and build your own mini-games using fun coding challenges.

// ---

// 🎮 **What You’ll Learn:**
// - Python basics with visual feedback
// - Drawing with Turtle: lines, shapes, patterns
// - Game mechanics: movement, scoring, interaction
// - Looping and conditionals through game logic

// 🕹️ **Games You’ll Create:**
// - Catch the Ball
// - Turtle Race Game
// - Snake Game Clone
// - Drawing Pad App

// 🎓 Certificate + Final Game Showcase
//     `,
//     points: [
//       "🔹 Learn Python through Graphics & Fun Activities",
//       "🔹 Build Logic Visually: Loops, Conditions, Functions",
//       "🔹 Create Games: Maze, Racing, Catch-the-Object",
//       "🔹 Improve Logical Thinking + Creativity",
//       "🔹 Perfect for Ages 10+, No Coding Experience Needed",
//       "🎓 Certificate of Completion + Game Showcase Event"
//     ]
//   }
// ]
//
]