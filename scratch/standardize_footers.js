const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function getFooterHtml(isRoot) {
    const homeHref = isRoot ? 'index.html' : '../index.html';
    const photogHref = isRoot ? 'pages/photographers.html' : 'photographers.html';
    const catHref = isRoot ? 'pages/categories.html' : 'categories.html';
    const inspHref = isRoot ? 'pages/inspiration.html' : 'inspiration.html';
    const listHref = isRoot ? 'pages/list-services.html' : 'list-services.html';
    const aboutHref = isRoot ? 'pages/about.html' : 'about.html';
    const contactHref = isRoot ? 'pages/contact.html' : 'contact.html';

    return `    <!-- ========================================================= -->
    <!-- FOOTER -->
    <!-- ========================================================= -->
    <footer class="bg-[#111111] dark:bg-black text-white border-t border-white/10">

        <!-- MAIN FOOTER -->
        <div class="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 lg:py-16">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

                <!-- BRAND COLUMN -->
                <div class="space-y-5">
                    <a href="${homeHref}" class="group inline-flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-black border border-white/15 flex items-center justify-center shadow-md group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-300">
                            <i class="fa-solid fa-camera text-white text-base"></i>
                        </div>
                        <div class="block">
                            <div class="text-[18px] font-bold tracking-tight text-white leading-none">
                                Lens<span class="text-amber-500">Find</span>
                            </div>
                            <p class="text-[8px] sm:text-[9px] text-gray-400 uppercase tracking-[2px] mt-1">
                                Photography Directory
                            </p>
                        </div>
                    </a>

                    <p class="text-sm leading-relaxed text-gray-400 max-w-sm">
                        Discover talented photographers, explore creative work and find the perfect visual storyteller for your next project.
                    </p>

                    <!-- SOCIAL ICONS -->
                    <div class="flex items-center gap-3 pt-1">
                        <a href="#" aria-label="Instagram" class="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition">
                            <i class="fa-brands fa-instagram text-sm"></i>
                        </a>
                        <a href="#" aria-label="Facebook" class="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition">
                            <i class="fa-brands fa-facebook-f text-sm"></i>
                        </a>
                        <a href="#" aria-label="Pinterest" class="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition">
                            <i class="fa-brands fa-pinterest-p text-sm"></i>
                        </a>
                        <a href="#" aria-label="LinkedIn" class="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition">
                            <i class="fa-brands fa-linkedin-in text-sm"></i>
                        </a>
                    </div>
                </div>

                <!-- EXPLORE COLUMN -->
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-6">
                        Explore
                    </h3>
                    <ul class="space-y-3.5 text-sm text-gray-400">
                        <li><a href="${homeHref}" class="hover:text-amber-400 transition">Home</a></li>
                        <li><a href="${photogHref}" class="hover:text-amber-400 transition">Browse Photographers</a></li>
                        <li><a href="${catHref}" class="hover:text-amber-400 transition">Categories</a></li>
                        <li><a href="${inspHref}" class="hover:text-amber-400 transition">Inspiration</a></li>
                    </ul>
                </div>

                <!-- FOR PHOTOGRAPHERS COLUMN -->
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-6">
                        For Photographers
                    </h3>
                    <ul class="space-y-3.5 text-sm text-gray-400">
                        <li><a href="${listHref}" class="hover:text-amber-400 transition">List Your Services</a></li>
                        <li><a href="${aboutHref}" class="hover:text-amber-400 transition">About Us</a></li>
                        <li><a href="${contactHref}" class="hover:text-amber-400 transition">Contact Us</a></li>
                    </ul>
                </div>

                <!-- CONTACT COLUMN -->
                <div>
                    <h3 class="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-6">
                        Contact
                    </h3>
                    <ul class="space-y-3.5 text-sm text-gray-400">
                        <li>
                            <a href="mailto:hello@lensfind.com" class="inline-flex items-center gap-3 hover:text-amber-400 transition">
                                <i class="fa-regular fa-envelope w-4 text-center text-amber-500"></i>
                                <span>hello@lensfind.com</span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+919876543210" class="inline-flex items-center gap-3 hover:text-amber-400 transition">
                                <i class="fa-solid fa-phone w-4 text-center text-amber-500"></i>
                                <span>+91 98765 43210</span>
                            </a>
                        </li>
                        <li>
                            <div class="inline-flex items-center gap-3">
                                <i class="fa-solid fa-location-dot w-4 text-center text-amber-500"></i>
                                <span>Chennai, India</span>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>

        <!-- BOTTOM BAR -->
        <div class="border-t border-white/10">
            <div class="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                <p class="text-center sm:text-left">
                    © 2026 LensFind. All rights reserved.
                </p>

                <div class="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-2 text-xs text-gray-400">
                    <a href="#" class="text-gray-400 hover:text-amber-400 transition">Privacy Policy</a>
                    <span class="w-1 h-1 rounded-full bg-gray-600 inline-block"></span>
                    <a href="#" class="text-gray-400 hover:text-amber-400 transition">Terms</a>
                    <span class="w-1 h-1 rounded-full bg-amber-500 inline-block"></span>
                    <span class="text-gray-400">Made for visual storytellers</span>
                </div>
            </div>
        </div>

    </footer>`;
}

// Update index.html
const indexPath = path.join(rootDir, 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');
const footerRegex = /<!--\s*={5,}\s*-->\s*<!--\s*FOOTER\s*-->\s*<!--\s*={5,}\s*-->[\s\S]*?<\/footer>/i;
const fallbackFooterRegex = /<footer[\s\S]*?<\/footer>/i;

if (footerRegex.test(indexContent)) {
    indexContent = indexContent.replace(footerRegex, getFooterHtml(true).trim());
    fs.writeFileSync(indexPath, indexContent, 'utf8');
    console.log('Updated index.html footer');
} else if (fallbackFooterRegex.test(indexContent)) {
    indexContent = indexContent.replace(fallbackFooterRegex, getFooterHtml(true).trim());
    fs.writeFileSync(indexPath, indexContent, 'utf8');
    console.log('Updated index.html footer (fallback)');
}

// Update pages
const pagesDir = path.join(rootDir, 'pages');
fs.readdirSync(pagesDir).forEach(file => {
    if (!file.endsWith('.html') || file === 'login.html' || file === 'register.html') return;
    const filePath = path.join(pagesDir, file);
    let pageContent = fs.readFileSync(filePath, 'utf8');

    if (footerRegex.test(pageContent)) {
        pageContent = pageContent.replace(footerRegex, getFooterHtml(false).trim());
        fs.writeFileSync(filePath, pageContent, 'utf8');
        console.log(`Updated footer in: ${file}`);
    } else if (fallbackFooterRegex.test(pageContent)) {
        pageContent = pageContent.replace(fallbackFooterRegex, getFooterHtml(false).trim());
        fs.writeFileSync(filePath, pageContent, 'utf8');
        console.log(`Updated footer (fallback) in: ${file}`);
    }
});

console.log('All footers aligned and updated successfully.');
