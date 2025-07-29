# Job Listing App

A modern, full-stack job listing application with secure authentication and real-time job data. Built with Next.js, NextAuth.js, Redux Toolkit Query, and TypeScript, featuring user authentication, state management, and a responsive design.

## 🌟 Features

### 🔐 Authentication & Security

- **User Authentication**: Secure login/signup system powered by NextAuth.js
- **Multiple Auth Providers**:
  - Credentials-based authentication with email/password
  - Google OAuth integration (configurable)
- **Protected Routes**: Automatic redirection for unauthenticated users
- **Session Management**: Persistent sessions with JWT tokens
- **Secure Logout**: One-click logout with session cleanup

### 💼 Job Management

- **Live Job Data**: Real-time job listings from external API (`akil-backend.onrender.com`)
- **Advanced Search & Filter**: Sort opportunities by relevance, name, or date added
- **Detailed Job Views**: Comprehensive job details including:
  - Job description and responsibilities
  - Ideal candidate requirements
  - Location and timing information
  - Required skills and categories
  - Company information and logos
- **Smart Loading States**: Loading indicators and error handling for better UX

### 🎨 User Experience

- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean interface with DaisyUI components and smooth transitions
- **Error Handling**: Graceful error states with user-friendly messages
- **Fallback UI**: Placeholder handling for missing company logos
- **State Management**: Redux Toolkit Query for efficient data fetching and caching

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Authentication**: [NextAuth.js](https://next-auth.js.org) v4
- **Language**: TypeScript
- **State Management**: Redux Toolkit Query (RTK Query)
- **Styling**: Tailwind CSS v4 & DaisyUI
- **Icons**: React Icons
- **Runtime**: React 19
- **API Integration**: External REST API
- **Form Validation**: React Hook Form with Zod (signup)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- Access to the job listing API (or configure your own)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/JosiSol/job_listing_app_redux
cd job_listing_app
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Environment Setup:**
   Create a `.env.local` file in the root directory:

```bash
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secure-secret-key-here

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

4. **Generate NextAuth Secret:**

```bash
openssl rand -base64 32
```

5. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
job_listing_app/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth]/
│   │           ├── options.ts    # NextAuth configuration
│   │           └── route.ts      # Auth API routes
│   ├── components/
│   │   ├── JobCard.tsx          # Job card component with logout
│   │   ├── NextAuthProvider.tsx # NextAuth session provider
│   │   └── ReduxProvider.tsx    # Redux store provider
│   ├── jobs/
│   │   └── [jobId]/
│   │       └── page.tsx         # Individual job detail page
│   ├── login/
│   │   └── page.tsx            # Login page
│   ├── signup/
│   │   └── page.tsx            # Registration page
│   ├── verify-email/
│   │   └── page.tsx            # Email verification
│   ├── apiSlice.ts             # RTK Query API configuration
│   ├── store.ts                # Redux store setup
│   ├── data.ts                 # TypeScript interfaces
│   ├── layout.tsx              # Root layout with providers
│   └── page.tsx                # Protected home page
├── ui_components/
│   └── ui/                     # Reusable UI components
├── .env.local                  # Environment variables
├── .env.example               # Environment template
├── next.config.ts             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📸 Preview

Sign Up Page
<img width="1440" height="776" alt="Screenshot 2025-07-27 at 11 43 35 at night" src="https://github.com/user-attachments/assets/6551c7fc-2810-4469-a0d8-e8c9771e8a7d" />

If user already exists
<img width="1440" height="775" alt="Screenshot 2025-07-27 at 11 47 14 at night" src="https://github.com/user-attachments/assets/e8ea129d-ab33-4e3b-a440-bcd2a36f65ad" />

Verification Page
<img width="1440" height="773" alt="Screenshot 2025-07-27 at 11 43 59 at night" src="https://github.com/user-attachments/assets/741274bf-4151-46bd-b1c9-39ae8f8239ac" />

<img width="1440" height="815" alt="Screenshot 2025-07-27 at 11 44 32 at night" src="https://github.com/user-attachments/assets/23da61c6-25eb-4a42-9bdb-e28ef60cc176" />

Login Page
<img width="1440" height="775" alt="Screenshot 2025-07-27 at 11 45 07 at night" src="https://github.com/user-attachments/assets/d480f625-a6f5-4c44-9863-f4394e3de5ad" />

If invalid credentials are given
<img width="1440" height="775" alt="Screenshot 2025-07-28 at 10 57 52 in the morning" src="https://github.com/user-attachments/assets/3f6dc681-b3dd-49c4-914a-c848fa1522e3" />

Fully Functional Google Sign In
<img width="1440" height="774" alt="Screenshot 2025-07-29 at 11 36 39 in the morning" src="https://github.com/user-attachments/assets/09b8d7f6-5571-44bc-a848-232299745ad7" />

Main Page
<img width="1440" height="775" alt="Screenshot 2025-07-27 at 11 45 29 at night" src="https://github.com/user-attachments/assets/bd012f20-64b0-4d7d-8c63-86b6a15169b3" />

Log Out Prompt
<img width="1440" height="821" alt="Screenshot 2025-07-28 at 10 50 21 in the morning" src="https://github.com/user-attachments/assets/f5e02401-ae32-4528-a49e-1420aab3a17c" />

## 🔐 Authentication Flow

### Login Process

1. User navigates to `/login`
2. Enters credentials (email/password) or uses Google OAuth
3. NextAuth validates credentials against external API
4. On success: redirect to job listings with active session
5. On failure: display error message

### Protected Routes

- All routes require authentication except `/login` and `/signup`
- Unauthenticated users are automatically redirected to login
- Session state is managed globally via NextAuth

### Logout Process

- Click "Log out" button in header
- NextAuth clears session and JWT token
- User redirected to login page

## 🔗 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [NextAuth.js Documentation](https://next-auth.js.org) - Authentication setup
- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview) - Data fetching
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS
- [DaisyUI](https://daisyui.com/) - Component library
- [TypeScript](https://www.typescriptlang.org/docs/) - Type safety
