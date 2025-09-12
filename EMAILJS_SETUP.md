# EmailJS Setup Guide for STUDERP

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template content:

### Template Subject:
```
New Contact Form Submission from {{from_name}}
```

### Template Body:
```
Hello,

You have received a new message from your STUDERP website contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Message: {{message}}

Reply directly to: {{reply_to}}

Best regards,
STUDERP Contact System
```

4. **Copy the Template ID** (you'll need this)

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. **Copy your Public Key** (you'll need this)

## Step 5: Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',        // From Step 2
  TEMPLATE_ID: 'your_template_id_here',      // From Step 3
  PUBLIC_KEY: 'your_public_key_here',        // From Step 4
  RECIPIENT_EMAIL: 'chothanidaxesh@gmail.com', // Your email
};
```

## Step 6: Test the Integration
1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check your email (chothanidaxesh@gmail.com) for the message

## Features Included:
✅ **Form Validation** - Required fields validation
✅ **Loading States** - Shows loading spinner while sending
✅ **Success/Error Messages** - User feedback
✅ **Form Reset** - Clears form after successful submission
✅ **Responsive Design** - Works on all devices
✅ **Email Template** - Professional email formatting

## Troubleshooting:
- **"Service not found"** - Check your Service ID
- **"Template not found"** - Check your Template ID
- **"Invalid public key"** - Check your Public Key
- **No emails received** - Check spam folder, verify email service setup

## Free Tier Limits:
- 200 emails per month
- Perfect for testing and small websites
- Upgrade for higher limits if needed

## Security Note:
- Public key is safe to expose in frontend code
- EmailJS handles the actual email sending securely
- No sensitive credentials stored in your code
