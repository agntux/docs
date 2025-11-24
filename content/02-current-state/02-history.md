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

The **OpenAI Apps SDK** further validated the demand for rich UI experiences within conversational AI interfaces. OpenAI built their Apps SDK using MCP as its backbone, enabling developers to create interactive applications inside ChatGPT.

This adoption by a major platform provider signaled strong industry interest and helped establish UI capabilities as a core feature rather than an experimental add-on.

## Standardization: MCP Apps Extension

To ensure interoperability and establish consistent security and usage patterns across the ecosystem, **Anthropic**, **OpenAI**, and the **MCP-UI team** collaborated to create an official MCP extension for interactive interfaces.

This collaboration resulted in **SEP-1865: MCP Apps Extension**, which standardizes:

- UI resource declarations
- Tool-to-UI linking patterns
- Bidirectional communication between embedded interfaces and host applications
- Security models for hosting interactive content

## Timeline

While exact dates are still being finalized, the general progression has been:

1. **2024 (Early)**: MCP-UI project launches, proving the concept
2. **2024 (Mid)**: Community adoption grows, major companies integrate
3. **2024 (Late)**: OpenAI Apps SDK launches, bringing UI to ChatGPT
4. **2025 (Early)**: MCP Apps Extension proposal (SEP-1865) published
5. **2025 (Ongoing)**: Standardization work continues, more hosts add support

## The Path Forward

The collaboration between MCP-UI creators, OpenAI, and Anthropic represents a commitment to building an open, interoperable ecosystem. This foundation will enable developers to build apps that work across multiple platforms while maintaining consistent patterns and security models.

