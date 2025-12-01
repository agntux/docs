### Missing Payload Details in ui-message-response with text/uri-list Resource

**Summary:** When using `UiResourceRendererWC` with a `text/uri-list` resource, the `ui-message-response` is missing payload details that should be included.

**Solution:**
1. Verify the resource is properly formatted as `text/uri-list`
2. Check that the resource content includes all required payload information
3. Ensure the `UiResourceRendererWC` component is configured correctly
4. Review the MCP-UI documentation for proper `text/uri-list` resource format
5. Check if the issue is specific to certain hosts or occurs across all hosts
6. Verify the resource URI is accessible and returns the expected content

**Resources:**
- [GitHub Issue #97](https://github.com/MCP-UI-Org/mcp-ui/issues/97)
- [MCP-UI Documentation](https://mcpui.dev/)

**Reported by:** @benjaminsattler
**Date Reported:** 2025-08-28
**Date Resolved:** Not yet resolved
**Contributors:** @benjaminsattler

