# Understanding the App Model

## How ChatGPT/MCP Apps Differ from Traditional Apps

The fundamental difference between traditional web/mobile apps and ChatGPT/MCP Apps is the **ownership of the user experience**.

**In traditional apps:**
- The app is the primary interface
- The app controls the entire user experience
- Users interact directly with the app

**In ChatGPT/MCP Apps:**
- The **AI agent host** (ChatGPT, Claude, etc.) is the primary owner of the user's experience
- The app's role is to **supplement and enhance** the host's ability to help the user
- The app provides richer interactions than text-only responses, but doesn't take over the entire experience
- Apps work within the conversational context provided by the host

**Key principle:** Apps should feel like natural extensions of the host's conversation, not separate applications that interrupt the flow. The intention is not for the app to completely take over the user's experience, but rather to enable the host to provide a richer UX than is possible with text only.

## Iframe Architecture and Event Communication

ChatGPT Apps and MCP Apps run inside **sandboxed iframes** for security and isolation. This architecture provides a controlled environment where apps can execute safely while maintaining clear boundaries.

**Communication Model:**
- Apps and hosts communicate through a **defined set of events** that can be passed in both directions
- Events use the standard MCP JSON-RPC protocol over `postMessage`
- All communication is structured, auditable, and follows consistent patterns

**Common Event Types:**

1. **Tool Call Events** - Apps can request the host to execute tools with specific parameters
2. **Intent Events** - Apps communicate user intentions or actions to the host
3. **Prompt Events** - Apps can request the host to display prompts or confirmations to the user
4. **Notification Events** - Apps send status updates or notifications to the host
5. **Link Events** - Apps can request the host to open URLs or navigate

**Host-to-App Communication:**
- Hosts can send data and updates to apps
- Hosts can trigger app state changes
- Hosts provide context about the conversation and user

**App-to-Host Communication:**
- Apps can request tool executions
- Apps can send user interaction data
- Apps can request user confirmations or prompts

This bidirectional event system enables rich, interactive experiences while maintaining security and allowing the host to remain in control of the overall user experience.

For detailed information about event handling and communication patterns, see the [MCP-UI documentation](https://mcpui.dev/guide/introduction) and the [MCP Apps Extension proposal (SEP-1865)](https://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/).

