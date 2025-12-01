### Module '@mcp-ui/server' Has No Exported Member 'createUIResource'

**Summary:** When importing `createUIResource` from `@mcp-ui/server`, TypeScript reports that the module has no exported member with that name, causing build errors.

**Solution:**
1. Check the version of `@mcp-ui/server` you're using - the export may have been renamed or moved
2. Verify the correct import path - it may be exported from a different module or subpath
3. Check the MCP-UI documentation for the current API
4. As a workaround, check if the function is available under a different name or import path
5. Update to the latest version of `@mcp-ui/server` if available

**Resources:**
- [GitHub Issue #110](https://github.com/MCP-UI-Org/mcp-ui/issues/110)
- [MCP-UI Documentation](https://mcpui.dev/)

**Reported by:** @kdawgwilk
**Date Reported:** 2025-09-19
**Date Resolved:** Not yet resolved
**Contributors:** @kdawgwilk

