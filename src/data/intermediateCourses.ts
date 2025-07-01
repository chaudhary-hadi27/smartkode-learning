// src/data/intermediateCourses.ts

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

export const intermediateCourses: Course[] = [
  {
    title: "Data Science with Python",
    id: "data-science",
    image: "/data-science.jpeg",
    description:
      "Learn Pandas, Numpy, Matplotlib, Seaborn – master real-world data analysis and visualization skills in 8 weeks.",
    longDescription: `
### 📈 Why This Course?

Data is the new oil, and this course helps you refine it. Data science is one of the most in-demand and high-paying tech fields today. You’ll learn essential tools to explore, clean, analyze, and visualize real-world data.

---

### 🧰 What You'll Learn

- 🐼 Pandas – DataFrames, filtering, grouping
- 🔢 NumPy – arrays, vectorized operations
- 📊 Matplotlib & Seaborn – data visualization
- 📁 Real datasets, mini-projects, and EDA

---

### 📅 Weekly Learning Format

- **Mon–Thu**: Live Classes + Practice Labs
- **Fri**: Case Studies + Quizzes
- **Sat–Sun**: Assignments + Mini Projects
    `,
    points: [
      {
        title: "📅 Week 1: Python for Data Science",
        topics: [
          "Python Review (Lists, Dicts, Loops)",
          "Jupyter Notebook Setup",
          "Importing Pandas, NumPy, Matplotlib",
          "Working with basic datasets",
        ],
      },
      {
        title: "📅 Week 2: Data Cleaning & Preprocessing",
        topics: [
          "Handling missing data",
          "Renaming, dropping, sorting",
          "Filtering and conditional logic",
          "Basic EDA on small dataset",
        ],
      },
      {
        title: "📅 Week 3: Pandas Deep Dive",
        topics: [
          "Groupby, aggregation",
          "Pivot tables, merging",
          "Chaining methods",
          "Indexing & advanced selection",
        ],
      },
      {
        title: "📅 Week 4: NumPy Essentials",
        topics: [
          "Arrays, shapes, reshaping",
          "Broadcasting and vectorization",
          "Math functions",
          "Practical use cases with performance",
        ],
      },
      {
        title: "📅 Week 5: Data Visualization - Matplotlib",
        topics: [
          "Bar charts, line charts, scatter plots",
          "Customization, themes",
          "Multiple plots",
          "Real-world visual dashboards",
        ],
      },
      {
        title: "📅 Week 6: Seaborn & Styling",
        topics: [
          "Heatmaps, pairplots, boxplots",
          "Working with color palettes",
          "Correlation matrices",
          "Data storytelling with visuals",
        ],
      },
      {
        title: "📅 Week 7: Mini Projects",
        topics: [
          "Weather Trends Visualization",
          "E-Commerce Sales Analysis",
          "Kaggle Dataset Challenge",
          "Group Peer Review",
        ],
      },
      {
        title: "📅 Week 8: Final Project + Career Prep",
        topics: [
          "Build your EDA Portfolio",
          "Present a Data Dashboard",
          "GitHub Hosting & Documentation",
          "LinkedIn + Resume Optimization",
        ],
      },
    ],
  },
  {
    title: "Frontend Development with Next.js",
    id: "frontend",
    image: "/next-js.jpeg",
    description:
      "Level up your frontend skills by building high-performance web apps using React and Next.js in just 8 weeks.",
    longDescription: `
  ### ⚡ Why This Course?
  
  Next.js is the production framework that powers the best React apps — from personal portfolios to enterprise-grade platforms. This course bridges the gap between beginner React skills and real-world frontend development by focusing on Next.js, Tailwind CSS, and deployment.
  
  ---
  
  ### 🛠️ Tools & Tech Covered
  
  - **React.js (Hooks, Components, Props)**
  - **Next.js (Pages, SSR, API Routes, Routing)**
  - **Tailwind CSS for Styling**
  - **App Deployment with Vercel**
  
  ---
  
  ### 📅 Weekly Learning Format
  
  - **Mon–Thu**: Code-Along Lessons + Practice
  - **Fri**: Weekly Review + Debugging Techniques
  - **Sat–Sun**: Assignments + Project Building
    `,
    points: [
      {
        title: "📅 Week 1: React Refresher + Setup",
        topics: [
          "React Components, Props & State",
          "Functional Components and Hooks (useState, useEffect)",
          "React Project Setup + VS Code Extensions",
          "Folder Structure Best Practices",
        ],
      },
      {
        title: "📅 Week 2: Next.js Fundamentals",
        topics: [
          "What is Next.js? Benefits over CRA",
          "Pages, File-based Routing",
          "Linking between Pages with <Link />",
          "Dynamic Routes & Navigation",
        ],
      },
      {
        title: "📅 Week 3: Styling with Tailwind CSS",
        topics: [
          "Installing & Using Tailwind in Next.js",
          "Utility-First Styling",
          "Building Reusable Components",
          "Responsive Design Principles",
        ],
      },
      {
        title: "📅 Week 4: Static Site Generation & Data Fetching",
        topics: [
          "getStaticProps and getStaticPaths",
          "Using Dummy JSON & APIs",
          "SEO Optimization with Head Component",
          "Creating Blog/Portfolio Pages",
        ],
      },
      {
        title: "📅 Week 5: Server-Side Rendering & API Routes",
        topics: [
          "getServerSideProps for Dynamic Content",
          "Creating API Routes in Next.js",
          "Connecting Frontend with Backend",
          "Secure Environment Variables & Middleware",
        ],
      },
      {
        title: "📅 Week 6: Forms & Authentication",
        topics: [
          "Working with Forms in Next.js",
          "Form Validation (Client-side)",
          "Basic Authentication with JWT / Clerk / Auth.js",
          "Protecting Routes & User Dashboards",
        ],
      },
      {
        title: "📅 Week 7: Real-World Project — Dev Blog or Portfolio",
        topics: [
          "Project Planning & UI Layout",
          "Using Markdown or CMS for Content",
          "Blog Pages, Author Info, Contact Form",
          "Dark Mode, Animations, and Final Touches",
        ],
      },
      {
        title: "📅 Week 8: Deployment + Optimization",
        topics: [
          "Deploying with Vercel",
          "Optimizing Images & Code Splitting",
          "Performance Testing with Lighthouse",
          "Final Project Showcase + Resume Tips",
        ],
      },
      {
        title: "📘 Weekly Plan",
        topics: [
          "4 Days: Live Coding + Practice (Mon–Thu)",
          "1 Day: Debug + Recap + Quiz (Fri)",
          "2 Days: Build & Improve (Sat–Sun)",
        ],
      },
      {
        title: "🎯 Final Output",
        topics: [
          "Production-ready Portfolio/Blog",
          "Live Deployed App on Vercel",
          "Mastery of React + Next.js + Tailwind",
          "Confidence to Build Full Frontend Projects",
        ],
      },
      {
        title: "🧠 Additional Perks",
        topics: [
          "Resume & GitHub Optimization Tips",
          "Freelance & Client Project Guide",
          "Interview Preparation for Frontend Roles",
        ],
      },
    ],
  },
  {
    title: "Build AI Chatbots with Python & OpenAI",
    id: "chatbots",
    image: "/chatbot.webp",
    description:
      "Learn to build intelligent chatbots using Python, OpenAI API, and Streamlit in just 8 weeks — from logic to deployment.",
    longDescription: `
  ### 💬 Why Learn AI Chatbots?
  
  Chatbots are transforming industries — from customer support to education. This course teaches you to build your own intelligent bots using OpenAI’s language models, with real-world applications in automation, business, and freelancing.
  
  ---
  
  ### 🛠️ Tools & Tech You'll Master
  
  - Python + FastAPI for backend logic  
  - OpenAI (ChatGPT, GPT-4) for natural language understanding  
  - Streamlit for UI  
  - LangChain for memory & multi-step reasoning  
  - Ngrok for local API testing and deployment
  
  ---
  
  ### 📅 Weekly Learning Format
  
  - **Mon–Thu**: Interactive Coding Lessons  
  - **Fri**: Project Demos + Problem Solving  
  - **Sat–Sun**: Build Features + Assignments
    `,
    points: [
      {
        title: "📅 Week 1: Python & API Fundamentals",
        topics: [
          "Python Refresher (Functions, Classes, JSON)",
          "What are APIs? Consuming OpenAI APIs",
          "Setting up environment & using API keys securely",
          "Basic Chat Prompting using Python",
        ],
      },
      {
        title: "📅 Week 2: Building Your First Chatbot",
        topics: [
          "Using OpenAI’s ChatCompletion Endpoint",
          "System, User, and Assistant Roles",
          "Handling User Input & Bot Replies",
          "Making a Functional CLI Chatbot",
        ],
      },
      {
        title: "📅 Week 3: Streamlit UI for Chatbots",
        topics: [
          "Setting up Streamlit Project",
          "Building Web-based UI for Your Bot",
          "Handling Chat History",
          "Deploying Locally with Live Testing",
        ],
      },
      {
        title: "📅 Week 4: Adding Memory with LangChain",
        topics: [
          "Introduction to LangChain",
          "Understanding Memory in Conversations",
          "Using ConversationBufferMemory & ChatMessageHistory",
          "Creating a Bot with Contextual Memory",
        ],
      },
      {
        title: "📅 Week 5: API Integration & Webhook Handling",
        topics: [
          "Calling External APIs from Your Bot (Weather, News, etc.)",
          "Webhook Basics & Usage",
          "Integrating Tools with LangChain",
          "Handling Multi-Tool Responses",
        ],
      },
      {
        title: "📅 Week 6: Multi-turn Conversations + Role Switching",
        topics: [
          "Structured Prompts with Roles",
          "Voice Input + Text-to-Speech (Optional)",
          "Persona Bots: Therapist, Teacher, Assistant",
          "Error Handling & Logging",
        ],
      },
      {
        title: "📅 Week 7: Final Project Planning & Building",
        topics: [
          "Deciding Use Case (Support Bot, Portfolio Bot, etc.)",
          "UI Enhancements & Branding",
          "Saving Conversation Logs",
          "Ngrok or Streamlit Sharing for Demo",
        ],
      },
      {
        title: "📅 Week 8: Deployment + Freelance Tips",
        topics: [
          "Deploying to Streamlit Cloud / Replit / Vercel",
          "Creating a Chatbot Portfolio Project",
          "Offering Chatbot Services on Fiverr & Upwork",
          "Interview Q&A + Career Paths in AI Automation",
        ],
      },
      {
        title: "📘 Weekly Plan",
        topics: [
          "4 Days: Core Lessons & Labs (Mon–Thu)",
          "1 Day: Debugging + Discussion (Friday)",
          "2 Days: Assignments & Feature Work (Sat–Sun)",
        ],
      },
      {
        title: "🎯 Final Output",
        topics: [
          "Fully Functional AI Chatbot with UI",
          "Deployed Project Link + GitHub Code",
          "Confidence to Build Custom Bots for Any Use Case",
          "Portfolio-Ready with Freelance Value",
        ],
      },
      {
        title: "🧠 Additional Perks",
        topics: [
          "OpenAI Token Cost Optimization Tips",
          "Interview & Freelancing Guide for Chatbot Devs",
          "Bonus Code Snippets for Speed Building",
        ],
      },
    ],
  },
  {
    title: "Machine Learning Fundamentals",
    id: "ml",
    image: "/ml.jpg",
    description:
      "Understand how machines learn using real-world data. Master ML algorithms with Python, Scikit-learn, and hands-on projects — all in just 8 weeks.",
    longDescription: `
  ### 🧠 Why Learn Machine Learning?
  
  Machine Learning (ML) powers modern tools — from recommendation systems to fraud detection. This course gives you a practical, beginner-friendly foundation using Python and Scikit-learn, even if you're not a math wizard.
  
  ---
  
  ### 🔍 What You'll Explore
  
  - Core ML algorithms: Linear Regression, Decision Trees, KNN & more  
  - Data preprocessing, model evaluation & tuning  
  - Hands-on with Scikit-learn, Pandas, Matplotlib  
  - End-to-end ML projects with real datasets  
  
  ---
  
  ### 📅 Weekly Learning Format
  
  - **Mon–Thu**: Concept + Code + Practice  
  - **Fri**: Quizzes + Debugging  
  - **Sat–Sun**: Mini Projects + Assignments
    `,
    points: [
      {
        title: "📅 Week 1: Intro to Machine Learning",
        topics: [
          "What is Machine Learning? Types & Use Cases",
          "Supervised vs Unsupervised Learning",
          "Understanding Features, Labels & Training Data",
          "Installing Tools: Jupyter, Pandas, Scikit-learn",
        ],
      },
      {
        title: "📅 Week 2: Data Preprocessing",
        topics: [
          "Cleaning Missing Values & Duplicates",
          "Encoding Categorical Data",
          "Feature Scaling: MinMax, Standard Scaler",
          "Train-Test Split with Scikit-learn",
        ],
      },
      {
        title: "📅 Week 3: Linear Regression & Evaluation",
        topics: [
          "Simple Linear Regression with Code",
          "Multiple Features & Coefficients",
          "R² Score, MAE, MSE Evaluation Metrics",
          "Regression Project: Predict House Prices",
        ],
      },
      {
        title: "📅 Week 4: Classification Algorithms",
        topics: [
          "Logistic Regression Explained",
          "K-Nearest Neighbors (KNN)",
          "Confusion Matrix, Accuracy, Precision, Recall",
          "Classification Project: Email Spam Detector",
        ],
      },
      {
        title: "📅 Week 5: Decision Trees & Random Forest",
        topics: [
          "How Decision Trees Work (Gini, Entropy)",
          "Tree Visualization with Scikit-learn",
          "Overfitting & Regularization",
          "Random Forest Project: Loan Approval Prediction",
        ],
      },
      {
        title: "📅 Week 6: Model Tuning & Cross Validation",
        topics: [
          "Hyperparameter Tuning (GridSearchCV)",
          "K-Fold Cross Validation",
          "Bias vs Variance Tradeoff",
          "Best Practices in ML Workflow",
        ],
      },
      {
        title: "📅 Week 7: Unsupervised Learning Basics",
        topics: [
          "Clustering with K-Means",
          "Dimensionality Reduction (PCA)",
          "Use Cases: Customer Segmentation, Anomaly Detection",
          "Mini Project: Market Basket Clustering",
        ],
      },
      {
        title: "📅 Week 8: Final ML Project + Career Prep",
        topics: [
          "Choose & Solve a Real-World Dataset Challenge",
          "Build a Project Notebook & GitHub Repo",
          "ML Careers: Analyst, Engineer, Researcher",
          "Freelancing and Interview Tips for ML",
        ],
      },
      {
        title: "📘 Weekly Plan",
        topics: [
          "4 Days: Theory + Coding + Labs (Mon–Thu)",
          "1 Day: Quiz & Concept Reinforcement (Friday)",
          "2 Days: Assignments + Project Work (Sat–Sun)",
        ],
      },
      {
        title: "🎯 Final Output",
        topics: [
          "Multiple ML Projects (Regression + Classification)",
          "ML Portfolio on GitHub",
          "Solid Foundation in Real-World ML",
          "Ready for Deep Learning or AI Career Track",
        ],
      },
      {
        title: "🧠 Additional Perks",
        topics: [
          "Google Colab Templates for Fast Prototyping",
          "ML Cheat Sheet PDF + Interview Q&A",
          "Mentorship Access for ML Career Direction",
        ],
      },
    ],
  },
  {
    title: "Flask Web Development Bootcamp",
    id: "flask",
    image: "/flask.jpg",
    description:
      "Learn Flask step-by-step and build real backend web apps with Python. Add routing, databases, forms, authentication, and deploy your projects — all in just 8 weeks.",
    longDescription: `
  ### 🌐 Why Learn Flask?
  
  Flask is a powerful micro web framework in Python — perfect for beginners who want to learn how real backend apps work. It's lightweight, flexible, and used in real-world startup and freelance projects.
  
  ---
  
  ### 🧰 What You'll Build & Learn
  
  - Build APIs, dynamic websites, and CRUD apps  
  - Use Flask with HTML, CSS, and Jinja templates  
  - Integrate forms, SQLite database & user login  
  - Deploy your full Flask app live on the web  
  
  ---
  
  ### 📅 Weekly Learning Format
  
  - **Mon–Thu**: Lessons + Coding Projects  
  - **Fri**: Debugging, Q&A Sessions  
  - **Sat–Sun**: Assignments + Mini Projects
    `,
    points: [
      {
        title: "📅 Week 1: Flask Introduction & Setup",
        topics: [
          "What is Flask & Why Use It?",
          "Setting up Flask Environment (VS Code + Virtualenv)",
          "First Flask App: Routes & Debug Mode",
          "HTML Templates with Jinja2 Basics",
        ],
      },
      {
        title: "📅 Week 2: Routing & Templates",
        topics: [
          "Dynamic Routing with Parameters",
          "Rendering Templates with Data",
          "Using Bootstrap with Flask",
          "Building a Multi-Page Website",
        ],
      },
      {
        title: "📅 Week 3: Forms & Input Handling",
        topics: [
          "Working with Forms & POST Requests",
          "Form Validation & Error Messages",
          "WTForms Integration",
          "Create a Contact Form Project",
        ],
      },
      {
        title: "📅 Week 4: Databases with Flask",
        topics: [
          "Introduction to SQLite & SQLAlchemy",
          "Creating Tables & Models",
          "CRUD Operations (Create, Read, Update, Delete)",
          "Mini Project: Blog or Notes App",
        ],
      },
      {
        title: "📅 Week 5: User Authentication",
        topics: [
          "User Registration & Login",
          "Password Hashing with Werkzeug",
          "Login Sessions with Flask-Login",
          "Protecting Routes & Profile Page",
        ],
      },
      {
        title: "📅 Week 6: Flask APIs & JSON",
        topics: [
          "What is an API? Basics of JSON",
          "Creating RESTful Endpoints in Flask",
          "Building a Simple API Project",
          "Test with Postman / Fetch in Frontend",
        ],
      },
      {
        title: "📅 Week 7: Final Project Planning & Building",
        topics: [
          "Choose a Capstone Project: Blog, CMS, Portfolio Backend, or Dashboard",
          "Plan Routes, Models & Features",
          "Code the Core Backend Functionality",
          "Prepare Frontend Pages (HTML + CSS)",
        ],
      },
      {
        title: "📅 Week 8: Deployment + Portfolio",
        topics: [
          "Intro to Deployment (Render, Vercel, or PythonAnywhere)",
          "Pushing Code to GitHub",
          "Deploying Full Flask App Live",
          "Portfolio Readiness + GitHub Project Link",
        ],
      },
      {
        title: "📘 Weekly Plan",
        topics: [
          "4 Days: Core Learning & Code Labs (Mon–Thu)",
          "1 Day: Debugging + Live Q&A (Friday)",
          "2 Days: Mini Projects & Final App (Sat–Sun)",
        ],
      },
      {
        title: "🎯 Final Output",
        topics: [
          "Fully Working Flask App (Deployed)",
          "Complete Backend + Database Integration",
          "GitHub Project Portfolio",
          "Ready for Freelancing & Full-Stack Path",
        ],
      },
      {
        title: "🧠 Additional Perks",
        topics: [
          "Hosting Cheat Sheet + Flask CLI Tips",
          "Bonus API Integration (Weather, News, etc.)",
          "Freelance Project Ideas & Career Tips",
        ],
      },
    ],
  },
];
  