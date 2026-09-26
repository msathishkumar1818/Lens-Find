const fs = require('fs');
const path = require('path');

// 1. Update style.css
const cssPath = path.join(__dirname, '..', 'assets', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// Replace any existing header centering rules with the definitive, beautifully balanced 3-column layout
const headerCssIndex = css.indexOf('/* ================================================\n   UNIVERSAL HEADER CENTERING');
if (headerCssIndex !== -1) {
    css = css.substring(0, headerCssIndex);
}

const definitiveHeaderCss = `
/* ================================================
   UNIVERSAL HEADER 3-COLUMN BALANCED CENTERING
================================================= */
header .max-w-7xl > div {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 100% !important;
}

@media (min-width: 1200px) {
    header #desktop-nav {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        margin: 0 auto !important;
        gap: 1.5rem !important;
        white-space: nowrap !important;
        flex: 1 1 auto !important;
        max-width: 750px !important;
    }

    header #desktop-nav a,
    header #desktop-nav button {
        font-size: 0.875rem !important;
        font-weight: 500 !important;
        white-space: nowrap !important;
        flex-shrink: 0 !important;
    }

    header .hidden.lg\\:flex.ml-auto,
    header .hidden.lg\\:flex:not(#desktop-nav) {
        display: flex !important;
        align-items: center !important;
        justify-content: flex-end !important;
        gap: 0.75rem !important;
        margin-left: 0 !important;
        flex-shrink: 0 !important;
    }

    header .hidden.lg\\:flex.ml-auto a[href*="photographers.html"],
    header .hidden.lg\\:flex:not(#desktop-nav) a[href*="photographers.html"] {
        white-space: nowrap !important;
        flex-shrink: 0 !important;
        padding: 0.625rem 1.25rem !important;
    }
}
`;

css += definitiveHeaderCss;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Updated style.css with definitive header styles!');

// 2. Update photographer-profile.html to remove extra contact-photographer in header
const profilePath = path.join(__dirname, '..', 'pages', 'photographer-profile.html');
let profileHtml = fs.readFileSync(profilePath, 'utf8');

function normalize(str) {
    return str.replace(/\r\n/g, '\n');
}

let normProfile = normalize(profileHtml);

const oldProfileRight = `        <!-- DESKTOP RIGHT -->
        <div class="hidden lg:flex items-center gap-1.5 xl:gap-2.5 ml-auto shrink-0">
          <a id="contact-photographer" href="#contact-photographer-section" class="inline-flex items-center justify-center px-3 py-2 xl:px-4 xl:py-2 rounded-xl border border-gray-200 dark:border-white/20 text-xs font-semibold text-gray-800 dark:text-white hover:border-amber-500 hover:text-amber-500 transition shadow-sm whitespace-nowrap shrink-0">
            Contact Photographer
          </a>

          <!-- RTL / LTR -->
          <button id="direction-toggle" type="button" aria-label="Toggle RTL LTR" title="RTL / LTR" class="w-8 h-8 xl:w-9 xl:h-9 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-amber-500 hover:bg-gray-100 dark:hover:bg-white/5 transition shrink-0">
            <i id="direction-icon" class="fa-solid fa-arrow-right-arrow-left text-xs"></i>
          </button>

          <!-- DARK MODE -->
          <button id="theme-toggle" type="button" aria-label="Toggle dark mode" title="Toggle theme" class="w-8 h-8 xl:w-9 xl:h-9 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-amber-500 hover:bg-gray-100 dark:hover:bg-white/5 transition shrink-0">
            <i id="theme-icon" class="fa-solid fa-moon text-xs"></i>
          </button>

          <div class="h-6 xl:h-7 w-px bg-gray-200 dark:bg-white/10 mx-0.5 xl:mx-1 shrink-0"></div>

          <a href="photographers.html" class="inline-flex items-center gap-1.5 xl:gap-2 px-3.5 py-2 xl:px-4.5 xl:py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs xl:text-sm font-semibold hover:bg-amber-500 dark:hover:bg-amber-500 dark:hover:text-white transition-all duration-300 whitespace-nowrap shrink-0">
            Need a Photographer <i class="fa-solid fa-arrow-right text-xs"></i>
          </a>
        </div>`;

const newProfileRight = `        <!-- DESKTOP RIGHT -->
        <div class="hidden lg:flex items-center gap-2.5 shrink-0">
          <!-- RTL / LTR -->
          <button id="direction-toggle" type="button" aria-label="Toggle RTL LTR" title="RTL / LTR" class="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-amber-500 hover:bg-gray-100 dark:hover:bg-white/5 transition shrink-0">
            <i id="direction-icon" class="fa-solid fa-arrow-right-arrow-left"></i>
          </button>

          <!-- DARK MODE -->
          <button id="theme-toggle" type="button" aria-label="Toggle dark mode" title="Toggle theme" class="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-amber-500 hover:bg-gray-100 dark:hover:bg-white/5 transition shrink-0">
            <i id="theme-icon" class="fa-solid fa-moon"></i>
          </button>

          <div class="h-7 w-px bg-gray-200 dark:bg-white/10 mx-1 shrink-0"></div>

          <a href="photographers.html" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-amber-500 dark:hover:bg-amber-500 dark:hover:text-white transition-all duration-300 whitespace-nowrap shrink-0">
            Need a Photographer <i class="fa-solid fa-arrow-right text-xs"></i>
          </a>
        </div>`;

normProfile = normProfile.replace(normalize(oldProfileRight), normalize(newProfileRight));

fs.writeFileSync(profilePath, normProfile, 'utf8');
console.log('Updated photographer-profile.html header successfully!');
