# Testing ChatGPT Apps

## Setting Up ChatGPT Developer Mode

ChatGPT offers a Developer Mode that allows you to create, test, and deploy custom MCP connectors. This is the primary way to test ChatGPT Apps during development.

### Prerequisites

- Developer Mode is available for ChatGPT Business, Enterprise, and Education plans
- Your MCP server must be accessible over HTTPS (required for production, but can use tools like ngrok for local testing)

### Enabling Developer Mode

1. **Access Settings:**
   - Open ChatGPT and click on your profile icon
   - Navigate to **Settings**

2. **Enable Developer Mode:**
   - Within Settings, go to **Apps & Connectors**
   - Click on **Advanced Settings**
   - Toggle **Developer Mode** to the "On" position

## Creating and Testing a Connector

### Create a New Connector

1. In ChatGPT, navigate to **Settings** → **Connectors**
2. Click on **Create** to add a new connector

### Configure the Connector

Provide the necessary metadata:

- **Connector Name:** A descriptive title (e.g., "Kanban Board")
- **Description:** A brief explanation of the connector's functionality
- **Connector URL:** The public `/mcp` endpoint of your server (e.g., `https://abc123.ngrok.app/mcp`)
- Choose the appropriate authentication method (e.g., OAuth) if required
- Click **Create** and verify the tools your server advertises

### Test the Connector

1. Open a new chat in ChatGPT
2. Click the "+" button near the message composer, select **More**, and choose your connector
3. Prompt ChatGPT to perform actions using the connector (e.g., "What are my available tasks?")
4. Review tool-call payloads in the UI to confirm inputs and outputs
5. For write tools, manual confirmation is required unless approvals are remembered for the conversation

### Refresh Metadata

After updating your MCP server:

1. In ChatGPT Settings → Connectors, select your connector and click **Refresh**
2. Verify tool list updates and test the updated flows

## Local Development Setup

When testing locally, your MCP server must be accessible over HTTPS. Use one of these tools to expose your local server:

### Using ngrok

Create a secure tunnel to your local server:

```bash
ngrok http 3000
```

Use the provided HTTPS URL (e.g., `https://abc123.ngrok.app`) as your connector URL.

### Using Cloudflare Tunnel

Alternative to ngrok for exposing local servers with Cloudflare's infrastructure.

## Testing Workflow

1. **Start your local MCP server** on a local port (e.g., `localhost:3000`)
2. **Expose the server** using ngrok or Cloudflare Tunnel to get an HTTPS URL
3. **Create a connector** in ChatGPT Developer Mode using the HTTPS URL
4. **Test your app** by interacting with it through ChatGPT
5. **Iterate and refresh** - Make changes to your server and refresh the connector metadata

## Common Issues and Solutions

### Server Not Accessible

- Ensure your server is running and accessible
- Verify the ngrok tunnel is active
- Check that the URL in the connector matches your server endpoint

### Tools Not Appearing

- Refresh the connector metadata after server changes
- Verify your server is returning tools in the correct format
- Check that the MCP protocol is implemented correctly

### Authentication Errors

- Verify authentication configuration in connector settings
- Check that your server handles authentication correctly
- Ensure tokens are being passed properly

For detailed instructions, refer to [OpenAI's documentation on connecting from ChatGPT](https://developers.openai.com/apps-sdk/deploy/connect-chatgpt).

