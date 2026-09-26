const fs = require('fs');
const path = require('path');

function normalize(str) {
    return str.replace(/\r\n/g, '\n');
}

const rootFile = path.join(__dirname, '..', 'index.html');
const pagesDir = path.join(__dirname, '..', 'pages');
const pageFiles = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html')).map(f => path.join(pagesDir, f));

// For index.html
function getStandardNav(isRoot) {
    const p = isRoot ? 'pages/' : '';
    const h = isRoot ? 'index.html' : '../index.html';
    const h2 = isRoot ? 'pages/home2.html' : 'home2.html';
    const photo = isRoot ? 'pages/photographers.html' : 'photographers.html';
    const cat = isRoot ? 'pages/categories.html' : 'categories.html';
    const insp = isRoot ? 'pages/inspiration.html' : 'inspiration.html';
    const about = isRoot ? 'pages/about.html' : 'about.html';
    const contact = isRoot ? 'pages/contact.html' : 'contact.html';

    return `<nav id="desktop-nav" class="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto justify-center whitespace-nowrap">
                    <!-- HOME DROPDOWN -->
                    <div class="relative home-wrapper">
                        <button id="home-btn" type="button" aria-expanded="false" aria-controls="home-dropdown" class="flex items-center gap-2 py-2 text-sm font-medium text-gray-900 dark:text-white hover:text-amber-500 transition">
                            Home <i class="fa-solid fa-chevron-down text-[9px]"></i>
                        </button>
                        <div id="home-dropdown" class="home-dropdown absolute left-0 top-full pt-4">
                            <div class="w-52 p-2 rounded-2xl bg-white dark:bg-[#151515] border border-gray-200 dark:border-white/10 shadow-2xl">
                                <a href="${h}" class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-amber-500 transition">
                                    <i class="fa-solid fa-house w-5 text-amber-500"></i> Home 1
                                </a>
                                <a href="${h2}" class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-amber-500 transition">
                                    <i class="fa-solid fa-house-chimney w-5 text-amber-500"></i> Home 2
                                </a>
                            </div>
                        </div>
                    </div>

                    <a href="${photo}" class="py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition">
                        Browse Photographers
                    </a>

                    <a href="${cat}" class="py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition">
                        Categories
                    </a>

                    <a href="${insp}" class="py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition">
                        Inspiration
                    </a>

                    <a href="${about}" class="py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition">
                        About
                    </a>

                    <a href="${contact}" class="py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-amber-500 transition">
                        Contact
                    </a>
                </nav>`;
}

[rootFile, ...pageFiles].forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let norm = normalize(content);

    const isRoot = file.endsWith('index.html') && !file.includes('pages');
    const newNav = getStandardNav(isRoot);

    const navStart = norm.indexOf('<nav id="desktop-nav"');
    if (navStart !== -1) {
        const navEnd = norm.indexOf('</nav>', navStart);
        if (navEnd !== -1) {
            norm = norm.substring(0, navStart) + newNav + norm.substring(navEnd + 6);
            fs.writeFileSync(file, norm, 'utf8');
            console.log(`Synced header nav in: ${path.basename(file)}`);
        }
    }
});

console.log('All headers synchronized!');
