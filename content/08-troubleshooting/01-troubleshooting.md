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



### ui/message content format discrepancy: SEP-1865 specifies object

**Summary:** The @modelcontextprotocol/ext-apps SDK sends ui/message with content as an array, but SEP-1865 specifies it as a single object.

From [SEP](https://github.com/modelcontextprotocol/ext-apps/blob/main/specification/draft/apps.mdx)

```
  // ui/message request
  {
    jsonrpc: "2.0",
    id: 2,
    method: "ui/message",
    params: {
      role: "user",
      content: {
        type: "text",
        text: string
      }
    }
  }
```
SDK Behavior
```
  {
    jsonrpc: "2.0",
    id: 2,
    method: "

**Solution:** Solution pending or not yet documented

**Resources:**
- [GitHub Issue #48](https://github.com/modelcontextprotocol/ext-apps/issues/48)

**Reported by:** @chelojimenez
