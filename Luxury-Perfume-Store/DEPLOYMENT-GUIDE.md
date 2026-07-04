# RAAH SCENTS - Deployment Guide

Complete step-by-step instructions for deploying your website online.

## 🎯 Quick Summary of Options

| Option | Cost | Ease | Speed | Best For |
|--------|------|------|-------|----------|
| GitHub Pages | FREE | Easy | Fast | Quick start, no cost |
| Netlify | FREE tier | Easy | Fast | Beginners, free tier good |
| Vercel | FREE tier | Easy | Very Fast | Modern hosting |
| Web Hosting | $2-10/mo | Medium | Medium | Professional presence |
| AWS/GCP | Pay-as-you-go | Hard | Very Fast | Large scale |

## 🚀 Option 1: GitHub Pages (RECOMMENDED FOR BEGINNERS)

### What You Need
- A GitHub account (free at github.com)
- Your website files

### Step-by-Step

#### Step 1: Create GitHub Account
1. Go to https://github.com/signup
2. Enter email, create password, choose username
3. Verify email address
4. Done! ✓

#### Step 2: Create a Repository
1. Go to https://github.com/new
2. **Repository name**: `perfume-store` (or your preferred name)
3. **Description**: "RAAH SCENTS - Luxury Perfume Store"
4. **Public** (leave as public)
5. Click "Create repository"

#### Step 3: Upload Your Files
**Method A: Via GitHub Website (EASIEST)**
1. Click "Add file" > "Upload files"
2. Drag and drop your website files (all files from the Luxury-Perfume-Store folder)
3. Click "Commit changes"
4. Files are now uploaded!

**Method B: Using GitHub Desktop (RECOMMENDED)**
1. Download GitHub Desktop: https://desktop.github.com
2. Sign in with your GitHub account
3. Clone your repository
4. Copy your website files into the cloned folder
5. In GitHub Desktop: "Commit to main" > "Push origin"

**Method C: Using Git Command Line (ADVANCED)**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/perfume-store.git
git push -u origin main
```

#### Step 4: Enable GitHub Pages
1. Go to your repository settings: https://github.com/YOUR_USERNAME/perfume-store/settings
2. Scroll to "GitHub Pages" section
3. **Source**: Select "Deploy from a branch"
4. **Branch**: Select "main"
5. Click "Save"
6. Wait 1-2 minutes for deployment

#### Step 5: Access Your Website
- Your site will be live at: `https://YOUR_USERNAME.github.io/perfume-store`
- Example: `https://john-doe.github.io/perfume-store`

**OR use a custom domain:**
1. In GitHub Pages settings, add your domain
2. Update DNS records (see Custom Domain section below)

---

## 🌐 Option 2: Use Custom Domain with GitHub Pages

If you have your own domain (e.g., raahscents.com):

### Step 1: Set Domain in GitHub
1. Go to Repository Settings > GitHub Pages
2. Under "Custom domain", enter: `raahscents.com`
3. Click "Save"
4. GitHub creates a CNAME file

### Step 2: Update DNS Records
1. Go to your domain registrar (Namecheap, GoDaddy, Domain.com, etc.)
2. Find DNS settings
3. Add these records:

**For apex domain (raahscents.com):**
```
Type: A
Name: @
Value: 185.199.108.153
      185.199.109.153
      185.199.110.153
      185.199.111.153
```

**For www subdomain (www.raahscents.com):**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

### Step 3: Wait for DNS Propagation
- Changes take 24-48 hours to fully propagate
- Check status: https://dnschecker.org
- Once ready, visit https://raahscents.com

---

## 🎨 Option 3: Deploy to Netlify (EASIEST CUSTOM DOMAIN)

### Benefits
- FREE tier very generous
- Drag & drop deployment
- Automatic HTTPS
- Easy custom domain setup

### Step-by-Step

#### Step 1: Create Netlify Account
1. Go to https://netlify.com
2. Click "Sign Up"
3. Sign up with GitHub (easiest) or email

#### Step 2: Create New Site
1. Click "Add new site" > "Deploy manually"
2. Drag and drop your website folder
3. Netlify automatically uploads and deploys!

#### Step 3: Your Website is Live!
- Netlify gives you a free URL like: `https://wonderful-einstein-abc123.netlify.app`
- Share this link immediately

#### Step 4: Connect Custom Domain (OPTIONAL)
1. Go to Site Settings > Domain Management
2. Click "Add custom domain"
3. Enter your domain: `raahscents.com`
4. Follow DNS setup instructions
5. Much simpler than GitHub Pages!

---

## 🔧 Option 4: Traditional Web Hosting

### Popular Options
- **Bluehost** - $2.95/month, WordPress-friendly
- **SiteGround** - $2.99/month, excellent support
- **Hostinger** - $2.99/month, very affordable
- **NameCheap** - $1.88/month, budget option

### General Steps
1. Purchase hosting plan
2. Purchase domain (or transfer existing)
3. Access file manager in hosting control panel (cPanel)
4. Upload all files to `public_html` folder
5. Make sure `index.html` is the default page
6. Visit your domain - you're live!

### Example: Uploading to cPanel
1. Log in to cPanel
2. Click "File Manager"
3. Navigate to `public_html` folder
4. Click "Upload"
5. Upload all your files
6. Done!

---

## 📱 Option 5: Deploy to Mobile-Friendly Hosting

### Vercel (Most Modern)
1. Go to https://vercel.com
2. Click "Continue with GitHub"
3. Import your repository
4. Click "Deploy"
5. Automatic deployments on every push!
6. Custom domain: Go to Settings > Domains

### Steps:
```
1. Sign in to Vercel with GitHub
2. Click "New Project"
3. Import your repository
4. Framework: Select "Other" (it's just HTML/CSS/JS)
5. Click "Deploy"
6. Your site is live instantly!
7. Add custom domain in project settings
```

---

## 🔐 SSL Certificate (HTTPS)

**GitHub Pages**: ✅ Automatic HTTPS
**Netlify**: ✅ Automatic HTTPS  
**Vercel**: ✅ Automatic HTTPS
**Traditional Hosting**: Usually ✅ Free Let's Encrypt

All modern hosting includes free SSL certificates!

---

## ⚡ Post-Deployment Checklist

### ✅ Test Your Site
- [ ] Homepage loads correctly
- [ ] All pages accessible (Home, Shop, About, FAQ, Contact)
- [ ] Images display properly
- [ ] WhatsApp buttons work
- [ ] Contact form works
- [ ] Search and filters work on Shop page
- [ ] Mobile responsive (test on phone)
- [ ] All links work

### ✅ SEO Setup
- [ ] Update meta descriptions in HTML
- [ ] Create `sitemap.xml`
- [ ] Create `robots.txt`
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools

### ✅ Analytics (OPTIONAL)
Add Google Analytics to track visitors:

```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Steps:
1. Go to https://analytics.google.com
2. Sign in with Google account
3. Create property for your website
4. Get your GA_ID
5. Replace `GA_ID` in the code above

---

## 🌍 Domain Registration

### Where to Buy Domains
- **Namecheap** - $0.88/year (promo), excellent support
- **GoDaddy** - $0.99/year (promo), popular
- **Domain.com** - $0.99/year (promo)
- **Google Domains** - $12/year, integrated with Google

### Steps to Register Domain
1. Go to domain registrar website
2. Search for your desired domain
3. Add to cart and checkout
4. Create account or sign in
5. Complete payment
6. Domain is registered!

---

## 🔄 Continuous Deployment

Once deployed, keep your site updated:

### GitHub Pages
1. Update files locally
2. Upload to GitHub (drag & drop or git push)
3. GitHub automatically rebuilds
4. Changes live in 1-2 minutes

### Netlify
1. Connect to GitHub repository
2. Every push to main branch = automatic deploy
3. Changes live in seconds

### Traditional Hosting
1. Upload updated files via FTP or file manager
2. Changes live immediately

---

## 📊 Monitoring & Maintenance

### Monitor Site Status
- **GitHub Pages**: https://www.githubstatus.com
- **Netlify**: https://www.netlify.com/status
- **Vercel**: https://www.vercel-status.com

### Keep Software Updated
- Regularly update domain registrar security
- Enable two-factor authentication
- Monitor for security alerts

### Performance Monitoring
- Google Analytics for visitor insights
- Lighthouse (built into Chrome DevTools) for performance
- PageSpeed Insights: https://pagespeed.web.dev

---

## 🆘 Troubleshooting Deployment

### "404 Not Found" Error
- Make sure `index.html` is in the root directory
- Check file paths in CSS/JS links
- Verify files were uploaded correctly

### "Page loads but styling is missing"
- Check CSS file path: should be `css/styles.css`
- Hard refresh browser: Ctrl+Shift+Delete
- Check browser console for errors (F12)

### "JavaScript not working"
- Check JS file paths in HTML
- Verify script tags point to correct files
- Check browser console for error messages

### "Images not showing"
- Verify image files are in `images/` folder
- Check image paths in product data
- Use relative paths (not absolute)

### "Custom domain not working"
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct
- Use https://dnschecker.org to verify

### "WhatsApp links not working"
- Use format: `https://wa.me/COUNTRY_CODE_PHONE_NUMBER`
- Include country code (Nigeria = +234)
- Example: `https://wa.me/2349066644873`

---

## 💡 Pro Tips

1. **Always test locally first** - Open HTML file in browser before deploying
2. **Use version control** - Keep track of changes with Git
3. **Backup your files** - Keep copies of all website files
4. **Monitor site analytics** - Track visitor behavior
5. **Update regularly** - Keep content fresh
6. **Security first** - Use HTTPS (included in all hosting)
7. **Mobile first** - Test on phone before going live

---

## 📞 Getting Help

### If Deployment Fails
1. Check platform status page (linked above)
2. Review error messages in browser console (F12)
3. Check file paths and naming
4. Contact hosting support

### For Specific Platforms
- **GitHub Pages Issues**: https://github.community
- **Netlify Help**: https://docs.netlify.com
- **Vercel Support**: https://vercel.com/support

---

## 🎉 Congratulations!

Your RAAH SCENTS website is now live! 

### Next Steps
1. Share your website on social media
2. Add your WhatsApp to business profiles
3. Optimize for search engines (SEO)
4. Gather customer feedback
5. Add real product images when ready
6. Consider adding more features later

---

**Last Updated: July 2025**

**Questions?** Contact us on WhatsApp: +234 906 644 4873
