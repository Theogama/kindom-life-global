# Environment Variables Setup

This project uses environment variables to store sensitive API keys and configuration data. Follow these steps to set up your environment variables.

## 1. Create Environment File

Create a `.env` file in the root directory of the project with the following variables:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://aiskpjhesjldvejnamxy.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpc2twamhlc2psZHZlam5hbXh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0OTg2NDQsImV4cCI6MjA3MzA3NDY0NH0.pjBV0WsQilOde8zk2JRAIXDiiXoSAHqTOlMdk5SEjCM

# YouTube API Configuration
VITE_YOUTUBE_API_KEY=AIzaSyCpn9d8g2UpznNvuOa4TXAJPDTiiqoRnyY

# EmailJS Configuration
# Replace these with your actual EmailJS service IDs and templates
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_PLAN_VISIT=your_plan_visit_template_id
VITE_EMAILJS_TEMPLATE_CONTACT=your_contact_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

## 2. Environment Variables Explained

### Supabase Configuration
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous/public key

### YouTube API Configuration
- `VITE_YOUTUBE_API_KEY`: Your YouTube Data API v3 key
  - Get it from: https://console.developers.google.com/
  - Enable the YouTube Data API v3

### EmailJS Configuration
- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_PLAN_VISIT`: Template ID for plan visit emails
- `VITE_EMAILJS_TEMPLATE_CONTACT`: Template ID for contact form emails
- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key

## 3. Security Notes

- **Never commit the `.env` file to version control**
- The `.env` file is already added to `.gitignore`
- Use different API keys for development and production
- Rotate your API keys regularly
- Monitor API usage to detect any unauthorized access

## 4. Getting API Keys

### YouTube API Key
1. Go to [Google Cloud Console](https://console.developers.google.com/)
2. Create a new project or select an existing one
3. Enable the YouTube Data API v3
4. Create credentials (API Key)
5. Restrict the API key to your domain for security

### EmailJS Setup
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create email services (Gmail, Outlook, etc.)
3. Create email templates
4. Get your service ID, template IDs, and public key

### Supabase Setup
1. Go to [Supabase](https://supabase.com/)
2. Create a new project
3. Get your project URL and anon key from Settings > API

## 5. Development vs Production

For production deployment, set these environment variables in your hosting platform:

- **Vercel**: Add environment variables in Project Settings
- **Netlify**: Add environment variables in Site Settings
- **Heroku**: Use `heroku config:set` command

## 6. Troubleshooting

If you encounter issues:

1. Make sure all environment variables are set correctly
2. Restart your development server after adding new variables
3. Check that variable names start with `VITE_` for Vite projects
4. Verify API keys are valid and have proper permissions
5. Check browser console for any error messages

## 7. Example .env File Structure

```env
# Copy this template and fill in your actual values
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id_here
VITE_EMAILJS_TEMPLATE_PLAN_VISIT=your_plan_visit_template_id_here
VITE_EMAILJS_TEMPLATE_CONTACT=your_contact_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key_here
```
