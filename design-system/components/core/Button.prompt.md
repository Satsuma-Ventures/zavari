Zavari's primary action control — use for any clickable command; reserve `primary` (Cyan on Navy) for the single most important action in a section.

```jsx
<Button variant="primary" onClick={save}>Generate brief</Button>
<Button variant="secondary">Connect a source</Button>
<Button variant="ghost" size="sm">Dismiss</Button>
<Button variant="destructive">Delete workspace</Button>
```

- `primary` — Cyan background, Navy text. One per screen section.
- `secondary` — white with 1.5px Navy outline, for alternatives.
- `ghost` — transparent, for tertiary/de-emphasized choices.
- `destructive` — `#E53E3E`, irreversible actions only.
- 4px radius, never a pill. Text is Sans SemiBold 14px, no uppercase.
