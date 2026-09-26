const fs = require('fs');
const path = require('path');

// 1. Update style.css
const cssPath = path.join(__dirname, '..', 'assets', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const universalHeaderCss = `
/* ================================================
   UNIVERSAL HEADER CENTERING & BALANCED ACTIONS
================================================= */
header .max-w-7xl > div {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    position: relative !important;
    width: 100% !important;
}

@media (min-width: 1200px) {
    header #desktop-nav {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        margin-left: auto !important;
        margin-right: auto !important;
        gap: 1.25rem !important;
        white-space: nowrap !important;
        flex: 1 1 auto !important;
        max-width: 800px !important;
    }

    header #desktop-nav > * {
        flex-shrink: 0 !important;
    }

    /* Desktop right action items - balanced alignment */
    header .hidden.lg\\:flex.ml-auto,
    header .hidden.lg\\:flex:not(#desktop-nav) {
        display: flex !important;
        align-items: center !important;
        justify-content: flex-end !important;
        gap: 0.625rem !important;
        margin-left: 0 !important;
        flex-shrink: 0 !important;
    }

    /* Need a Photographer CTA button */
    header .hidden.lg\\:flex.ml-auto a[href*="photographers.html"],
    header .hidden.lg\\:flex:not(#desktop-nav) a[href*="photographers.html"] {
        white-space: nowrap !important;
        flex-shrink: 0 !important;
        padding-left: 1.125rem !important;
        padding-right: 1.125rem !important;
    }
}
`;

if (!css.includes('UNIVERSAL HEADER CENTERING & BALANCED ACTIONS')) {
    css += universalHeaderCss;
    fs.writeFileSync(cssPath, css, 'utf8');
    console.log('Updated style.css with universal header centering!');
}

// 2. Update script.js
const scriptPath = path.join(__dirname, '..', 'assets', 'js', 'script.js');
let scriptJs = fs.readFileSync(scriptPath, 'utf8');

const oldDesktopNavLogic = `        const desktopNav = document.getElementById("desktop-nav");
        if (desktopNav) {
            desktopNav.querySelectorAll("a, button").forEach(function(el) {
                el.classList.add("whitespace-nowrap", "shrink-0");
            });
        }`;

const newDesktopNavLogic = `        const desktopNav = document.getElementById("desktop-nav");
        if (desktopNav) {
            desktopNav.classList.remove("ml-4", "ml-6", "ml-8", "ml-10");
            desktopNav.classList.add("mx-auto", "justify-center", "whitespace-nowrap");
            desktopNav.querySelectorAll("a, button").forEach(function(el) {
                el.classList.add("whitespace-nowrap", "shrink-0");
            });
        }`;

if (scriptJs.includes(oldDesktopNavLogic)) {
    scriptJs = scriptJs.replace(oldDesktopNavLogic, newDesktopNavLogic);
    fs.writeFileSync(scriptPath, scriptJs, 'utf8');
    console.log('Updated script.js refineSharedHeader logic!');
}

// 3. Update all HTML files in root and pages/
const rootHtmlFiles = [path.join(__dirname, '..', 'index.html')];
const pagesDir = path.join(__dirname, '..', 'pages');
const pageFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html')).map(f => path.join(pagesDir, f));
const allHtmlFiles = [...rootHtmlFiles, ...pageFiles];

allHtmlFiles.forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Pattern for nav#desktop-nav classes with ml-10, ml-6, etc.
    const navRegex = /(<nav\s+id="desktop-nav"[^>]*class="[^"]*?)ml-(?:4|6|8|10)([^"]*")/g;
    if (navRegex.test(html)) {
        html = html.replace(navRegex, '$1mx-auto justify-center$2');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(file, html, 'utf8');
        console.log(`Updated desktop-nav centering in: ${path.basename(file)}`);
    }
});

console.log('All pages processed successfully!');
