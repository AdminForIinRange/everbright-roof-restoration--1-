# v0 Integration Prompts

Use these prompts when adding a new v0 export into this repo.

Replace the placeholders before sending:

```text
{V0_FOLDER}
{TARGET_ROUTE}
{NEW_ROUTE_NAME}
{SERVICE_NAME}
{NOTES}
```

Use prompt 1 first when you want planning only. Use prompt 2 when you are ready for code changes. Use prompt 3 after implementation to verify everything.

## Prompt 1: Inspect And Plan Only

```text
Please read docs/v0-integration.md first.

I have a new v0 export folder:
{V0_FOLDER}

I want to integrate it into this route:
{TARGET_ROUTE}

Important:
- Do not make code changes yet.
- Inspect the v0 folder first.
- Inspect the current target route/page and any related components.
- The v0 UI must be matched as closely as possible, including colors, typography, spacing, layout, images, buttons, forms, animations, and responsive behavior.
- Do not redesign or "improve" the v0 UI unless something is broken or impossible to integrate.
- This integration may be different from previous v0 integrations, so do not assume the same structure.
- Keep the rest of the site unaffected.
- Keep CSS scoped to this route.
- Preserve existing SEO, tracking, metadata, sitemap behavior, and JSON-LD unless I ask otherwise.
- If there are forms, identify how they should connect to the existing Appwrite lead flow without breaking other forms.

Please report:
1. What you found in the v0 folder.
2. What the current target route does.
3. What files you expect to change.
4. What assets need to be copied.
5. Any dependencies or missing pieces.
6. Any risks or questions.
7. The exact implementation plan.

Wait for my approval before editing files.

Extra notes:
{NOTES}
```

## Prompt 2: Implement The v0 Integration

```text
Please read docs/v0-integration.md first.

Now integrate this v0 export:
{V0_FOLDER}

Target route:
{TARGET_ROUTE}

Service/page name:
{SERVICE_NAME}

Requirements:
- Match the v0 UI as closely as possible.
- Preserve the supplied v0 colors, design, layout, typography, spacing, images, backgrounds, buttons, animations, and responsive behavior.
- Do not redesign the page.
- Only adapt the v0 code for Next.js compatibility, asset paths, scoped CSS, accessibility, and working form submission.
- Keep all CSS isolated to this route using route-specific components and CSS modules where practical.
- Do not affect other site pages or global styles.
- Do not delete the previous implementation unless I explicitly ask.
- If creating a duplicate or preview route, make it noindex.
- If replacing an existing live route, preserve metadata, canonical URL, tracking scripts, JSON-LD, and sitemap behavior unless I ask for SEO changes.
- Copy v0 assets into a route-specific public folder and update paths.
- Keep the raw v0 folder excluded from build/lint/typecheck if needed.

Forms:
- Keep the v0 form UI visually the same.
- Connect forms to the existing Appwrite lead action.
- Include useful hidden fields such as formSource, sourcePath, and service type.
- Add optional Appwrite fields only if needed.
- Do not break existing forms.
- Keep owner notification and customer confirmation emails on the real rich EverBright templates.
- If email conditions are needed, scope them only to this new route/form using formSource or sourcePath.

Before editing, briefly restate the files you will change. Then make the changes.

After editing, run the relevant checks:
- npm run lint
- npm run build
- browser check for the route if a local server is available
- form/Appwrite check if form changes were made and credentials are available

Report:
1. What changed.
2. What route was integrated.
3. Whether the v0 UI was preserved.
4. How forms were integrated.
5. Which checks passed.
6. Any remaining warnings or follow-up items.

Extra notes:
{NOTES}
```

## Prompt 3: Verify And Fix An Integration

```text
Please read docs/v0-integration.md first.

Please verify this v0 integration:
{TARGET_ROUTE}

Original v0 folder:
{V0_FOLDER}

Do not assume it is correct. Check it carefully.

Verification goals:
- The page visually matches the v0 source as closely as practical.
- Colors, layout, spacing, typography, images, buttons, animations, and responsive behavior are preserved.
- CSS is scoped and does not affect other pages.
- Images load and paths are stable.
- There is no horizontal overflow on desktop or mobile.
- Forms submit to Appwrite correctly.
- Appwrite lead records contain the expected fields.
- Owner notification and customer confirmation emails use the real rich EverBright templates.
- Existing site pages and forms still work.
- SEO metadata, canonical URLs, tracking scripts, JSON-LD, and sitemap behavior are correct.

Please run:
- npm run lint
- npm run build
- browser check for {TARGET_ROUTE}
- check other key routes if the integration touched shared code
- Appwrite/form check if the page has a form and credentials are available

If you find issues, fix them. Keep fixes scoped to this integration unless the issue is in a shared helper used by the form/email flow.

Report:
1. Findings.
2. Fixes made.
3. Checks passed.
4. Any warnings that remain.
5. Any manual checks I should do.

Extra notes:
{NOTES}
```
