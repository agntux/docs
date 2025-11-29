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



### Unable to run example

**Summary:** **Describe the bug**
I encountered an error when running `npm i`

**Env**
Node: v22.16.0

**To Reproduce**
Steps to reproduce the behavior:
1. `npm i`

**Expected behavior**
A clear and concise description of what you expected to happen.

**Logs**
```
npm error code 1
npm error path D:\Work\ext-apps
npm error command failed
npm error command C:\WINDOWS\system32\cmd.exe /d /s /c npm run build && husky
npm error > @modelcontextprotocol/ext-apps@0.0.1 build
npm error > bun build.bun.ts
npm error
np

**Solution:** **Describe the bug**
I encountered an error when running `npm i`

**Env**
Node: v22.16.0

**To Reproduce**
Steps to reproduce the behavior:
1. `npm i`

**Expected behavior**
A clear and concise description of what you expected to happen.

**Logs**
```
npm error code 1
npm error path D:\Work\ext-apps
npm error command failed
npm error command C:\WINDOWS\system32\cmd.exe /d /s /c npm run build && husky
npm error > @modelcontextprotocol/ext-apps@0.0.1 build
npm error > bun build.bun.ts
npm error
npm error src/app-bridge.ts(176,30): error TS18046: 'request.params' is of type 'unknown'.
npm error src/app-bridge.ts(178,29): error TS18046: 'request.params' is of type 'unknown'.
npm error src/app-bridge.ts(179,21): error TS18046: 'request.params' is of type 'unknown'.
npm error src/app-bridge.ts(204,30): error TS2345: Argument of type '{ [x: string]: any; }' is not assignable to parameter of type '{ method: string; params?: { [x: string]: unknown; _meta?: { [x: string]: unknown; } | undefined;

**Resources:**
- [GitHub Issue #32](https://github.com/modelcontextprotocol/ext-apps/issues/32)

**Reported by:** @Moxmi
