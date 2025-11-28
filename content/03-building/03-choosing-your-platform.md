# Choosing Your Platform

## Building for Both Platforms

It's possible to build a single app that works on both ChatGPT and MCP-compatible hosts by using the **MCP-UI SDK**. The MCP-UI team has built an [Apps SDK adapter](https://mcpui.dev/guide/apps-sdk) that enables MCP-UI HTML widgets to run inside ChatGPT while maintaining compatibility with traditional MCP hosts.

**Key benefits:**
- Write once, deploy to multiple platforms
- Use the same codebase for both ChatGPT Apps and MCP Apps
- The adapter automatically translates MCP-UI primitives to Apps SDK compatible code
- No HTML changes required - the bridge handles the translation

**How it works:**
- Create a static template with the Apps SDK adapter enabled for ChatGPT
- Return standard MCP-UI embedded resources for MCP-native hosts
- The adapter switches the MIME type to `text/html+skybridge` and injects the Apps bridge script automatically

For detailed instructions, see the [MCP-UI Apps SDK Integration guide](https://mcpui.dev/guide/apps-sdk).

**Note:** If you want your app to work on both ChatGPT and MCP hosts, consider using the MCP-UI SDK with the Apps SDK adapter instead of building a platform-specific app.

## Building ChatGPT Apps

ChatGPT Apps are interactive applications that run within ChatGPT, providing specialized functionality and rich user interfaces.

### What are ChatGPT Apps?

ChatGPT Apps allow developers to create interactive experiences directly within ChatGPT. These apps can:

- Provide specialized tools and capabilities
- Display rich, interactive user interfaces
- Integrate with external services and APIs
- Enhance ChatGPT's functionality for specific use cases

For more information, see [OpenAI's introduction to Apps in ChatGPT](https://openai.com/index/introducing-apps-in-chatgpt/).

### Key Concepts

#### Apps SDK

The OpenAI Apps SDK provides the foundation for building ChatGPT Apps. It uses MCP as its backbone and enables:

- UI component creation
- Tool integration
- Resource management
- Communication with ChatGPT

#### UI Components

ChatGPT Apps support interactive UI built with standard web technologies:

- HTML for structure
- CSS for styling
- JavaScript for interactivity
- Standard browser APIs (with security restrictions)

#### Integration Points

Apps integrate with ChatGPT through:

- **Tools** - Functions that the app can call
- **Resources** - Data and content the app can access
- **UI Resources** - Interactive interfaces displayed to users

### Development Workflow

1. **Plan your app** - Define functionality and user experience
2. **Set up development environment** - Install SDK and dependencies
3. **Build UI components** - Create interactive interfaces
4. **Implement tools** - Add backend functionality
5. **Test locally** - Use development tools to test your app
6. **Prepare for submission** - Follow OpenAI's guidelines
7. **Submit for review** - When submission process opens (before end of 2025)

### Key Considerations

- Apps must follow OpenAI's guidelines and policies
- UI is built using standard web technologies (HTML/CSS/JavaScript)
- Apps integrate with ChatGPT's conversational interface
- Submission process will be available before end of 2025

### Best Practices

- Design for conversational context - Apps should feel natural within ChatGPT
- Provide clear user feedback - Interactive elements should be responsive
- Handle errors gracefully - Show helpful error messages
- Follow security guidelines - Ensure your app is secure and respects user privacy
- Optimize performance - Keep UI responsive and efficient

## Building MCP Apps

MCP Apps are applications built on the Model Context Protocol that can work across multiple AI host applications, providing a standardized way to create interactive AI experiences.

### What are MCP Apps?

MCP Apps leverage the **MCP Apps Extension (SEP-1865)** to deliver interactive user interfaces. These apps can:

- Work across multiple MCP-compatible hosts
- Provide consistent experiences regardless of host
- Use standardized patterns for UI and tool integration
- Deploy once, work everywhere (with host support)

For more information, see the [MCP Apps Extension proposal](https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/).

### Key Concepts

#### MCP Apps Extension

The MCP Apps Extension standardizes:

- **UI Resource Declarations** - Templates with `ui://` URI scheme
- **Tool-to-UI Linking** - Connecting tools to their UI components
- **Bidirectional Communication** - UI components can communicate with hosts via MCP JSON-RPC
- **Security Model** - Sandboxed iframes and pre-declared templates

#### UI Resources

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

#### Communication

UI components communicate with hosts using the standard MCP JSON-RPC protocol over `postMessage`, ensuring:

- Structured, auditable communication
- Compatibility with existing MCP features
- Standard SDK usage (`@modelcontextprotocol/sdk`)

### Development Workflow

1. **Design your app** - Plan functionality and UI components
2. **Set up MCP server** - Create server with tool and resource definitions
3. **Create UI templates** - Build HTML interfaces for your components
4. **Link tools to UI** - Connect tools with their corresponding UI resources
5. **Implement communication** - Set up bidirectional messaging
6. **Test with hosts** - Verify compatibility across different hosts
7. **Deploy** - Make your app available

### Key Considerations

- Apps use the MCP Apps Extension (SEP-1865) for UI capabilities
- UI resources are declared and linked to tools
- Apps can work with any MCP-compatible host
- More flexible deployment options

### Security Considerations

MCP Apps Extension includes multiple security layers:

- **Iframe Sandboxing** - All UI runs in restricted iframes
- **Pre-declared Templates** - Hosts can review HTML before rendering
- **Auditable Messages** - All communication is logged
- **User Consent** - Hosts can require approval for UI-initiated actions

### Backward Compatibility

MCP Apps is an optional extension. Your apps should:

- Provide text-only fallbacks for all UI-enabled tools
- Return meaningful content even when UI is unavailable
- Work with both UI-capable and text-only hosts

**Note:** Using the MCP-UI SDK with the Apps SDK adapter allows your MCP App to also work in ChatGPT without requiring separate implementations.

