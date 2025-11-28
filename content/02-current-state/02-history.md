# History and Evolution

Understanding how we got to where we are today helps contextualize the current state of ChatGPT Apps and MCP Apps.

## The Origins: MCP-UI

The journey began with **MCP-UI**, an open-source project created by **Ido Salomon** and **Liad Yosef**. This project pioneered the concept of delivering rich, interactive user interfaces as first-class MCP resources.

### Key Contributions

MCP-UI demonstrated that:

- UI components could be natural extensions of MCP servers
- Interactive interfaces could be delivered as resources
- Agentic apps could fit seamlessly within the MCP architecture

The project gained significant community support and was adopted by leading companies including Postman, Shopify, Hugging Face, Goose, and ElevenLabs.

## Adoption by OpenAI

The **OpenAI Apps SDK** further validated the demand for rich UI experiences within conversational AI interfaces. The Apps SDK is largely based on MCP-UI, with OpenAI building their platform using MCP as its backbone and adopting the patterns and concepts pioneered by the MCP-UI project.

To enable interoperability between MCP-UI apps and ChatGPT, the MCP-UI team built an adapter that allows MCP-UI HTML widgets to run inside ChatGPT. The [Apps SDK adapter](https://mcpui.dev/guide/apps-sdk) in `@mcp-ui/server` automatically translates MCP-UI primitives to Apps SDK compatible code, enabling developers to build apps that work with both MCP-UI hosts and ChatGPT without requiring separate implementations.

This adoption by a major platform provider signaled strong industry interest and helped establish UI capabilities as a core feature rather than an experimental add-on.

## Standardization: MCP Apps Extension

To ensure interoperability and establish consistent security and usage patterns across the ecosystem, **Anthropic**, **OpenAI**, and the **MCP-UI team** collaborated to create an official MCP extension for interactive interfaces.

This collaboration resulted in **SEP-1865: MCP Apps Extension**, which standardizes:

- UI resource declarations
- Tool-to-UI linking patterns
- Bidirectional communication between embedded interfaces and host applications
- Security models for hosting interactive content

## Timeline

The general progression has been:

1. **November 2024**: Model Context Protocol (MCP) introduced by Anthropic
2. **Late 2024 - Early 2025**: MCP-UI project launches, proving the concept of interactive UIs in MCP
3. **Early 2025**: Community adoption grows, major companies integrate MCP-UI
4. **March 2025**: OpenAI adopts MCP, integrating it across ChatGPT desktop app, Agents SDK, and Responses API
5. **November 2025**: OpenAI announces Apps SDK at Dev Day conference
6. **November 2025**: MCP Apps Extension proposal (SEP-1865) published, standardizing the approach
7. **2025 (Ongoing)**: Standardization work continues, more hosts add support

## The Path Forward

The collaboration between MCP-UI creators, OpenAI, and Anthropic represents a commitment to building an open, interoperable ecosystem. This foundation will enable developers to build apps that work across multiple platforms while maintaining consistent patterns and security models.

