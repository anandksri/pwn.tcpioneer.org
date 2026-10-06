# PWN.TCPIONEER — Complete Website Build Roadmap

## Purpose
Master checklist for completing the PWN.TCPIONEER cybersecurity learning platform. Codex must use this file as the single source of truth, work sequentially, update checkboxes, validate, commit, and push each major phase.

## Git Safety
- [x] Preserve existing uncommitted work
- [x] Inspect `git status` before major work
- [ ] Create logical commits for every completed phase
- [ ] Push every completed phase to GitHub
- [ ] Never use `git reset --hard`, `git clean -fd`, or destructive checkout/revert commands
- [ ] Never commit secrets, `.env` files, credentials, or private keys

## Phase 0 — Project Baseline
- [x] Existing Next.js/App Router project inspected
- [x] Routes inspected
- [x] Authentication preserved
- [x] Prisma/database preserved
- [x] Existing dashboard preserved
- [x] Existing uncommitted work preserved

## Phase 1 — shadcn/UI Foundation — COMPLETE
- [x] Base UI
- [x] Lyra preset
- [x] Tailwind CSS v4
- [x] Semantic CSS variables
- [x] Button
- [x] Card
- [x] Badge
- [x] Separator
- [x] Input
- [x] Progress
- [x] Avatar
- [x] Tooltip
- [x] Dropdown Menu
- [x] Tabs
- [x] Dialog
- [x] Sheet
- [x] Label

## Phase 2 — Design System
Core identity: DARK + SOFT WHITE + VIOLET

```text
Background #09090B
Surface #0F0F11
Secondary #18181B
Elevated #1C1C20
Border #27272A
Violet #8B5CF6
Dark Violet #7C3AED
Light Violet #A78BFA
Foreground #F4F4F5
Strong Text #E4E4E7
Body #D4D4D8
Secondary Text #A1A1AA
Muted #71717A
```

- [x] Dark theme is default
- [x] Soft white instead of pure white for normal text
- [x] Violet is primary brand accent
- [x] Remove remaining inconsistent direct colors
- [x] Remove unnecessary gradients/glows
- [x] Normalize excessive rounded cards/pills

## Phase 3 — Shared PWN Components
- [x] Finalize `PwnButton`
- [x] Finalize `PwnBadge`
- [x] Finalize `PwnCard`
- [x] Finalize `ModuleCard`
- [x] Finalize `FeatureCard`
- [x] Finalize `LearningModuleCard`
- [x] Finalize `SectionHeading`
- [x] Finalize `IconBox`
- [x] Preserve existing props/APIs
- [x] Use semantic tokens
- [x] Remove unnecessary gradients/glows
- [x] Reduce excessive rounding
- [x] Verify responsive behavior
- [x] Verify existing usages

Architecture:
`shadcn primitives → PWN domain components → sections/pages`

## Phase 4 — Public Navbar
- [x] Logo
- [x] Home
- [x] About
- [x] Modules
- [x] Practice
- [x] Resources
- [x] Community
- [x] Search
- [x] Login
- [x] Get Started
- [x] Active state
- [x] Violet interaction state
- [x] Mobile Sheet/drawer
- [x] Keyboard accessibility
- [x] Responsive layout
- [x] Dark navbar, no white background, no excessive blur

## Phase 5 — Homepage `/`
Sections: Navbar, Hero, EntryPoint, ThePath, WhyPwn, TrainingGrounds, Community, FAQ, Footer.

### Hero
- [ ] Cybersecurity positioning
- [ ] Soft-white heading
- [ ] Violet emphasis
- [ ] Supporting text
- [ ] Primary CTA
- [ ] Secondary CTA
- [ ] Existing stats/metadata if applicable
- [ ] Responsive layout
- [ ] Restrained animation
- [ ] No giant gradients/white background

### EntryPoint
- [ ] Starting paths
- [ ] Beginner/intermediate/advanced entry
- [ ] PWN cards
- [ ] Difficulty hierarchy
- [ ] CTAs
- [ ] Responsive

### ThePath
- [ ] Learning journey
- [ ] Beginner → intermediate → advanced progression
- [ ] Module relationships
- [ ] Progress indicators
- [ ] Violet active/progress states

### WhyPwn
- [ ] Platform value
- [ ] Practical learning
- [ ] Labs/challenges
- [ ] Community
- [ ] Real-world skills
- [ ] No generic/fake marketing claims

### Training Grounds
- [ ] Module showcase
- [ ] Linux
- [ ] Networking
- [ ] Web security
- [ ] OSINT
- [ ] Pentesting
- [ ] Defensive/SOC where supported
- [ ] Difficulty/progress/CTA
- [ ] Only use real supported categories

### Community
- [ ] Community introduction
- [ ] Discord CTA
- [ ] Events/workshops/CTFs
- [ ] Real data only
- [ ] No fake statistics

### FAQ
- [ ] Accessible accordion
- [ ] Clear answers
- [ ] Mobile friendly

### Footer
- [ ] Brand
- [ ] Navigation
- [ ] Resources
- [ ] Community/social links
- [ ] Legal
- [ ] Copyright

## Phase 6 — About `/about`
- [ ] Platform/organization introduction
- [ ] Mission
- [ ] Learning philosophy
- [ ] What PWN provides
- [ ] Community
- [ ] Team only if real data exists
- [ ] CTA
- [ ] Responsive
- [ ] SEO metadata

## Phase 7 — Modules `/modules`
- [ ] Header
- [ ] Search
- [ ] Category filter
- [ ] Difficulty filter
- [ ] Progress filter
- [ ] Module cards
- [ ] Responsive grid
- [ ] Empty/loading/error states
- [ ] Pagination/load-more if needed
- [ ] Preserve real backend/data behavior

Possible categories only if actually supported: Linux, Networking, Web Security, OSINT, Cryptography, Forensics, Pentesting, SOC/Blue Team, Cloud Security, Mobile Security, IoT Security.

## Phase 8 — Learning Experience
- [ ] Module overview
- [ ] Description
- [ ] Difficulty
- [ ] Estimated time
- [ ] Progress
- [ ] Lessons list
- [ ] Lesson completion
- [ ] Continue
- [ ] Previous/next
- [ ] Progress persistence
- [ ] Completion state/feedback
- [ ] Focused reading/learning UI

## Phase 9 — Practice `/practice`
- [ ] Challenge listing
- [ ] Search
- [ ] Category/difficulty filters
- [ ] Challenge cards
- [ ] Points
- [ ] Completion/progress
- [ ] Empty/loading/error states
- [ ] Only use categories supported by the actual system

## Phase 10 — Challenge Details
- [ ] Description
- [ ] Difficulty
- [ ] Points
- [ ] Tags
- [ ] Hints
- [ ] Flag submission
- [ ] Server-side validation
- [ ] Success/incorrect states
- [ ] Attempt feedback
- [ ] Progress
- [ ] Next challenge
- [ ] Never expose flags or validation secrets to client
- [ ] Rate-limit sensitive operations where appropriate

## Phase 11 — CTF / Competition (if in scope)
- [ ] CTF listing
- [ ] Event details
- [ ] Registration
- [ ] Challenge categories
- [ ] Scores/points
- [ ] Leaderboard
- [ ] Team/player information
- [ ] Event status
- [ ] Real-data countdown
- [ ] Post-event state
- [ ] No fake live statistics

## Phase 12 — Dashboard `/dashboard`
### Sidebar
- [ ] Dark sidebar
- [ ] PWN logo
- [ ] Navigation hierarchy
- [ ] Active violet accent
- [ ] Collapse control INSIDE sidebar
- [ ] Expanded/collapsed states
- [ ] Mobile sidebar/sheet
- [ ] Keyboard accessibility

### Header
- [ ] Search
- [ ] Notifications
- [ ] Profile menu
- [ ] Responsive
- [ ] Minimal/no excessive blur

### Content
- [ ] Welcome banner
- [ ] Stats
- [ ] Continue learning
- [ ] Recent activity
- [ ] Upcoming events
- [ ] Quick actions
- [ ] Cyber news
- [ ] Loading/empty/error states
- [ ] Preserve existing behavior

## Phase 13 — Profile `/profile`
- [ ] Profile header
- [ ] Avatar
- [ ] Name/email
- [ ] Learning statistics
- [ ] Completed modules
- [ ] Challenge statistics
- [ ] Achievements
- [ ] Activity
- [ ] Existing editable fields
- [ ] Responsive
- [ ] Safe handling of sensitive data

## Phase 14 — Settings `/settings`
- [ ] Account
- [ ] Profile
- [ ] Notifications
- [ ] Security
- [ ] Existing auth/password settings
- [ ] Danger zone where appropriate
- [ ] Validation
- [ ] Save/loading states
- [ ] Error/success states
- [ ] Responsive
- [ ] Do not rewrite authentication

## Phase 15 — Notifications `/notifications`
- [ ] List
- [ ] Read/unread
- [ ] Mark as read
- [ ] Empty/loading/error states
- [ ] Responsive
- [ ] Preserve API/data behavior

## Phase 16 — Community `/community`
- [ ] Introduction
- [ ] Discord CTA
- [ ] Events
- [ ] Workshops
- [ ] CTFs
- [ ] Resources
- [ ] Social links
- [ ] Real partner/support information only
- [ ] No fake metrics

## Phase 17 — Resources `/resources`
- [ ] Categories
- [ ] Guides
- [ ] Tools
- [ ] Cheatsheets
- [ ] References
- [ ] Search/filter
- [ ] Resource cards
- [ ] External links
- [ ] Empty/loading/error states

## Phase 18 — Get Started `/get-started`
- [ ] Explain PWN
- [ ] Target users
- [ ] Account setup
- [ ] Recommended first module
- [ ] Recommended first challenge
- [ ] Learning path
- [ ] Community joining
- [ ] Clear CTA

## Phase 19 — Search / Command Experience
- [ ] Search UI
- [ ] Keyboard shortcut if useful
- [ ] Command palette if useful
- [ ] Search modules
- [ ] Search challenges
- [ ] Search resources
- [ ] Community search if supported
- [ ] Empty/no-result/loading states
- [ ] Keyboard navigation

## Phase 20 — Authentication UI Audit
Do not rewrite authentication.
- [ ] Login
- [ ] Registration if supported
- [ ] Error/loading/validation states
- [ ] Password recovery if supported
- [ ] OAuth/provider UI if supported
- [ ] PWN theme
- [ ] Responsive
- [ ] Accessible

## Phase 21 — Responsive Design
Audit ~320–480px, ~768px, ~1024–1440px, and 1600px+.
- [ ] Navbar
- [ ] Sidebar
- [ ] Cards/grids
- [ ] Typography
- [ ] Buttons/forms
- [ ] Tables
- [ ] Dialogs/sheets
- [ ] Learning pages
- [ ] Challenge interface
- [ ] No horizontal overflow

## Phase 22 — Accessibility
- [ ] Keyboard navigation
- [ ] Focus states
- [ ] Semantic HTML
- [ ] Heading hierarchy
- [ ] Button/link semantics
- [ ] Form labels
- [ ] Dialog/menu accessibility
- [ ] Contrast
- [ ] Reduced motion
- [ ] Screen-reader labels
- [ ] Accessible icon-only controls

## Phase 23 — Loading/Error/Empty States
Every data-driven page:
- [ ] Loading
- [ ] Empty
- [ ] Error
- [ ] Success
- [ ] Disabled
- [ ] Pending
- [ ] Skeleton where useful
- [ ] No broken blank screens

## Phase 24 — SEO / Metadata
- [ ] Homepage
- [ ] About
- [ ] Modules
- [ ] Practice
- [ ] Resources
- [ ] Community
- [ ] Get Started
- [ ] Open Graph
- [ ] Social metadata where appropriate
- [ ] Favicon/app icon
- [ ] Canonicals where appropriate
- [ ] robots.txt
- [ ] sitemap
- [ ] Organization schema
- [ ] Website schema
- [ ] Accurate educational schema only where applicable

## Phase 25 — Performance
- [ ] Audit client components
- [ ] Optimize images
- [ ] next/image where appropriate
- [ ] Lazy-load expensive content
- [ ] Avoid unnecessary animation/dependencies
- [ ] Check bundle impact
- [ ] Check fonts
- [ ] Avoid layout shift
- [ ] Optimize large lists

## Phase 26 — Security Audit
- [ ] No secrets in client code
- [ ] No challenge flags in client bundles
- [ ] Server-side authorization preserved
- [ ] Server-side challenge validation
- [ ] Input validation
- [ ] Safe errors
- [ ] No sensitive-data exposure
- [ ] No production debug data
- [ ] Safe auth state handling

## Phase 27 — Content Quality
- [ ] Consistent terminology
- [ ] Consistent capitalization
- [ ] No placeholders/lorem ipsum
- [ ] No fake statistics
- [ ] No broken links
- [ ] No dead CTAs
- [ ] Correct cybersecurity terminology
- [ ] Consistent difficulty labels
- [ ] Consistent module naming

## Phase 28 — Final Visual Consistency
- [ ] Colors
- [ ] Typography
- [ ] Spacing
- [ ] Borders
- [ ] Radius
- [ ] Buttons
- [ ] Badges
- [ ] Cards
- [ ] Icons
- [ ] Navigation
- [ ] Forms
- [ ] Modals
- [ ] Tables
- [ ] Loading/empty states

Final identity:
`DARK + SOFT WHITE + VIOLET + TECHNICAL + CLEAN + PROFESSIONAL`

Avoid:
`WHITE + PURPLE GRADIENTS + NEON + GENERIC SAAS`

## Phase 29 — Testing
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] TypeScript validation
- [ ] Authentication flow
- [ ] Navigation
- [ ] Dashboard
- [ ] Module flow
- [ ] Practice/challenge flow
- [ ] Profile
- [ ] Settings
- [ ] Notifications
- [ ] Responsive layouts
- [ ] Keyboard navigation
- [ ] Error/loading states
- [ ] Unit tests if present
- [ ] Integration tests if present
- [ ] E2E tests if present

## Phase 30 — GitHub / Release
At each major phase:
```bash
git status
git diff --stat
npm run lint
npm run build
git add .
git commit -m "feat(scope): description"
git push origin feature-v1
```
- [ ] Review changed files
- [ ] Review diff
- [ ] Lint passes
- [ ] Build passes
- [ ] No secrets
- [ ] No unrelated changes
- [ ] Push completed phase

## Phase 31 — Production Completion
- [ ] All public pages complete
- [ ] All authenticated pages complete
- [ ] Learning flow complete
- [ ] Practice flow complete
- [ ] CTF flow complete if in scope
- [ ] Profile complete
- [ ] Settings complete
- [ ] Notifications complete
- [ ] Community complete
- [ ] Resources complete
- [ ] Search complete
- [ ] Responsive audit complete
- [ ] Accessibility audit complete
- [ ] SEO complete
- [ ] Performance audit complete
- [ ] Security audit complete
- [ ] Content audit complete
- [ ] Lint passes
- [ ] Build passes
- [ ] Tests pass
- [ ] Git history clean/logical
- [ ] Latest changes pushed
- [ ] Production deployment verified
- [ ] No known critical regressions

# CODEX OPERATING RULES

1. Work sequentially: one major phase at a time.
2. Update this file's checkboxes after completing tasks.
3. Always validate → review → commit → push → update roadmap → continue.
4. Preserve authentication, Prisma, database, APIs, routes, and existing behavior.
5. Inspect usages before replacing/deleting components.
6. Avoid unnecessary dependencies.
7. Never invent users, events, statistics, scores, testimonials, or community metrics.
8. If backend architecture/auth/database/API/routing changes are required, STOP and report before changing them.
9. Inspect localhost after each major UI phase.
10. Do not declare completion until every applicable item is `[x]` or explicitly `[N/A]` with a reason.

# CURRENT STATUS

- Phase 0 — COMPLETE
- Phase 1 — COMPLETE
- Phase 2 — COMPLETE / consistency pass pending
- Phase 3 — COMPLETE
- Phase 4 — TODO
- Phase 5 — TODO
- Phases 6–31 — TODO

NEXT ACTION:
1. Start Phase 4 public navbar.
2. Validate.
3. Commit and push.
4. Update this roadmap.
5. Start Phase 5 homepage section-by-section.
6. Validate, commit, push.
7. Continue sequentially until the entire applicable checklist is complete.
