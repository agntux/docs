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

## Host Details

### ChatGPT
- **Focus:** OpenAI's conversational AI platform that supports ChatGPT Apps and MCP servers
- **Documentation:** [OpenAI Platform](https://platform.openai.com/)

### Nanobot
- **Focus:** AI coding assistant focused on software development and code generation
- **Documentation:** [Nanobot Documentation](https://nanobot.dev/)

### Postman
- **Focus:** API development and testing platform with MCP integration for API workflows
- **Documentation:** [Postman MCP Documentation](https://www.postman.com/)

### Goose
- **Focus:** AI assistant platform designed for productivity and workflow automation
- **Documentation:** [Goose Documentation](https://goose.ai/)

### LibreChat
- **Focus:** Open-source ChatGPT alternative with support for multiple AI providers and MCP servers
- **Documentation:** [LibreChat Documentation](https://docs.librechat.ai/)

### Smithery
- **Focus:** AI agent platform focused on building and deploying conversational AI applications
- **Documentation:** [Smithery Documentation](https://smithery.ai/)

### MCPJam
- **Focus:** Development environment and playground for testing and building MCP applications
- **Documentation:** [MCPJam Documentation](https://mcpjam.com/)

### fast-agent
- **Focus:** Fast, lightweight AI agent framework for building and running MCP-compatible applications
- **Documentation:** [fast-agent GitHub](https://github.com/fast-agent)

### VSCode
- **Focus:** Popular code editor with planned MCP Apps support
- **Status:** Support planned (TBA)

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

## Resources

For the most up-to-date information on host support, visit:
- [MCP-UI Supported Hosts](https://mcpui.dev/guide/supported-hosts)
- Individual host documentation
- MCP community discussions

