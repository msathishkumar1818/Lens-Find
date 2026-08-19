
    /* ==================================================
       SHARED HEADER REFINEMENTS
    ================================================== */

    (function refineSharedHeader() {
        const inPagesDirectory = window.location.pathname.includes("/pages/");
        const contactHref = inPagesDirectory ? "contact.html" : "pages/contact.html";
        const inspirationHref = inPagesDirectory ? "inspiration.html" : "pages/inspiration.html";
        const header = document.querySelector("header");

        if (!header) return;

        // The home link is "index.html" on the root page and "../index.html"
        // on every page inside /pages.
        const logo = header.querySelector('a[href$="index.html"]');
        if (logo) {
            logo.className = "flex items-center gap-3 shrink-0 group";
            logo.setAttribute("aria-label", "LensFind home");
            logo.innerHTML = '<span class="lensfind-logo-mark"><i class="fa-solid fa-camera-retro"></i></span><span class="block"><span class="block text-[19px] font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">Lens<span class="text-amber-500">Find</span></span><span class="block mt-1 text-[8px] font-semibold uppercase tracking-[2px] text-gray-500 dark:text-gray-300">Capture what matters</span></span>';
        }

        header.querySelector('[aria-label="Search"]')?.remove();
        header.querySelector('input[placeholder="Search photographers..."]')?.closest(".relative")?.remove();

        header.querySelectorAll("a").forEach(function (link) {
            const label = link.textContent.replace(/\s+/g, " ").trim();
            if (label === "Find Photographer" || label === "Find a Photographer") link.remove();
        });

        const desktopNav = document.getElementById("desktop-nav");
        if (desktopNav && !desktopNav.querySelector('[data-nav-inspiration]')) {
            const inspiration = document.createElement("a");
            inspiration.href = inspirationHref;
            inspiration.dataset.navInspiration = "true";
            inspiration.className = "py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition";
            inspiration.textContent = "Inspiration";
            const listServices = [...desktopNav.querySelectorAll("a")].find(function (link) {
                return link.textContent.replace(/\s+/g, " ").trim() === "List Your Services";
            });
            desktopNav.insertBefore(inspiration, listServices || null);
        }

        if (desktopNav && !desktopNav.querySelector('[data-nav-contact]')) {
            const contact = document.createElement("a");
            contact.href = contactHref;
            contact.dataset.navContact = "true";
            contact.className = "py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition";
            contact.textContent = "Contact";
            desktopNav.appendChild(contact);
        }

        const mobileNav = document.getElementById("mobile-nav");
        if (mobileNav && !mobileNav.querySelector('[data-nav-inspiration]')) {
            const inspiration = document.createElement("a");
            inspiration.href = inspirationHref;
            inspiration.dataset.navInspiration = "true";
            inspiration.className = "flex items-center gap-4 px-4 py-3.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 font-medium";
            inspiration.innerHTML = '<i class="fa-solid fa-lightbulb w-5 text-amber-500"></i>Inspiration';
            const listServices = [...mobileNav.querySelectorAll("a")].find(function (link) {
                return link.textContent.replace(/\s+/g, " ").trim() === "List Your Services";
            });
            mobileNav.insertBefore(inspiration, listServices || null);
        }

        if (mobileNav && !mobileNav.querySelector('[data-nav-contact]')) {
            const contact = document.createElement("a");
            contact.href = contactHref;
            contact.dataset.navContact = "true";
            contact.className = "flex items-center gap-4 px-4 py-3.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 font-medium";
            contact.innerHTML = '<i class="fa-solid fa-envelope w-5 text-amber-500"></i>Contact';
            const login = [...mobileNav.querySelectorAll("a")].find(function (link) {
                return link.textContent.replace(/\s+/g, " ").trim() === "Login";
            });
            mobileNav.insertBefore(contact, login || null);
        }

        const directionButton = document.getElementById("direction-toggle");
        if (directionButton && !document.getElementById("direction-label")) {
            const label = document.createElement("span");
            label.id = "direction-label";
            label.textContent = "RTL";
            directionButton.appendChild(label);
        }
    })();

    /* Keep the interface polished if an image is moved, renamed, or temporarily unavailable. */
    document.addEventListener("error", function (event) {
        const image = event.target;

        if (!(image instanceof HTMLImageElement) || image.dataset.imageFallbackApplied === "true") {
            return;
        }

        image.dataset.imageFallbackApplied = "true";
        image.src = window.location.pathname.includes("/pages/")
            ? "../assets/images/p1.jpg"
            : "assets/images/p1.jpg";
        image.alt = "LensFind photography";
    }, true);

    /* Keep portfolio-card photos fully visible on the visual directory pages. */
    (function fitPortfolioCardImages() {
        const coverImagePages = new Set([
            "fashion.html",
            "food.html",
            "corporate.html",
            "photographers.html",
            "categories.html",
            "inspiration.html",
            "home2.html",
            "index.html"
        ]);
        const currentPage = window.location.pathname.split("/").pop() || "index.html";

        if (!coverImagePages.has(currentPage)) return;

        document.querySelectorAll("#photographerGrid img.object-cover, article img.object-cover, a.group > img.object-cover").forEach(function (image) {
            image.classList.remove("object-cover", "group-hover:scale-105", "group-hover:scale-110");
            image.classList.add("cover-card-image");
        });
    })();

    /* ==================================================
       MOBILE MENU
    ================================================== */

    const homeBtn = document.getElementById("home-btn");
    const homeDropdown = document.getElementById("home-dropdown");

    function closeDesktopHome() {
        if (!homeDropdown || !homeBtn) return;
        homeDropdown.classList.remove("active");
        homeBtn.setAttribute("aria-expanded", "false");
    }

    if (homeBtn && homeDropdown) {
        homeBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            const isOpen = homeDropdown.classList.toggle("active");
            homeBtn.setAttribute("aria-expanded", String(isOpen));
        });
    }

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".home-wrapper")) closeDesktopHome();
    });

    /* ==================================================
       ACTIVE NAVIGATION LINK
    ================================================== */

    function setActiveNavigation() {
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const navLinks = document.querySelectorAll("#desktop-nav a, #mobile-nav a");

        navLinks.forEach(function (link) {
            const linkPage = link.getAttribute("href").split("/").pop();
            const isInspirationPage = ["inspiration.html", "weddings.html", "fashion.html", "food.html", "corporate.html"].includes(currentPage);
            const isCurrent = linkPage === currentPage || (isInspirationPage && link.dataset.navInspiration === "true");

            link.classList.toggle("nav-current", isCurrent);
            link.querySelectorAll("i").forEach(function (icon) {
                icon.classList.toggle("nav-current", isCurrent);
            });

            if (isCurrent) link.setAttribute("aria-current", "page");
        });

        const isHome = currentPage === "index.html" || currentPage === "home2.html";
        [homeBtn, document.getElementById("mobile-home-btn")].forEach(function (button) {
            if (button) button.classList.toggle("nav-current", isHome);
        });
    }

    setActiveNavigation();

    /* ==================================================
       PAGE TRANSITION LOADER
    ================================================== */

    const pageLoader = document.createElement("div");
    pageLoader.id = "site-loader";
    pageLoader.setAttribute("aria-hidden", "true");
    pageLoader.setAttribute("role", "status");
    pageLoader.setAttribute("aria-label", "Loading page");
    pageLoader.innerHTML = '<span class="site-loader-ring" aria-hidden="true"></span>';
    document.body.appendChild(pageLoader);

    document.querySelectorAll('a[href]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const href = link.getAttribute("href");
            const opensNewTab = link.target === "_blank" || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey;

            if (href && !href.startsWith("#") && !href.startsWith("mailto:") && !href.startsWith("tel:") && !href.startsWith("javascript:") && !opensNewTab) {
                pageLoader.setAttribute("aria-hidden", "false");
                pageLoader.classList.add("active");
            }
        });
    });

    window.addEventListener("pageshow", function () {
        pageLoader.classList.remove("active");
        pageLoader.setAttribute("aria-hidden", "true");
    });

    const menuBtn =
        document.getElementById("menu-btn");

    const mobileMenu =
        document.getElementById("mobile-menu");

    const menuIcon =
        document.getElementById("menu-icon");

    if (menuBtn && mobileMenu) {
        menuBtn.setAttribute("aria-controls", "mobile-menu");
    }

    function closeMobileMenu() {
        if (!mobileMenu || !menuBtn || !menuIcon) return;

        mobileMenu.classList.remove("active");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open menu");
        document.body.classList.remove("menu-open");
    }


    if (menuBtn && mobileMenu && menuIcon) menuBtn.addEventListener(
        "click",
        function () {


            const isOpen =
                mobileMenu.classList.contains("active");


            if (isOpen) {
                closeMobileMenu();


            } else {

                mobileMenu.classList.add("active");

                menuIcon.classList.remove(
                    "fa-bars"
                );

                menuIcon.classList.add(
                    "fa-xmark"
                );

                menuBtn.setAttribute(
                    "aria-expanded",
                    "true"
                );

                menuBtn.setAttribute("aria-label", "Close menu");
                document.body.classList.add("menu-open");

            }

        }
    );


    /* ==================================================
       MOBILE HOME DROPDOWN
    ================================================== */

    const mobileHomeBtn =
        document.getElementById(
            "mobile-home-btn"
        );

    const mobileHomeMenu =
        document.getElementById(
            "mobile-home-menu"
        );

    const mobileHomeIcon =
        document.getElementById(
            "mobile-home-icon"
        );

    if (mobileHomeBtn && mobileHomeMenu) {
        mobileHomeBtn.setAttribute("aria-controls", "mobile-home-menu");
        mobileHomeBtn.setAttribute("aria-expanded", "false");
    }


    if (mobileHomeBtn && mobileHomeMenu && mobileHomeIcon) mobileHomeBtn.addEventListener(
        "click",
        function () {


            mobileHomeMenu.classList.toggle(
                "active"
            );

            mobileHomeBtn.setAttribute(
                "aria-expanded",
                String(mobileHomeMenu.classList.contains("active"))
            );


            mobileHomeIcon.classList.toggle(
                "rotate-180"
            );

        }
    );


    /* ==================================================
       DARK MODE
    ================================================== */

    const themeToggle =
        document.getElementById(
            "theme-toggle"
        );

    const mobileThemeToggle =
        document.getElementById(
            "mobile-theme-toggle"
        );

    const themeIcon =
        document.getElementById(
            "theme-icon"
        );

    const mobileThemeIcon =
        document.getElementById(
            "mobile-theme-icon"
        );


    function updateThemeIcons() {
        const isDark =
            document.documentElement
                .classList
                .contains("dark");


        if (isDark) {

            themeIcon?.classList.remove(
                "fa-moon"
            );

            themeIcon?.classList.add(
                "fa-sun"
            );


            mobileThemeIcon?.classList.remove(
                "fa-moon"
            );

            mobileThemeIcon?.classList.add(
                "fa-sun"
            );

            const label = document.getElementById("mobile-theme-label");
            if (label) label.textContent = "Light mode";


        } else {

            themeIcon?.classList.remove(
                "fa-sun"
            );

            themeIcon?.classList.add(
                "fa-moon"
            );


            mobileThemeIcon?.classList.remove(
                "fa-sun"
            );

            mobileThemeIcon?.classList.add(
                "fa-moon"
            );

            const label = document.getElementById("mobile-theme-label");
            if (label) label.textContent = "Dark mode";

        }

    }


    function toggleTheme() {


        document.documentElement
            .classList
            .toggle("dark");


        const theme =
            document.documentElement
                .classList
                .contains("dark")
                ? "dark"
                : "light";


        localStorage.setItem(
            "theme",
            theme
        );


        updateThemeIcons();

    }


    if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
    if (mobileThemeToggle) mobileThemeToggle.addEventListener("click", toggleTheme);


    /* ==================================================
       LOAD SAVED THEME
    ================================================== */

    if (
        localStorage.getItem("theme") === "dark"
    ) {

        document.documentElement
            .classList
            .add("dark");

    }


    updateThemeIcons();


    /* ==================================================
       RTL / LTR
    ================================================== */

    const directionToggle =
        document.getElementById(
            "direction-toggle"
        );

    const mobileDirectionToggle =
        document.getElementById(
            "mobile-direction-toggle"
        );

    const directionIcon =
        document.getElementById(
            "direction-icon"
        );

    const mobileDirectionIcon =
        document.getElementById(
            "mobile-direction-icon"
        );


    function updateDirectionIcons() {

        if (!directionIcon || !mobileDirectionIcon) return;


        const isRTL =
            document.documentElement.dir === "rtl";


        if (isRTL) {

            directionIcon.classList.remove(
                "fa-arrow-right-arrow-left"
            );

            directionIcon.classList.add(
                "fa-arrow-left"
            );


            mobileDirectionIcon.classList.remove(
                "fa-arrow-right-arrow-left"
            );

            mobileDirectionIcon.classList.add(
                "fa-arrow-left"
            );

            const label = document.getElementById("mobile-direction-label");
            if (label) label.textContent = "LTR";
            const desktopLabel = document.getElementById("direction-label");
            if (desktopLabel) desktopLabel.textContent = "LTR";


        } else {

            directionIcon.classList.remove(
                "fa-arrow-left"
            );

            directionIcon.classList.add(
                "fa-arrow-right-arrow-left"
            );


            mobileDirectionIcon.classList.remove(
                "fa-arrow-left"
            );

            mobileDirectionIcon.classList.add(
                "fa-arrow-right-arrow-left"
            );

            const label = document.getElementById("mobile-direction-label");
            if (label) label.textContent = "RTL";
            const desktopLabel = document.getElementById("direction-label");
            if (desktopLabel) desktopLabel.textContent = "RTL";

        }

    }


    function toggleDirection() {


        const currentDirection =
            document.documentElement.dir;


        if (currentDirection === "rtl") {

            document.documentElement.dir =
                "ltr";


            localStorage.setItem(
                "direction",
                "ltr"
            );


        } else {

            document.documentElement.dir =
                "rtl";


            localStorage.setItem(
                "direction",
                "rtl"
            );

        }


        updateDirectionIcons();

    }


    if (directionToggle) directionToggle.addEventListener("click", toggleDirection);
    if (mobileDirectionToggle) mobileDirectionToggle.addEventListener("click", toggleDirection);


    /* ==================================================
       LOAD SAVED DIRECTION
    ================================================== */

    const savedDirection =
        localStorage.getItem("direction");


    if (savedDirection) {

        document.documentElement.dir =
            savedDirection;

    } else {

        document.documentElement.dir =
            "ltr";

    }


    updateDirectionIcons();


    /* ==================================================
       CLOSE MOBILE MENU
    ================================================== */

    const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];


    mobileLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    closeMobileMenu();

                }
            );

        }
    );

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeMobileMenu();
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth >= 1024) closeMobileMenu();
    });



    function findPhotographer() {

    const location =
        document.querySelectorAll("select")[0].value;

    const specialty =
        document.querySelectorAll("select")[1].value;


    if (!location && !specialty) {

        window.location.href = "photographers.html";

        return;

    }


    const params = new URLSearchParams();


    if (location) {

        params.append("city", location);

    }


    if (specialty) {

        params.append("specialty", specialty);

    }


    window.location.href =
        "photographers.html?" + params.toString();

}




// <!-- ====================================================== -->
// <!-- NEWSLETTER SCRIPT -->
// <!-- ====================================================== -->



function subscribeNewsletter(event) {

    event.preventDefault();

    const email =
        document.getElementById("footerEmail").value.trim();


    if (!email) {

        return;

    }


    alert(
        "Thank you! You are now subscribed."
    );


    document
        .getElementById("footerEmail")
        .value = "";

}



// <!-- ====================================================== -->
// <!-- HOVER SCRIPT -->
// <!-- ====================================================== -->



document
    .querySelectorAll(".category-row")
    .forEach(row => {

        const title =
            row.querySelector(".category-title");

        const arrow =
            row.querySelector(".category-arrow");


        row.addEventListener("mouseenter", () => {

            title.classList.add(
                "translate-x-3",
                "text-amber-500"
            );

            arrow.classList.add(
                "bg-amber-500",
                "border-amber-500",
                "text-black",
                "rotate-[-45deg]"
            );

        });


        row.addEventListener("mouseleave", () => {

            title.classList.remove(
                "translate-x-3",
                "text-amber-500"
            );

            arrow.classList.remove(
                "bg-amber-500",
                "border-amber-500",
                "text-black",
                "rotate-[-45deg]"
            );

        });

    });




//     <!-- ====================================================== -->
// <!-- HOVER SCRIPT -->
// <!-- ====================================================== -->



document
    .querySelectorAll(".toolkit-row")
    .forEach(row => {

        const title =
            row.querySelector(".toolkit-title");


        row.addEventListener("mouseenter", () => {

            title.classList.add(
                "translate-x-3",
                "text-amber-400"
            );

        });


        row.addEventListener("mouseleave", () => {

            title.classList.remove(
                "translate-x-3",
                "text-amber-400"
            );

        });

    });





//     <!-- ====================================================== -->
// <!-- TESTIMONIAL INTERACTION -->
// <!-- ====================================================== -->



const testimonialData = [

    {
        image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=85",

        name:
        "Priya & Karthik",

        location:
        "Wedding · Chennai",

        quote:
        "Finding our photographer felt effortless. We didn't just find someone who could take beautiful photos — we found someone who understood our story."
    },

    {
        image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85",

        name:
        "Aditya & Rhea",

        location:
        "Engagement · Bengaluru",

        quote:
        "The portfolio made our decision incredibly easy. We knew the moment we saw the work that this was the visual style we wanted."
    },

    {
        image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=85",

        name:
        "Ananya Rao",

        location:
        "Brand Shoot · Mumbai",

        quote:
        "We found exactly the creative direction our brand needed. The whole experience was simple, professional and inspiring."
    },

    {
        image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=85",

        name:
        "Vikram Shah",

        location:
        "Corporate · Hyderabad",

        quote:
        "Instead of searching through hundreds of random profiles, LensFind helped us shortlist photographers who actually matched our requirements."
    }

];


const testimonialDots =
    document.querySelectorAll(".testimonial-dot");


const testimonialImage =
    document.querySelector(
        ".lg\\:col-span-3 img"
    );


const testimonialName =
    document.querySelector(
        ".lg\\:col-span-3 .text-sm"
    );


const testimonialLocation =
    document.querySelector(
        ".lg\\:col-span-3 .text-xs"
    );


const testimonialQuote =
    document.querySelector(
        "blockquote"
    );


testimonialDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        const data =
            testimonialData[index];


        testimonialImage.src =
            data.image;


        testimonialName.textContent =
            data.name;


        testimonialLocation.textContent =
            data.location;


        testimonialQuote.textContent =
            data.quote;


        testimonialDots.forEach(btn => {

            btn.classList.remove(
                "bg-black",
                "dark:bg-white",
                "text-white",
                "dark:text-black"
            );

            btn.classList.add(
                "border",
                "border-gray-200",
                "dark:border-white/10",
                "text-gray-400"
            );

        });


        dot.classList.remove(
            "border",
            "border-gray-200",
            "dark:border-white/10",
            "text-gray-400"
        );


        dot.classList.add(
            "bg-black",
            "dark:bg-white",
            "text-white",
            "dark:text-black"
        );

    });

});

    const testimonialPrevious = document.getElementById("testimonial-prev");
    const testimonialNext = document.getElementById("testimonial-next");
    if (testimonialDots.length && testimonialPrevious && testimonialNext) {
        function moveTestimonial(offset) {
            const current = [...testimonialDots].findIndex(function(dot) {
                return dot.classList.contains("bg-black");
            });
            testimonialDots[(current + offset + testimonialDots.length) % testimonialDots.length].click();
        }
        testimonialPrevious.addEventListener("click", function() { moveTestimonial(-1); });
        testimonialNext.addEventListener("click", function() { moveTestimonial(1); });
    }

/* ==================================================
   SITE-WIDE ROUTES, FAVICON & ACCESSIBLE ACCORDIONS
================================================== */
(function sitePolish() {
    const inPages = window.location.pathname.includes('/pages/');
    const pageRoot = inPages ? '' : 'pages/';
    const home = inPages ? '../index.html' : 'index.html';
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.body.classList.add('page-' + currentPage.replace('.html', '').replace(/[^a-z0-9-]/gi, '-'));

    const icon = document.createElement('link');
    icon.rel = 'icon';
    icon.type = 'image/svg+xml';
    icon.href = inPages ? '../assets/images/lensfind-favicon.svg' : 'assets/images/lensfind-favicon.svg';
    document.head.appendChild(icon);

    const replacements = {
        'list-your-services.html': pageRoot + 'list-services.html',
        'photographer-login.html': pageRoot + 'login.html',
        'pricing.html': pageRoot + 'list-services.html#plans',
        'resources.html': pageRoot + 'inspiration.html',
        'contact.html': pageRoot + 'contact.html',
        'about.html': home + '#about',
        'careers.html': pageRoot + 'contact.html#contact-form',
        'blog.html': pageRoot + 'inspiration.html',
        'faq.html': pageRoot + 'contact.html#faq',
        'privacy.html': home + '#privacy',
        'terms.html': home + '#terms',
        'help.html': pageRoot + 'contact.html#faq'
    };
    document.querySelectorAll('a[href]').forEach(function(link) {
        const value = link.getAttribute('href');
        const clean = value.replace(/^\.\.\/\/?pages\//, '').replace(/^pages\//, '');
        if (replacements[clean]) link.href = replacements[clean];
        if (inPages && (value === 'index.html' || value.startsWith('pages/'))) {
            link.href = value === 'index.html' ? home : value.replace(/^pages\//, '');
        }
        if (value === '#') {
            const label = link.textContent.trim().toLowerCase();
            if (label.includes('create an account')) link.href = 'register.html';
            else if (label.includes('forgot')) link.href = 'contact.html#contact-form';
        }
    });

    document.querySelectorAll('.faq-item, [data-faq-item]').forEach(function(item, index) {
        const heading = item.querySelector('button, h3, h4');
        const answer = item.querySelector('p');
        if (!heading || !answer || heading.tagName === 'P') return;
        let trigger = heading;
        if (heading.tagName !== 'BUTTON') {
            trigger = document.createElement('button');
            trigger.type = 'button'; trigger.className = 'faq-trigger';
            trigger.innerHTML = heading.innerHTML + '<span class="faq-icon" aria-hidden="true">+</span>';
            heading.replaceWith(trigger);
        }
        const panelId = 'faq-panel-' + index;
        answer.id = panelId; answer.classList.add('faq-panel'); answer.hidden = true;
        trigger.classList.add('faq-trigger'); trigger.setAttribute('aria-expanded', 'false'); trigger.setAttribute('aria-controls', panelId);
        if (!trigger.querySelector('.faq-icon')) trigger.insertAdjacentHTML('beforeend', '<span class="faq-icon" aria-hidden="true">+</span>');
        trigger.addEventListener('click', function() {
            const open = trigger.getAttribute('aria-expanded') === 'true';
            trigger.setAttribute('aria-expanded', String(!open)); answer.hidden = open;
        });
    });

    if (window.location.pathname.endsWith('/login.html')) {
        document.querySelector('#desktop-nav')?.remove();
        document.querySelector('#mobile-menu')?.remove();
        document.querySelector('#menu-btn')?.remove();
        document.querySelectorAll('header a').forEach(function(link) {
            if (!link.getAttribute('href')?.includes('index.html')) link.remove();
        });
    }
})();

/* A consistent, accessible return-to-top control for every page. */
(function addBackToTop() {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    button.innerHTML = '<i class="fa-solid fa-arrow-up" aria-hidden="true"></i>';
    document.body.appendChild(button);

    function updateVisibility() {
        button.classList.toggle('is-visible', window.scrollY > 360);
    }
    window.addEventListener('scroll', updateVisibility, { passive: true });
    button.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    updateVisibility();
})();




// <!-- ========================================================= -->
// <!-- MATCH CONSOLE JAVASCRIPT -->
// <!-- ========================================================= -->

const photographerMatches = {

    memory: {
        number: "01 / 05",
        tag: "Memory maker",
        title: "Wedding Photographer",
        text: "For celebrations where emotion matters more than perfect poses.",
        style: "Documentary",
        feeling: "Warm & honest",
        best: "Weddings",
        link: "photographers.html?type=wedding"
    },

    identity: {
        number: "02 / 05",
        tag: "Personal vision",
        title: "Portrait Photographer",
        text: "For people who want photographs that feel natural, confident and personal.",
        style: "Editorial",
        feeling: "Clean & expressive",
        best: "Portraits",
        link: "photographers.html?type=portrait"
    },

    brand: {
        number: "03 / 05",
        tag: "Visual identity",
        title: "Commercial Photographer",
        text: "For products, campaigns and brands that need a stronger visual language.",
        style: "Polished",
        feeling: "Bold & refined",
        best: "Brands",
        link: "photographers.html?type=commercial"
    },

    story: {
        number: "04 / 05",
        tag: "Story builder",
        title: "Editorial Photographer",
        text: "For projects that need atmosphere, personality and a clear visual narrative.",
        style: "Cinematic",
        feeling: "Artful & layered",
        best: "Editorial",
        link: "photographers.html?type=editorial"
    },

    everyday: {
        number: "05 / 05",
        tag: "Real moments",
        title: "Lifestyle Photographer",
        text: "For everyday stories captured naturally without forcing the moment.",
        style: "Candid",
        feeling: "Relaxed & real",
        best: "Lifestyle",
        link: "photographers.html?type=lifestyle"
    }

};


function showMatch(type) {

    const data = photographerMatches[type];

    if (!data) return;


    document.getElementById("matchNumber").textContent =
        data.number;

    document.getElementById("matchTag").textContent =
        data.tag;

    document.getElementById("matchTitle").textContent =
        data.title;

    document.getElementById("matchText").textContent =
        data.text;

    document.getElementById("matchStyle").textContent =
        data.style;

    document.getElementById("matchFeeling").textContent =
        data.feeling;

    document.getElementById("matchBest").textContent =
        data.best;

    document.getElementById("matchLink").href =
        data.link;


    document.querySelectorAll(".match-option").forEach(button => {

        button.classList.remove(
            "bg-[#F5F1EA]",
            "dark:bg-white/5"
        );

    });


    event.currentTarget.classList.add(
        "bg-[#F5F1EA]",
        "dark:bg-white/5"
    );

}
