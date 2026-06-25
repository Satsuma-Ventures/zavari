A labelled single-line text field. Always pass `label` so the field is accessible; use `error` (a message string) rather than color alone to signal invalid state.

```jsx
<Input label="Workspace name" placeholder="e.g. Q3 Planning" />
<Input label="North-star metric" hint="The one number every bet ladders to" />
<Input label="Email" error="Enter a valid work email" />
```

- 1px Cool Gray border → Azure border + soft azure ring on focus.
- `error` turns the ring red AND shows the message — never relies on color alone.
- 4px radius, 16px body text (AA minimum on UI).
