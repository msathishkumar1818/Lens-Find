const fs = require('fs');
const path = require('path');

// 1. Update photographer-profile.html
const profilePath = path.join(__dirname, '..', 'pages', 'photographer-profile.html');
let profileContent = fs.readFileSync(profilePath, 'utf8');

function normalize(str) {
    return str.replace(/\r\n/g, '\n');
}

let normProfile = normalize(profileContent);

// Update figcaptions to use flex items-start and uniform min-h-[76px] leading-snug
const oldFig1 = `<figcaption id="gallery-caption-1" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 min-h-[64px] flex items-center mt-auto">Ceremonial Moments — Feature Shoot</figcaption>`;
const newFig1 = `<figcaption id="gallery-caption-1" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold leading-snug text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 min-h-[72px] sm:min-h-[76px] flex items-start mt-auto">Ceremonial Moments — Feature Shoot</figcaption>`;

const oldFig2 = `<figcaption id="gallery-caption-2" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 min-h-[64px] flex items-center mt-auto">Golden Hour Harmony</figcaption>`;
const newFig2 = `<figcaption id="gallery-caption-2" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold leading-snug text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 min-h-[72px] sm:min-h-[76px] flex items-start mt-auto">Golden Hour Harmony</figcaption>`;

const oldFig3 = `<figcaption id="gallery-caption-3" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 min-h-[64px] flex items-center mt-auto">Tradition & Atmosphere</figcaption>`;
const newFig3 = `<figcaption id="gallery-caption-3" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold leading-snug text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 min-h-[72px] sm:min-h-[76px] flex items-start mt-auto">Tradition & Atmosphere</figcaption>`;

const oldFig4 = `<figcaption id="gallery-caption-4" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 min-h-[64px] flex items-center mt-auto">Editorial Framing</figcaption>`;
const newFig4 = `<figcaption id="gallery-caption-4" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold leading-snug text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 min-h-[72px] sm:min-h-[76px] flex items-start mt-auto">Editorial Framing</figcaption>`;

const oldFig5 = `<figcaption id="gallery-caption-5" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 min-h-[64px] flex items-center mt-auto">Quiet Vows Story</figcaption>`;
const newFig5 = `<figcaption id="gallery-caption-5" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold leading-snug text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 min-h-[72px] sm:min-h-[76px] flex items-start mt-auto">Quiet Vows Story</figcaption>`;

normProfile = normProfile.replace(oldFig1, newFig1);
normProfile = normProfile.replace(oldFig2, newFig2);
normProfile = normProfile.replace(oldFig3, newFig3);
normProfile = normProfile.replace(oldFig4, newFig4);
normProfile = normProfile.replace(oldFig5, newFig5);

fs.writeFileSync(profilePath, normProfile, 'utf8');
console.log('Updated photographer-profile.html figcaptions!');

// 2. Update style.css
const cssPath = path.join(__dirname, '..', 'assets', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');
let normCss = normalize(css);

const figcaptionCss = `
#portfolio-gallery figure figcaption {
    display: flex !important;
    align-items: flex-start !important;
    min-height: 4.75rem !important;
    line-height: 1.35 !important;
}
`;

if (!normCss.includes('#portfolio-gallery figure figcaption')) {
    normCss += figcaptionCss;
    fs.writeFileSync(cssPath, normCss, 'utf8');
    console.log('Added figcaption alignment CSS to style.css!');
}
