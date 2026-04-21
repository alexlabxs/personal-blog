# Design System Specification: The Academic Architect

This design system is a high-end, editorial approach to digital education. It moves beyond the "utility dashboard" aesthetic of typical exam platforms, instead embracing the feel of a premium, curated academic journal. It is designed to foster deep focus for students preparing for the Chinese Public Exam (GongKao), where clarity and authority are paramount.

---

## 1. Overview & Creative North Star
**Creative North Star: "The Editorial Mentor"**

The design system rejects the "cluttered classroom" look. Instead, it utilizes **The Editorial Mentor** philosophy: a layout that feels intentional, authoritative, and quiet. We achieve this by moving away from rigid, boxed-in grids and toward a "Floating Editorial" style—using asymmetrical white space and tonal layering to guide the eye through long-form essay content without visual fatigue.

**The Signature Feel:**
*   **Intentional Asymmetry:** Important CTAs or grading summaries are often offset or "pasted" onto the layout like a scholar’s marginalia.
*   **Tonal Authority:** We use a high-contrast typography scale (Manrope for headers, Inter for body) to create a clear hierarchy between "The System’s Feedback" and "The Student’s Work."

---

## 2. Color & Surface Logic
We utilize a sophisticated palette of trustworthy blues and architectural neutrals. The goal is to provide a "sterile but warm" environment for correction and study.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. Structural boundaries must be defined solely through background color shifts.
*   **Application:** A sidebar should not be separated by a line; it should be `surface-container-low` sitting against a `surface` background.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers of fine paper.
*   **Base Layer:** `surface` (#f7f9fc)
*   **Secondary Sections:** `surface-container-low` (#f2f4f7)
*   **Interactive Cards:** `surface-container-lowest` (#ffffff) to provide a "pop" of clean white against the slightly tinted background.
*   **High-Priority Overlays:** `surface-container-highest` (#e0e3e6) for utility bars or temporary drawers.

### The "Glass & Gradient" Rule
To avoid a flat, "Bootstrap" feel, use **Glassmorphism** for floating correction panels.
*   **Correction Bubble:** Use `surface-container-lowest` with an 80% opacity and a `backdrop-blur: 12px`.
*   **Signature Textures:** Use a subtle linear gradient on primary action buttons (from `primary` #0060a9 to `primary_container` #409eff) to add "soul" to the click action.

---

## 3. Typography: The Scholarly Scale
We pair **Manrope** (for structural headers) with **Inter** (for reading).

| Category | Token | Font | Size | Weight | Intent |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-md` | Manrope | 2.75rem | 700 | Hero score or "Pass/Fail" status. |
| **Headline**| `headline-sm`| Manrope | 1.5rem | 600 | Essay section titles (e.g., "Argument Analysis"). |
| **Title**   | `title-md`   | Inter | 1.125rem | 600 | Sub-headers within correction notes. |
| **Body**    | `body-lg`    | Inter | 1rem | 400 | The student's essay text. (Leading: 1.7) |
| **Label**   | `label-md`   | Inter | 0.75rem | 500 | Metadata, timestamps, word counts. |

*   **Design Note:** For the essay text itself, always use `body-lg` with a maximum line-width of `65ch` to ensure the eye doesn't tire during long correction sessions.

---

## 4. Elevation & Depth
In this design system, depth is achieved through **Tonal Layering** rather than shadows.

*   **The Layering Principle:** Place a `surface-container-lowest` card on top of a `surface-container-low` background. The subtle shift from #f2f4f7 to #ffffff creates a natural, soft lift.
*   **Ambient Shadows:** If an element must "float" (like a correction popover), use a highly diffused shadow: `0px 12px 32px rgba(25, 28, 30, 0.06)`. Note the use of the `on-surface` color for the shadow tint.
*   **The "Ghost Border" Fallback:** If a divider is functionally required, use `outline_variant` (#c0c7d4) at 20% opacity. Never use a 100% opaque border.

---

## 5. Signature Components

### The Correction Card (Essay Feedback)
*   **Base:** `surface-container-lowest` (#ffffff).
*   **Border-radius:** `lg` (0.5rem).
*   **Layout:** No dividers. Use `spacing-4` (1rem) to separate the "Original Text" from the "Teacher's Suggestion."
*   **Indicator:** Use a vertical 3px pill of `primary` (#0060a9) on the left edge to denote "active focus."

### Action Buttons
*   **Primary:** Gradient from `primary` to `primary_container`. White text. Radius `md`.
*   **Secondary:** `surface-container-high` background with `on-surface` text. No border.
*   **Tertiary/Ghost:** No background. Text color `primary`. Use for "Cancel" or "View Less."

### Educational Chips (Grading Tags)
*   **Style:** Pill shape (`full` radius).
*   **Logic:** For a "Logic Error," use `error_container` background with `on_error_container` text. Do not use icons unless they provide unique semantic meaning.

### Input Fields (Essay Submission)
*   **State - Default:** `surface-container-low` background, no border.
*   **State - Focus:** `surface-container-lowest` background, `ghost-border` (20% `primary`). 
*   **Typography:** All input text uses `body-lg` for maximum legibility.

---

## 6. Do's and Don'ts

### Do:
*   **DO** use whitespace as a separator. If you think you need a line, try adding `spacing-8` (2rem) instead.
*   **DO** use `tertiary` (#8b5000) for "Insights" or "Pro-Tips." It provides a warm, academic contrast to the trustworthy blues.
*   **DO** ensure all essay text has a line-height of at least 1.6 to 1.8 for readability.

### Don't:
*   **DON'T** use pure black (#000000) for text. Use `on_surface` (#191c1e) to reduce ocular strain.
*   **DON'T** use "High-Contrast" borders. A border should be felt, not seen.
*   **DON'T** use standard Element Plus "Blue" (#409EFF) as the only primary color. Offset it with our deeper `primary` (#0060a9) for a more mature, authoritative feel.
*   **DON'T** crowd the page. If the student is writing an essay, the UI should "recede" into the background using `surface` tones.