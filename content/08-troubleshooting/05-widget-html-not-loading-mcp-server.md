### Widget HTML Not Loading with MCP Server in Python

**Summary:** When using a Python MCP server, the widget HTML fails to load even though the MCP inspector shows the server is working correctly. The UI component doesn't render in the host.

**Solution:**
1. Verify the MCP server is returning UI resources with the correct MIME type (`text/html+mcp`)
2. Check that the resource URI is properly formatted and accessible
3. Ensure the tool's `_meta` field includes `"ui/resourceUri"` pointing to the correct resource
4. Test the resource URL directly to ensure it's accessible
5. Check Python MCP server implementation against the MCP-UI examples
6. Verify the host supports UI rendering and is configured correctly
7. Use MCP inspector to verify the resource is being returned correctly

**Resources:**
- [GitHub Issue #127](https://github.com/openai/openai-apps-sdk-examples/issues/127)
- [MCP Inspector Documentation](https://mcpui.dev/)

**Reported by:** @Sateesh-karagana
**Date Reported:** 2025-11-20
**Date Resolved:** Not yet resolved
**Contributors:** @Sateesh-karagana

