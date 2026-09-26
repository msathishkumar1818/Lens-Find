const fs = require('fs');
const path = require('path');

const cssPath = path.resolve(__dirname, '..', 'assets', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replace mobile-menu block
const oldMobileMenuRegex = /\/\*\s*={10,}\s*MOBILE MENU\s*={10,}\s*\*\/[\s\S]*?\.mobile-menu\s*\{[\s\S]*?\.mobile-menu\.active\s*\{[\s\S]*?\}/;
const newMobileMenuBlock = `/* ================================================
   MOBILE MENU (Overlay - Does not push Hero down)
================================================= */

.mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    max-height: 0;
    opacity: 0;
    visibility: hidden;
    overflow-y: auto;
    background: #ffffff;
    border-top: 1px solid #e5e7eb;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                opacity 0.25s ease,
                visibility 0.25s ease;
    z-index: 100;
}

.dark .mobile-menu {
    background: #0b0b0b;
    border-top-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
}

.mobile-menu.active {
    max-height: calc(100vh - 76px);
    opacity: 1;
    visibility: visible;
}

body.menu-open {
    overflow: hidden;
}

/* Use hamburger menu across tablet / iPad widths (up to 1199px) */
@media (max-width: 1199px) {
    header #desktop-nav {
        display: none !important;
    }
    header .hidden.lg\\:flex.ml-auto,
    header .hidden.lg\\:flex {
        display: none !important;
    }
    header .flex.lg\\:hidden {
        display: flex !important;
    }
}
@media (min-width: 1200px) {
    header #desktop-nav {
        display: flex !important;
    }
    header .hidden.lg\\:flex.ml-auto,
    header .hidden.lg\\:flex {
        display: flex !important;
    }
    header .flex.lg\\:hidden {
        display: none !important;
    }
    .mobile-menu {
        display: none !important;
    }
}

/* Profile hero avatar centering to prevent head cropping */
#profile-photo,
.profile-avatar-img {
    object-fit: cover !important;
    object-position: center 10% !important;
}

/* Contact page hero section icon contrast in Light & Dark Mode */
.contact-hero-icon,
a[href^="mailto:"] span.bg-gray-900 i,
a[href^="tel:"] span.bg-gray-900 i,
.bg-gray-900.text-white i,
.bg-gray-900 > i,
.bg-black.text-white i {
    color: #ffffff !important;
}
.dark a[href^="mailto:"] span.dark\\:bg-white i,
.dark a[href^="tel:"] span.dark\\:bg-white i,
.dark .dark\\:bg-white.dark\\:text-black i {
    color: #000000 !important;
}`;

if (oldMobileMenuRegex.test(css)) {
    css = css.replace(oldMobileMenuRegex, newMobileMenuBlock);
    console.log('Mobile menu regex matched and replaced!');
} else {
    console.log('Mobile menu regex did not match, appending new rules...');
    css += '\n' + newMobileMenuBlock;
}

// Remove the specific overrides on Maya Kapoor & Ananya Iyer that caused card misalignment
const oldEditorialCardsRegex = /\/\*\s*Give the two editorial feature cards a deliberate text-to-image balance\.\s*\*\/[\s\S]*?@media\s*\(min-width:\s*1024px\)\s*\{[\s\S]*?#photographerGrid[\s\S]*?object-position:\s*center\s*28%\s*!important;\s*\}\s*\}/;
if (oldEditorialCardsRegex.test(css)) {
    css = css.replace(oldEditorialCardsRegex, `/* Photographer card grid unified alignments */
@media (min-width: 1024px) {
    #photographerGrid .photographer-card img {
        object-position: center top !important;
    }
}`);
    console.log('Editorial cards override matched and replaced!');
}

fs.writeFileSync(cssPath, css, 'utf8');
console.log('style.css successfully updated!');
