# Definitions

This section defines key terms and concepts used throughout this documentation related to agentic apps, ChatGPT Apps, and MCP Apps.

## Core Concepts

### Agentic App

An **agentic app** is an interactive application that uses AI agents to perform tasks, make decisions, and interact with users through natural language and rich user interfaces. Agentic apps combine conversational AI capabilities with interactive UI components to create seamless user experiences.

### Host

A **host** is an AI application or platform that can run and display ChatGPT Apps or MCP Apps. Hosts provide the runtime environment, user interface framework, and communication protocols needed for apps to function. Examples include ChatGPT, Nanobot, Claude Desktop, and other MCP-compatible applications.

---

## ChatGPT Apps

### ChatGPT App

A **ChatGPT App** is an interactive application built using the OpenAI Apps SDK that runs within ChatGPT. These apps provide rich, interactive user interfaces and can integrate with external services through tools and resources. ChatGPT Apps are designed specifically for OpenAI's ChatGPT platform and follow OpenAI's guidelines and policies.

**Key characteristics:**
- Built with the OpenAI Apps SDK
- Runs within ChatGPT
- Uses MCP as its backbone protocol
- Must be submitted to OpenAI for approval before public release

---

## MCP Apps

### MCP App

An **MCP App** is an interactive application built using the MCP Apps Extension (SEP-1865) that can work across multiple MCP-compatible hosts. Unlike ChatGPT Apps, MCP Apps are platform-agnostic and can run on any host that supports the MCP Apps Extension standard.

**Key characteristics:**
- Built using the MCP Apps Extension (SEP-1865)
- Works across multiple MCP-compatible hosts
- Uses standardized UI resource declarations
- Deploy once, work everywhere (with host support)

### MCP-UI

**MCP-UI** was the original name for what is now called MCP Apps. The MCP-UI project was created by Ido Salomon and Liad Yosef as an open-source initiative to enable rich, interactive user interfaces in MCP servers. The concepts and patterns from MCP-UI were later standardized as the MCP Apps Extension (SEP-1865). Apps built with MCP-UI are compatible with the MCP Apps Extension standard.

---

## Model Context Protocol (MCP)

### MCP

**MCP (Model Context Protocol)** is an open protocol that enables AI assistants to securely access external data sources and tools. MCP provides a standardized way for AI applications to interact with external systems, databases, APIs, and services.

**Key features:**
- Secure communication between AI assistants and external systems
- Standardized tool and resource definitions
- Support for multiple programming languages
- Extensible architecture

### MCP Server

An **MCP server** is an application that implements the MCP protocol to expose tools, resources, and prompts to MCP clients (hosts). MCP servers can provide access to databases, APIs, file systems, or any other external system that AI assistants need to interact with.

### MCP Client

An **MCP client** is an application that connects to MCP servers to access their tools and resources. Hosts like ChatGPT, Claude Desktop, and Nanobot act as MCP clients when they connect to MCP servers.

### MCP Apps Extension

The **MCP Apps Extension** (also known as SEP-1865) is a standardized extension to the MCP protocol that enables interactive user interfaces. It defines how UI components are declared, how tools link to UI resources, and how bidirectional communication works between UI components and hosts.

**Key components:**
- UI Resource Declarations (`ui://` URI scheme)
- Tool-to-UI Linking
- Bidirectional Communication
- Security Model (sandboxed iframes)

---

## Technical Terms

### Tool

A **tool** is a function or capability exposed by an MCP server that an AI assistant can call to perform actions or retrieve information. Tools are defined with names, descriptions, and input schemas that help AI assistants understand when and how to use them.

### Resource

A **resource** is data or content exposed by an MCP server that an AI assistant can read or reference. Resources can include files, database records, API responses, or UI components (in the case of MCP Apps).

### UI Resource

A **UI resource** is a special type of resource in MCP Apps that declares an interactive user interface component. UI resources use the `ui://` URI scheme and are linked to tools through metadata, enabling rich, interactive experiences in agentic apps.

### Prompt

A **prompt** is a template or instruction that an MCP server can provide to help guide AI assistant behavior. Prompts can include context, examples, or structured instructions for specific tasks.

### SDK

An **SDK (Software Development Kit)** is a collection of tools, libraries, and documentation that helps developers build applications for a specific platform or protocol. Examples include the OpenAI Apps SDK for ChatGPT Apps and the MCP SDK for building MCP servers.

---

## Platform-Specific Terms

### OpenAI Apps SDK

The **OpenAI Apps SDK** is the official development kit for building ChatGPT Apps. It provides the tools, libraries, and APIs needed to create interactive applications that run within ChatGPT.

### Apps SDK

**Apps SDK** is an alternative name for the OpenAI Apps SDK, used in some contexts to refer to the development kit for ChatGPT Apps.

---

## Development Terms

### SEP-1865

**SEP-1865** is the proposal number for the MCP Apps Extension standard. SEP stands for "Standard Extension Proposal" and is part of the MCP protocol's standardization process. The proposal defines how interactive UI components work within the MCP ecosystem.

### Standardization

**Standardization** refers to the process of creating official specifications and protocols that ensure interoperability across different implementations. The MCP Apps Extension was standardized through collaboration between Anthropic, OpenAI, and the MCP-UI team.

---

## Related Concepts

### Interoperability

**Interoperability** is the ability of different systems, platforms, or applications to work together seamlessly. MCP Apps are designed for interoperability, allowing the same app to work across multiple MCP-compatible hosts.

### Platform-Agnostic

**Platform-agnostic** describes software or applications that are not tied to a specific platform or vendor. MCP Apps are platform-agnostic, meaning they can work with any host that supports the MCP Apps Extension, not just one specific platform.

### Sandboxed

**Sandboxed** refers to an execution environment that isolates code from the rest of the system for security purposes. In MCP Apps, UI components run in sandboxed iframes to prevent malicious code from accessing sensitive data or system resources.

---

*This definitions page is automatically updated by our AI agent as new terms and concepts emerge in the agentic apps ecosystem.*

