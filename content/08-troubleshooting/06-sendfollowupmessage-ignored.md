### SendFollowUpMessage Calls Being Ignored

**Summary:** Calls to `sendFollowUpMessage` are being ignored by the host, causing follow-up messages not to appear in the conversation.

**Solution:**
1. Verify you're calling `sendFollowUpMessage` at the correct time in the app lifecycle
2. Check that the message format matches the expected structure
3. Ensure the app is in the correct state (e.g., not in a loading or error state)
4. Review the Apps SDK documentation for proper usage of `sendFollowUpMessage`
5. Check browser console for any errors that might indicate why the message is being ignored
6. Verify the host supports follow-up messages

**Resources:**
- [GitHub Issue #126](https://github.com/openai/openai-apps-sdk-examples/issues/126)
- [OpenAI Apps SDK Documentation](https://platform.openai.com/docs/guides/apps-sdk)

**Reported by:** @EAntropov-tofu
**Date Reported:** 2025-11-19
**Date Resolved:** Not yet resolved
**Contributors:** @EAntropov-tofu

