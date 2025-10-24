<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redbold CSS Framework Docs</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Chosen Palette: Warm Neutral & Teal -->
    <!-- Application Structure Plan: Designed as an interactive 'cheat sheet' with a sticky sidebar for navigation and a global, JS-powered live search bar. This structure is superior to the static report because a developer's primary goal is to *find* specific classes, not read top-to-bottom. The live search instantly filters all utilities, making discovery fast and efficient. Sections also include live visual examples (for forms, responsive) to make the documentation interactive. -->
    <!-- Visualization & Content Choices: Report Info (e.g., Spacing tables) -> Goal (Find a specific class like 'padding') -> Presentation (Filterable list of 'utility cards' with class, description, and CSS) -> Interaction (Live search bar filters the list) -> Justification (Faster lookup than static tables) -> Library (Vanilla JS). Report Info (Form classes) -> Goal (See what forms look like) -> Presentation (Live HTML examples of styled inputs) -> Interaction (User can see and click on the elements) -> Justification (Visual context is crucial for UI components). Report Info (Responsive prefixes) -> Goal (Understand how 'md:' works) -> Presentation (A demo div that changes style based on viewport width) -> Interaction (User resizes browser) -> Justification (Demonstrates the concept live). NO SVG/Mermaid used. -->
    <!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->

    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #fdfcfb; 
        }
        
        .chart-container { 
            position: relative; 
            width: 100%; 
            max-width: 600px; 
            margin-left: auto; 
            margin-right: auto; 
            height: 300px;
            max-height: 400px; 
        }
        @media (min-width: 768px) { .chart-container { height: 350px; } }

        .utility-item:not([hidden]) {
            display: grid;
        }

        .utility-item kbd {
            font-family: monospace;
            background-color: #f3f4f6;
            color: #1f2937;
            padding: 2px 6px;
            border-radius: 4px;
            font-size: 0.875rem;
            border: 1px solid #e5e7eb;
        }
        
        .utility-item .css-property {
            font-family: monospace;
            color: #4b5563;
            font-size: 0.875rem;
        }

        .color-swatch {
            width: 24px;
            height: 24px;
            border-radius: 4px;
            border: 1px solid #e5e7eb;
            flex-shrink: 0;
        }
        
        #utility-list .section-title {
            font-size: 1rem;
            font-weight: 600;
            color: #0f766e;
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
            padding-bottom: 0.25rem;
            border-bottom: 1px solid #e5e7eb;
        }

        .sidebar-link {
            display: block;
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            color: #374151;
            font-weight: 500;
            transition: all 0.15s ease;
        }
        .sidebar-link:hover,
        .sidebar-link.active {
            background-color: #e7e5e4;
            color: #0f766e;
        }
    </style>
</head>
<body class="bg-stone-50 text-stone-800">

    <div class="flex flex-col md:flex-row min-h-screen">
        
        <aside class="w-full md:w-64 bg-stone-100 border-r border-stone-200 p-4 md:sticky md:top-0 md:h-screen md:overflow-y-auto">
            <h1 class="text-2xl font-bold text-teal-800 mb-6">G.U.C.F. Docs</h1>
            <nav class="flex flex-col space-y-2">
                <a href="#section-variables" class="sidebar-link">Variables</a>
                <a href="#section-layout" class="sidebar-link">Layout & Sizing</a>
                <a href="#section-spacing" class="sidebar-link">Spacing</a>
                <a href="#section-typography" class="sidebar-link">Typography</a>
                <a href="#section-forms" class="sidebar-link">Forms</a>
                <a href="#section-accessibility" class="sidebar-link">Accessibility</a>
                <a href="#section-responsive" class="sidebar-link">Responsive</a>
            </nav>
        </aside>

        <main class="flex-1 p-6 md:p-10 max-w-7xl mx-auto">
            
            <header class="mb-8">
                <h1 class="text-4xl font-bold text-stone-900 mb-2">Redbold CSS Framework Docs</h1>
                <p class="text-lg text-stone-600 mb-6">A modern, minimal Utility CSS Framework.</p>
                <div class="relative">
                    <input type="text" id="search-box" placeholder="Search classes or properties (e.g., 'flex', 'padding', 'font-bold')" class="w-full p-3 pl-10 text-base border border-stone-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="w-5 h-5 text-stone-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </header>

            <div id="utility-list" class="space-y-10">
                
                <section id="section-variables">
                    <h2 class="text-3xl font-semibold text-stone-800 border-b pb-2 mb-4">Configuration & Variables</h2>
                    <p class="text-stone-600 mb-6">
                        These are the core CSS Custom Properties that power the entire design system. You can filter them by name (e.g., `--color-primary`) or by value (e.g., `#3b82f6`).
                    </p>
                    <h3 class="section-title">Colors</h3>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,1fr,auto] items-center gap-4 p-3 border-b border-stone-100">
                        <kbd>--color-primary</kbd>
                        <span class="css-property">#3b82f6 (Blue)</span>
                        <div class="color-swatch" style="background-color: #3b82f6"></div>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,1fr,auto] items-center gap-4 p-3 border-b border-stone-100">
                        <kbd>--color-text</kbd>
                        <span class="css-property">#111111</span>
                        <div class="color-swatch" style="background-color: #111111"></div>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,1fr,auto] items-center gap-4 p-3 border-b border-stone-100">
                        <kbd>--color-bg</kbd>
                        <span class="css-property">#ffffff</span>
                        <div class="color-swatch" style="background-color: #ffffff"></div>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,1fr,auto] items-center gap-4 p-3 border-b border-stone-100">
                        <kbd>--color-error</kbd>
                        <span class="css-property">#dc3545 (Red)</span>
                        <div class="color-swatch" style="background-color: #dc3545"></div>
                    </div>

                    <h3 class="section-title">Spacing Scale</h3>
                    <div class="utility-item grid-cols-1 md:grid-cols-2 gap-4 p-3 border-b border-stone-100">
                        <kbd>--space-1 (p-1, m-1)</kbd>
                        <span class="css-property">0.25rem (4px)</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-2 gap-4 p-3 border-b border-stone-100">
                        <kbd>--space-4 (p-4, m-4)</kbd>
                        <span class="css-property">1rem (16px)</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-2 gap-4 p-3 border-b border-stone-100">
                        <kbd>--space-8 (p-8, m-8)</kbd>
                        <span class="css-property">2rem (32px)</span>
                    </div>

                    <h3 class="section-title">Typography</h3>
                    <div class="utility-item grid-cols-1 md:grid-cols-2 gap-4 p-3 border-b border-stone-100">
                        <kbd>--font-base (font-normal)</kbd>
                        <span class="css-property">'Inter', sans-serif</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-2 gap-4 p-3 border-b border-stone-100">
                        <kbd>--text-base (text-base)</kbd>
                        <span class="css-property">1rem (16px)</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-2 gap-4 p-3 border-b border-stone-100">
                        <kbd>--text-2xl (text-2xl)</kbd>
                        <span class="css-property">1.5rem</span>
                    </div>
                </section>

                <section id="section-layout">
                    <h2 class="text-3xl font-semibold text-stone-800 border-b pb-2 mb-4">Layout & Sizing</h2>
                    <p class="text-stone-600 mb-6">
                        Control the layout of your page with display, flexbox, grid, and sizing utilities. Use the search bar to find properties like `display: flex` or `width: 50%`.
                    </p>
                    <h3 class="section-title">Display & Flexbox</h3>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.block</kbd>
                        <span class="css-property">display: block;</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.flex</kbd>
                        <span class="css-property">display: flex;</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.grid</kbd>
                        <span class="css-property">display: grid;</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.hidden</kbd>
                        <span class="css-property">display: none;</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.justify-center</kbd>
                        <span class="css-property">justify-content: center;</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.items-center</kbd>
                        <span class="css-property">align-items: center;</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1f,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.gap-4</kbd>
                        <span class="css-property">gap: var(--space-4);</span>
                    </div>
                    
                    <h3 class="section-title">Sizing</h3>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.w-full</kbd>
                        <span class="css-property">width: 100%;</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.w-1/2</kbd>
                        <span class="css-property">width: 50%;</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.max-w-full</kbd>
                        <span class="css-property">max-width: 100%;</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.h-auto</kbd>
                        <span class="css-property">height: auto;</span>
                    </div>
                </section>

                <section id="section-spacing">
                    <h2 class="text-3xl font-semibold text-stone-800 border-b pb-2 mb-4">Spacing</h2>
                    <p class="text-stone-600 mb-6">
                        Utilities for controlling padding and margin. All classes are based on the spacing scale defined in the variables.
                    </p>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.p-4</kbd>
                        <span class="css-property">padding: 1rem;</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.py-2</kbd>
                        <span class="css-property">padding-top/bottom: 0.5rem;</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.mx-auto</kbd>
                        <span class="css-property">margin-left/right: auto;</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.mb-4</kbd>
                        <span class="css-property">margin-bottom: 1rem;</span>
                    </div>
                </section>
                
                <section id="section-typography">
                    <h2 class="text-3xl font-semibold text-stone-800 border-b pb-2 mb-4">Typography Utilities</h2>
                    <p class="text-stone-600 mb-6">
                        Control font size, weight, color, alignment, and more.
                    </p>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.text-xl</kbd>
                        <span class="css-property">font-size: 1.25rem;</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.font-bold</kbd>
                        <span class="css-property">font-weight: 700;</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.text-center</kbd>
                        <span class="css-property">text-align: center;</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.text-primary</kbd>
                        <span class="css-property">color: var(--color-primary);</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.truncate</kbd>
                        <span class="css-property">overflow: hidden; text-overflow: ellipsis; white-space: nowrap;</span>
                    </div>
                </section>

                <section id="section-forms">
                    <h2 class="text-3xl font-semibold text-stone-800 border-b pb-2 mb-4">Form Utilities</h2>
                    <p class="text-stone-600 mb-6">
                        Classes for styling form elements consistently. Below the utility list, you can see live examples of these classes in action.
                    </p>
                    <h3 class="section-title">Form Classes</h3>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.form-input</kbd>
                        <span class="css-property">Base style for text inputs, selects.</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.form-textarea</kbd>
                        <span class="css-property">Base style for textareas.</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.form-checkbox</kbd>
                        <span class="css-property">Custom style for checkboxes.</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.form-label</kbd>
                        <span class="css-property">Base style for labels.</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.form-error</kbd>
                        <span class="css-property">Applies red border for error state.</span>
                    </div>

                    <h3 class="section-title mt-8">Live Examples</h3>
                    <div class="bg-white p-6 rounded-lg border border-stone-200 shadow-sm">
                        <div class="mb-4">
                            <label class="form-label block text-sm font-medium text-stone-700 mb-1" for="example-name">Name</label>
                            <input type="text" id="example-name" class="form-input block w-full p-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500" placeholder="Jane Doe">
                        </div>
                        <div class="mb-4">
                            <label class="form-label block text-sm font-medium text-stone-700 mb-1" for="example-email-error">Email (Error State)</label>
                            <input type="email" id="example-email-error" class="form-input form-error block w-full p-2 border border-red-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500" placeholder="jane@example.com">
                        </div>
                        <div class="mb-4">
                            <label class="form-label block text-sm font-medium text-stone-700 mb-1" for="example-bio">Biography</label>
                            <textarea id="example-bio" class="form-textarea block w-full p-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500" rows="3" placeholder="Tell us about yourself..."></textarea>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" id="example-check" class="form-checkbox h-4 w-4 text-teal-600 border-stone-300 rounded focus:ring-teal-500">
                            <label for="example-check" class="ml-2 block text-sm text-stone-800">I agree to the terms</label>
                        </div>
                    </div>
                </section>
                
                <section id="section-accessibility">
                    <h2 class="text-3xl font-semibold text-stone-800 border-b pb-2 mb-4">Accessibility</h2>
                    <p class="text-stone-600 mb-6">
                        Utilities for improving accessibility, including focus states and screen-reader-only content.
                    </p>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>a:focus-visible, ...</kbd>
                        <span class="css-property">Applies custom focus ring for keyboard users.</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>a:focus, ...</kbd>
                        <span class="css-property">Removes default outline (for mouse clicks).</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1f,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>.sr-only</kbd>
                        <span class="css-property">Hides element visually but keeps for screen readers.</span>
                    </div>
                </section>

                <section id="section-responsive">
                    <h2 class="text-3xl font-semibold text-stone-800 border-b pb-2 mb-4">Responsive Design</h2>
                    <p class="text-stone-600 mb-6">
                        The framework uses a mobile-first approach. Prefixes (`sm:`, `md:`, `lg:`, `xl:`) apply styles at or above a specific breakpoint. Try resizing your browser to see the example below change.
                    </p>
                    <h3 class="section-title">Breakpoints</h3>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>sm:</kbd>
                        <span class="css-property">min-width: 640px</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>md:</kbd>
                        <span class="css-property">min-width: 768px</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>lg:</kbd>
                        <span class="css-property">min-width: 1024px</span>
                    </div>
                    <div class="utility-item grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-3 border-b border-stone-100">
                        <kbd>xl:</kbd>
                        <span class="css-property">min-width: 1280px</span>
                    </div>

                    <h3 class="section-title mt-8">Live Example</h3>
                    <div class="p-6 rounded-lg border border-stone-200 shadow-sm text-center font-semibold text-lg
                                bg-teal-100 text-teal-800
                                md:bg-amber-100 md:text-amber-800
                                lg:bg-rose-100 lg:text-rose-800">
                        <span class="block sm:hidden">Base (Mobile)</span>
                        <span class="hidden sm:block md:hidden">SM (>= 640px)</span>
                        <span class="hidden md:block lg:hidden">MD (>= 768px)</span>
                        <span class="hidden lg:block xl:hidden">LG (>= 1024px)</span>
                        <span class="hidden xl:block">XL (>= 1280px)</span>
                    </div>
                    <p class="text-sm text-center mt-2 text-stone-500">This box changes color and text based on the current breakpoint.</p>
                </section>

                <div id="no-results" class="hidden text-center py-10">
                    <h3 class="text-2xl font-semibold text-stone-700">No results found</h3>
                    <p class="text-stone-500">Try adjusting your search term.</p>
                </div>

            </div>
        </main>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('search-box');
            const utilityList = document.getElementById('utility-list');
            const items = utilityList.querySelectorAll('.utility-item');
            const sections = utilityList.querySelectorAll('section');
            const noResults = document.getElementById('no-results');

            function filterItems() {
                const filter = searchInput.value.toLowerCase().trim();
                let visibleItems = 0;

                items.forEach(item => {
                    const text = item.textContent.toLowerCase();
                    const matches = text.includes(filter);
                    item.hidden = !matches;
                    if (matches) {
                        visibleItems++;
                    }
                });

                sections.forEach(section => {
                    const visibleChildren = section.querySelectorAll('.utility-item:not([hidden])');
                    const sectionTitle = section.querySelector('h2');
                    
                    if (visibleChildren.length > 0) {
                        section.hidden = false;
                    } else if (filter) {
                        const titleText = sectionTitle.textContent.toLowerCase();
                        if (titleText.includes(filter)) {
                             section.hidden = false;
                             section.querySelectorAll('.utility-item').forEach(child => child.hidden = true);
                             section.querySelectorAll('.section-title, .live-example, .example-note').forEach(el => el.hidden = true);
                        } else {
                            section.hidden = true;
                        }
                    } else {
                        section.hidden = false;
                        section.querySelectorAll('.utility-item, .section-title, .live-example, .example-note').forEach(el => el.hidden = false);
                    }
                });

                noResults.hidden = visibleItems > 0 || !filter;
            }

            searchInput.addEventListener('keyup', filterItems);
            
            const sidebarLinks = document.querySelectorAll('.sidebar-link');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        sidebarLinks.forEach(link => {
                            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                        });
                    }
                });
            }, { rootMargin: "-50% 0px -50% 0px", threshold: 0 });

            sections.forEach(section => observer.observe(section));
        });
    </script>

</body>
</html>
