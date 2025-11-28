# Releasing MCP Apps

MCP Apps can be released as hosts build support for the MCP Apps Extension features. The release process is more flexible than ChatGPT Apps since MCP Apps work across multiple platforms.

## Release Strategy

### Host Support

MCP Apps become available as individual hosts add support:

- **Full support hosts** - Your app works with full UI and action capabilities
- **Partial support hosts** - Your app works with limited features
- **Rendering-only hosts** - Your app displays but with limited interactivity

### Deployment Options

MCP Apps are served via an **MCP server**. The MCP server acts as the backend that handles requests and serves the app's UI resources, tools, and functionality to MCP-compatible hosts. You can deploy your MCP server (which serves your app) through various methods:

**Server Deployment Methods:**

- **Remote Deployments** - Host your MCP server externally (cloud providers, third-party services). Clients connect over HTTPS using a provided URL. This offers quick setup, scalability, and centralized maintenance.

- **Managed Deployments** - Deploy your MCP server within managed infrastructure:
  - **Managed-Dedicated** - Each user/agent has their own container instance for isolation
  - **Managed-Shared** - Multiple users/agents share a single container instance for resource efficiency

- **Workstation Deployments** - Install and run the MCP server locally on a user's machine. Useful when the server needs access to local files or programs.

**Distribution Methods:**

- **Public repositories** - Share your MCP server code via GitHub, GitLab, etc.
- **Package registries** - Publish server code via npm, PyPI, RubyGems (for SDKs)
- **Direct distribution** - Share server code directly to users
- **MCP registries** - Community-maintained app directories (as they emerge)

**Key Point:** Users install and run your MCP server, which then serves your app to MCP-compatible hosts. The server exposes tools, resources, and UI templates that hosts can discover and use.

## Release Checklist

Before releasing your MCP App:

- **Documentation** - Clear setup and usage instructions
- **Examples** - Working examples and demos
- **Compatibility** - List of supported hosts
- **Installation** - Simple installation process
- **Configuration** - Clear configuration options
- **Support** - Way for users to get help (issues, discussions, etc.)

## Versioning

Consider versioning your MCP App:

- Follow semantic versioning (major.minor.patch)
- Document breaking changes
- Provide migration guides
- Maintain backward compatibility when possible


