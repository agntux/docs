### "Connector is not safe" Error When Connecting MCP Server

**Summary:** When trying to connect an MCP server to ChatGPT Apps, developers encounter a "Connector is not safe" error that prevents the connection from being established.

**Solution:**
1. Ensure your MCP server is running and accessible
2. Verify the connector configuration in your ChatGPT App settings
3. Check that the MCP server URL is correct and uses HTTPS in production
4. Review OpenAI's connector safety requirements
5. Ensure the server implements proper security headers
6. Check if the error occurs in development mode - some safety checks may be stricter in production

**Resources:**
- [GitHub Issue #115](https://github.com/openai/openai-apps-sdk-examples/issues/115)
- [OpenAI Apps SDK Documentation](https://platform.openai.com/docs/guides/apps-sdk)

**Reported by:** @gbmarcos
**Date Reported:** 2025-11-15
**Date Resolved:** Not yet resolved
**Contributors:** @gbmarcos

