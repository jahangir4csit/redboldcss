# RedBold CSS Framework (v1.0.0)

A lightweight and minimal CSS utility framework designed for fast prototyping and building responsive layouts. Focused on simplicity, accessibility, and performance, it provides essential utilities for spacing, typography, layout, and forms without the bloat of larger frameworks.

## Features

- Responsive utilities: sm, md, lg, xl breakpoints included.
- Spacing: Margin and padding utilities (`m-`, `p-`, `mx-`, `py-`, etc.)
- Typography: Font size and text alignment utilities.
- Layout: Flexbox, grid, width, and order utilities.
- Forms: Styled inputs, selects, textareas, checkboxes, radios with accessible focus styles.
- Minimal & fast: Only essential classes included for performance.

## How to Use

### 1. Include the CSS

Include the CSS file in your HTML:

```html
<link rel="stylesheet" href="./dist/redbold.min.css">
```

### 2. Apply Utility Classes

#### Layout & Display

```html
<div class="sm:flex sm:flex-col md:flex-row gap-4">
  <div class="sm:w-1/2 md:w-1/3">Box 1</div>
  <div class="sm:w-1/2 md:w-2/3">Box 2</div>
</div>
```

#### Typography

```html
<h1 class="text-xl sm:text-2xl text-center">Heading</h1>
<p class="text-base sm:text-lg">Responsive paragraph</p>
```

### 3. Responsive Utilities

Use `sm:`, `md:`, `lg:`, `xl:` prefixes to apply styles at different breakpoints:

```html
<div class="text-center sm:text-left md:text-right lg:text-center">
  Responsive text alignment
</div>
```

### 4. Forms & Inputs

Basic form styling is included:

```html
<input type="text" class="form-input" placeholder="Enter text">
<select class="form-select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
<textarea class="form-textarea" placeholder="Type something..."></textarea>

<label>
  <input type="checkbox" class="form-checkbox"> Check me
</label>

<label>
  <input type="radio" name="radio-group" class="form-radio"> Option 1
</label>
```

### 5. Customization

You can customize the framework via CSS variables in `:root`:

```css
:root {
  --color-primary: #3b82f6;
  --color-primary-dark: #2563eb;
  --color-bg-light: #f9fafb;
  --color-text-dark: #111827;
  --color-border: #d1d5db;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --line-height-base: 1.5;
}
```

### 6. Full Documentation

Full documentation and examples are coming soon