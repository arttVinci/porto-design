# Component Architecture & MCP Registry Mapping

This portfolio adheres strictly to the MCP Component Priority Hierarchy:
1. **Magic UI** (Primary creative layer)
2. **ReUI** (Secondary structural patterns)
3. **shadcn/ui** (Base accessible primitives & fallback)
4. **Koboyo Icons** (Unified hand-drawn SVG icon set)

---

## Section-by-Section Component Registry

### 1. Navigation (`src/components/sections/navbar.tsx`)
- **Primary Component**: Floating Header with Single-Line Desktop Navigation
- **Source**: **Magic UI** (`dock` paradigm adapted to fixed header) + **shadcn/ui** (`Button`)
- **Rationale**: Minimalist fixed container with subtle backdrop blur (`backdrop-blur-md`), maintaining viewport height under 64px and preserving desktop single-line layout (per `taste` skill rule).
- **Icons**: Koboyo `cpu`, `download`.

### 2. Hero (`src/components/sections/hero.tsx`)
- **Primary Component**: `BlurFade` + `TypingAnimation`
- **Source**: **Magic UI** (`blur-fade`, `typing-animation`)
- **Rationale**: Magic UI provides calibrated motion choreography. `TypingAnimation` highlights the rotating technical specialties smoothly, while `BlurFade` controls the staggered entry.
- **Constraints Applied**: Fits within initial viewport (`min-h-[calc(100dvh-4rem)]`), top padding `pt-12`, subtext < 20 words, strictly max 4 text elements.
- **Icons**: Koboyo `award`, `briefcase`, `cpu`, `arrow-right`, `mail`, `document`.

### 3. About (`src/components/sections/about.tsx`)
- **Primary Component**: Asymmetric 2-Column Story & Academic Credential Cards
- **Source**: **Magic UI** (`blur-fade`) + **Tailwind CSS Tokens**
- **Rationale**: Simple, high-contrast narrative layout without split-header AI cliché. Cards display academic credentials from SMKN 5 Kota Bekasi and Politeknik Negeri Jakarta.
- **Icons**: Koboyo `wrench`, `zap`, `cpu`.

### 4. Skills (`src/components/sections/skills.tsx`)
- **Primary Component**: `Marquee` (Highlight Strip) + Badge Grid
- **Source**: **Magic UI** (`marquee`) + **shadcn/ui** (`Badge`)
- **Rationale**: Magic UI `Marquee` is used **exactly once** on the entire page to highlight core automation specializations without visual clutter. Grouped badge chips provide immediate scannability.
- **Icons**: Koboyo `cog`, `zap`, `cpu`, `wrench`, `document`, `lightning`, `terminal`, `box`, `eye`, `file`, `user`, `link`.

### 5. Projects (`src/components/sections/projects.tsx`)
- **Primary Component**: `MagicCard` + Accessible Modal `Dialog`
- **Source**: **Magic UI** (`magic-card`) + **Radix UI / shadcn** (`dialog`)
- **Rationale**: `MagicCard` provides a cursor-following border spotlight without heavy GPU repaint. Clicking any project card opens a Radix `Dialog` detailing full physical engineering specifications.
- **Icons**: Koboyo `arrow-right`.

### 6. Experience (`src/components/sections/experience.tsx`)
- **Primary Component**: Vertical Rail Minimal Timeline
- **Source**: **ReUI** Timeline Pattern + **Magic UI** (`blur-fade`)
- **Rationale**: ReUI's minimalist vertical rail presents Tiar's PT Akebono Brake Astra internships clearly with timeline nodes and verified bullet points.
- **Icons**: Koboyo `wrench`, `cpu`.

### 7. Certificates (`src/components/sections/certificates.tsx`)
- **Primary Component**: Credential Cards Grid + Co-Curricular Service Blocks
- **Source**: **shadcn/ui** (`Card` primitive, `Badge`) + **Magic UI** (`blur-fade`)
- **Rationale**: Displays national certifications (BNSP, LSP) and industrial training (PT Akebono Dojo, SCADA seminar, E-TIME) with verified statuses.
- **Icons**: Koboyo `certificate`.

### 8. Contact & Footer (`src/components/sections/contact.tsx`, `footer.tsx`)
- **Primary Component**: Direct Contact Cards with Copy-Email Action + Tactile Button
- **Source**: **shadcn/ui** (`Button`) + **Koboyo Icons**
- **Rationale**: Immediate utility for recruiters with a one-click clipboard copy action and visual `check` feedback.
- **Icons**: Koboyo `mail`, `phone`, `copy`, `check`, `external-link`, `cpu`.
