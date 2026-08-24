---
name: Lumina Dev Noir
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c4c9ac'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8e9379'
  outline-variant: '#444933'
  surface-tint: '#abd600'
  primary: '#ffffff'
  on-primary: '#283500'
  primary-container: '#c3f400'
  on-primary-container: '#556d00'
  inverse-primary: '#506600'
  secondary: '#c6c6c6'
  on-secondary: '#303030'
  secondary-container: '#474747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#ffffff'
  on-tertiary: '#313030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c3f400'
  primary-fixed-dim: '#abd600'
  on-primary-fixed: '#161e00'
  on-primary-fixed-variant: '#3c4d00'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
  electric-lime: '#CCFF00'
  onyx-black: '#000000'
  graphite-grey: '#121212'
  glass-overlay: rgba(255, 255, 255, 0.03)
  border-subtle: rgba(255, 255, 255, 0.1)
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 32px
  section-padding: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system establishes a high-performance, premium developer identity. It targets international tech recruiters and collaborators in the US and Canada, evoking a sense of technical mastery, precision, and modern sophistication.

The aesthetic follows a **Minimalist-Glassmorphic** hybrid style. It utilizes a pitch-black foundation to emphasize the "Electric Lime" accent, creating a high-contrast environment that feels both high-tech and editorial. Layouts are spacious and structured, mimicking the clean organization of well-written code. Subtle glassmorphic layers provide depth without clutter, while sharp typography ensures clarity for long-form professional experience descriptions.

## Colors

This design system is built on a "True Dark" philosophy. The primary background is absolute black (`#000000`) to maximize the luminance of the Electric Lime accent.

- **Primary (Electric Lime):** Used exclusively for high-impact call-to-actions, status indicators, active nav states, and syntax-highlighting-style accents.
- **Secondary/Tertiary:** Variations of deep charcoal and graphite used for container surfaces and card backgrounds to create a tiered visual hierarchy.
- **Neutrals:** Pure white is reserved for primary body text, while a 60% opacity white is used for secondary metadata and labels to reduce visual strain.

## Typography

Typography is used to reinforce the developer persona. 

- **Headlines:** Montserrat provides a geometric, bold foundation for section headers and display titles. High-level headers should use tighter letter spacing for a modern, compressed look.
- **Body:** Inter is chosen for its exceptional legibility at small sizes, particularly important for technical resumes and project descriptions.
- **Labels/Technical:** JetBrains Mono (monospaced) is used for "tech stack" chips, dates, and code-related metadata to provide a subtle nod to IDE environments.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop, centered within a 1280px container to ensure readability on ultrawide monitors. 

- **Grid:** A 12-column system with generous 32px gutters.
- **Vertical Rhythm:** Sections are separated by large 120px padding blocks to give the content room to "breathe" and signal clear transitions between Biography, Experience, and Projects.
- **Mobile Adaptivity:** On mobile devices, margins shrink to 20px, and section padding reduces to 80px. Columns collapse to a single stack for Experience timelines and Project cards.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layering** and **Glassmorphism** rather than traditional shadows.

- **Level 0 (Base):** Pitch black `#000000`.
- **Level 1 (Cards/Containers):** Graphite grey `#121212` with a subtle 1px border of `rgba(255, 255, 255, 0.1)`.
- **Level 2 (Active/Floating):** Semi-transparent glass panels with a `backdrop-filter: blur(10px)`.
- **Accent Depth:** High-priority elements use an "Electric Lime" outer glow (box-shadow: 0 0 20px rgba(204, 255, 0, 0.2)) to appear as if they are emitting light against the dark background.

## Shapes

The shape language is "Soft-Modern." UI elements use a consistent 0.5rem (8px) radius. This strikes a balance between the aggressive sharpness of brutalism and the overly-friendly roundness of consumer social apps.

- **Standard Buttons & Inputs:** 0.5rem (8px).
- **Project Cards:** 1rem (16px) for a more substantial, framed feel.
- **Chips/Badges:** Pill-shaped (fully rounded) to contrast against the structured grid of the portfolio.

## Components

### Buttons
- **Primary:** Electric Lime background with black text. No border. On hover, increase outer glow.
- **Secondary:** Transparent background with 1px white border. On hover, fill with white and switch text to black.

### Project Cards
Cards feature a "Reveal" hover effect. The base state shows the project title and a monochrome-tinted image. On hover, the image clears to full color, and a brief tech-stack summary slides up from the bottom using a glassmorphic overlay.

### Work Experience Timeline
A vertical structured line on the left. The company logo sits in a glassmorphic circle. The US/Canada scope is highlighted using the "label-caps" typography style in Electric Lime to denote the location.

### Input Fields
Dark-themed inputs with a 1px `graphite-grey` border. When focused, the border transitions to `electric-lime` with a subtle glow.

### Tech Stack Chips
Monospaced text (JetBrains Mono) inside a pill-shaped container with a low-opacity lime background (10% opacity) and lime text.