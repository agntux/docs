# Releasing MCP Apps

MCP Apps can be released as hosts build support for the MCP Apps Extension features. The release process is more flexible than ChatGPT Apps since MCP Apps work across multiple platforms.

## Release Strategy

### Host Support

MCP Apps become available as individual hosts add support:

- **Full support hosts** - Your app works with full UI and action capabilities
- **Partial support hosts** - Your app works with limited features
- **Rendering-only hosts** - Your app displays but with limited interactivity

### Deployment Options

You can deploy MCP Apps through:

- **Public repositories** - GitHub, GitLab, etc.
- **Package registries** - npm, PyPI, RubyGems (for SDKs)
- **Direct distribution** - Share server code directly
- **MCP registries** - Community-maintained app directories (as they emerge)

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

## Distribution

### Open Source

Many MCP Apps are open source:

- Choose an appropriate license (MIT, Apache 2.0, etc.)
- Include contribution guidelines
- Set up issue tracking
- Create a README with clear instructions

### Private Distribution

For private/internal apps:

- Set up secure distribution channels
- Provide access controls
- Document deployment procedures
- Ensure proper authentication

## Post-Release

After releasing:

- Monitor usage and feedback
- Address issues and bugs
- Add new features based on user needs
- Keep documentation updated
- Engage with the community

## Future Considerations

As the MCP ecosystem matures:

- Official MCP app registries may emerge
- Standardized distribution mechanisms may be established
- Host-specific app stores may be created
- Certification or verification programs may be introduced

Stay engaged with the MCP community to stay current with distribution best practices and new opportunities.

