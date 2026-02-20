# The Architect Portfolio

A high-conversion, production-grade personal portfolio website designed for a **Senior Backend Engineer / Technical Lead**. 

This project moves away from generic, flashy frontend templates to provide a calm, precise, and engineering-first narrative. It is built to "wow" recruiters and hiring managers by demonstrating deep ownership of distributed systems and a commitment to reliability.

## 🏗️ Core Philosophy: "The Architect"
The website is themed as a technical blueprint. It prioritizes data, metrics, and system-design depth over marketing fluff. 

- **Reliability First**: Every section reinforces the idea that "Reliability beats cleverness."
- **Production Ownership**: Highlights experience in on-call rotations, incident handling, and root cause analysis (RCA).
- **Recruiter UX**: Optimized for a 60-second scan with clear outcome badges and domain-specific terminology (LMS, B2B SaaS, Multi-tenancy).

## 🚀 Key Features

### 1. Visual Engineering Artifacts
- **Terminal Log Hero**: A stylized, production-realistic log window showing a retry sequence, immediately signaling a backend-heavy background.
- **CSS System Diagram**: A hand-coded distribution diagram showcasing Edge, Compute, Data, and Observability layers without relying on external image assets.

### 2. Recruiter-First Scannability
- **Metric Highlighting**: Key achievements (e.g., saving ~$350K/month, reducing turnaround time by 33%) are wrapped in custom `accent-glow` badges.
- **Micro-Copy**: Tight, domain-grounded verbs (Architected, Orchestrated, Resolved) instead of vague phrases.

### 3. Print & Resume Mode
- **Zero-Style Printing**: Custom `@media print` rules strip the dark theme and grid, converting the site into a professional, one-page ink-friendly resume.
- **PDF CTA**: Integrated links in the Hero and Contact sections for immediate resume access.

### 4. Technical Excellence
- **Zero Dependencies**: Built with pure HTML5, CSS3, and ES6 JavaScript. No heavy frameworks or large bundles.
- **Performance Budget**: Targeting Lighthouse scores of ≥ 95 for Performance and SEO.
- **Accessibility**: Semantic HTML5 landmarks, ARIA roles, and high-contrast `:focus-visible` outlines for keyboard navigation.

## 🛠️ Tech Stack
- **Structure**: Semantic HTML5
- **Styling**: Vanilla CSS3 (Custom Variables, Flexbox/Grid, Blueprint Grid Overlay)
- **Interactivity**: Vanilla JavaScript (Intersection Observer for scroll-spy and reveal animations)
- **Typography**: Inter (Sans) & JetBrains Mono (Technical/Monospace)

## 📂 Project Structure
```text
portfolio-ma/
├── index.html     # Main entry point & semantic structure
├── styles.css     # The Architect design system (Grid, Print, Responsive)
├── script.js      # Active navigation & reveal logic
├── resume.pdf     # (User-provided) downloadable resume
└── .gitignore     # Standard git hygiene
```

## 💻 Local Development
Since this is a static project, you don't need a build step. You can run it locally using any basic HTTP server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if installed)
npx serve .
```
Access the site at `http://localhost:8000`.

## 📜 Deployment
Recommended deployment is via **GitHub Pages**:
1. Push the code to your `main` or `master` branch.
2. Go to **Settings > Pages** in your GitHub repository.
3. Select the branch and click **Save**.

---
*Built for Mohammad Ali — Senior Backend Engineer*
