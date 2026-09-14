# EmailJS Setup Guide

## Step 1: Create an Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Free tier: **200 emails/month**

## Step 2: Add an Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account
5. Note the **Service ID** (e.g., `service_xxxxxx`)

## Step 3: Create an Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

### Subject:
```
New Contact: {{subject}}
```

### Body:
```
Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Subject: {{subject}}

Message:
{{message}}
```

4. In **To Email**, put: `{{to_email}}` or your actual email
5. Save the template
6. Note the **Template ID** (e.g., `template_xxxxxx`)

## Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Find **Public Key** (e.g., `xxxxxxxxxxxxxx`)

## Step 5: Create `.env.local` File
Create a file named `.env.local` in the project root:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
```

## Step 6: Restart the Dev Server
```bash
npm run dev
```

That's it! The contact form will now send emails directly to your inbox.
