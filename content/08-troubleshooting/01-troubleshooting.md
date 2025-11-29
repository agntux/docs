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



### Activate tools by voice

**Summary:** Currently I've been testing to activate tools of my app using the Voice Mode in ChatGPT.
However, the model tries to activate it, it fails always. 

> Example:
> - Hi chat, please use my tool to get the weather conditions in X location.
> - Yes for sure... Hmmm, seems something is not working. Cant connect.

When I close the voice mode, and just text the same instruction, it works. Seems more like a hard limit that has been stablished than a bug.

Are there any plans to enable Voice Mode to use 

**Solution:** See comments in GitHub issue for potential solutions

**Resources:**
- [GitHub Issue #105](https://github.com/openai/openai-apps-sdk-examples/issues/105)

**Reported by:** @nestorvc
