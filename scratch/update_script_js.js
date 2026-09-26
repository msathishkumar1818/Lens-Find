const fs = require('fs');
const path = require('path');

const jsPath = path.resolve(__dirname, '..', 'assets', 'js', 'script.js');
let js = fs.readFileSync(jsPath, 'utf8');

// Update refineSharedHeader function in script.js
const oldRefineRegex = /\(function refineSharedHeader\(\) \{[\s\S]*?\}\)\(\);/;
const newRefineFunction = `(function refineSharedHeader() {
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
            desktopNav.querySelectorAll("a, button").forEach(function(el) {
                el.classList.add("whitespace-nowrap", "shrink-0");
            });
        }

        if (desktopNav && !desktopNav.querySelector('[data-nav-inspiration]')) {
            const hasInspiration = [...desktopNav.querySelectorAll("a")].some(a => a.textContent.trim().toLowerCase() === "inspiration");
            if (!hasInspiration) {
                const inspiration = document.createElement("a");
                inspiration.href = inspirationHref;
                inspiration.dataset.navInspiration = "true";
                inspiration.className = "py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition whitespace-nowrap shrink-0";
                inspiration.textContent = "Inspiration";
                const listServices = [...desktopNav.querySelectorAll("a")].find(function (link) {
                    return link.textContent.replace(/\\s+/g, " ").trim() === "List Your Services";
                });
                desktopNav.insertBefore(inspiration, listServices || null);
            }
        }

        if (desktopNav) {
            const hasAbout = [...desktopNav.querySelectorAll("a")].some(a => a.textContent.trim().toLowerCase().includes("about"));
            if (!hasAbout) {
                const about = document.createElement("a");
                about.href = aboutHref;
                about.dataset.navAbout = "true";
                about.className = "py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition whitespace-nowrap shrink-0";
                about.textContent = "About";
                const contactEl = [...desktopNav.querySelectorAll("a")].find(link => link.textContent.replace(/\\s+/g, " ").trim().toLowerCase() === "contact");
                desktopNav.insertBefore(about, contactEl || null);
            }
        }

        if (desktopNav && !desktopNav.querySelector('[data-nav-contact]')) {
            const hasContact = [...desktopNav.querySelectorAll("a")].some(a => a.textContent.trim().toLowerCase() === "contact");
            if (!hasContact) {
                const contact = document.createElement("a");
                contact.href = contactHref;
                contact.dataset.navContact = "true";
                contact.className = "py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition whitespace-nowrap shrink-0";
                contact.textContent = "Contact";
                desktopNav.appendChild(contact);
            }
        }

        // Ensure strictly ONE "Need a Photographer" CTA button remains visible in desktop header
        const desktopRight = header.querySelector(".hidden.lg\\\\:flex.ml-auto, .hidden.lg\\\\:flex, .hidden.xl\\\\:flex");
        if (desktopRight) {
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

        // Clean up any duplicate CTA from mobile header bar so only the menu button remains
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

if (oldRefineRegex.test(js)) {
    js = js.replace(oldRefineRegex, newRefineFunction);
    console.log('refineSharedHeader replaced!');
}

fs.writeFileSync(jsPath, js, 'utf8');
console.log('script.js successfully updated!');
