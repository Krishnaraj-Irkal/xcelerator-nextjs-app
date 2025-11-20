# Xcelerator – Simple Auth Starter (Next.js + Neon + Drizzle + Better Auth)

---

## 🚀 Tech Used

- **Next.js App Router**
- **Neon PostgreSQL**
- **Drizzle ORM**  
  (I also used Drizzle to run all database migrations)
- **Better Auth** (email/password login)
- **Tailwind CSS v4 + shadcn/ui**

Additional notes:
- The **database schema** was written with help from **Claude AI**
- The **authentication pages** (`signup`, `signin`, `dashboard`) were created with help from **ChatGPT**

---

## 📁 Project Structure

- page.tsx # Home page
- signup/ # Sign Up page (created using ChatGPT)
- signin/ # Sign In page (created using ChatGPT)
- dashboard/ # Protected session-only page
- api/auth/[...all]/ # Better Auth API handler

- lib/
- auth.ts # Better Auth server setup
- auth-client.ts # signIn, signUp, signOut, useSession helpers
- db/
- schema.ts # Schema (created using Claude AI)
- index.ts # Drizzle + Neon configuration

- drizzle/
- ...migration files generated through Drizzle

---

## 🛠️ Getting Started

Install dependencies:

```bash
npm install
```
Start the dev server:
```bash
npm run dev
```

Visit the app at:
```bash
http://localhost:3000
```

Production mode:
```bash
npm run build
npm run start
```
🔑 Environment Variables

Create a .env.local file in the root directory:
```bash
DATABASE_URL="postgresql://user:password@your-neon-url/db?sslmode=require"
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_BETTER_AUTH_URL="http://localhost:3000"
```

Make sure to keep secrets out of version control.
```bash
🗄️ Database & Migrations (Drizzle)
```
I used Drizzle ORM for all schema and migration tasks.

Generate migration files:
```bash
npx drizzle-kit generate
```

Push migrations to your Neon database:
```bash
npx drizzle-kit push
```
Schema file (schema.ts) was written with help from Claude AI.

🔐 How Authentication Works

- auth.ts sets up Better Auth and connects it to Drizzle.
- app/api/auth/[...all] exposes all auth-related endpoints.
- auth-client.ts includes signIn, signUp, signOut, and useSession.
- The UI pages for signup, signin, and the dashboard were built using ChatGPT, connecting directly to these helpers.


