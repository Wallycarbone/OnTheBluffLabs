# Render Deployment Guide for On The Bluff Labradors

## Prerequisites
- GitHub account with code pushed to repository
- Render account (free tier available at render.com)
- PostgreSQL database (automatically created by Render)

## Deployment Steps

### 1. Create New Web Service on Render

1. Log in to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository: `https://github.com/FerozArshad/OnTheBluff.git`
4. Configure the service:
   - **Name:** `onthebluff` (or your preferred name)
   - **Runtime:** `Node`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Plan:** Free or Starter (recommended for production)

### 2. Configure Environment Variables

In the Render dashboard, add these environment variables:

| Variable | Value | Notes |
|----------|-------|-------|
| `NODE_ENV` | `production` | Required |
| `DATABASE_URL` | Auto-generated | From PostgreSQL database |
| `SESSION_SECRET` | Generate secure random string | Use a password generator |
| `PORT` | `10000` | Render default |

**To generate a secure SESSION_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 3. Create PostgreSQL Database

1. In Render Dashboard, click **"New +"** → **"PostgreSQL"**
2. Configure:
   - **Name:** `onthebluff-db`
   - **Database:** `onthebluff`
   - **Plan:** Free or Starter
3. Once created, copy the **Internal Database URL**
4. Add it as `DATABASE_URL` environment variable in your Web Service

### 4. Database Migration

After deployment, the database schema needs to be pushed:

**Option A: Using Render Shell**
1. In your Web Service dashboard, go to **"Shell"**
2. Run: `npm run db:push`

**Option B: Local Migration (Recommended)**
1. Copy the `DATABASE_URL` from Render
2. In your local environment: `DATABASE_URL="your-render-db-url" npm run db:push`

### 5. Verify Deployment

1. Wait for the build to complete (~2-5 minutes)
2. Visit your Render URL: `https://onthebluff.onrender.com`
3. Test the following:
   - Homepage loads correctly
   - Navigation works across all pages
   - Contact form submissions work
   - Puppy application form submits successfully

### 6. Custom Domain Setup

1. In Render Dashboard → Your Web Service → **"Settings"**
2. Scroll to **"Custom Domains"**
3. Click **"Add Custom Domain"**
4. Enter your domain: `onthebluff.com`
5. Render will provide DNS records:
   - **CNAME record:** Point `www` to your Render URL
   - **A record:** Point `@` to Render's IP address
6. Add these records in your SiteGround DNS settings
7. Wait for DNS propagation (15 minutes - 48 hours)

### 7. SSL Certificate

Render automatically provisions SSL certificates for custom domains. Once your DNS is configured, the SSL certificate will be issued within a few minutes.

## Monitoring & Maintenance

### View Logs
- In Render Dashboard → Your Web Service → **"Logs"**
- Monitor application startup and runtime errors

### Database Backups
- Render Free tier: No automatic backups
- Render Starter tier: Daily automatic backups
- Recommendation: Enable backups for production

### Performance
- Free tier: Spins down after 15 minutes of inactivity
- Starter tier ($7/month): Always active, better performance
- Recommendation: Use Starter tier for production

## Troubleshooting

### Build Failures
- Check **"Logs"** for specific error messages
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

### Database Connection Issues
- Verify `DATABASE_URL` is set correctly
- Check database is in "Available" status
- Run `db:push` to ensure schema is created

### Application Not Starting
- Check `npm start` command works locally
- Verify `PORT` environment variable is set
- Review application logs for startup errors

### Custom Domain Not Working
- Verify DNS records are correct (no typos)
- Wait for DNS propagation (up to 48 hours)
- Use [DNS Checker](https://dnschecker.org/) to verify propagation

## Cost Estimates

### Free Tier
- Web Service: Free (with limitations)
- PostgreSQL: Free (90-day limit)
- **Best for:** Testing and development

### Starter Tier (Production Ready)
- Web Service: $7/month
- PostgreSQL: $7/month
- **Total:** $14/month
- **Best for:** Production with custom domain

## Support Resources

- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com/)
- [Node.js on Render Guide](https://render.com/docs/deploy-node-express-app)
