# Building MCP Apps

MCP Apps are applications built on the Model Context Protocol that can work across multiple AI host applications, providing a standardized way to create interactive AI experiences.

## What are MCP Apps?

MCP Apps leverage the **MCP Apps Extension (SEP-1865)** to deliver interactive user interfaces. These apps can:

- Work across multiple MCP-compatible hosts
- Provide consistent experiences regardless of host
- Use standardized patterns for UI and tool integration
- Deploy once, work everywhere (with host support)

For more information, see the [MCP Apps Extension proposal](https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/).

## Key Concepts

### MCP Apps Extension

The MCP Apps Extension standardizes:

- **UI Resource Declarations** - Templates with `ui://` URI scheme
- **Tool-to-UI Linking** - Connecting tools to their UI components
- **Bidirectional Communication** - UI components can communicate with hosts via MCP JSON-RPC
- **Security Model** - Sandboxed iframes and pre-declared templates

### UI Resources

UI templates are declared as resources:

```typescript
{
  uri: "ui://my-app/dashboard",
  name: "Dashboard View",
  mimeType: "text/html+mcp"
}
```

Tools reference these resources in their metadata:

```typescript
{
  name: "show_dashboard",
  _meta: {
    "ui/resourceUri": "ui://my-app/dashboard"
  }
}
```

### Communication

UI components communicate with hosts using the standard MCP JSON-RPC protocol over `postMessage`, ensuring:

- Structured, auditable communication
- Compatibility with existing MCP features
- Standard SDK usage (`@modelcontextprotocol/sdk`)

## Development Workflow

1. **Design your app** - Plan functionality and UI components
2. **Set up MCP server** - Create server with tool and resource definitions
3. **Create UI templates** - Build HTML interfaces for your components
4. **Link tools to UI** - Connect tools with their corresponding UI resources
5. **Implement communication** - Set up bidirectional messaging
6. **Test with hosts** - Verify compatibility across different hosts
7. **Deploy** - Make your app available

## Security Considerations

MCP Apps Extension includes multiple security layers:

- **Iframe Sandboxing** - All UI runs in restricted iframes
- **Pre-declared Templates** - Hosts can review HTML before rendering
- **Auditable Messages** - All communication is logged
- **User Consent** - Hosts can require approval for UI-initiated actions

## Backward Compatibility

MCP Apps is an optional extension. Your apps should:

- Provide text-only fallbacks for all UI-enabled tools
- Return meaningful content even when UI is unavailable
- Work with both UI-capable and text-only hosts

