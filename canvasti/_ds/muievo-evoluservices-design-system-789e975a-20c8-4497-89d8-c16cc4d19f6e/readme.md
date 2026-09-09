# muiEVO — EvoluServices Design System

`muiEVO` is the **EvoluServices** web design system: a robust, accessible React component
library built on top of [MUI](https://mui.com) and customized to the EvoluServices visual
identity. It powers the company's web products — primarily the **Merchant** webapp and the
internal **Admin**. This project is a self-contained recreation of that system (tokens,
components, foundation specimens and a Merchant UI kit) for design + prototyping work.

## Company & product context
EvoluServices is a Brazilian **payment institution** (instituição de pagamento / "meios de
pagamento"), founded in 2003 (originally *Saúde Service*, focused on the healthcare segment).
It provides card machines ("maquininhas" — EVO Fixa, EVO Multi), receivable anticipation and
payment-processing for specific verticals. Consumer-facing brand: **EVO**. Language: **Brazilian
Portuguese** (the MUI theme ships with the `ptBR` locale).

Products represented:
- **Merchant webapp** (`merchant.evoluservices.com`) — merchants track sales, anticipate
  receivables, view statements. Recreated in `ui_kits/merchant/`.
- **Admin** — internal back-office (not recreated here).
- **EVO mobile app** ("Evo Meios de Pagamento") — companion app (not recreated here).

### Sources this system was built from
- **Codebase** (read-only, attached): the `design-system/` repo — the real `muiEVO` MUI theme
  + component library (Storybook-documented as *muiEVO*). Key files read:
  `theme.ts`, `components/Palette/palette.mdx`, `components/Spacing/Spacing.mdx`,
  `components/Elevation/Elevation.mdx`, `introduction/Introduction.mdx`, and the component
  `.tsx` sources (Button, TextField, Select, Alert, Dialog, AppBar, …).
- **Figma** (referenced in the codebase, access not verified):
  `figma.com/file/4yKbgTpvds66PdxdPzBAuD/REACT-(fase-1)-_-Design-System`
- **Storybook**: `design.evoluservices.com`
- **Public sites**: `br.evoluservices.com`, `sejaevo.com.br`.

> The original `muiEVO` is a thin customization layer over MUI v7. This project re-expresses the
> same tokens and component behaviour as **framework-free React + CSS custom properties**, so
> designs can be generated without the MUI runtime.

---

## CONTENT FUNDAMENTALS
How EvoluServices product copy reads (from the Storybook docs and component APIs):

- **Language:** Brazilian Portuguese, always. UI strings, helper texts and errors are pt-BR
  (e.g. "Carregando…", "Nenhuma opção encontrada.", "Esqueci minha senha").
- **Voice — "você", warm and direct.** The product speaks *to* the person ("Gerencie seus
  recebimentos", "Você receberá R$ 4.320,00 hoje"). Internal docs even use inclusive phrasing
  like *"as pessoas usuárias"* rather than "o usuário".
- **Tone:** friendly, encouraging, plainspoken — financial clarity without jargon. The
  Storybook intro is openly enthusiastic ("A biblioteca React UI que nós sempre sonhamos!",
  "será como brincar de lego!"). Product surfaces are calmer but still human.
- **Casing:** sentence case everywhere — labels, buttons, headings, table headers. **No
  ALL-CAPS** on buttons or tabs (the theme explicitly sets `textTransform: none`). Short overline
  labels may be uppercased for hierarchy.
- **Currency & numbers:** Brazilian format — `R$ 1.250,00` (period thousands, comma decimals),
  dates `DD/MM/AAAA`.
- **Emoji:** sparing. Marketing/social uses them (💙, 🌟); product UI generally avoids them — at
  most a single welcoming 👋 on a greeting. Do **not** decorate the interface with emoji.
- **Examples of good copy:** button "Antecipar recebíveis"; alert title "Antecipação solicitada";
  empty state "Nenhum registro encontrado."; helper "Atualizado há 2 minutos".

---

## VISUAL FOUNDATIONS
- **Colors.** Two brand hues: a confident **teal** (`primary` `#1E879F`, dark `#125868`) and a
  warm **orange** (`secondary` `#E97424`). Teal dominates — AppBars, primary buttons, links,
  active states. Orange is the accent/CTA spark (anticipation, badges) — used sparingly.
  Every semantic role (error/warning/success/info, plus primary) ships a 4-step ramp:
  `extralight → light → main → dark`. Status surfaces (Alerts, Chips) use the *light* tint as
  background with the *dark* tone as text. App background is a cool light gray `#DCE2E6`;
  surfaces are pure white. See `tokens/colors.css`.
- **Type.** **Montserrat** exclusively (300/400/500/600/700). The scale is compact and
  MUI-derived: body is **14px** (`body1`), dense data is 12px (`body2`). Headings alternate
  weight for rhythm — `h2`/`h4` are semibold (600), `h3`/`h5` are light (300) at the same size.
  Buttons are 12px **bold** with `+0.06em` tracking but **no uppercase**. See
  `tokens/typography.css`.
- **Spacing.** Strict **8px grid** (`theme.spacing`). Work in the abstract scale (0.5, 1, 2, 3…)
  → 4, 8, 16, 24px. Spacing off the scale is discouraged. See `tokens/spacing.css`.
- **Corner radius.** Soft **8px** base radius on cards/inputs/menus; small controls 4px.
  **Buttons are pills** (`18px`) — the most distinctive shape signature of the brand. See
  `tokens/shape.css`.
- **Elevation / shadows.** Mostly **flat** (elevation 0) — buttons and most papers have no
  shadow; hierarchy comes from the gray-vs-white surface contrast and dividers. Only **5**
  shadow levels are ever used: `1` (Select menu), `6` (Menu), `8` (Snackbar), `24` (Dialog).
  Shadows are soft, neutral, multi-layer (MUI standard). No colored glows.
- **Cards.** White, 8px radius, **flat by default** (elevation 0), separated from the gray app
  background. Optional header (title + subtitle + action) over a 1px divider. No left-accent
  borders, no heavy outlines.
- **Borders & dividers.** Hairline `rgba(0,0,0,0.12)`. Inputs use a 1px neutral outline that
  turns teal (with a 1px ring) on focus, red on error.
- **Backgrounds.** Solid colours only — cool gray app canvas, white surfaces, teal AppBar. The
  one sanctioned gradient is the teal→dark-teal **anticipation CTA banner**. No textures, no
  patterns, no hand-drawn illustration, no photography in-product.
- **Motion.** Subtle and quick. MUI standard easing `cubic-bezier(0.4,0,0.2,1)`, ~150–250ms.
  Dialogs fade + scale-in gently; switches/tabs slide. **No bounce, no infinite loops.**
- **Hover / press.** Hover = a faint `rgba(0,0,0,0.04)` wash on ghost/icon buttons, or a step
  *darker* on filled buttons (teal→dark teal, orange→darker orange). Selected list rows use the
  primary extralight tint. Focus shows the teal ring. Disabled drops to `rgba(0,0,0,0.06)` bg /
  38% text.
- **Transparency / blur.** Used only for scrims — the Dialog backdrop is `rgba(0,0,0,0.5)`.
  No glassmorphism / backdrop-blur.
- **Imagery vibe.** The product is data-first; imagery is essentially the logo + iconography.
  Brand photography (marketing) is warm and human but does not appear in the app UI.

---

## ICONOGRAPHY
- The codebase re-exports the **MUI Material Icons — Rounded** set (`@mui/icons-material/*Rounded`)
  from `icons/index.ts` (~2000 icons). Rounded is the canonical style: filled glyphs with
  rounded terminals, matching Montserrat's soft feel.
- In this project (no MUI runtime) icons are rendered with **Material Symbols Rounded** via Google
  Fonts — the closest 1:1 match to MUI's Rounded icons. Load it with:
  `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded...">`
  then `<span class="material-symbols-rounded">bolt</span>`. **(Substitution flagged — see caveats.)**
- Common glyphs in product: `account_balance_wallet`, `bolt` (anticipation), `receipt_long`,
  `schedule`, `notifications`, `search`, `download`, `more_vert`, `arrow_forward`, `credit_card`.
- **No emoji as icons**, no Unicode-symbol icons in product UI. Icons sit at 18–24px and inherit
  text colour (or a semantic colour on IconButton).
- Brand assets live in `assets/`: `evo-logo.svg` (wordmark on light), `evo-logo-white.svg`
  (on teal), `evo-mark.svg` (app symbol). **All three are placeholders** built from Montserrat —
  replace with the official EvoluServices artwork.

---

## INDEX / manifest
**Root**
- `styles.css` — the single entry point consumers link (`@import`s the token files below).
- `readme.md` — this file. · `SKILL.md` — Agent-Skill manifest.

**`tokens/`** — CSS custom properties (`@import`ed by `styles.css`)
- `fonts.css` (Montserrat + base reset) · `colors.css` · `typography.css` · `spacing.css` · `shape.css` (radius, elevation, motion).

**`guidelines/`** — foundation specimen cards (Design System tab): colors (primary, secondary/neutrals, semantic, text), type (headings, body), spacing (scale, radius+elevation), brand (logo).

**`components/`** — reusable React primitives (namespace `MuiEVOEvoluServicesDesignSystem_789e97`)
- `core/` — **Button**, **IconButton**, **Chip**, **Badge**
- `forms/` — **TextField**, **Select**, **Checkbox**, **Switch**, **RadioGroup**
- `feedback/` — **Alert**, **Dialog**, **Tooltip**, **CircularProgress**
- `surfaces/` — **Card**, **Tabs**, **Table**, **AppBar**
- Each has `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, with one `*.card.html` specimen per group.

**`ui_kits/`**
- `merchant/` — EVO Merchant webapp recreation (login → dashboard → vendas → detalhe). See its `README.md`.

**`assets/`** — `evo-logo.svg`, `evo-logo-white.svg`, `evo-mark.svg` (placeholder wordmarks).

### Using a component (in @dsCard / consumer HTML)
```html
<link rel="stylesheet" href="styles.css">
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" …></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" …></script>
<script src="_ds_bundle.js"></script>   <!-- after React -->
<script type="text/babel">
  const { Button, Card, AppBar } = window.MuiEVOEvoluServicesDesignSystem_789e97;
</script>
```
