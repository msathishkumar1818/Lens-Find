const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

// 1. Update index.html how-it-works section & contact photographer button
let indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');

// Fix contact photographer button in index.html
indexHtml = indexHtml.replace(
    /<button class="w-full[\s\S]*?Contact Photographer[\s\S]*?<\/button>/gi,
    `<button class="w-full mt-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-amber-500 hover:text-black transition dark:bg-white/10 dark:text-white dark:hover:bg-amber-500 dark:hover:text-black">
                                Contact Photographer
                            </button>`
);

fs.writeFileSync(path.join(rootDir, 'index.html'), indexHtml, 'utf8');
console.log('Updated index.html Step 3 button');

// 2. Standardize footer bottom bar across all HTML files
const targetFiles = [
    path.join(rootDir, 'index.html'),
    ...fs.readdirSync(path.join(rootDir, 'pages'))
        .filter(f => f.endsWith('.html'))
        .map(f => path.join(rootDir, 'pages', f))
];

const newBottomBar = `        <!-- ===================================================== -->
        <!-- BOTTOM BAR -->
        <!-- ===================================================== -->

        <div class="border-t border-white/10">

            <div class="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

                <!-- COPYRIGHT -->
                <p class="text-xs text-gray-400 text-center sm:text-left">
                    © 2026 LensFind. All rights reserved.
                </p>

                <!-- LEGAL -->
                <div class="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-2 text-xs text-gray-400">
                    <a href="#" class="text-gray-400 hover:text-amber-400 transition">
                        Privacy Policy
                    </a>

                    <span class="w-1 h-1 rounded-full bg-gray-600 inline-block"></span>

                    <a href="#" class="text-gray-400 hover:text-amber-400 transition">
                        Terms
                    </a>

                    <span class="w-1 h-1 rounded-full bg-amber-500 inline-block"></span>

                    <span class="text-gray-400">
                        Made for visual storytellers
                    </span>
                </div>

            </div>

        </div>`;

targetFiles.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace existing bottom bar if matched
    const bottomBarRegex = /<!--\s*={10,}\s*-->\s*<!--\s*BOTTOM BAR\s*-->\s*<!--\s*={10,}\s*-->[\s\S]*?<\/div>\s*<\/div>\s*<\/footer>/i;
    if (bottomBarRegex.test(content)) {
        content = content.replace(bottomBarRegex, newBottomBar + '\n\n    </footer>');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated footer bottom bar in: ${path.basename(filePath)}`);
    } else {
        // Try fallback regex for footer bottom bar
        const fallbackRegex = /<div class="border-t[\s\S]*?© 2026 LensFind[\s\S]*?Made for visual storytellers[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/footer>/i;
        if (fallbackRegex.test(content)) {
            content = content.replace(fallbackRegex, newBottomBar + '\n\n    </footer>');
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated footer bottom bar (fallback) in: ${path.basename(filePath)}`);
        } else {
            console.log(`No bottom bar match in: ${path.basename(filePath)}`);
        }
    }
});

console.log('All files processed successfully.');
