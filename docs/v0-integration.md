# v0 Integration Guide

Use this file when adding a new v0 export into this Next.js repo.

The goal is to integrate the v0 page as close to exactly as supplied as possible while keeping the rest of the site, global CSS, Appwrite forms, SEO, and existing pages unaffected.

This guide is not a fixed recipe. Every v0 export can be different. Use this as the integration standard, but always inspect the new v0 folder and the target route before deciding the exact file changes.

## Main Rule

Do not redesign the v0 UI.

Preserve the supplied v0 design as closely as possible:

1. Colors.
2. Typography.
3. Spacing.
4. Layout.
5. Component order.
6. Images and visual assets.
7. Section backgrounds.
8. Buttons and hover states.
9. Animations and transitions, where practical.
10. Responsive behavior.
11. Text content, unless the user asks for copy changes.

Only change the v0 UI where needed for:

1. Next.js compatibility.
2. Working asset paths.
3. Accessibility fixes that do not alter the visual design.
4. Form submission integration.
5. Preventing CSS or JavaScript from affecting other pages.
6. Fixing clear broken behavior.

If an exact match is impossible because the v0 export depends on missing packages, unsupported APIs, unavailable assets, or conflicting globals, explain that before changing the design.

## Before Editing

1. Read the target v0 folder first.
2. Read the current route/page that will be replaced or extended.
3. Tell the user what files will be changed before making edits.
4. Do not delete the previous page implementation unless the user explicitly asks.
5. Keep the raw v0 folder out of the app build if it remains in the repo.
6. Identify the v0 dependencies, images, fonts, animations, and form behavior.
7. Identify what must be adapted for this specific integration.
8. Do not assume the next v0 integration is the same as the last one.

## Recommended Structure

For a route named `/example-page`, put the integrated v0 code here:

```text
src/app/example-page/_components/
```

Use a route-specific entry component:

```text
src/app/example-page/_components/ExamplePageLanding.tsx
```

Use route-scoped styles:

```text
src/app/example-page/_components/example-page-v0.module.css
```

Then keep the route page small:

```tsx
import { ExamplePageLanding } from "./_components/ExamplePageLanding";

export default function Page() {
  return <ExamplePageLanding />;
}
```

## CSS Isolation

Do not paste v0 global CSS into `src/app/globals.css` unless it is genuinely site-wide.

Prefer a CSS module with a wrapper class:

```tsx
import styles from "./example-page-v0.module.css";

export function ExamplePageLanding() {
  return <main className={styles.scope}>...</main>;
}
```

Inside the CSS module, scope v0 globals like this:

```css
.scope {
  --v0-primary: #0ea5e9;
}

.scope :global(.v0-class-name) {
  color: white;
}
```

This prevents the v0 styling from changing other pages.

When translating v0 CSS:

1. Preserve colors exactly unless the user asks for changes.
2. Preserve border radii, shadows, gradients, backgrounds, spacing, and breakpoints.
3. Preserve mobile/desktop layout behavior.
4. Keep v0 utility classes scoped under the route wrapper when possible.
5. Avoid "improving" the design by changing the palette, typography, or layout.
6. If the existing app uses a conflicting global style, isolate the v0 styles instead of changing the global app style.

## Assets

Copy v0 images into a route-specific public folder:

```text
public/v0/example-page/images/
```

Then update image paths in components:

```tsx
<img src="/v0/example-page/images/example.png" alt="..." />
```

Check for special characters in filenames, especially `$`, spaces, brackets, and very long names. Rename copied assets to stable lowercase names when needed.

Do not rely on assets staying inside the raw v0 source folder.

## Forms And Appwrite

Existing lead forms should submit through:

```text
lib/actions/leadActions.ts
```

For v0 forms, include hidden fields when relevant:

```tsx
<input type="hidden" name="formSource" value="example-page-hero" />
<input type="hidden" name="sourcePath" value="/example-page" />
<input type="hidden" name="whatTypeOfService" value="example service" />
```

For roof or service-specific forms, include a user-facing concern/selection:

```tsx
<input type="hidden" name="roofConcern" value={selectedConcern} />
<input type="hidden" name="roofCondition" value={selectedConcern} />
<input type="hidden" name="message" value={`Roof help selected: ${selectedConcern}`} />
```

Before changing Appwrite fields:

1. Check the live collection attributes.
2. Add only optional fields unless the user asks otherwise.
3. Do not break existing forms.
4. Keep email conditions specific to the new `formSource` or `sourcePath`.

For every form integration:

1. Keep the v0 form UI visually the same.
2. Map every visible field to the existing lead payload or add an optional Appwrite field.
3. Preserve required-field behavior.
4. Preserve multi-step form behavior if the v0 export has it.
5. Preserve button labels, loading states, error states, and success/redirect behavior where practical.
6. Ensure hidden fields clearly identify the source route and form.
7. Confirm the lead record in Appwrite after a real test submit.
8. Confirm owner notification and customer confirmation emails still use the real app templates.

## Email Templates

Do not replace the rich customer confirmation template with a plain/manual test email.

The real customer email should use:

```text
lib/notifications/sendLeadCustomerConfirmation.ts
```

The real owner notification should use:

```text
lib/notifications/sendLeadNotification.ts
```

If testing Appwrite Messaging manually, say clearly that the manual test email is not the production template.

When adding a new form type, make email condition changes narrowly:

1. Use `formSource` or `sourcePath` to identify the new form.
2. Do not change email content for unrelated forms.
3. Preserve the rich EverBright email layout unless the user asks for a new email design.
4. Include useful new form details in the booking summary or owner notification.

## SEO

If replacing an existing live page:

1. Preserve the existing route metadata unless the user asks for SEO changes.
2. Preserve canonical URLs.
3. Preserve JSON-LD and tracking scripts.
4. Keep `/sitemap.xml` behavior unchanged unless the new page should be indexed.

If creating a preview or duplicate route, mark it noindex.

## Raw v0 Folder Handling

If the raw v0 folder stays in the repo root, exclude it from tooling:

```text
.gitignore
eslint.config.mjs
tsconfig.json
```

Use a specific ignore entry for the supplied folder unless the user approves a broader pattern.

## Verification Checklist

Run these after integration:

```powershell
npm run lint
npm run build
```

Then browser-check the target route:

1. Page loads without runtime errors.
2. No broken images.
3. No horizontal overflow on desktop or mobile.
4. Form submits successfully.
5. Appwrite lead document has the expected fields.
6. Customer confirmation and owner notification are queued through the real templates.
7. Other existing routes still load.
8. Visual design still matches the v0 source closely.
9. CSS changes are scoped to the integrated route.

If `next build` changes `next-env.d.ts`, restore that generated change unless it is intentionally part of the task.

## Final Report

Tell the user:

1. Which route was integrated.
2. Which files were changed.
3. Whether the raw v0 folder is ignored/excluded.
4. Which checks passed.
5. Any remaining warnings or manual checks.
