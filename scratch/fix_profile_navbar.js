const fs = require('fs');
const path = require('path');

const profilePath = path.join(__dirname, '..', 'pages', 'photographer-profile.html');
let content = fs.readFileSync(profilePath, 'utf8');

function normalize(str) {
    return str.replace(/\r\n/g, '\n');
}

let normContent = normalize(content);

const oldHeaderNav = `        <!-- DESKTOP NAV -->
        <nav id="desktop-nav" class="hidden lg:flex items-center gap-4 xl:gap-6 ml-6 xl:ml-8 whitespace-nowrap">
          
          <!-- HOME DROPDOWN -->
          <div class="relative home-wrapper">
            <button id="home-btn" type="button" aria-expanded="false" aria-controls="home-dropdown" class="flex items-center gap-2 py-2 text-sm font-medium text-gray-900 dark:text-white hover:text-amber-500 transition">
              Home <i class="fa-solid fa-chevron-down text-[9px]"></i>
            </button>
            <div id="home-dropdown" class="home-dropdown absolute left-0 top-full pt-4">
              <div class="w-52 p-2 rounded-2xl bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/10 shadow-2xl">
                <a href="../index.html" class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-amber-500 transition">
                  <i class="fa-solid fa-house w-5 text-amber-500"></i> Home 1
                </a>
                <a href="home2.html" class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-amber-500 transition">
                  <i class="fa-solid fa-house-chimney w-5 text-amber-500"></i> Home 2
                </a>
              </div>
            </div>
          </div>

          <a href="photographers.html" class="py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition nav-current">Browse Photographers</a>
          <a href="categories.html" class="py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition">Categories</a>
          <a href="inspiration.html" class="py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition">Inspiration</a>
          <a href="portfolio.html" class="py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition">Portfolios</a>
          <a href="about.html" class="py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition">About</a>
          <a href="contact.html" class="py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition">Contact</a>
        </nav>

        <!-- DESKTOP RIGHT -->
        <div class="hidden lg:flex items-center gap-2 ml-auto">
          <a id="contact-photographer" href="#contact-photographer-section" class="inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/20 text-xs font-semibold text-gray-800 dark:text-white hover:border-amber-500 hover:text-amber-500 transition shadow-sm whitespace-nowrap">
            Contact Photographer
          </a>

          <!-- RTL / LTR -->
          <button id="direction-toggle" type="button" aria-label="Toggle RTL LTR" title="RTL / LTR" class="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-amber-500 hover:bg-gray-100 dark:hover:bg-white/5 transition">
            <i id="direction-icon" class="fa-solid fa-arrow-right-arrow-left"></i>
          </button>

          <!-- DARK MODE -->
          <button id="theme-toggle" type="button" aria-label="Toggle dark mode" title="Toggle theme" class="w-10 h-10 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-amber-500 hover:bg-gray-100 dark:hover:bg-white/5 transition">
            <i id="theme-icon" class="fa-solid fa-moon"></i>
          </button>

          <div class="h-7 w-px bg-gray-200 dark:bg-white/10 mx-1"></div>

          <a href="photographers.html" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-amber-500 dark:hover:bg-amber-500 dark:hover:text-white transition-all duration-300 whitespace-nowrap">
            Need a Photographer <i class="fa-solid fa-arrow-right text-xs"></i>
          </a>
        </div>`;

const newHeaderNav = `        <!-- DESKTOP NAV -->
        <nav id="desktop-nav" class="hidden lg:flex items-center gap-3 xl:gap-5 ml-3 xl:ml-6 whitespace-nowrap shrink-0">
          
          <!-- HOME DROPDOWN -->
          <div class="relative home-wrapper">
            <button id="home-btn" type="button" aria-expanded="false" aria-controls="home-dropdown" class="flex items-center gap-1.5 py-2 text-xs xl:text-sm font-medium text-gray-900 dark:text-white hover:text-amber-500 transition">
              Home <i class="fa-solid fa-chevron-down text-[8px] xl:text-[9px]"></i>
            </button>
            <div id="home-dropdown" class="home-dropdown absolute left-0 top-full pt-4">
              <div class="w-52 p-2 rounded-2xl bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/10 shadow-2xl">
                <a href="../index.html" class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-amber-500 transition">
                  <i class="fa-solid fa-house w-5 text-amber-500"></i> Home 1
                </a>
                <a href="home2.html" class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-amber-500 transition">
                  <i class="fa-solid fa-house-chimney w-5 text-amber-500"></i> Home 2
                </a>
              </div>
            </div>
          </div>

          <a href="photographers.html" class="py-2 text-xs xl:text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition nav-current">Browse Photographers</a>
          <a href="categories.html" class="py-2 text-xs xl:text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition">Categories</a>
          <a href="inspiration.html" class="py-2 text-xs xl:text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition">Inspiration</a>
          <a href="about.html" class="py-2 text-xs xl:text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition">About</a>
          <a href="contact.html" class="py-2 text-xs xl:text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition">Contact</a>
        </nav>

        <!-- DESKTOP RIGHT -->
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

console.log('Old header match:', normContent.includes(normalize(oldHeaderNav)));
normContent = normContent.replace(normalize(oldHeaderNav), normalize(newHeaderNav));

fs.writeFileSync(profilePath, normContent, 'utf8');
console.log('Updated photographer-profile.html successfully!');
