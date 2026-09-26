const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'pages', 'contact.html');
let html = fs.readFileSync(filePath, 'utf8');

// Update Email icon in contact hero
html = html.replace(
    /<span\s+class="flex\s+h-10\s+w-10\s+shrink-0\s+items-center\s+justify-center\s+rounded-full\s+bg-gray-900\s+text-white\s+dark:bg-white\s+dark:text-black">\s*<i\s+class="fa-solid\s+fa-envelope\s+text-xs">\s*<\/i>\s*<\/span>/,
    `<span class="contact-hero-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black shadow-sm">
        <i class="fa-solid fa-envelope text-xs text-white dark:text-black"></i>
    </span>`
);

// Update Phone icon in contact hero
html = html.replace(
    /<span\s+class="flex\s+h-10\s+w-10\s+shrink-0\s+items-center\s+justify-center\s+rounded-full\s+bg-gray-900\s+text-white\s+dark:bg-white\s+dark:text-black">\s*<i\s+class="fa-solid\s+fa-phone\s+text-xs">\s*<\/i>\s*<\/span>/,
    `<span class="contact-hero-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black shadow-sm">
        <i class="fa-solid fa-phone text-xs text-white dark:text-black"></i>
    </span>`
);

// Update Location icon in contact hero
html = html.replace(
    /<span\s+class="flex\s+h-10\s+w-10\s+shrink-0\s+items-center\s+justify-center\s+rounded-full\s+bg-gray-900\s+text-white\s+dark:bg-white\s+dark:text-black">\s*<i\s+class="fa-solid\s+fa-location-dot\s+text-xs">\s*<\/i>\s*<\/span>/,
    `<span class="contact-hero-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black shadow-sm">
        <i class="fa-solid fa-location-dot text-xs text-white dark:text-black"></i>
    </span>`
);

fs.writeFileSync(filePath, html, 'utf8');
console.log('contact.html successfully updated!');
