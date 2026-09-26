const fs = require('fs');
const path = require('path');

const profilePath = path.join(__dirname, '..', 'pages', 'photographer-profile.html');
const content = fs.readFileSync(profilePath, 'utf8');

// Check for any potential unwanted text patterns
const checks = [
    /lorem/i,
    /ipsum/i,
    /undefined/i,
    /\[object/i,
    /TODO/i,
    /FIXME/i,
    /sample text/i,
    /placeholder/i,
    /\${/,
    /₹\s*a/i
];

checks.forEach(regex => {
    const matches = content.match(regex);
    if (matches) {
        console.log(`Found match for ${regex}:`, matches);
    }
});

console.log('Audit complete.');
