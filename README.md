# Diamond Queen

## Overview

Simplified MVP-style web application that utilizes React, TypeScript, Next.js, Next Auth, Tailwind CSS, Zustand

The deployed version can be found at [`diamond-queen.vercel.app`](https://diamond-queen.vercel.app/)

## Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/trailblazer7/diamond-queen.git
cd diamond-queen
npm install
```

### 2. Configure your local environment

Copy the .env.local.example file in this directory to .env.local (which will be ignored by Git):

```
cp .env.local.example .env.local
```

### 3. Configure Authentication Providers

1. Review and update options in `auth.ts` as needed.

2. When setting up OAuth, in the developer admin page for each of your OAuth services, you should configure the callback URL to use a callback path of `{server}/api/auth/callback/{provider}`.

e.g. For Google OAuth you would use: `http://localhost:3000/api/auth/callback/google`

### 4. Run the development server:

```bash
npm run dev
```

### 5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Key Decisions or Assumptions

- Used Google as the social login provider.
- Used Zustand for state management. It is straightforward and well suited for such project. I don't see any reason to use Redux here.
- Used local storage to persist diamond balance(with Zustand persist method).
- Displayed games, stores, and leaderboard using the RAWG API.

## Areas for Future Improvement

- Add more social login providers (e.g., Apple, Facebook).
- Implement a real purchase flow with a payment gateway.
- Add more detailed game information and improve the UI/UX.
