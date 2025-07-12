# Sydeka - AI-Powered Learning Platform

This is a [Next.js](https://nextjs.org) project for Sydeka, a free and open-source AI-powered learning platform that makes world-class knowledge accessible to everyone.

## 🚀 Features

- **AI-Generated Content**: Dynamic lesson generation using Google Gemini AI
- **Interactive Learning**: Practice problems with parameterized variables
- **MathJax Support**: Full LaTeX math rendering for mathematical expressions
- **Progress Tracking**: Track lesson completion and quiz scores (local storage)
- **Responsive Design**: Modern dark theme UI that works on all devices
- **Module Navigation**: Seamless navigation between modules and lessons
- **Free & Open Source**: No authentication required - completely free to use

## 📚 Course Structure

The platform supports AQA A-Level Mathematics courses with:
- **AS Level (Year 1)**: Pure Mathematics 1 & 2, Statistics, Mechanics
- **A2 Level (Year 2)**: Pure Mathematics 3 & 4, Applied Mathematics modules

## 🛠️ Setup

1. **Clone the repository**:
```bash
git clone <repository-url>
cd sydeka
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables**:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your API key:
```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

4. **Run the development server**:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎯 Usage

1. **Browse Modules**: Navigate to `/modules` to view available AS and A2 level modules
2. **Generate AI Content**: Click "AI Content" on any module card to generate lessons
3. **Study Lessons**: Click "View Module" to enter the lesson interface
4. **Interactive Practice**: Work through parameterized practice problems
5. **Take Quizzes**: Complete module quizzes to test your understanding

## 🏗️ Architecture

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: Google Generative AI (Gemini)
- **Math Rendering**: MathJax
- **State Management**: React hooks and context
- **Type Safety**: Comprehensive TypeScript types

## 📁 Project Structure

```
sydeka/
├── app/                 # Next.js app router pages
├── components/          # Reusable React components
│   ├── layout/         # Layout components (Navbar, Footer)
│   ├── sections/       # Page sections (HomePage, LessonPage)
│   └── ui/             # UI components
├── lib/                # Utility functions and services
├── types/              # TypeScript type definitions
├── styles/             # Global styles
└── public/             # Static assets
```

## 🔧 Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Custom CSS with CSS Variables (Dark Theme)
- **AI**: Google Generative AI
- **Math**: MathJax
- **Storage**: Local Storage (no database required)

## 🎨 Key Components

### LessonPage
The main learning interface featuring:
- AI-generated lesson content
- Interactive practice problems
- Mathematical expressions with LaTeX
- Progress tracking (local storage)
- Quiz integration

### HomePage
Module overview with:
- Course structure visualization
- Progress indicators
- AI content generation
- Module navigation

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
