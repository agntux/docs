### Web Component JSON Stringify Attribute Antipattern

**Summary:** The MCP-UI web component example uses `JSON.stringify()` to set object data as HTML attributes, which is considered a web component antipattern. Web components should use properties instead of stringified attributes for rich objects.

**Solution:**
1. Instead of using `setAttribute('resource', JSON.stringify(resource))`, use direct property assignment
2. Use `renderer.resource = mcpResource.resource` instead of `renderer.setAttribute('resource', JSON.stringify(...))`
3. Check the MCP-UI documentation for the correct way to use web components
4. Monitor for SDK updates that fix this antipattern
5. Follow web component best practices: use attributes for simple strings/numbers, use properties for objects
6. Review the MCP-UI repository for updates addressing this issue

**Resources:**
- [GitHub Issue #120](https://github.com/MCP-UI-Org/mcp-ui/issues/120)
- [MCP-UI Documentation](https://mcpui.dev/)

**Reported by:** @EisenbergEffect
**Date Reported:** 2025-10-07
**Date Resolved:** Not yet resolved (fix in progress)
**Contributors:** @EisenbergEffect, @idosal

