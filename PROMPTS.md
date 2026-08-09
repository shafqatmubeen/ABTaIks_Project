# ABTalks — Vibe Coding Prompts

This file documents the AI prompts used during the design, implementation, refinement, and polishing of the ABTalks 60-Day Coding Challenge project.

---

## 1. Initial Premium Web Experience Prompt

Build a highly engaging, visually impressive, premium, professional, mobile-first web application for the ABTalks 60-Day Coding Challenge.

This is a hackathon submission, so the final result must look like a real, production-quality startup product — not a generic AI-generated dashboard, template, or basic student project.

The judges will primarily inspect the application at **390px mobile width**, so mobile design and visual polish are the highest priority.

### Core Product Idea

ABTalks runs a 60-day coding challenge for Indian college students.

Students:

1. Choose a coding track
2. Build something every day
3. Submit GitHub proof
4. Submit LinkedIn proof
5. Maintain their learning streak
6. Build a public record of consistent work

The product should make the student feel:

> "I can actually complete 60 days."

Core emotional loop:

**Discover → Commit → Build → Prove → Continue → Grow**

---

## 2. Required Routes

Implement exactly these three required routes:

```text
/
/dashboard
/day/12
```

Do not remove or rename these routes.

Each route must work when opened directly.

---

## 3. Visual Direction

Create a distinctive visual identity for ABTalks.

Avoid:

* Generic Bootstrap dashboards
* Excessive gradients
* Excessive glassmorphism
* Childish or gaming-style visuals
* Repetitive white cards
* Generic AI-generated templates

The visual style should combine:

* Premium EdTech
* Modern developer platform
* Career-growth product
* Modern SaaS
* Editorial typography
* Subtle futuristic technology aesthetics

The interface should communicate:

**Consistency + Progress + Career Growth + Confidence**

---

## 4. Color System

Use a sophisticated dark-first color palette.

| Purpose              | Value                    |
| -------------------- | ------------------------ |
| Primary Background   | `#080B12`                |
| Secondary Background | `#0E1320`                |
| Elevated Surface     | `#141A27`                |
| Primary Accent       | `#7C5CFF`                |
| Secondary Accent     | `#22D3A6`                |
| Highlight            | `#F5C451`                |
| Primary Text         | `#F8FAFC`                |
| Secondary Text       | `#94A3B8`                |
| Border               | `rgba(255,255,255,0.08)` |

Use purple for primary actions and progress.

Use mint/green for successful states.

Use yellow sparingly for streaks, achievements, and highlights.

Keep the overall color system premium and cohesive.

---

## 5. Typography

Use a modern professional font such as:

* Inter
* Manrope
* Plus Jakarta Sans

Prefer **Manrope** for headings and **Inter** for supporting UI.

Maintain:

* Strong typography hierarchy
* Excellent readability
* Appropriate mobile font sizes
* Confident headings
* Comfortable body text

Avoid oversized typography that creates poor mobile layouts.

---

## 6. Global Loading Experience

Create a short, premium ABTalks launch loader when the application first opens.

The loader should include:

* Dark background
* ABTalks logo/mark
* Subtle animated glowing ring or progress line
* Small animated progress indicator
* Text:

```text
BUILDING YOUR MOMENTUM
```

Use a loading duration of approximately **900–1400ms**.

After loading, transition smoothly into the page using:

* Opacity
* Slight upward movement
* Subtle blur-to-sharp transition

The loader should feel polished without making users wait unnecessarily.

Use session state so it does not repeatedly interrupt navigation.

---

## 7. Global Animation System

Animations should feel intentional, smooth, and premium.

Do not animate everything randomly.

Recommended timing:

* Page entrance: 500–700ms
* Section reveal: 450–650ms
* Card stagger: 70–100ms
* Button interactions: 150–220ms
* Hover: approximately 180ms
* Modal/sheet: 300–400ms

Use:

```text
cubic-bezier(0.22, 1, 0.36, 1)
```

Animation styles may include:

* Fade-up
* Slide-up
* Scale-in
* Blur-in
* Staggered reveal
* Progress animation
* Button press feedback
* Subtle glow
* Number counting animation

Avoid excessive bouncing or distracting motion.

---

## 8. Scroll-Based Experience

The interface should feel alive as the user scrolls.

When sections enter the viewport:

* Fade in
* Move upward slightly
* Scale from approximately `0.98` to `1`
* Stagger child elements

Animations should happen naturally and remain subtle.

Use scroll-based motion to improve visual storytelling rather than adding animation purely for decoration.

Progress indicators and important statistics may animate when they become visible.

Avoid excessive repeated animations that make the interface distracting.

---

## 9. Implementation Requirements

Actually build the project.

Do not only provide a plan or design description.

Use reusable components and maintainable code.

Prioritize:

* Mobile-first design
* 390px viewport
* Responsive layouts
* Strong visual hierarchy
* Consistent spacing
* Professional buttons and cards
* Smooth transitions
* Accessible interactions
* Clean component structure

The final application should feel like a polished startup product rather than a basic AI-generated website.

---

## 10. Final Quality Standard

Before considering the project complete:

* Inspect the application at 390px
* Check responsive behavior
* Check spacing and alignment
* Check typography
* Check animations
* Check loading experience
* Check buttons and interactions
* Check for horizontal overflow
* Check for clipped content
* Check all required routes

Required routes must remain:

```text
/
/dashboard
/day/12
```

The final experience should be:

**Premium · Professional · Engaging · Responsive · Interactive · Motivating**
