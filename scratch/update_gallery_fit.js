const fs = require('fs');
const path = require('path');

// 1. Update photographer-profile.html gallery section
const profilePath = path.join(__dirname, '..', 'pages', 'photographer-profile.html');
let profileContent = fs.readFileSync(profilePath, 'utf8');

function normalize(str) {
    return str.replace(/\r\n/g, '\n');
}

let normProfile = normalize(profileContent);

const oldGalleryHtml = `          <div class="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <figure class="group overflow-hidden rounded-2xl bg-slate-100 dark:bg-[#181818] border border-gray-200 dark:border-white/10 shadow-sm transition hover:shadow-md sm:col-span-2 flex flex-col h-full">
              <div class="h-64 sm:h-72 md:h-80 w-full overflow-hidden bg-black">
                <img id="gallery-image-1" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="../assets/images/p82.jpg" alt="Portfolio piece 1">
              </div>
              <figcaption id="gallery-caption-1" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 mt-auto">Ceremonial Moments — Feature Shoot</figcaption>
            </figure>
            
            <figure class="group overflow-hidden rounded-2xl bg-slate-100 dark:bg-[#181818] border border-gray-200 dark:border-white/10 shadow-sm transition hover:shadow-md flex flex-col h-full">
              <div class="h-64 sm:h-72 md:h-80 w-full overflow-hidden bg-black">
                <img id="gallery-image-2" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="../assets/images/p48.jpg" alt="Portfolio piece 2">
              </div>
              <figcaption id="gallery-caption-2" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 mt-auto">Golden Hour Harmony</figcaption>
            </figure>

            <figure class="group overflow-hidden rounded-2xl bg-slate-100 dark:bg-[#181818] border border-gray-200 dark:border-white/10 shadow-sm transition hover:shadow-md flex flex-col h-full">
              <div class="h-64 sm:h-72 w-full overflow-hidden bg-black">
                <img id="gallery-image-3" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="../assets/images/p51.jpg" alt="Portfolio piece 3">
              </div>
              <figcaption id="gallery-caption-3" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 mt-auto">Tradition & Atmosphere</figcaption>
            </figure>

            <figure class="group overflow-hidden rounded-2xl bg-slate-100 dark:bg-[#181818] border border-gray-200 dark:border-white/10 shadow-sm transition hover:shadow-md flex flex-col h-full">
              <div class="h-64 sm:h-72 w-full overflow-hidden bg-black">
                <img id="gallery-image-4" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="../assets/images/p39.jpg" alt="Portfolio piece 4">
              </div>
              <figcaption id="gallery-caption-4" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 mt-auto">Editorial Framing</figcaption>
            </figure>

            <figure class="group overflow-hidden rounded-2xl bg-slate-100 dark:bg-[#181818] border border-gray-200 dark:border-white/10 shadow-sm transition hover:shadow-md flex flex-col h-full">
              <div class="h-64 sm:h-72 w-full overflow-hidden bg-black">
                <img id="gallery-image-5" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="../assets/images/p26.jpg" alt="Portfolio piece 5">
              </div>
              <figcaption id="gallery-caption-5" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 mt-auto">Quiet Vows Story</figcaption>
            </figure>
          </div>`;

const newGalleryHtml = `          <div class="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <figure class="group overflow-hidden rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 shadow-sm transition hover:shadow-md sm:col-span-2 flex flex-col h-full">
              <div class="h-64 sm:h-72 md:h-80 w-full overflow-hidden bg-gray-950 shrink-0">
                <img id="gallery-image-1" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="../assets/images/p82.jpg" alt="Portfolio piece 1">
              </div>
              <figcaption id="gallery-caption-1" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 min-h-[64px] flex items-center mt-auto">Ceremonial Moments — Feature Shoot</figcaption>
            </figure>
            
            <figure class="group overflow-hidden rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 shadow-sm transition hover:shadow-md flex flex-col h-full">
              <div class="h-64 sm:h-72 md:h-80 w-full overflow-hidden bg-gray-950 shrink-0">
                <img id="gallery-image-2" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="../assets/images/p48.jpg" alt="Portfolio piece 2">
              </div>
              <figcaption id="gallery-caption-2" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 min-h-[64px] flex items-center mt-auto">Golden Hour Harmony</figcaption>
            </figure>

            <figure class="group overflow-hidden rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 shadow-sm transition hover:shadow-md flex flex-col h-full">
              <div class="h-64 sm:h-72 w-full overflow-hidden bg-gray-950 shrink-0">
                <img id="gallery-image-3" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="../assets/images/p51.jpg" alt="Portfolio piece 3">
              </div>
              <figcaption id="gallery-caption-3" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 min-h-[64px] flex items-center mt-auto">Tradition & Atmosphere</figcaption>
            </figure>

            <figure class="group overflow-hidden rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 shadow-sm transition hover:shadow-md flex flex-col h-full">
              <div class="h-64 sm:h-72 w-full overflow-hidden bg-gray-950 shrink-0">
                <img id="gallery-image-4" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="../assets/images/p39.jpg" alt="Portfolio piece 4">
              </div>
              <figcaption id="gallery-caption-4" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 min-h-[64px] flex items-center mt-auto">Editorial Framing</figcaption>
            </figure>

            <figure class="group overflow-hidden rounded-2xl bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 shadow-sm transition hover:shadow-md flex flex-col h-full">
              <div class="h-64 sm:h-72 w-full overflow-hidden bg-gray-950 shrink-0">
                <img id="gallery-image-5" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="../assets/images/p26.jpg" alt="Portfolio piece 5">
              </div>
              <figcaption id="gallery-caption-5" class="bg-white dark:bg-[#1a1a1a] p-4 sm:p-5 text-sm font-semibold text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/10 min-h-[64px] flex items-center mt-auto">Quiet Vows Story</figcaption>
            </figure>
          </div>`;

console.log('Gallery match:', normProfile.includes(normalize(oldGalleryHtml)));
normProfile = normProfile.replace(normalize(oldGalleryHtml), normalize(newGalleryHtml));

fs.writeFileSync(profilePath, normProfile, 'utf8');
console.log('Updated photographer-profile.html gallery successfully!');

// 2. Update style.css with rules for #portfolio-gallery images
const cssPath = path.join(__dirname, '..', 'assets', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');
let normCss = normalize(css);

const galleryCss = `
/* Ensure Portfolio Gallery images fill containers edge-to-edge with no gaps */
#portfolio-gallery figure {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
}
.dark #portfolio-gallery figure {
    background-color: #1a1a1a;
}
#portfolio-gallery figure > div {
    width: 100%;
    position: relative;
}
#portfolio-gallery figure img {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    object-position: center center !important;
    display: block !important;
}
`;

if (!normCss.includes('#portfolio-gallery figure img')) {
    normCss += galleryCss;
    fs.writeFileSync(cssPath, normCss, 'utf8');
    console.log('Appended gallery CSS to style.css!');
}
