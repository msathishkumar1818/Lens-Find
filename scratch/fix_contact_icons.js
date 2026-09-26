const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'assets', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

function normalize(str) {
    return str.replace(/\r\n/g, '\n');
}

let normCss = normalize(css);

// 1. Fix category card arrow buttons rule so it doesn't leak into contact-hero-icon or light mode dark:bg-white
const catRuleOld = `        /* Category card arrow buttons on dark cards - crisp black icon on white circle, white icon on hover */
        .group .rounded-full.bg-white i,
        .group .rounded-full.dark\\:bg-white i,
        .dark .group .rounded-full.bg-white i,
        .dark .group .rounded-full.dark\\:bg-white i {
            color: #000000 !important;
        }`;

const catRuleNew = `        /* Category card arrow buttons on dark cards - crisp black icon on white circle, white icon on hover */
        .group .rounded-full.bg-white:not(.contact-hero-icon) i,
        .dark .group .rounded-full.bg-white:not(.contact-hero-icon) i,
        .dark .group .rounded-full.dark\\:bg-white:not(.contact-hero-icon) i {
            color: #000000 !important;
        }`;

// 2. Enhance contact hero icon rules for rock-solid contrast in Light & Dark mode
const contactRuleOld = `/* Contact page hero section icon contrast in Light & Dark Mode */
.contact-hero-icon,
a[href^="mailto:"] span.bg-gray-900 i,
a[href^="tel:"] span.bg-gray-900 i,
.bg-gray-900.text-white i,
.bg-gray-900 > i,
.bg-black.text-white i {
    color: #ffffff !important;
}
.dark a[href^="mailto:"] span.dark\\:bg-white i,
.dark a[href^="tel:"] span.dark\\:bg-white i,
.dark .dark\\:bg-white.dark\\:text-black i {
    color: #000000 !important;
}`;

const contactRuleNew = `/* Contact page hero section icon contrast in Light & Dark Mode */
.contact-hero-icon,
.contact-hero-icon i,
.contact-hero-icon *,
a .contact-hero-icon,
a .contact-hero-icon i,
a .contact-hero-icon *,
a:hover .contact-hero-icon i,
.group .contact-hero-icon i,
.group:hover .contact-hero-icon i,
a[href^="mailto:"] .contact-hero-icon i,
a[href^="tel:"] .contact-hero-icon i,
a[href^="mailto:"] span.bg-gray-900 i,
a[href^="tel:"] span.bg-gray-900 i,
.bg-gray-900.text-white i,
.bg-gray-900 > i,
.bg-black.text-white i {
    color: #ffffff !important;
}

.dark .contact-hero-icon,
.dark .contact-hero-icon i,
.dark .contact-hero-icon *,
.dark a .contact-hero-icon,
.dark a .contact-hero-icon i,
.dark a .contact-hero-icon *,
.dark a:hover .contact-hero-icon i,
.dark .group .contact-hero-icon i,
.dark .group:hover .contact-hero-icon i,
.dark a[href^="mailto:"] .contact-hero-icon i,
.dark a[href^="tel:"] .contact-hero-icon i,
.dark a[href^="mailto:"] span.dark\\:bg-white i,
.dark a[href^="tel:"] span.dark\\:bg-white i,
.dark .dark\\:bg-white.dark\\:text-black i {
    color: #000000 !important;
}`;

console.log('Cat rule match:', normCss.includes(normalize(catRuleOld)));
console.log('Contact rule match:', normCss.includes(normalize(contactRuleOld)));

normCss = normCss.replace(normalize(catRuleOld), normalize(catRuleNew));
normCss = normCss.replace(normalize(contactRuleOld), normalize(contactRuleNew));

fs.writeFileSync(cssPath, normCss, 'utf8');
console.log('Updated style.css successfully!');
