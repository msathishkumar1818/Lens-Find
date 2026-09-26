const fs = require('fs');
const path = require('path');

// 1. Update style.css
const cssPath = path.join(__dirname, '..', 'assets', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const headerMarker = '/* ================================================\n   UNIVERSAL HEADER';
const markerPos = css.indexOf(headerMarker);
if (markerPos !== -1) {
    css = css.substring(0, markerPos);
}

const cleanHeaderCss = `
/* ================================================
   UNIVERSAL HEADER 3-COLUMN SPRINT CENTERING
================================================= */
header .max-w-7xl > div {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 100% !important;
    position: relative !important;
}

@media (min-width: 1200px) {
    header #desktop-nav {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        margin-left: auto !important;
        margin-right: auto !important;
        gap: 1.75rem !important;
        white-space: nowrap !important;
        flex: 0 1 auto !important;
    }

    header #desktop-nav a,
    header #desktop-nav button {
        font-size: 0.875rem !important;
        font-weight: 500 !important;
        white-space: nowrap !important;
        flex-shrink: 0 !important;
        padding-top: 0.5rem !important;
        padding-bottom: 0.5rem !important;
    }

    /* Right controls container */
    header .hidden.lg\\:flex.ml-auto,
    header .hidden.lg\\:flex:not(#desktop-nav) {
        display: flex !important;
        align-items: center !important;
        justify-content: flex-end !important;
        gap: 0.75rem !important;
        margin-left: 0 !important;
        flex-shrink: 0 !important;
    }

    header #direction-toggle {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 0.375rem !important;
        width: auto !important;
        padding-left: 0.75rem !important;
        padding-right: 0.75rem !important;
    }

    header .hidden.lg\\:flex.ml-auto a[href*="photographers.html"],
    header .hidden.lg\\:flex:not(#desktop-nav) a[href*="photographers.html"] {
        white-space: nowrap !important;
        flex-shrink: 0 !important;
        padding: 0.625rem 1.25rem !important;
    }
}
`;

css += cleanHeaderCss;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Updated style.css!');

// 2. Update script.js refineSharedHeader to remove List Your Services from desktop bar and cleanly maintain standard 6 links
const scriptPath = path.join(__dirname, '..', 'assets', 'js', 'script.js');
let scriptJs = fs.readFileSync(scriptPath, 'utf8');

// Replace refineSharedHeader in script.js
const newRefineHeaderFn = `    /* ==================================================
       SHARED HEADER REFINEMENTS
    ================================================== */

    (function refineSharedHeader() {
        const inPagesDirectory = window.location.pathname.includes("/pages/");
        const homeHref = inPagesDirectory ? "../index.html" : "index.html";
        const home2Href = inPagesDirectory ? "home2.html" : "pages/home2.html";
        const aboutHref = inPagesDirectory ? "about.html" : "pages/about.html";
        const contactHref = inPagesDirectory ? "contact.html" : "pages/contact.html";
        const inspirationHref = inPagesDirectory ? "inspiration.html" : "pages/inspiration.html";
        const photographersHref = inPagesDirectory ? "photographers.html" : "pages/photographers.html";
        const categoriesHref = inPagesDirectory ? "categories.html" : "pages/categories.html";
        const header = document.querySelector("header");

        if (!header) return;

        header.querySelector('[aria-label="Search"]')?.remove();
        header.querySelector('input[placeholder="Search photographers..."]')?.closest(".relative")?.remove();

        header.querySelectorAll("a").forEach(function (link) {
            const label = link.textContent.replace(/\\s+/g, " ").trim();
            if (label === "Login" || label === "Log in") {
                const prev = link.previousElementSibling;
                if (prev && prev.classList.contains("w-px")) {
                    prev.remove();
                }
                link.remove();
            }
            if (label === "Find Photographer" || label === "Find a Photographer") {
                link.innerHTML = 'Need a Photographer <i class="fa-solid fa-arrow-right text-xs"></i>';
            }
        });

        const desktopNav = document.getElementById("desktop-nav");
        if (desktopNav) {
            desktopNav.classList.remove("ml-4", "ml-6", "ml-8", "ml-10");
            desktopNav.classList.add("mx-auto", "justify-center", "whitespace-nowrap");
            
            // Remove "List Your Services" and "Portfolios" from crowded desktop top bar
            desktopNav.querySelectorAll("a").forEach(function(a) {
                const txt = a.textContent.replace(/\\s+/g, " ").trim().toLowerCase();
                if (txt === "list your services" || txt === "portfolios" || txt.startsWith("contact ")) {
                    a.remove();
                }
            });

            // Ensure Inspiration
            const hasInspiration = [...desktopNav.querySelectorAll("a")].some(a => a.textContent.trim().toLowerCase() === "inspiration");
            if (!hasInspiration) {
                const inspiration = document.createElement("a");
                inspiration.href = inspirationHref;
                inspiration.className = "py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition whitespace-nowrap shrink-0";
                inspiration.textContent = "Inspiration";
                const catLink = [...desktopNav.querySelectorAll("a")].find(a => a.textContent.trim().toLowerCase() === "categories");
                if (catLink && catLink.nextElementSibling) {
                    desktopNav.insertBefore(inspiration, catLink.nextElementSibling);
                } else {
                    desktopNav.appendChild(inspiration);
                }
            }

            // Ensure About
            const hasAbout = [...desktopNav.querySelectorAll("a")].some(a => a.textContent.trim().toLowerCase().includes("about"));
            if (!hasAbout) {
                const about = document.createElement("a");
                about.href = aboutHref;
                about.className = "py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition whitespace-nowrap shrink-0";
                about.textContent = "About";
                const contactEl = [...desktopNav.querySelectorAll("a")].find(link => link.textContent.replace(/\\s+/g, " ").trim().toLowerCase() === "contact");
                desktopNav.insertBefore(about, contactEl || null);
            }

            // Ensure Contact
            const hasContact = [...desktopNav.querySelectorAll("a")].some(a => a.textContent.trim().toLowerCase() === "contact");
            if (!hasContact) {
                const contact = document.createElement("a");
                contact.href = contactHref;
                contact.className = "py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition whitespace-nowrap shrink-0";
                contact.textContent = "Contact";
                desktopNav.appendChild(contact);
            }

            desktopNav.querySelectorAll("a, button").forEach(function(el) {
                el.classList.add("whitespace-nowrap", "shrink-0");
            });
        }

        // Ensure strictly ONE "Need a Photographer" CTA button remains visible in desktop header
        const desktopRight = header.querySelector(".hidden.lg\\\\:flex.ml-auto, .hidden.lg\\\\:flex:not(#desktop-nav), .hidden.xl\\\\:flex");
        if (desktopRight) {
            desktopRight.querySelectorAll('#contact-photographer').forEach(el => el.remove());
            const allCtas = desktopRight.querySelectorAll('a[href*="photographers.html"]');
            if (allCtas.length === 0) {
                const cta = document.createElement("a");
                cta.href = photographersHref;
                cta.className = "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-amber-500 dark:hover:bg-amber-500 dark:hover:text-white transition-all duration-300 whitespace-nowrap shrink-0";
                cta.innerHTML = 'Need a Photographer <i class="fa-solid fa-arrow-right text-xs"></i>';
                desktopRight.appendChild(cta);
            } else {
                allCtas[0].classList.add("whitespace-nowrap", "shrink-0");
                for (let i = 1; i < allCtas.length; i++) {
                    allCtas[i].remove();
                }
            }
        }

        const mobileNav = document.getElementById("mobile-nav");
        if (mobileNav) {
            mobileNav.querySelectorAll("a").forEach(function (link) {
                const label = link.textContent.replace(/\\s+/g, " ").trim();
                if (label === "Login" || label === "Log in") link.remove();
            });
        }

        if (mobileNav && !mobileNav.querySelector('[data-nav-inspiration]')) {
            const hasInspiration = [...mobileNav.querySelectorAll("a")].some(a => a.textContent.trim().toLowerCase() === "inspiration");
            if (!hasInspiration) {
                const inspiration = document.createElement("a");
                inspiration.href = inspirationHref;
                inspiration.dataset.navInspiration = "true";
                inspiration.className = "flex items-center gap-4 px-4 py-3.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 font-medium";
                inspiration.innerHTML = '<i class="fa-solid fa-lightbulb w-5 text-amber-500"></i>Inspiration';
                const listServices = [...mobileNav.querySelectorAll("a")].find(function (link) {
                    return link.textContent.replace(/\\s+/g, " ").trim() === "List Your Services";
                });
                mobileNav.insertBefore(inspiration, listServices || null);
            }
        }

        if (mobileNav) {
            const hasAbout = [...mobileNav.querySelectorAll("a")].some(a => a.textContent.trim().toLowerCase().includes("about"));
            if (!hasAbout) {
                const about = document.createElement("a");
                about.href = aboutHref;
                about.dataset.navAbout = "true";
                about.className = "flex items-center gap-4 px-4 py-3.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 font-medium";
                about.innerHTML = '<i class="fa-solid fa-info-circle w-5 text-amber-500"></i>About';
                const contactEl = [...mobileNav.querySelectorAll("a")].find(link => link.textContent.replace(/\\s+/g, " ").trim().toLowerCase() === "contact");
                mobileNav.insertBefore(about, contactEl || null);
            }
        }

        if (mobileNav && !mobileNav.querySelector('[data-nav-contact]')) {
            const hasContact = [...mobileNav.querySelectorAll("a")].some(a => a.textContent.trim().toLowerCase() === "contact");
            if (!hasContact) {
                const contact = document.createElement("a");
                contact.href = contactHref;
                contact.dataset.navContact = "true";
                contact.className = "flex items-center gap-4 px-4 py-3.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 font-medium";
                contact.innerHTML = '<i class="fa-solid fa-envelope w-5 text-amber-500"></i>Contact';
                mobileNav.appendChild(contact);
            }
        }

        const mobileRight = header.querySelector(".flex.lg\\\\:hidden");
        if (mobileRight) {
            mobileRight.querySelectorAll('a[href*="photographers.html"]').forEach(function(a) {
                a.remove();
            });
        }

        const directionButton = document.getElementById("direction-toggle");
        if (directionButton && !document.getElementById("direction-label")) {
            const label = document.createElement("span");
            label.id = "direction-label";
            label.textContent = "RTL";
            directionButton.appendChild(label);
        }
    })();`;

// Find where refineSharedHeader starts and ends in script.js
const startMarker = '/* ==================================================\n       SHARED HEADER REFINEMENTS';
const endMarker = '/* Keep the interface polished if an image is moved, renamed, or temporarily unavailable. */';

const sIndex = scriptJs.indexOf(startMarker);
const eIndex = scriptJs.indexOf(endMarker);

if (sIndex !== -1 && eIndex !== -1) {
    scriptJs = scriptJs.substring(0, sIndex) + newRefineHeaderFn + '\n\n    ' + scriptJs.substring(eIndex);
    fs.writeFileSync(scriptPath, scriptJs, 'utf8');
    console.log('Updated script.js successfully!');
}

// 3. Update all HTML files: Remove List Your Services from static desktop-nav
const rootHtmlFiles = [path.join(__dirname, '..', 'index.html')];
const pagesDir = path.join(__dirname, '..', 'pages');
const pageFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html')).map(f => path.join(pagesDir, f));
const allHtmlFiles = [...rootHtmlFiles, ...pageFiles];

allHtmlFiles.forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Remove static List Your Services inside #desktop-nav
    // Find #desktop-nav section
    const navStart = html.indexOf('id="desktop-nav"');
    if (navStart !== -1) {
        const navEnd = html.indexOf('</nav>', navStart);
        if (navEnd !== -1) {
            let navContent = html.substring(navStart, navEnd);
            const listServicesRegex = /<!--\s*===*\s*LIST YOUR SERVICES\s*===*\s*-->[\s\S]*?<a\s+href="list-services\.html"[\s\S]*?<\/a>/gi;
            const simpleListRegex = /<a\s+href="list-services\.html"[^>]*>[\s\S]*?List Your Services[\s\S]*?<\/a>/gi;
            
            if (listServicesRegex.test(navContent)) {
                navContent = navContent.replace(listServicesRegex, '');
                html = html.substring(0, navStart) + navContent + html.substring(navEnd);
                modified = true;
            } else if (simpleListRegex.test(navContent)) {
                navContent = navContent.replace(simpleListRegex, '');
                html = html.substring(0, navStart) + navContent + html.substring(navEnd);
                modified = true;
            }
        }
    }

    if (modified) {
        fs.writeFileSync(file, html, 'utf8');
        console.log(`Removed List Your Services from desktop nav in: ${path.basename(file)}`);
    }
});

console.log('Finished updating all navbars!');
