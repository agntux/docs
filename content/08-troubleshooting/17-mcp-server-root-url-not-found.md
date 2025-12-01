### MCP Server Root URL Returns "Not Found" Locally

**Summary:** When running an MCP server locally (e.g., on localhost:8000), accessing the root URL returns "Not Found" even though the server is running and MCP endpoints are accessible. This can cause confusion about whether the server is working correctly.

**Solution:**
1. Understand that MCP servers typically don't serve content at the root URL - this is expected behavior
2. The root URL returning "Not Found" is normal - MCP servers expose specific endpoints (e.g., `/mcp` for SSE stream)
3. Verify the server is working by checking the MCP-specific endpoints (e.g., `/mcp` for SSE, `/mcp/messages` for POST)
4. Use MCP Inspector or other MCP testing tools to verify server functionality
5. Don't expect a web UI at the root URL - MCP servers communicate via the MCP protocol, not HTTP web pages
6. Check server logs to confirm MCP endpoints are responding correctly

**Resources:**
- [GitHub Issue #107](https://github.com/openai/openai-apps-sdk-examples/issues/107)
- [MCP Inspector Documentation](https://mcpui.dev/)

**Reported by:** @ajayrathi2004
**Date Reported:** 2025-11-11
**Date Resolved:** Not yet resolved
**Contributors:** @ajayrathi2004

