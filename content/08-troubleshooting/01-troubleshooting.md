# Troubleshooting

This section provides solutions to common issues encountered when building ChatGPT Apps and MCP Apps. Each issue includes a summary, links to relevant resources, and information about contributors who helped resolve it.

## Issue Template

When adding new troubleshooting entries, use the following format:

```markdown
### [Issue Title]

**Summary:** Brief description of the problem and its symptoms.

**Solution:** Step-by-step solution or workaround.

**Resources:**
- [Link to relevant documentation](URL)
- [Link to GitHub issue or discussion](URL)
- [Link to Stack Overflow or forum post](URL)

**Reported by:** @username (if available)
**Contributors:** @username1, @username2 (if available)
```

---

### ui/message content format discrepancy between SEP-1865 and SDK

**Summary:** Hosts implementing SEP-1865 for MCP Apps may fail to parse `ui/message` requests from the `@modelcontextprotocol/ext-apps` SDK because the SEP specifies `content` as a single object, while the SDK currently sends `content` as an array of content parts.

**Solution:** When implementing a host for MCP Apps, support both forms of `ui/message.params.content` for robustness:
- Accept either a single content object or an array of content objects.
- Normalize internally to an array of content parts.
- If you control the SDK or server version, track the upstream issue and update once the spec/SDK discrepancy is resolved.

Example normalization (TypeScript):
```ts
function normalizeUiMessageContent(content: any) {
  if (Array.isArray(content)) return content;
  if (!content) return [];
  return [content];
}
```
This avoids runtime errors when interoperating with different host/SDK versions.

**Resources:**
- [GitHub issue: ui/message content format discrepancy: SEP-1865 specifies object](https://github.com/modelcontextprotocol/ext-apps/issues/48)

**Reported by:** @chelojimenez
**Contributors:** @martinalong

---

### Theme enum `system` value may be unnecessary for MCP Apps hosts

**Summary:** The current MCP Apps Extension theme enum includes `"system"` in addition to `"light"` and `"dark"`. A proposed change suggests that hosts should instead send explicit `light`/`dark` updates when the OS theme changes, making `system` redundant.

**Solution:** When designing theming for MCP Apps hosts:
- Prefer a simple theme enum with just `"light" | "dark"`.
- On system theme changes, send a `ui/theme` (or equivalent) update from the host with the new concrete value.
- Avoid persisting or branching on a `"system"` theme value inside apps; treat system-following behavior as a host concern.

This keeps app logic simpler and avoids ambiguity about what `system` means at runtime.

**Resources:**
- [GitHub issue: Don't need `system` in the `theme` enum](https://github.com/modelcontextprotocol/ext-apps/issues/50)

**Reported by:** @martinalong
**Contributors:**

---

### `carousel` displayMode likely unnecessary for MCP Apps

**Summary:** The MCP Apps Extension currently includes a `"carousel"` option in the `displayMode` enum. Discussion suggests this is not a true display mode (like `inline` or `fullscreen`) but rather a layout choice that should be owned by the app itself, not the host.

**Solution:** When implementing MCP Apps hosts or apps:
- Treat carousel behavior as an app-level layout decision, not a host-controlled display mode.
- Use `displayMode` only for host-managed presentation states such as `"inline"`, `"fullscreen"`, or `"pip"`.
- If you already handle a `"carousel"` mode, consider deprecating it and mapping it internally to `"inline"` while letting the app render its own navigation UI.

This reduces complexity in the host protocol and keeps layout responsibilities within the app UI layer.

**Resources:**
- [GitHub issue: Don't need `"carousel"` displayMode](https://github.com/modelcontextprotocol/ext-apps/issues/51)

**Reported by:** @martinalong
**Contributors:**

---

## Contributing Troubleshooting Issues

If you encounter an issue not listed here, please [create a pull request](https://github.com/agntux/docs/pulls) with:
- A clear issue title and summary
- Step-by-step solution or workaround
- Error messages, logs, and steps to reproduce (if applicable)
- Links to relevant documentation, GitHub issues, or discussions
- Information about who reported the issue and contributors (if available)

---

*Note: This section is automatically updated by our AI agent as new issues are discovered and resolved. The troubleshooting entries are based on community reports, GitHub issues, and developer discussions.*
