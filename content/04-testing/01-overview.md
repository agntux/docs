# Testing Your Apps

Thorough testing is essential for ensuring your ChatGPT Apps and MCP Apps work correctly across different hosts and scenarios. Testing these apps can be challenging as it requires setting up hosts locally or running them in development mode.

## Testing Strategies

### Unit Testing

Test individual components and functions in isolation:

- UI component rendering
- Tool function logic
- Data transformation
- Error handling

### Integration Testing

Test how components work together:

- Tool-to-UI communication
- Resource loading and rendering
- Host-to-app interactions
- End-to-end user flows

### Cross-Host Testing

Since MCP Apps can work with multiple hosts, test your app with:

- Different host applications
- Various host capabilities (full support, partial support, rendering only)
- Different host configurations
- Host-specific behaviors

## Common Testing Scenarios

### UI Rendering

- Verify UI components display correctly in iframes
- Test responsive layouts across different host contexts
- Check styling and theming compatibility
- Validate accessibility features
- Test UI rendering in hosts with different support levels

### Tool Execution

- Test tool calls with various inputs and parameters
- Verify error handling for invalid inputs
- Check response formatting and structure
- Validate data transformations
- Test tool execution through different hosts
- Verify tool-to-UI linking works correctly

### Communication

- Test UI-to-host messaging via postMessage
- Verify host-to-UI updates and state changes
- Check bidirectional communication flows
- Validate message formatting (JSON-RPC protocol)
- Test event handling (tool calls, intents, prompts, notifications)
- Verify communication security and sandboxing

### Error Cases

- Test with invalid inputs and malformed requests
- Verify error message display in UI
- Check fallback behaviors when UI is unavailable
- Validate recovery mechanisms
- Test network failures and timeout scenarios
- Verify graceful degradation to text-only mode

### Security Testing

- Test iframe sandboxing restrictions
- Verify pre-declared template validation
- Check message auditing and logging
- Test user consent flows for UI-initiated actions
- Validate authentication and authorization
- Test against common security vulnerabilities

## Development Tools

### Local MCP Server Runners

Most SDKs provide development tools for local testing:

- **TypeScript/Node.js SDKs:** Use `@modelcontextprotocol/sdk` with local server setup
- **Python SDKs:** Run MCP servers locally with development mode enabled
- **Ruby SDKs:** Use local server runners for testing

### UI Preview Tools

- Preview UI components in isolation
- Test styling and layout without full host integration
- Debug CSS and JavaScript issues
- Validate responsive design

### Debugging Interfaces

- Use browser developer tools to inspect iframe content
- Monitor postMessage communication
- Inspect JSON-RPC requests and responses
- Debug tool execution and resource access
- Use network tab to monitor API calls

### Mock Host Environments

- Create mock hosts for isolated testing
- Simulate different host capabilities
- Test error scenarios and edge cases
- Validate backward compatibility

## Best Practices

- **Test early and often** - Don't wait until the end; test as you build
- **Test across hosts** - Ensure compatibility with all target hosts
- **Test error cases** - Handle failures gracefully with clear error messages
- **Test performance** - Keep apps responsive and optimize loading times
- **Test accessibility** - Ensure usability for all users
- **Test locally first** - Use local development tools before testing with actual hosts
- **Use HTTPS for local testing** - Tools like ngrok are essential for ChatGPT testing
- **Test with different host support levels** - Verify your app works with full, partial, and rendering-only hosts
- **Maintain text-only fallbacks** - Ensure your app works even when UI is unavailable
- **Document your testing process** - Keep notes on what works and what doesn't across different hosts
