# Supported Hosts

MCP Apps and UI-enabled MCP servers are supported by a growing number of MCP-compatible hosts. Feature support is constantly expanding as the ecosystem matures.

## Host Support Matrix

| Host | Rendering | UI Actions | Notes |
|------|-----------|------------|-------|
| **Nanobot** | ✅ | ✅ | Full support for MCP Apps |
| **ChatGPT** | ✅ | ⚠️ | Partial support via Apps SDK |
| **Postman** | ✅ | ⚠️ | Partial support |
| **Goose** | ✅ | ⚠️ | Partial support |
| **LibreChat** | ✅ | ⚠️ | Partial support |
| **Smithery** | ✅ | ❌ | Rendering only |
| **MCPJam** | ✅ | ❌ | Rendering only |
| **fast-agent** | ✅ | ❌ | Rendering only |
| **VSCode** | ? | ? | Support planned (TBA) |

**Legend:**
- ✅: Fully Supported
- ⚠️: Partial Support
- ❌: Not Supported (yet)
- ?: Status Unknown

## Understanding Support Levels

### Full Support (✅ Rendering + ✅ UI Actions)

Hosts with full support can:
- Render interactive UI components from MCP servers
- Handle UI-initiated tool calls and actions
- Support bidirectional communication between UI and host

### Partial Support (✅ Rendering + ⚠️ UI Actions)

Hosts with partial support can:
- Render UI components and display interactive interfaces
- May have limitations on UI-initiated actions
- May require additional configuration or have specific constraints

### Rendering Only (✅ Rendering + ❌ UI Actions)

Hosts with rendering-only support can:
- Display UI components visually
- Cannot handle interactive actions from the UI
- Useful for visualization and display purposes

## Choosing a Host

When building MCP Apps, consider:

1. **Your target audience** - Which hosts do your users primarily use?
2. **Required features** - Do you need full UI action support or is rendering sufficient?
3. **Development workflow** - Some hosts offer better development tools and debugging
4. **Future roadmap** - Check host roadmaps for planned feature additions

## Resources

For the most up-to-date information on host support, visit:
- [MCP-UI Supported Hosts](https://mcpui.dev/guide/supported-hosts)
- Individual host documentation
- MCP community discussions

