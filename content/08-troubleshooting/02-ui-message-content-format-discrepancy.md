### ui/message Content Format Discrepancy

**Summary:** The `@modelcontextprotocol/ext-apps` SDK sends `ui/message` requests with `content` as an array, but SEP-1865 specifies it as a single object. This causes hosts implementing strictly per SEP-1865 to fail when extracting text from SDK-generated `ui/message` requests.

**Solution:**
1. For app developers: Be aware that the SDK currently sends content as an array: `content: [{ type: "text", text: "..." }]`
2. For host developers: Handle both formats (array and object) until the SDK is updated to match the specification
3. Check the SDK version and monitor for updates that align with SEP-1865
4. As a workaround, hosts can check if content is an array and extract the first element if needed

**Resources:**
- [GitHub Issue #48](https://github.com/modelcontextprotocol/ext-apps/issues/48)
- [SEP-1865 Specification](https://github.com/modelcontextprotocol/ext-apps/blob/main/specification/draft/apps.mdx)

**Reported by:** @chelojimenez
**Date Reported:** 2025-11-27
**Date Resolved:** Not yet resolved
**Contributors:** @chelojimenez

