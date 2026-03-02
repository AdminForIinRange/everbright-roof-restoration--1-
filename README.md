# EverBright Roof Restoration

This is a [Next.js](https://nextjs.org) project bootstrapped with `create-next-app` and customized with the existing landing page components.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Lead Email Notifications

To send yourself an Appwrite email whenever `src/components/LeadForm.tsx` is submitted, add these environment variables:

```bash
APPWRITE_LEAD_NOTIFICATION_EMAIL="you@example.com"
APPWRITE_LEAD_NOTIFICATION_NAME="Your Name"
APPWRITE_LEAD_NOTIFICATION_PROVIDER_ID=""
```

Your Appwrite API key needs `documents.write`, `users.write`, `targets.write`, and `messages.write`, and your Appwrite project needs an email messaging provider configured.
If you created the email provider after earlier tests, set `APPWRITE_LEAD_NOTIFICATION_PROVIDER_ID` to that provider's ID so the lead notification target is refreshed against the correct sender.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
