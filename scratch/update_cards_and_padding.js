const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'pages', 'photographers.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update Card 01
const card1Old = `                        <!-- ICON -->

                        <div class="flex
                           h-16
                           w-16
                           shrink-0
                           items-center
                           justify-center
                           rounded-2xl
                           bg-[#F3F0E9]
                           text-black
                           transition
                           duration-500
                           group-hover:bg-amber-400
                           group-hover:scale-110
                           dark:bg-white/10
                           dark:text-white
                           dark:group-hover:bg-amber-400
                           dark:group-hover:text-black">

                            <i class="fa-solid fa-compass text-xl"></i>

                        </div>`;

const card1New = `                        <!-- NUMBER -->

                        <div class="flex h-16 items-center">
                            <span class="font-serif text-5xl italic text-gray-900 dark:text-white leading-none">01</span>
                        </div>`;

// 2. Update Card 02
const card2Old = `                        <!-- TOP -->

                        <div class="flex
                           h-16
                           items-start
                           justify-between">

                            <div class="flex
                               h-16
                               w-16
                               shrink-0
                               items-center
                               justify-center
                               rounded-2xl
                               bg-white
                               text-black
                               dark:bg-black
                               dark:text-white
                               transition
                               duration-500
                               group-hover:rotate-6
                               group-hover:scale-110">

                                <i class="fa-solid fa-images text-xl"></i>

                            </div>


                            <span class="text-[9px]
                               uppercase
                               tracking-[3px]
                               text-white">

                                Portfolio

                            </span>

                        </div>`;

const card2New = `                        <!-- NUMBER -->

                        <div class="flex h-16 items-start justify-between">
                            <span class="font-serif text-5xl italic text-white leading-none">02</span>
                            <span class="text-[9px] uppercase tracking-[3px] text-white/70">Portfolio</span>
                        </div>`;

// 3. Update Card 03
const card3Old = `                        <!-- NUMBER -->

                        <div class="flex
                           h-16
                           items-center
                           justify-between">

                            <span class="font-serif
                               text-5xl
                               italic
                               text-black
                               dark:text-white
                               leading-none">

                                03

                            </span>


                            <div class="flex
                               h-12
                               w-12
                               items-center
                               justify-center
                               rounded-full
                               bg-white
                               text-black
                               dark:bg-white
                               dark:text-black
                               transition
                               duration-500
                               group-hover:bg-amber-400
                               dark:bg-white/10
                               dark:text-white">

                                <i class="fa-regular fa-comments"></i>

                            </div>

                        </div>`;

const card3New = `                        <!-- NUMBER -->

                        <div class="flex h-16 items-center">
                            <span class="font-serif text-5xl italic text-gray-900 dark:text-white leading-none">03</span>
                        </div>`;

// 4. Update Card 04
const card4Old = `                        <!-- ICON -->

                        <div class="relative
                           flex
                           h-16
                           w-16
                           shrink-0
                           items-center
                           justify-center
                           rounded-2xl
                           bg-black
                           text-white
                           transition
                           duration-500
                           group-hover:scale-110">

                            <i class="fa-solid fa-camera text-xl"></i>

                        </div>


                        <!-- LABEL -->

                        <p class="relative
                           mt-10
                           text-[9px]
                           uppercase
                           tracking-[3px]
                           text-black">`;

const card4New = `                        <!-- NUMBER -->

                        <div class="relative flex h-16 items-center">
                            <span class="font-serif text-5xl italic text-black leading-none">04</span>
                        </div>


                        <!-- LABEL -->

                        <p class="relative
                           mt-8
                           text-[9px]
                           uppercase
                           tracking-[3px]
                           text-black">`;

// Normalizing line endings for reliable replacement
function normalize(str) {
    return str.replace(/\r\n/g, '\n');
}

let normContent = normalize(content);

console.log('Card 1 match:', normContent.includes(normalize(card1Old)));
console.log('Card 2 match:', normContent.includes(normalize(card2Old)));
console.log('Card 3 match:', normContent.includes(normalize(card3Old)));
console.log('Card 4 match:', normContent.includes(normalize(card4Old)));

normContent = normContent.replace(normalize(card1Old), normalize(card1New));
normContent = normContent.replace(normalize(card2Old), normalize(card2New));
normContent = normContent.replace(normalize(card3Old), normalize(card3New));
normContent = normContent.replace(normalize(card4Old), normalize(card4New));

// 5. Update Browse the Directory section padding & closing section tag
const browseSectionTarget = `        <!-- ========================================================= -->
        <!-- BROWSE PHOTOGRAPHERS - COMPACT STORY PATH -->
        <!-- ========================================================= -->

        <section class="bg-white dark:bg-[#090909] py-14 sm:py-16 lg:py-20">`;

const browseSectionNew = `        <!-- ========================================================= -->
        <!-- BROWSE PHOTOGRAPHERS - COMPACT STORY PATH -->
        <!-- ========================================================= -->

        <section class="bg-white dark:bg-[#090909] py-16 sm:py-20 lg:py-24">`;

normContent = normContent.replace(normalize(browseSectionTarget), normalize(browseSectionNew));

// Check end of Browse section before Still looking CTA
const browseEndTarget = `                    <!-- ================= BOTTOM BAR ================= -->

                    <div class="border-t
                       border-gray-300
                       px-6
                       py-4
                       dark:border-white/10">


                        <div class="flex
                           flex-col
                           sm:flex-row
                           sm:items-center
                           sm:justify-between
                           gap-3">


                            <div class="flex
                               items-center
                               gap-2.5">

                                <span class="h-1.5
                                   w-1.5
                                   rounded-full
                                   bg-amber-400">
                                </span>

                                <p class="text-[9px]
                                   uppercase
                                   tracking-[2px]
                                   text-gray-400">

                                    500+ creative profiles

                                </p>

                            </div>


                            <a href="photographers.html" class="text-[10px]
                               font-semibold
                               text-gray-900
                               transition
                               hover:text-amber-500
                               dark:text-white">

                                View all photographers

                                <span class="ml-1">→</span>

                            </a>

                        </div>

                    </div>

                </div>

            </div>

            <!-- ================================================== -->
        <!-- 05. FINAL MATCH SECTION (STILL LOOKING?) -->`;

const browseEndNew = `                    <!-- ================= BOTTOM BAR ================= -->

                    <div class="border-t
                       border-gray-300
                       px-6
                       py-4
                       dark:border-white/10">


                        <div class="flex
                           flex-col
                           sm:flex-row
                           sm:items-center
                           sm:justify-between
                           gap-3">


                            <div class="flex
                               items-center
                               gap-2.5">

                                <span class="h-1.5
                                   w-1.5
                                   rounded-full
                                   bg-amber-400">
                                </span>

                                <p class="text-[9px]
                                   uppercase
                                   tracking-[2px]
                                   text-gray-400">

                                    500+ creative profiles

                                </p>

                            </div>


                            <a href="photographers.html" class="text-[10px]
                               font-semibold
                               text-gray-900
                               transition
                               hover:text-amber-500
                               dark:text-white">

                                View all photographers

                                <span class="ml-1">→</span>

                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </section>

        <!-- ================================================== -->
        <!-- 05. FINAL MATCH SECTION (STILL LOOKING?) -->`;

console.log('Browse end match:', normContent.includes(normalize(browseEndTarget)));
normContent = normContent.replace(normalize(browseEndTarget), normalize(browseEndNew));

fs.writeFileSync(filePath, normContent, 'utf8');
console.log('Successfully updated photographers.html!');
