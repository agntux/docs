# Troubleshooting

This section provides solutions to common issues encountered when building ChatGPT Apps and MCP Apps. Each issue includes a summary, links to relevant resources, and information about contributors who helped resolve it.

## Issue Template

When adding new troubleshooting entries, use the following format:

```markdown
### [Issue Title]

**Summary:** Brief description of the problem and its symptoms.

**Solution:** Step-by-step solution or workaround.

**Resources:**
- [Link to relevant documentation](URL)
- [Link to GitHub issue or discussion](URL)
- [Link to Stack Overflow or forum post](URL)

**Reported by:** @username (if available)
**Date Reported:** YYYY-MM-DD (if available)
**Date Resolved:** YYYY-MM-DD (if available)
**Contributors:** @username1, @username2 (if available)
```

---

## Contributing Troubleshooting Issues

If you encounter an issue not listed here, please [create a pull request](https://github.com/agntux/docs/pulls) with:
- A clear issue title and summary
- Step-by-step solution or workaround
- Error messages, logs, and steps to reproduce (if applicable)
- Links to relevant documentation, GitHub issues, or discussions
- Information about who reported the issue and contributors (if available)
- Date reported (if available)
- Date resolved (if available)

---

*Note: This section is automatically updated by our AI agent as new issues are discovered and resolved. The troubleshooting entries are based on community reports, GitHub issues, and developer discussions.*



### No widget UI showing

**Summary:** I can't get any UI to show:

<img width="1624" height="1060" alt="Image" src="https://github.com/user-attachments/assets/89888772-0364-4752-8f23-a3db306487f6" />

I must be missing some step, but I checked all over and can't seem to find out what. I originally wrote my own app based on the examples and faced this issue but since decided to try a really basic "Hello World" demo to see if I could get _something_ to show, but no joy. 

Here is the code I added to the `pizzaz` example:

`src/hello_w

**Solution:** I can't get any UI to show:

<img width="1624" height="1060" alt="Image" src="https://github.com/user-attachments/assets/89888772-0364-4752-8f23-a3db306487f6" />

I must be missing some step, but I checked all over and can't seem to find out what. I originally wrote my own app based on the examples and faced this issue but since decided to try a really basic "Hello World" demo to see if I could get _something_ to show, but no joy. 

Here is the code I added to the `pizzaz` example:

`src/hello_world/index.jsx`
```jsx
import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="antialiased w-full text-black p-8 flex items-center justify-center min-h-[200px]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">
          HELLO WORLD
        </h1>
        <p className="text-lg text-gray-600">
          This is a simple hello world widget!
        </p>
      </div>
    </div>
  );
}

**Resources:**
- [GitHub Issue #53](https://github.com/openai/openai-apps-sdk-examples/issues/53)

**Reported by:** @tommy-holmes
