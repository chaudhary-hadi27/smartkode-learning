// src/data/advancedCourses.ts

// src/data/advancedCourses.ts

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

export const advancedCourses: Course[] = [
  {
    title: "Deep Learning with PyTorch: Build Real AI Models",
    id: "deep-learning",
    image: "/dl.jpg",
    description:
      "Master neural networks, CNNs, and model deployment using PyTorch – build real-world AI systems in 8 weeks. Ideal for those with basic Python knowledge or just starting out.",
    longDescription: `### 🧠 Why Learn Deep Learning?

Deep Learning powers today’s AI — from intelligent assistants to smart automation. This course teaches you how to build, train, and deploy neural networks using PyTorch. Start from Python basics and grow into a deep learning developer.

---

### 🧰 What You'll Learn

- Python essentials for AI development  
- NumPy, tensors, and matrix math  
- Neural networks with PyTorch  
- CNNs for image tasks  
- Regularization and transfer learning  
- Model deployment using Flask or Streamlit

---

### 📅 Weekly Learning Format

- **Mon–Thu**: Concept Building + Code Implementation  
- **Fri**: Debugging + Quiz  
- **Sat–Sun**: Mini Projects or Feature Additions`,
    points: [
      {
        title: "📅 Week 1: Python for Deep Learning",
        topics: [
          "Python basics (functions, loops, classes)",
          "Jupyter Notebooks & virtual environments",
          "NumPy arrays & broadcasting",
          "Basic matrix math & logic building",
        ],
      },
      {
        title: "📅 Week 2: PyTorch & Tensors",
        topics: [
          "Intro to PyTorch: installation & setup",
          "Tensors, operations & gradients",
          "Autograd and computational graphs",
          "Build a linear regression model from scratch",
        ],
      },
      {
        title: "📅 Week 3: Neural Network Basics",
        topics: [
          "Neural network structure (layers, neurons)",
          "Activation functions (ReLU, Sigmoid, Softmax)",
          "Loss functions and optimizers",
          "Train your first NN on tabular data",
        ],
      },
      {
        title: "📅 Week 4: CNNs – Deep Vision Concepts",
        topics: [
          "Intro to Convolution layers and filters",
          "Pooling, strides, padding explained",
          "Build CNN from scratch for image classification",
          "Train on CIFAR-10 dataset",
        ],
      },
      {
        title: "📅 Week 5: Improving Models",
        topics: [
          "Overfitting & underfitting",
          "Regularization: dropout, batch norm",
          "Learning rate schedules & early stopping",
          "Experiment tracking & model evaluation",
        ],
      },
      {
        title: "📅 Week 6: Transfer Learning",
        topics: [
          "Use pretrained models (ResNet, VGG)",
          "Freeze vs fine-tune layers",
          "Custom dataset classification with transfer learning",
          "Project: Animal species classifier",
        ],
      },
      {
        title: "📅 Week 7: Model Deployment",
        topics: [
          "Saving/loading models in PyTorch",
          "Create REST API using Flask",
          "Streamlit for demo dashboards",
          "Deploy your model locally or on Hugging Face Spaces",
        ],
      },
      {
        title: "📅 Week 8: Final Project + Career Prep",
        topics: [
          "Build a complete deep learning project (your idea)",
          "Document project on GitHub with README",
          "Create AI portfolio & publish on LinkedIn",
          "Certificate of Completion",
        ],
      },
      {
        title: "📘 Weekly Plan",
        topics: [
          "4 Days: Learning + Coding (Mon–Thu)",
          "1 Day: Quiz + Debugging (Fri)",
          "2 Days: Mini Projects or Experiments (Sat–Sun)",
        ],
      },
      {
        title: "🎯 Final Output",
        topics: [
          "3+ Deep Learning Projects (Classification, Transfer Learning, Deployment)",
          "Flask/Streamlit Deployment Experience",
          "GitHub Portfolio with AI Projects",
          "Deep Learning Certificate with PyTorch",
        ],
      },
      {
        title: "🧠 Additional Perks",
        topics: [
          "Downloadable notebooks and code templates",
          "Access to AI Learners Community",
          "Guidance for further learning: NLP, CV, Transformers",
        ],
      },
    ],
  },


  {
    title: "Python to NLP with Transformers: Text Intelligence in 8 Weeks",
    id: "nlp-transformers",
    image: "/nlp.png",
    description:
      "Learn NLP from scratch using Python — master text preprocessing, embeddings, and transformers with Hugging Face. Build real-world apps like sentiment analysis, chatbots, and more.",
    longDescription: `### 🗣️ Why Learn NLP?
  
  NLP (Natural Language Processing) is the heart of AI that understands text and speech. From chatbots to sentiment analysis, it's used everywhere. In this course, you’ll go from Python basics to building powerful NLP models using Hugging Face Transformers.
  
  ---
  
  ### 🧰 What You'll Learn
  
  - Python for text data (strings, loops, functions)  
  - Text preprocessing & feature extraction (TF-IDF, embeddings)  
  - Tokenization, attention, and transformer models  
  - Hugging Face pipelines, model fine-tuning & deployment  
  - Real projects: Sentiment analysis, QnA bot, summarizer
  
  ---
  
  ### 📅 Weekly Learning Format
  
  - **Mon–Thu**: Concept Building + Code Demos  
  - **Fri**: Quiz + Error Debugging  
  - **Sat–Sun**: Mini Projects or Case Studies`,
    points: [
      {
        title: "📅 Week 1: Python for NLP",
        topics: [
          "Python review (strings, lists, loops)",
          "Text input/output, string methods",
          "Basic file handling (txt, CSV)",
          "Simple word count program",
        ],
      },
      {
        title: "📅 Week 2: Text Preprocessing & NLP Basics",
        topics: [
          "Tokenization, stopwords, stemming",
          "NLTK & spaCy introduction",
          "Bag of Words & TF-IDF",
          "Simple sentiment analyzer using TF-IDF",
        ],
      },
      {
        title: "📅 Week 3: Embeddings & Vectorization",
        topics: [
          "Word embeddings vs TF-IDF",
          "Using GloVe and Word2Vec",
          "Similarity detection between sentences",
          "Document clustering with cosine similarity",
        ],
      },
      {
        title: "📅 Week 4: Introduction to Transformers",
        topics: [
          "What is a Transformer (basic idea)",
          "Tokenizers and attention mechanism",
          "Using Hugging Face transformers library",
          "Intro to pre-trained models (BERT, DistilBERT)",
        ],
      },
      {
        title: "📅 Week 5: NLP Tasks with Hugging Face Pipelines",
        topics: [
          "Sentiment Analysis pipeline",
          "Named Entity Recognition (NER)",
          "Text summarization and translation",
          "Build a multi-task text analyzer",
        ],
      },
      {
        title: "📅 Week 6: Fine-Tuning Models",
        topics: [
          "Datasets and token classification",
          "Using \`Trainer\` API from Transformers",
          "Fine-tune BERT for custom sentiment data",
          "Evaluation & inference logic",
        ],
      },
      {
        title: "📅 Week 7: Project – Build an NLP App",
        topics: [
          "Create a QnA Bot using Transformers",
          "Deploy with Streamlit",
          "Optimize response logic + interface",
          "Test and share your chatbot project",
        ],
      },
      {
        title: "📅 Week 8: Final Project + Career Prep",
        topics: [
          "Build your own NLP app (choose your idea)",
          "Publish project on GitHub",
          "LinkedIn portfolio + resume tips",
          "Certificate of Completion",
        ],
      },
      {
        title: "📘 Weekly Plan",
        topics: [
          "4 Days: NLP Learning + Coding (Mon–Thu)",
          "1 Day: Quiz + Debugging (Fri)",
          "2 Days: Mini Projects or Model Demos (Sat–Sun)",
        ],
      },
      {
        title: "🎯 Final Output",
        topics: [
          "4+ NLP Projects (sentiment, chatbot, summarizer)",
          "Model fine-tuning experience with Hugging Face",
          "Deploy NLP apps using Streamlit",
          "NLP Certificate with Transformers",
        ],
      },
      {
        title: "🧠 Additional Perks",
        topics: [
          "Code notebooks + Hugging Face templates",
          "NLP starter dataset collection",
          "Guidance for advanced LLM learning",
        ],
      },
    ],
  },
    

  {
    title: "Python to Computer Vision: Build Visual AI Systems",
    id: "computer-vision",
    image: "/computer-vision.jpg",
    description:
      "Learn image processing, OpenCV, and deep learning for computer vision. Build real apps like face detection, object tracking, and visual filters in 8 hands-on weeks.",
    longDescription: `### 👁️ Why Learn Computer Vision?
  
  Computer Vision gives machines the ability to see and understand images. From facial recognition to medical scans and self-driving cars, CV is everywhere. This course takes you from Python to building real AI projects using OpenCV and deep learning.
  
  ---
  
  ### 🧰 What You'll Learn
  
  - Python for images and pixel manipulation  
  - Image processing with OpenCV  
  - Edge detection, contouring, filters  
  - Real-time video capture and tracking  
  - CNN basics and visual classification  
  - Face detection, object tracking & deployment
  
  ---
  
  ### 📅 Weekly Learning Format
  
  - **Mon–Thu**: Concept Building + Code Practice  
  - **Fri**: Quizzes + Project Debugging  
  - **Sat–Sun**: Vision-Based Projects or Experiments`,
    points: [
      {
        title: "📅 Week 1: Python for Image Processing",
        topics: [
          "Python review (lists, loops, OOP)",
          "Working with image files (PIL, OpenCV)",
          "Pixels, channels, and color spaces",
          "Simple image filters (grayscale, blur)",
        ],
      },
      {
        title: "📅 Week 2: OpenCV Basics",
        topics: [
          "Installing and setting up OpenCV",
          "Drawing shapes, text, and overlays",
          "Image resizing, cropping, rotating",
          "Basic photo editor project",
        ],
      },
      {
        title: "📅 Week 3: Image Processing Techniques",
        topics: [
          "Thresholding and contours",
          "Canny edge detection and dilation",
          "Bitwise operations and masking",
          "Shape detector mini-project",
        ],
      },
      {
        title: "📅 Week 4: Real-Time Video Processing",
        topics: [
          "Capturing video from webcam",
          "Real-time filters and overlays",
          "Color detection in video",
          "Build a real-time drawing board",
        ],
      },
      {
        title: "📅 Week 5: Face Detection & Tracking",
        topics: [
          "Haar cascades and face detection",
          "Eye detection and landmarks",
          "Tracking faces with bounding boxes",
          "Build a face attendance system",
        ],
      },
      {
        title: "📅 Week 6: CNNs for Visual Classification",
        topics: [
          "What is a CNN (overview + structure)",
          "Using pretrained models (ResNet, VGG)",
          "Custom image classifier with PyTorch",
          "Train a CNN on small image dataset",
        ],
      },
      {
        title: "📅 Week 7: Project – Visual AI App",
        topics: [
          "Choose a use case: Face Mask Detection / Hand Sign Classifier",
          "Build & test your model pipeline",
          "Deploy using Streamlit or Flask",
          "Share project with your team/mentor",
        ],
      },
      {
        title: "📅 Week 8: Final Project + Career Prep",
        topics: [
          "Build your final CV project (your idea)",
          "Document on GitHub (readme + usage)",
          "LinkedIn + Resume tips for CV portfolio",
          "Certificate of Completion",
        ],
      },
      {
        title: "📘 Weekly Plan",
        topics: [
          "4 Days: Learning + Coding Practice (Mon–Thu)",
          "1 Day: Quiz + Bug Fixing (Fri)",
          "2 Days: Mini Projects or Research Tasks (Sat–Sun)",
        ],
      },
      {
        title: "🎯 Final Output",
        topics: [
          "4+ CV Projects (filters, face tracking, image classifier)",
          "Model deployment using Flask/Streamlit",
          "GitHub-ready CV portfolio",
          "Computer Vision Certificate",
        ],
      },
      {
        title: "🧠 Additional Perks",
        topics: [
          "Access to image datasets and starter code",
          "Join CV learner Discord group",
          "Next path: Deep Learning + YOLO + Segmentation",
        ],
      },
    ],
  },
    
  {
    title: "Full Stack AI Developer: Python to AI Apps with Next.js",
    id: "fullstack-ai",
    image: "/ai.jpg",
    description:
      "Start with Python, build AI models, create APIs, and integrate everything with a modern frontend using Next.js. Become a full stack AI developer in just 8 weeks.",
    longDescription: `### 🌐 Why Learn Full Stack AI Development?
  
  Building AI is powerful — but deploying it into real apps is what companies need. This course teaches you how to go from Python basics to deploying full AI apps with backend APIs and frontend interfaces using Next.js.
  
  ---
  
  ### 🧰 What You'll Learn
  
  - Python foundations and AI model building  
  - REST API creation with FastAPI or Flask  
  - AI use cases: chatbots, recommendations, text/image models  
  - Next.js frontend integration for AI apps  
  - Deploying full-stack AI apps
  
  ---
  
  ### 📅 Weekly Learning Format
  
  - **Mon–Thu**: Concept Learning + Backend/Frontend Coding  
  - **Fri**: Quiz + Debugging  
  - **Sat–Sun**: Mini Projects or Integration Challenges`,
    points: [
      {
        title: "📅 Week 1: Python for AI",
        topics: [
          "Python basics: variables, loops, functions, OOP",
          "Working with data: CSV, JSON, APIs",
          "Pandas + NumPy quickstart",
          "Mini project: Build a calculator + logic app",
        ],
      },
      {
        title: "📅 Week 2: AI Model Building with Python",
        topics: [
          "Scikit-learn intro: classification, regression",
          "Train/test split, accuracy, confusion matrix",
          "Mini project: Movie recommender or spam detector",
          "Saving/loading models with joblib/pickle",
        ],
      },
      {
        title: "📅 Week 3: API Development with Flask or FastAPI",
        topics: [
          "Intro to REST APIs and HTTP methods",
          "Create AI model backend with Flask/FastAPI",
          "Request/response format (JSON)",
          "Test APIs with Postman or browser",
        ],
      },
      {
        title: "📅 Week 4: Next.js Frontend Fundamentals",
        topics: [
          "React/Next.js setup and project structure",
          "Pages, routing, and state management",
          "Calling APIs with fetch/axios",
          "Build a basic frontend for AI model",
        ],
      },
      {
        title: "📅 Week 5: Full Stack Integration",
        topics: [
          "Connect Flask API with Next.js frontend",
          "User inputs + form handling",
          "Display AI model outputs in UI",
          "Build a Sentiment Analyzer web app",
        ],
      },
      {
        title: "📅 Week 6: Real-World AI Projects",
        topics: [
          "AI Chatbot with OpenAI API integration",
          "Image Classification App with local model",
          "Upload & analyze files via UI",
          "Deploy AI backend with render.com or Hugging Face",
        ],
      },
      {
        title: "📅 Week 7: Final Project – AI SaaS App",
        topics: [
          "User Auth + Forms + Database (optional)",
          "Build your own AI tool (idea-based)",
          "Frontend polish + responsiveness",
          "Prepare for deployment",
        ],
      },
      {
        title: "📅 Week 8: Hosting + Career Prep",
        topics: [
          "Deploy Next.js frontend (Vercel/Netlify)",
          "Connect to backend API (Flask/FastAPI)",
          "Publish portfolio to GitHub",
          "LinkedIn showcase + resume checklist",
        ],
      },
      {
        title: "📘 Weekly Plan",
        topics: [
          "4 Days: Backend + Frontend Coding (Mon–Thu)",
          "1 Day: Quiz + Integration Fixes (Fri)",
          "2 Days: Mini Full Stack Project (Sat–Sun)",
        ],
      },
      {
        title: "🎯 Final Output",
        topics: [
          "3+ AI Web Apps (Text, Image, Chatbot)",
          "Full Stack Skills (Python API + Next.js UI)",
          "Deployment experience (Vercel + Render)",
          "Portfolio & Certificate for Full Stack AI",
        ],
      },
      {
        title: "🧠 Additional Perks",
        topics: [
          "Frontend templates for Next.js",
          "Starter Flask/FastAPI boilerplate code",
          "AI Deployment checklist (for job-ready skills)",
          "Invite to full stack AI dev Discord group",
        ],
      },
    ],
  },    
];
  