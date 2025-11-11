# Personal Portfolio Website - Customization Guide

## 🎨 How to Add Your Custom Pixel Art Avatar

### Option 1: Simple Image Replacement
1. Create or find your pixel art avatar (recommended size: 150x150px)
2. Save it as `avatar.png` in the same folder as your HTML file
3. In `index.html`, find the `.pixel-avatar` div (around line 36)
4. Replace the placeholder with:
```html
<div class="pixel-avatar" id="pixelAvatar">
    <img src="avatar.png" alt="My Avatar" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

### Option 2: CSS Background Image
1. In `styles.css`, find the `.pixel-avatar` selector
2. Add your image:
```css
.pixel-avatar {
    background-image: url('avatar.png');
    background-size: cover;
    background-position: center;
}
```

### Option 3: Inline Pixel Art (Advanced)
Create pixel art using CSS by adding colored divs. You can use tools like:
- https://www.pixilart.com/
- https://www.piskelapp.com/

Export as PNG and use Option 1 or 2.

## 📝 Customizing Your Content

### Update Personal Information
In `index.html`, update these sections:

**Contact Information (lines 200-215):**
- Replace `your.email@gmail.com` with your actual email
- Replace `yourprofile` with your LinkedIn username
- Replace `yourusername` with your GitHub username

**Work Experience (lines 150-195):**
- Edit job titles, companies, and descriptions
- Add or remove job entries by copying the `.job-entry` div structure

**About Me (lines 85-145):**
- Update the bio text
- Modify skills and percentages

### Change Your Name/Title
In the header section (lines 40-48), update:
```html
<h1>Hi! Welcome to my portfolio!</h1>
<p class="subtitle">✨ Your Title Here ✨</p>
```

## 🎨 Color Scheme Customization

The color palette is defined in `styles.css` at the top (lines 1-15). To change colors:

```css
:root {
    --sky-blue: #B8D4E8;        /* Background gradient start */
    --cream: #FFF8E7;           /* Background gradient end */
    --soft-pink: #FFD4E5;       /* Accent color */
    --lavender: #E1D4F0;        /* Window backgrounds */
    --mint: #D4F0E1;            /* Alternative accent */
    /* ... modify any color! */
}
```

**Suggested Ghibli-inspired palettes:**
- Totoro: Blues (#7EC8E3), greens (#A8D8B9), grays (#8B9A9C)
- Kiki: Reds (#E63946), purples (#9D4EDD), creams (#FFF4E6)
- Ponyo: Coral (#FF6B6B), aqua (#4ECDC4), gold (#FFE66D)

## 🖼️ Adding More Sections

To add a new window section, copy this template in `index.html`:

```html
<div class="window your-window-name" data-window="custom">
    <div class="window-header">
        <div class="window-title">YOUR_TITLE.EXE</div>
        <div class="window-controls">
            <button class="window-btn minimize">_</button>
            <button class="window-btn maximize">□</button>
            <button class="window-btn close">×</button>
        </div>
    </div>
    <div class="window-content">
        <!-- Your content here -->
    </div>
</div>
```

## 🎮 Interactive Features

Your site includes:
- ✨ **Sparkle cursor follower** - follows your mouse
- ⭐ **Floating stars** - appear randomly
- ☁️ **Animated clouds** - drift across the screen
- 🎨 **Color-shifting avatar** - subtle hue rotation
- 💫 **Click particles** - sparkles on every click
- 🪟 **Draggable windows** - click and drag window headers
- 🎯 **Window controls** - minimize, maximize, close buttons work!
- 🌈 **Easter egg** - try the Konami code (↑↑↓↓←→←→BA)

## 📱 Responsive Design

The site automatically adapts to mobile devices. Test it by resizing your browser window!

## 🚀 Deploying Your Site

### GitHub Pages (Free!)
1. Create a GitHub account
2. Create a new repository named `yourusername.github.io`
3. Upload your files (index.html, styles.css, script.js, avatar.png)
4. Visit `https://yourusername.github.io`

### Netlify (Free!)
1. Go to netlify.com
2. Drag and drop your folder
3. Get instant URL!

### Custom Domain
After deploying, you can buy a domain (like namecheap.com) and connect it to your site.

## 🎨 Recommended Pixel Art Tools

- **Piskel** (https://www.piskelapp.com/) - Free, browser-based
- **Aseprite** ($19.99) - Professional pixel art tool
- **Pixilart** (https://www.pixilart.com/) - Free, online community
- **Lospec Palette List** (https://lospec.com/palette-list) - Color palettes

## 💡 Tips for Your Avatar

1. Keep it simple - 8-bit style means low detail
2. Use bold outlines (2-3 pixels wide)
3. Limit colors (6-8 colors max)
4. Make it recognizable at small sizes
5. Add personality with expressions or accessories

## 🐛 Troubleshooting

**Cursor follower not working?**
- Make sure JavaScript is enabled
- On mobile, the cursor follower is automatically hidden

**Colors look wrong?**
- Check that CSS variables are defined in `:root`
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**Windows not appearing?**
- Check browser console for errors (F12)
- Ensure all files are in the same folder

## 📧 Need Help?

If something isn't working, check:
1. Are all files in the same folder?
2. Is the filename exactly `index.html` (not `index.html.txt`)?
3. Are you opening the file in a modern browser (Chrome, Firefox, Safari)?

---

Have fun customizing your retro portfolio! ✨🎮
