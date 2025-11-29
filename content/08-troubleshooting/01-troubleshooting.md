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



### Display mode negotiation is missing

**Summary:** Currently the spec has:
- `displayMode` - host tells app the current mode
- `availableDisplayModes` - host tells app what modes it supports

But there's no way for the **app** to declare what display modes it supports. 

For example, if an app wants to say "hey I support fullscreen", there's no mechanism for that. The host just assumes all apps work in all modes?

We need some negotiation where:
1. App declares its supported display modes (maybe in `ui/initialize` capabilities?)
2. Host knows it

**Solution:** See comments in GitHub issue for potential solutions

**Resources:**
- [GitHub Issue #41](https://github.com/modelcontextprotocol/ext-apps/issues/41)

**Reported by:** @antonpk1
