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
**Date Reported:** YYYY-MM-DD (if available)
**Date Resolved:** YYYY-MM-DD (if available)
**Contributors:** @username1, @username2 (if available)
```

---

## Contributing Troubleshooting Issues

If you encounter an issue not listed here, please [create a pull request](https://github.com/agntux/docs/pulls) with:
- A clear issue title and summary
- Step-by-step solution or workaround
- Error messages, logs, and steps to reproduce (if applicable)
- Links to relevant documentation, GitHub issues, or discussions
- Information about who reported the issue and contributors (if available)
- Date reported (if available)
- Date resolved (if available)

---

*Note: This section is automatically updated by our AI agent as new issues are discovered and resolved. The troubleshooting entries are based on community reports, GitHub issues, and developer discussions.*

### ToolError: None: MCP write action is temporarily disabled

**Summary:** On mobile view (under 680px), users encounter a `ToolError: None: MCP write action is temporarily disabled` error after confirming to use a tool. This issue does not occur on desktop view.

**Solution:**
1. Remove all widget metadata (e.g., `openai/outputTemplate`, `resultCanProduceWidget`).
2. Change the resource MIME type from `text/html+skybridge` to plain `text/html`.
3. Ensure the tool is strictly read-only by setting `annotations.readOnlyHint: true` and avoiding destructive actions.

**Resources:**
- [GitHub Issue #68](https://github.com/openai/openai-apps-sdk-examples/issues/68)

**Reported by:** @sFritsch09
**Date Reported:** 2025-10-19
**Contributors:**

