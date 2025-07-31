# 🌍 PackNPlan – AI-Powered Trip Planner Web App

**PackNPlan** is a full-stack, AI-powered travel planning web application that helps users build customized itineraries based on their preferences. Built with cutting-edge technologies including React, Gemini AI, Firebase, and Tailwind CSS, this project demonstrates real-world integration of large language models with scalable cloud infrastructure and a responsive modern UI.

![PackNPlan Hero](https://via.placeholder.com/1200x600/4F46E5/FFFFFF?text=PackNPlan+AI+Trip+Planner)

---

## 🚀 Tech Stack

| Layer         | Technology Used                |
|--------------|--------------------------------|
| Frontend     | React, Tailwind CSS            |
| AI Engine    | Gemini (Google Generative AI)  |
| Backend      | Firebase (Auth, Firestore |
| Deployment   | Vercel                         |

---

## ✨ Features

- 🔮 **AI-Powered Recommendations**: Gemini generates intelligent travel suggestions and personalized itineraries based on user prompts
- ⚡ **Real-time Database Sync**: Firebase Firestore handles real-time updates to trip data
- 🔐 **User Authentication**: Secure sign-in with Firebase Auth
- 🛠️ **Responsive UI**: Tailwind CSS delivers fast, adaptive design with custom animations and transitions
- 🔗 **Routing**: Seamless navigation powered by React Router
- 🌐 **Hosted & Scalable**: Deployed on Vercel for instant updates and scalability
- 💬 **Interactive Chat Interface**: Natural language conversation with AI for trip planning
- 📋 **Itinerary Management**: Save, edit, and organize your travel plans
- 🎯 **Personalized Suggestions**: AI learns from your preferences to provide better recommendations

---

## 📸 Screenshots

> *(Add screenshots of homepage, chat interface, itinerary view, and dashboard here)*

### Key App Screens:
- **Homepage**: Landing page with AI trip planner introduction
- **Chat Interface**: Interactive conversation with Gemini AI
- **Itinerary View**: Detailed trip plans and schedules
- **Dashboard**: User's saved trips and preferences
- **Authentication**: Secure login/signup pages

---

## 🧠 Gemini AI Integration

Gemini's API powers natural language processing for:

- **Destination Ideas**: Smart recommendations based on preferences
- **Budget-friendly Itineraries**: Cost-optimized travel plans
- **Activity Suggestions**: Personalized activities and attractions
- **Optimal Travel Routes**: Efficient routing and scheduling
- **Cultural Insights**: Local customs and must-see experiences
- **Food Recommendations**: Local cuisine and restaurant suggestions

### Example Prompts:

> `"Plan a 3-day trip to Tokyo focusing on cultural attractions and food."`

> `"I have $1500 budget for a week in Europe, suggest an itinerary."`

> `"Family-friendly activities in Orlando for 5 days with kids aged 8-12."`

### AI Response Features:
- Detailed day-by-day itineraries
- Budget breakdowns
- Activity recommendations with timing
- Local tips and cultural insights
- Alternative suggestions based on weather/season

---

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18.0 or later
- Firebase account
- Google Cloud account (for Gemini API)
- Git

### Step 1: Clone Repository
\`\`\`bash
git clone https://github.com/vaibhav-bhosale1/PackNPlan.git
cd packnplan
\`\`\`

### Step 2: Install Dependencies
\`\`\`bash
npm install
\`\`\`

### Step 3: Environment Configuration
Create a \`.env\` file in the root directory:

\`\`\`env


# Gemini AI Configuration
VITE_GEMINI_API_KEY=your_gemini_api_key

# App Configuration
VITE_APP_URL=http://localhost:5173
\`\`\`

### Step 4: Firebase Setup
1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Authentication (Email/Password, Google Sign-in)
3. Create Firestore database
4. Update Firebase security rules:

\`\`\`javascript
// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Trip data belongs to authenticated users
    match /trips/{tripId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == resource.data.userId;
    }
  }
}
\`\`\`

### Step 5: Gemini AI Setup
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add the key to your \`.env\` file

### Step 6: Run Development Server
\`\`\`bash
npm run dev
\`\`\`

Visit [http://localhost:5173](http://localhost:5173) to see the app running.

---

### Authentication
- Email/Password authentication
- Google Sign-in integration
- Protected routes for authenticated users
- User profile management

---


## 🚀 Deployment

### Vercel Deployment
1. **Connect Repository**: Link your GitHub repo to Vercel
2. **Environment Variables**: Add all environment variables in Vercel dashboard
3. **Build Settings**: Vercel auto-detects Vite configuration
4. **Deploy**: Automatic deployments on git push

### Build Commands
\`\`\`bash
# Production build
npm run build

# Preview build locally
npm run preview

# Lint code
npm run lint
\`\`\`


---

## 🤝 Contributors

**Vaibhav Shivaji Bhosale** – Full-stack Developer & AI Integrator
- 🔗 [LinkedIn](https://www.linkedin.com/in/vaibhav-bhosale-0a2b13259/)
- 🐙 [GitHub](https://github.com/vaibhav-bhosale1)
- 📧 Email: textmevaibhav@gmail.com

### Contributing Guidelines
1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

---

## 📜 License

MIT License. Feel free to fork and customize!

\`\`\`
MIT License

Copyright (c) 2024 Vaibhav Shivaji Bhosale

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
\`\`\`

---

## 🧭 Live Demo

🌐 **[Visit the Deployed App](https://pack-n-plan-opal.vercel.app/)**

---


**Built with ❤️ and AI by Vaibhav Shivaji Bhosale**

*Transforming travel planning with the power of artificial intelligence*

---

*Last updated: January 2024*
\`\`\`
