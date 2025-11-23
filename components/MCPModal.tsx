"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MCP_SERVER_URL = "https://gitmcp.io/agntux/docs";

const mcpInstructions = {
  cursor: {
    name: "Cursor",
    config: {
      file: "~/.cursor/mcp.json",
      content: `{
  "mcpServers": {
    "AgntUX Docs": {
      "url": "${MCP_SERVER_URL}"
    }
  }
}`,
    },
  },
  "claude-desktop": {
    name: "Claude Desktop",
    config: {
      file: "claude_desktop_config.json",
      content: `{
  "mcpServers": {
    "AgntUX Docs": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "${MCP_SERVER_URL}"
      ]
    }
  }
}`,
    },
  },
  windsurf: {
    name: "Windsurf",
    config: {
      file: "~/.codeium/windsurf/mcp_config.json",
      content: `{
  "mcpServers": {
    "AgntUX Docs": {
      "serverUrl": "${MCP_SERVER_URL}"
    }
  }
}`,
    },
  },
  vscode: {
    name: "VSCode",
    config: {
      file: ".vscode/mcp.json",
      content: `{
  "servers": {
    "AgntUX Docs": {
      "type": "sse",
      "url": "${MCP_SERVER_URL}"
    }
  }
}`,
    },
  },
  cline: {
    name: "Cline",
    config: {
      file: "~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json",
      content: `{
  "mcpServers": {
    "AgntUX Docs": {
      "url": "${MCP_SERVER_URL}",
      "disabled": false,
      "autoApprove": []
    }
  }
}`,
    },
  },
  "highlight-ai": {
    name: "Highlight AI",
    instructions: `1. Open Highlight AI and click the plugins icon (@ symbol) in the sidebar
2. Click **Installed Plugins** at the top of the sidebar
3. Select **Custom Plugin**
4. Click **Add a plugin using a custom SSE URL**
5. Enter this as your plugin name: \`AgntUX Docs\`
6. Enter this URL as the SSE URL: \`${MCP_SERVER_URL}\``,
  },
  "augment-code": {
    name: "Augment Code",
    instructions: `1. Open Augment Code settings
2. Navigate to the MCP section
3. Add a new MCP server with the following details:

**Name the MCP server:** \`git-mcp Docs\`

**Use this command:** \`npx mcp-remote ${MCP_SERVER_URL}\`

Or use the following configuration:

\`\`\`json
{
  "mcpServers": {
    "git-mcp Docs": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "${MCP_SERVER_URL}"
      ]
    }
  }
}
\`\`\``,
  },
  "msty-ai": {
    name: "Msty AI",
    instructions: `1. Copy the following JSON configuration:

\`\`\`json
{
  "mcpServers": {
    "AgntUX Docs": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "${MCP_SERVER_URL}"
      ]
    }
  }
}
\`\`\`

2. Go to Msty Studio > Tools > 'Import Tools from JSON Clipboard'`,
  },
};

interface MCPModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MCPModal({ open, onOpenChange }: MCPModalProps) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Connect as MCP Server</DialogTitle>
          <DialogDescription>
            Connect this documentation as an MCP server to your AI coding assistant.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm font-medium mb-2">MCP Server URL:</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 p-2 bg-background rounded text-sm break-all">
                {MCP_SERVER_URL}
              </code>
              <Button
                size="sm"
                variant="default"
                onClick={() => copyToClipboard(MCP_SERVER_URL, "url")}
              >
                {copied === "url" ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>

          <Tabs defaultValue="cursor" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto">
              <TabsTrigger value="cursor" className="text-xs">Cursor</TabsTrigger>
              <TabsTrigger value="claude-desktop" className="text-xs">Claude</TabsTrigger>
              <TabsTrigger value="windsurf" className="text-xs">Windsurf</TabsTrigger>
              <TabsTrigger value="vscode" className="text-xs">VSCode</TabsTrigger>
              <TabsTrigger value="cline" className="text-xs">Cline</TabsTrigger>
              <TabsTrigger value="highlight-ai" className="text-xs">Highlight</TabsTrigger>
              <TabsTrigger value="augment-code" className="text-xs">Augment</TabsTrigger>
              <TabsTrigger value="msty-ai" className="text-xs">Msty</TabsTrigger>
            </TabsList>

            {Object.entries(mcpInstructions).map(([key, instruction]) => (
              <TabsContent key={key} value={key} className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">{instruction.name}</h3>
                  {instruction.config ? (
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Update your configuration file:
                        </p>
                        <code className="text-xs text-muted-foreground">
                          {instruction.config.file}
                        </code>
                      </div>
                      <div className="relative">
                        <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-xs">
                          <code>{instruction.config.content}</code>
                        </pre>
                        <Button
                          size="sm"
                          variant="default"
                          className="absolute top-2 right-2"
                          onClick={() =>
                            copyToClipboard(instruction.config.content, key)
                          }
                        >
                          {copied === key ? "Copied!" : "Copy"}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3 text-sm leading-relaxed">
                      {instruction.instructions.split('\n\n').map((paragraph, idx) => {
                        // Check if paragraph contains code block
                        if (paragraph.includes('```')) {
                          const parts = paragraph.split(/```/);
                          return (
                            <div key={idx} className="space-y-2">
                              {parts.map((part, partIdx) => {
                                if (partIdx % 2 === 0) {
                                  // Regular text
                                  return (
                                    <p key={partIdx} className="whitespace-pre-line">
                                      {part.split(/(\*\*.*?\*\*|`.*?`)/g).map((segment, segIdx) => {
                                        if (segment.startsWith('**') && segment.endsWith('**')) {
                                          return <strong key={segIdx}>{segment.slice(2, -2)}</strong>;
                                        }
                                        if (segment.startsWith('`') && segment.endsWith('`')) {
                                          return (
                                            <code key={segIdx} className="bg-muted px-1.5 py-0.5 rounded text-xs">
                                              {segment.slice(1, -1)}
                                            </code>
                                          );
                                        }
                                        return <span key={segIdx}>{segment}</span>;
                                      })}
                                    </p>
                                  );
                                } else {
                                  // Code block
                                  const lines = part.split('\n').filter(l => l.trim());
                                  const lang = lines[0]?.match(/^(json|javascript|typescript|bash)$/i) ? lines[0] : '';
                                  const code = lang ? lines.slice(1).join('\n') : lines.join('\n');
                                  return (
                                    <pre key={partIdx} className="p-4 bg-muted rounded-lg overflow-x-auto">
                                      <code className="text-xs">{code}</code>
                                    </pre>
                                  );
                                }
                              })}
                            </div>
                          );
                        }
                        // Regular paragraph
                        return (
                          <p key={idx} className="whitespace-pre-line">
                            {paragraph.split(/(\*\*.*?\*\*|`.*?`)/g).map((segment, segIdx) => {
                              if (segment.startsWith('**') && segment.endsWith('**')) {
                                return <strong key={segIdx}>{segment.slice(2, -2)}</strong>;
                              }
                              if (segment.startsWith('`') && segment.endsWith('`')) {
                                return (
                                  <code key={segIdx} className="bg-muted px-1.5 py-0.5 rounded text-xs">
                                    {segment.slice(1, -1)}
                                  </code>
                                );
                              }
                              return <span key={segIdx}>{segment}</span>;
                            })}
                          </p>
                        );
                      })}
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}

