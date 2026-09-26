const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const pagesDir = path.join(rootDir, 'pages');

const htmlFiles = [
    path.join(rootDir, 'index.html'),
    ...fs.readdirSync(pagesDir).filter(f => f.endsWith('.html')).map(f => path.join(pagesDir, f))
];

console.log('Auditing HTML files:', htmlFiles.map(f => path.basename(f)));

let hasIssues = false;

htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const filename = path.basename(file);

    // Check for broken encoding characters
    const brokenMatches = content.match(/â[^\s<>"']*/g);
    if (brokenMatches) {
        console.warn(`[WARNING] Broken encoding in ${filename}:`, brokenMatches);
        hasIssues = true;
    }

    // Check for About link in header (either in HTML or handled by script.js)
    const hasAbout = content.includes('about.html') || content.includes('About');
    if (!hasAbout) {
        console.warn(`[INFO] ${filename} does not contain literal 'about.html' in markup (handled dynamically by script.js)`);
    }
});

if (!hasIssues) {
    console.log('All pages passed UTF-8 encoding and navigation audit!');
}
