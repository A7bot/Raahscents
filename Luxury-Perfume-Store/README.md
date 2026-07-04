# RAAH SCENTS - Luxury Perfume Store Website

A beautiful, fully-responsive e-commerce website for RAAH SCENTS premium fragrances. Built with HTML5, CSS3, and Vanilla JavaScript.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Support](#support)

## ✨ Features

### 🏠 Homepage
- Stunning full-screen hero section with animated particles
- Featured fragrances section
- Why Choose Us section
- Call-to-action banner
- Smooth scroll animations

### 🛍️ Shop Page
- 50+ perfume products with multiple categories
- Advanced filtering by category, price range, and special tags
- Full-text search functionality
- Sorting options (name, price, rating, newest)
- Responsive product grid
- Quick order modal

### 📄 About Us
- Company story and mission
- Core values (authenticity, excellence, integrity, etc.)
- Timeline of milestones
- Why customers choose us

### ❓ FAQ
- Comprehensive Q&A sections
- Topics: Products, Ordering, Shipping, Returns, Fragrance Guidance
- Expandable/collapsible questions
- Direct links to contact methods

### 📞 Contact
- Contact form with WhatsApp integration
- Multiple contact methods (WhatsApp, Email, Phone)
- Business hours and location information
- Form responses go directly to WhatsApp

### 🎨 Design
- Luxury black & gold color scheme
- Responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Glassmorphism effects
- Professional typography (Cormorant Garamond, Montserrat)

### 🔗 WhatsApp Integration
- Floating WhatsApp button on every page
- Quick order modal with product pre-fill
- Contact form with WhatsApp submission
- Direct messaging links with personalized messages

## 📁 Project Structure

```
Luxury-Perfume-Store/
├── index.html              # Homepage
├── shop.html              # Shop with filtering
├── about.html             # About us page
├── faq.html               # FAQ page
├── contact.html           # Contact page
├── css/
│   └── styles.css         # All shared styles
├── js/
│   ├── main.js            # Shared functionality
│   └── products-data.js   # Product database (50+ items)
├── images/
│   ├── products/          # Product images (placeholder for now)
│   ├── logo/              # Logo images
│   └── banners/           # Banner images
└── README.md              # This file
```

## 🚀 Getting Started

### Option 1: Local Testing
1. Extract the ZIP file
2. Open `index.html` in your web browser
3. The website will work locally with all features

### Option 2: Deploy to GitHub Pages
1. Create a GitHub account (if you don't have one)
2. Create a new repository named `your-username.github.io`
3. Upload all files to the repository
4. Your site will be live at `https://your-username.github.io`

See **Deployment Guide** for detailed instructions.

### Option 3: Deploy to Web Hosting
1. Upload files to your web hosting server (using FTP or file manager)
2. Set index.html as the default page
3. Your site will be live at your domain

## ✏️ Customization Guide

### 1. Update WhatsApp Number
Find and replace `2349066444873` with your WhatsApp number throughout:
- `contact.html`
- `faq.html`
- All HTML files in the footer

### 2. Update Email Address
Find and replace `info@raahscents.com` with your email:
- `contact.html`
- Footer sections in all pages

### 3. Update Business Hours
Edit the contact information in:
- `contact.html` - Business Hours section
- `faq.html` - Contact & Support section

### 4. Customize Products
Edit `js/products-data.js`:
- Add new products to the `allProducts` array
- Change prices, descriptions, sizes
- Add product images (see instructions below)
- Update categories

**Example Product Object:**
```javascript
{
  id: 1,
  name: "Product Name",
  category: "Women",          // Women, Men, Unisex, Oils
  subcategory: "Floral · Woody",
  price: 15000,               // Price in Naira
  ml: ["50ml", "100ml"],
  badge: "Bestseller",        // New, Bestseller, Popular, Luxury, Premium, Exclusive
  emoji: "🌸",                // Emoji icon
  gradient: "linear-gradient(...)",  // Background gradient
  image: "images/products/filename.jpg",
  description: "Product description",
  notes: {
    top: "Top notes",
    middle: "Heart notes",
    base: "Base notes"
  },
  rating: 4.8,
  reviews: 24,
  sizes: [
    { size: "50ml", price: 12000 },
    { size: "100ml", price: 19000 }
  ]
}
```

### 5. Update Product Images
1. Prepare your product images (JPG or PNG, ~500x500px)
2. Upload them to `images/products/` folder
3. Update the `image` field in `products-data.js`

Currently, products show emojis instead of real images. To add real images:
- Replace the `product-img-fallback` div in the product rendering code
- Or update the product cards to use actual image paths

### 6. Update Brand Name & Logo
- Change "RAAH SCENTS ✨" in HTML files
- Update favicon (create `favicon.ico` and add `<link rel="icon" href="favicon.ico">`)
- Update meta tags (title, description, OG tags)

### 7. Change Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
  --gold: #C9A84C;           /* Primary accent color */
  --gold-light: #E8C97A;
  --gold-dark: #8B6914;
  --black: #0A0A0A;          /* Primary background */
  --dark: #111111;
  --dark2: #1A1A1A;
  --cream: #F5EFE0;          /* Primary text color */
  --text-muted: #888;
}
```

### 8. Update Social Media & Links
- Change WhatsApp number throughout
- Add social media links in footer or nav (edit HTML)
- Update business email address

## 📖 Content Pages

### Homepage (`index.html`)
- Features section: Edit features in the grid
- Featured products: Change which products display
- Edit hero section text and CTA

### Shop (`shop.html`)
- Filter categories come from product data
- Search works automatically from product names
- Sorting options are built-in

### About (`about.html`)
- Update company story in the content sections
- Edit values (6 value cards)
- Update timeline with your milestones

### FAQ (`faq.html`)
- Add new questions by duplicating FAQ item HTML
- Questions expand/collapse automatically
- Update business hours and contact info

### Contact (`contact.html`)
- Contact form sends to WhatsApp
- Edit business information
- Add location details

## 🎯 SEO & Performance

### Meta Tags
Update in each HTML file:
```html
<meta name="description" content="Your description">
<meta property="og:title" content="Your title">
<meta property="og:description" content="Your description">
```

### Performance Tips
1. Optimize product images (compress before uploading)
2. Use lazy loading for images (optional)
3. Minify CSS/JS for production (optional)
4. Add robots.txt and sitemap.xml

## 🚀 Deployment Options

### GitHub Pages (FREE)
See **Deployment-Guide.md** for step-by-step instructions

### Paid Web Hosting Options
- Bluehost
- SiteGround
- Hostinger
- AWS S3 + CloudFront
- Netlify (FREE tier available)

## 🛠️ Editing Without Coding

### Easy Edits
1. **Product prices**: Edit numbers in `js/products-data.js`
2. **Business hours**: Edit text in `contact.html` and `faq.html`
3. **Contact info**: Replace phone/email throughout files

### Moderate Edits
1. **Add new products**: Copy/paste product objects in `js/products-data.js`
2. **Update company info**: Edit text content in HTML files
3. **Change colors**: Update CSS variables in `css/styles.css`

### Advanced Edits
1. **Add new pages**: Create new HTML files following the template
2. **Modify layout**: Change CSS grid/flex properties
3. **Add new features**: Modify JavaScript in `js/main.js`

## 📱 Mobile Optimization

The site is fully responsive and works on:
- iPhone (all sizes)
- Android devices
- Tablets
- Desktops

Test using:
- Chrome DevTools (F12)
- Firefox Responsive Design Mode
- Safari Responsive Design Mode

## ⚙️ Technical Details

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Dependencies
- Google Fonts (Cormorant Garamond, Montserrat)
- Vanilla JavaScript (no frameworks)
- CSS3 (Grid, Flexbox, Animations)

### JavaScript Features
- Scroll reveal animations
- Product filtering and sorting
- Modal functionality
- WhatsApp integration
- Local storage for carts (basic)
- Form submission handling

## 🐛 Troubleshooting

### Images not showing
- Check file paths in `js/products-data.js`
- Ensure image files are in `images/` folder
- Use correct file extensions (.jpg, .png)

### Styles look broken
- Ensure `css/styles.css` is in the correct folder
- Check browser cache (Ctrl+Shift+Delete)
- Verify CSS file path in HTML: `<link rel="stylesheet" href="css/styles.css">`

### WhatsApp links not working
- Check WhatsApp number format (+234...)
- Verify `wa.me/` links are correct
- Test on mobile device first

### Form not submitting
- Check browser console for errors (F12)
- Verify WhatsApp integration in `contact.html`
- Ensure form field IDs match JavaScript

## 📚 Resources

- HTML5 Guide: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS3 Guide: https://developer.mozilla.org/en-US/docs/Web/CSS
- JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- Font Awesome Icons: https://fontawesome.com

## 📞 Support

For help with this website:
1. Check the FAQ page in the website
2. Contact via WhatsApp: +234 906 644 4873
3. Email: info@raahscents.com

## 📄 License

This website template is created for RAAH SCENTS. 

---

**Happy selling! 🌟**

Last Updated: July 2025
