const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'pages', 'photographers.html');
let html = fs.readFileSync(filePath, 'utf8');

// Replace the photographerGrid content
const newGridContent = `                <div id="photographerGrid" class="space-y-6">

                    <!-- ===================================================== -->
                    <!-- PHOTOGRAPHER 01: ARJUN MEHTA -->
                    <!-- ===================================================== -->
                    <article class="photographer-card group relative bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-amber-400 dark:hover:border-amber-400" data-name="Arjun Mehta" data-city="Chennai" data-specialty="Wedding" data-budget="medium">
                        <div class="grid grid-cols-1 lg:grid-cols-[80px_280px_1fr_200px] min-h-[260px]">
                            <!-- NUMBER -->
                            <div class="hidden lg:flex items-center justify-center border-r border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
                                <span class="font-mono text-sm font-semibold text-gray-400">01</span>
                            </div>

                            <!-- IMAGE -->
                            <div class="relative h-[260px] lg:h-auto overflow-hidden bg-black">
                                <img src="../assets/images/p31.jpg" alt="Arjun Mehta" class="w-full h-full object-cover object-[center_top] transition duration-700 group-hover:scale-105">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                <span class="absolute left-4 bottom-4 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-black/95 backdrop-blur-md text-black dark:text-white text-[9px] font-bold uppercase tracking-[2px] shadow-sm">
                                    Wedding
                                </span>
                            </div>

                            <!-- DETAILS -->
                            <div class="p-6 sm:p-8 flex flex-col justify-between">
                                <div>
                                    <div class="flex items-center gap-2">
                                        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                        <span class="text-[9px] uppercase tracking-[3px] font-semibold text-emerald-600 dark:text-emerald-400">Available for bookings</span>
                                    </div>
                                    <h3 class="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        Arjun Mehta
                                    </h3>
                                    <p class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300 max-w-xl">
                                        Documentary wedding photographer capturing real emotions, intimate celebrations and timeless moments across South India.
                                    </p>
                                </div>
                                <div class="mt-6 flex flex-wrap items-center gap-6 pt-4 border-t border-gray-100 dark:border-white/5">
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                                        <i class="fa-solid fa-location-dot text-amber-500 text-[11px]"></i> Chennai
                                    </span>
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                                        <i class="fa-solid fa-camera text-amber-500 text-[11px]"></i> Documentary
                                    </span>
                                    <span class="text-xs font-semibold text-amber-500 flex items-center gap-1">
                                        <i class="fa-solid fa-star text-[11px]"></i> 4.9 (124 reviews)
                                    </span>
                                </div>
                            </div>

                            <!-- ACTION / CTA -->
                            <div class="p-6 sm:p-8 flex flex-row lg:flex-col items-center justify-between lg:justify-center gap-4 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
                                <div class="lg:text-center">
                                    <p class="text-[9px] uppercase tracking-[2px] font-medium text-gray-400 dark:text-gray-400">Starting from</p>
                                    <p class="mt-1 text-2xl font-bold text-gray-900 dark:text-white">₹35,000</p>
                                </div>
                                <a href="photographer-profile.html?photographer=arjun" class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-semibold hover:bg-amber-500 dark:hover:bg-amber-400 dark:hover:text-black transition-all duration-200 whitespace-nowrap shadow-sm">
                                    View Profile <i class="fa-solid fa-arrow-right text-[10px]"></i>
                                </a>
                            </div>
                        </div>
                    </article>

                    <!-- ===================================================== -->
                    <!-- PHOTOGRAPHER 02: MAYA KAPOOR -->
                    <!-- ===================================================== -->
                    <article class="photographer-card group relative bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-amber-400 dark:hover:border-amber-400" data-name="Maya Kapoor" data-city="Mumbai" data-specialty="Fashion" data-budget="high">
                        <div class="grid grid-cols-1 lg:grid-cols-[80px_280px_1fr_200px] min-h-[260px]">
                            <!-- NUMBER -->
                            <div class="hidden lg:flex items-center justify-center border-r border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
                                <span class="font-mono text-sm font-semibold text-gray-400">02</span>
                            </div>

                            <!-- IMAGE -->
                            <div class="relative h-[260px] lg:h-auto overflow-hidden bg-black">
                                <img src="../assets/images/p32.jpg" alt="Maya Kapoor" class="w-full h-full object-cover object-[center_10%] transition duration-700 group-hover:scale-105">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                <span class="absolute left-4 bottom-4 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-black/95 backdrop-blur-md text-black dark:text-white text-[9px] font-bold uppercase tracking-[2px] shadow-sm">
                                    Fashion
                                </span>
                            </div>

                            <!-- DETAILS -->
                            <div class="p-6 sm:p-8 flex flex-col justify-between">
                                <div>
                                    <div class="flex items-center gap-2">
                                        <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                                        <span class="text-[9px] uppercase tracking-[3px] font-semibold text-amber-600 dark:text-amber-400">Editorial & Lookbooks</span>
                                    </div>
                                    <h3 class="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        Maya Kapoor
                                    </h3>
                                    <p class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300 max-w-xl">
                                        Bold fashion stories, editorial portraits and contemporary campaign photography crafted for global and boutique luxury brands.
                                    </p>
                                </div>
                                <div class="mt-6 flex flex-wrap items-center gap-6 pt-4 border-t border-gray-100 dark:border-white/5">
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                                        <i class="fa-solid fa-location-dot text-amber-500 text-[11px]"></i> Mumbai
                                    </span>
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                                        <i class="fa-solid fa-shirt text-amber-500 text-[11px]"></i> Fashion
                                    </span>
                                    <span class="text-xs font-semibold text-amber-500 flex items-center gap-1">
                                        <i class="fa-solid fa-star text-[11px]"></i> 5.0 (98 reviews)
                                    </span>
                                </div>
                            </div>

                            <!-- ACTION / CTA -->
                            <div class="p-6 sm:p-8 flex flex-row lg:flex-col items-center justify-between lg:justify-center gap-4 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
                                <div class="lg:text-center">
                                    <p class="text-[9px] uppercase tracking-[2px] font-medium text-gray-400 dark:text-gray-400">Starting from</p>
                                    <p class="mt-1 text-2xl font-bold text-gray-900 dark:text-white">₹65,000</p>
                                </div>
                                <a href="photographer-profile.html?photographer=maya" class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-semibold hover:bg-amber-500 dark:hover:bg-amber-400 dark:hover:text-black transition-all duration-200 whitespace-nowrap shadow-sm">
                                    View Profile <i class="fa-solid fa-arrow-right text-[10px]"></i>
                                </a>
                            </div>
                        </div>
                    </article>

                    <!-- ===================================================== -->
                    <!-- PHOTOGRAPHER 03: NISHA RAO -->
                    <!-- ===================================================== -->
                    <article class="photographer-card group relative bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-amber-400 dark:hover:border-amber-400" data-name="Nisha Rao" data-city="Bengaluru" data-specialty="Food" data-budget="low">
                        <div class="grid grid-cols-1 lg:grid-cols-[80px_280px_1fr_200px] min-h-[260px]">
                            <!-- NUMBER -->
                            <div class="hidden lg:flex items-center justify-center border-r border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
                                <span class="font-mono text-sm font-semibold text-gray-400">03</span>
                            </div>

                            <!-- IMAGE -->
                            <div class="relative h-[260px] lg:h-auto overflow-hidden bg-black">
                                <img src="../assets/images/p33.jpg" alt="Nisha Rao" class="w-full h-full object-cover object-[center_top] transition duration-700 group-hover:scale-105">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                <span class="absolute left-4 bottom-4 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-black/95 backdrop-blur-md text-black dark:text-white text-[9px] font-bold uppercase tracking-[2px] shadow-sm">
                                    Food
                                </span>
                            </div>

                            <!-- DETAILS -->
                            <div class="p-6 sm:p-8 flex flex-col justify-between">
                                <div>
                                    <div class="flex items-center gap-2">
                                        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                        <span class="text-[9px] uppercase tracking-[3px] font-semibold text-emerald-600 dark:text-emerald-400">Available for shoots</span>
                                    </div>
                                    <h3 class="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        Nisha Rao
                                    </h3>
                                    <p class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300 max-w-xl">
                                        Sensory culinary photography, packaging imagery and restaurant atmosphere storytelling for boutique cafes and food brands.
                                    </p>
                                </div>
                                <div class="mt-6 flex flex-wrap items-center gap-6 pt-4 border-t border-gray-100 dark:border-white/5">
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                                        <i class="fa-solid fa-location-dot text-amber-500 text-[11px]"></i> Bengaluru
                                    </span>
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                                        <i class="fa-solid fa-utensils text-amber-500 text-[11px]"></i> Food & Beverage
                                    </span>
                                    <span class="text-xs font-semibold text-amber-500 flex items-center gap-1">
                                        <i class="fa-solid fa-star text-[11px]"></i> 4.8 (82 reviews)
                                    </span>
                                </div>
                            </div>

                            <!-- ACTION / CTA -->
                            <div class="p-6 sm:p-8 flex flex-row lg:flex-col items-center justify-between lg:justify-center gap-4 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
                                <div class="lg:text-center">
                                    <p class="text-[9px] uppercase tracking-[2px] font-medium text-gray-400 dark:text-gray-400">Starting from</p>
                                    <p class="mt-1 text-2xl font-bold text-gray-900 dark:text-white">₹18,000</p>
                                </div>
                                <a href="photographer-profile.html?photographer=nisha" class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-semibold hover:bg-amber-500 dark:hover:bg-amber-400 dark:hover:text-black transition-all duration-200 whitespace-nowrap shadow-sm">
                                    View Profile <i class="fa-solid fa-arrow-right text-[10px]"></i>
                                </a>
                            </div>
                        </div>
                    </article>

                    <!-- ===================================================== -->
                    <!-- PHOTOGRAPHER 04: RAHUL SEN -->
                    <!-- ===================================================== -->
                    <article class="photographer-card group relative bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-amber-400 dark:hover:border-amber-400" data-name="Rahul Sen" data-city="Hyderabad" data-specialty="Corporate" data-budget="medium">
                        <div class="grid grid-cols-1 lg:grid-cols-[80px_280px_1fr_200px] min-h-[260px]">
                            <!-- NUMBER -->
                            <div class="hidden lg:flex items-center justify-center border-r border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
                                <span class="font-mono text-sm font-semibold text-gray-400">04</span>
                            </div>

                            <!-- IMAGE -->
                            <div class="relative h-[260px] lg:h-auto overflow-hidden bg-black">
                                <img src="../assets/images/p14.jpg" alt="Rahul Sen" class="w-full h-full object-cover object-[center_top] transition duration-700 group-hover:scale-105">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                <span class="absolute left-4 bottom-4 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-black/95 backdrop-blur-md text-black dark:text-white text-[9px] font-bold uppercase tracking-[2px] shadow-sm">
                                    Corporate
                                </span>
                            </div>

                            <!-- DETAILS -->
                            <div class="p-6 sm:p-8 flex flex-col justify-between">
                                <div>
                                    <div class="flex items-center gap-2">
                                        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                        <span class="text-[9px] uppercase tracking-[3px] font-semibold text-emerald-600 dark:text-emerald-400">Enterprise Ready</span>
                                    </div>
                                    <h3 class="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        Rahul Sen
                                    </h3>
                                    <p class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300 max-w-xl">
                                        Modern corporate storytelling, leadership headshots and workplace culture photography for tech companies and conferences.
                                    </p>
                                </div>
                                <div class="mt-6 flex flex-wrap items-center gap-6 pt-4 border-t border-gray-100 dark:border-white/5">
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                                        <i class="fa-solid fa-location-dot text-amber-500 text-[11px]"></i> Hyderabad
                                    </span>
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                                        <i class="fa-solid fa-briefcase text-amber-500 text-[11px]"></i> Corporate
                                    </span>
                                    <span class="text-xs font-semibold text-amber-500 flex items-center gap-1">
                                        <i class="fa-solid fa-star text-[11px]"></i> 4.9 (105 reviews)
                                    </span>
                                </div>
                            </div>

                            <!-- ACTION / CTA -->
                            <div class="p-6 sm:p-8 flex flex-row lg:flex-col items-center justify-between lg:justify-center gap-4 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
                                <div class="lg:text-center">
                                    <p class="text-[9px] uppercase tracking-[2px] font-medium text-gray-400 dark:text-gray-400">Starting from</p>
                                    <p class="mt-1 text-2xl font-bold text-gray-900 dark:text-white">₹40,000</p>
                                </div>
                                <a href="photographer-profile.html?photographer=rahul" class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-semibold hover:bg-amber-500 dark:hover:bg-amber-400 dark:hover:text-black transition-all duration-200 whitespace-nowrap shadow-sm">
                                    View Profile <i class="fa-solid fa-arrow-right text-[10px]"></i>
                                </a>
                            </div>
                        </div>
                    </article>

                    <!-- ===================================================== -->
                    <!-- PHOTOGRAPHER 05: ANANYA IYER -->
                    <!-- ===================================================== -->
                    <article class="photographer-card group relative bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-amber-400 dark:hover:border-amber-400" data-name="Ananya Iyer" data-city="Chennai" data-specialty="Fashion" data-budget="high">
                        <div class="grid grid-cols-1 lg:grid-cols-[80px_280px_1fr_200px] min-h-[260px]">
                            <!-- NUMBER -->
                            <div class="hidden lg:flex items-center justify-center border-r border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
                                <span class="font-mono text-sm font-semibold text-gray-400">05</span>
                            </div>

                            <!-- IMAGE -->
                            <div class="relative h-[260px] lg:h-auto overflow-hidden bg-black">
                                <img src="../assets/images/p35.jpg" alt="Ananya Iyer" class="w-full h-full object-cover object-[center_top] transition duration-700 group-hover:scale-105">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                <span class="absolute left-4 bottom-4 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-black/95 backdrop-blur-md text-black dark:text-white text-[9px] font-bold uppercase tracking-[2px] shadow-sm">
                                    Fashion
                                </span>
                            </div>

                            <!-- DETAILS -->
                            <div class="p-6 sm:p-8 flex flex-col justify-between">
                                <div>
                                    <div class="flex items-center gap-2">
                                        <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                                        <span class="text-[9px] uppercase tracking-[3px] font-semibold text-amber-600 dark:text-amber-400">Featured Editorial Talent</span>
                                    </div>
                                    <h3 class="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        Ananya Iyer
                                    </h3>
                                    <p class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300 max-w-xl">
                                        Contemporary fashion imagery with a strong focus on personality, movement, conceptual styling and visual narrative.
                                    </p>
                                </div>
                                <div class="mt-6 flex flex-wrap items-center gap-6 pt-4 border-t border-gray-100 dark:border-white/5">
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                                        <i class="fa-solid fa-location-dot text-amber-500 text-[11px]"></i> Chennai
                                    </span>
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                                        <i class="fa-solid fa-wand-magic-sparkles text-amber-500 text-[11px]"></i> Editorial
                                    </span>
                                    <span class="text-xs font-semibold text-amber-500 flex items-center gap-1">
                                        <i class="fa-solid fa-star text-[11px]"></i> 4.9 (112 reviews)
                                    </span>
                                </div>
                            </div>

                            <!-- ACTION / CTA -->
                            <div class="p-6 sm:p-8 flex flex-row lg:flex-col items-center justify-between lg:justify-center gap-4 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
                                <div class="lg:text-center">
                                    <p class="text-[9px] uppercase tracking-[2px] font-medium text-gray-400 dark:text-gray-400">Starting from</p>
                                    <p class="mt-1 text-2xl font-bold text-gray-900 dark:text-white">₹58,000</p>
                                </div>
                                <a href="photographer-profile.html?photographer=ananya" class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-semibold hover:bg-amber-500 dark:hover:bg-amber-400 dark:hover:text-black transition-all duration-200 whitespace-nowrap shadow-sm">
                                    View Profile <i class="fa-solid fa-arrow-right text-[10px]"></i>
                                </a>
                            </div>
                        </div>
                    </article>

                    <!-- ===================================================== -->
                    <!-- PHOTOGRAPHER 06: VIKRAM SHAH -->
                    <!-- ===================================================== -->
                    <article class="photographer-card group relative bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-amber-400 dark:hover:border-amber-400" data-name="Vikram Shah" data-city="Bengaluru" data-specialty="Wedding" data-budget="medium">
                        <div class="grid grid-cols-1 lg:grid-cols-[80px_280px_1fr_200px] min-h-[260px]">
                            <!-- NUMBER -->
                            <div class="hidden lg:flex items-center justify-center border-r border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
                                <span class="font-mono text-sm font-semibold text-gray-400">06</span>
                            </div>

                            <!-- IMAGE -->
                            <div class="relative h-[260px] lg:h-auto overflow-hidden bg-black">
                                <img src="../assets/images/p13.jpg" alt="Vikram Shah" class="w-full h-full object-cover object-[center_top] transition duration-700 group-hover:scale-105">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                <span class="absolute left-4 bottom-4 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-black/95 backdrop-blur-md text-black dark:text-white text-[9px] font-bold uppercase tracking-[2px] shadow-sm">
                                    Wedding
                                </span>
                            </div>

                            <!-- DETAILS -->
                            <div class="p-6 sm:p-8 flex flex-col justify-between">
                                <div>
                                    <div class="flex items-center gap-2">
                                        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                        <span class="text-[9px] uppercase tracking-[3px] font-semibold text-emerald-600 dark:text-emerald-400">Destination Specialist</span>
                                    </div>
                                    <h3 class="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        Vikram Shah
                                    </h3>
                                    <p class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300 max-w-xl">
                                        Candid wedding stories and travel photojournalism built around real emotions, authentic celebrations and intimate moments.
                                    </p>
                                </div>
                                <div class="mt-6 flex flex-wrap items-center gap-6 pt-4 border-t border-gray-100 dark:border-white/5">
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                                        <i class="fa-solid fa-location-dot text-amber-500 text-[11px]"></i> Bengaluru
                                    </span>
                                    <span class="text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                                        <i class="fa-solid fa-camera text-amber-500 text-[11px]"></i> Wedding & Travel
                                    </span>
                                    <span class="text-xs font-semibold text-amber-500 flex items-center gap-1">
                                        <i class="fa-solid fa-star text-[11px]"></i> 4.8 (89 reviews)
                                    </span>
                                </div>
                            </div>

                            <!-- ACTION / CTA -->
                            <div class="p-6 sm:p-8 flex flex-row lg:flex-col items-center justify-between lg:justify-center gap-4 border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
                                <div class="lg:text-center">
                                    <p class="text-[9px] uppercase tracking-[2px] font-medium text-gray-400 dark:text-gray-400">Starting from</p>
                                    <p class="mt-1 text-2xl font-bold text-gray-900 dark:text-white">₹22,000</p>
                                </div>
                                <a href="photographer-profile.html?photographer=vikram" class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-semibold hover:bg-amber-500 dark:hover:bg-amber-400 dark:hover:text-black transition-all duration-200 whitespace-nowrap shadow-sm">
                                    View Profile <i class="fa-solid fa-arrow-right text-[10px]"></i>
                                </a>
                            </div>
                        </div>
                    </article>

                </div>`;

// Replace from <div id="photographerGrid" ...> up to </article>\s*</section> or the end of the grid
const gridRegex = /<div id="photographerGrid"[\s\S]*?<!-- ========================================================= -->\s*<!-- CITY DISCOVERY/;
if (gridRegex.test(html)) {
    html = html.replace(gridRegex, newGridContent + '\n\n        </section>\n\n        <!-- ========================================================= -->\n        <!-- CITY DISCOVERY');
    console.log('photographerGrid replaced successfully!');
} else {
    console.log('photographerGrid regex failed to match');
}

// 2. Fix the Final CTA Section (STILL LOOKING?) to have primary yellow/gold background with high-contrast text and sleek button, and natural padding above footer
const oldCtaRegex = /<!-- ================================================== -->\s*<!-- 05\. FINAL MATCH SECTION \(STILL LOOKING\?\) -->\s*<!-- ================================================== -->[\s\S]*?<section[\s\S]*?Still looking\?[\s\S]*?<\/section>/;

const newCtaSection = `<!-- ================================================== -->
        <!-- 05. FINAL MATCH SECTION (STILL LOOKING?) -->
        <!-- ================================================== -->
        <section class="py-16 sm:py-20 lg:py-24 bg-amber-400 dark:bg-amber-500 text-black">
            <div class="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
                <span class="inline-block text-xs uppercase tracking-[4px] font-bold text-black/70 bg-black/10 px-4 py-1.5 rounded-full mb-4">
                    Still looking?
                </span>
                <h2 class="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight">
                    Let us help you find your perfect match.
                </h2>
                <p class="max-w-2xl mx-auto mt-5 text-base sm:text-lg leading-relaxed text-black/85 font-medium">
                    Tell us what you're shooting, where you're shooting and what you're looking to spend. We'll connect you with the right creative talent.
                </p>
                <div class="mt-8">
                    <a href="contact.html" class="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-black hover:bg-gray-900 text-white text-sm font-semibold transition-all duration-300 shadow-xl hover:-translate-y-0.5">
                        Get Photographer Recommendations <i class="fa-solid fa-arrow-right text-xs"></i>
                    </a>
                </div>
            </div>
        </section>`;

if (oldCtaRegex.test(html)) {
    html = html.replace(oldCtaRegex, newCtaSection);
    console.log('Final CTA section updated to yellow/gold background with high contrast!');
} else {
    console.log('Final CTA regex did not match');
}

// 3. Fix the "Browse the directory" story panel padding
// Ensure balanced padding in section
const directoryStoryRegex = /<section class="bg-white\s+dark:bg-\[#090909\]\s+py-12\s+lg:py-14">/;
if (directoryStoryRegex.test(html)) {
    html = html.replace(directoryStoryRegex, '<section class="bg-white dark:bg-[#090909] py-14 sm:py-16 lg:py-20">');
    console.log('Directory section padding updated!');
}

fs.writeFileSync(filePath, html, 'utf8');
console.log('photographers.html successfully updated!');
