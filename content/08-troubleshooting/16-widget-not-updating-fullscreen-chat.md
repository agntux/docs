### Widget Not Updating in Fullscreen Mode During Chat

**Summary:** When in fullscreen mode, follow-up questions that should update the widget or display a new widget instead create an inline version, leaving the fullscreen widget unchanged. Users must exit fullscreen to see new results, limiting interactive chat experiences.

**Solution:**
1. Be aware that widget updates in fullscreen mode can be unreliable
2. Consider using a "universal" widget that shows different components based on structured output (though this may be an anti-pattern)
3. Even returning the same widget URL doesn't always update predictably
4. Monitor for SDK updates that improve fullscreen widget update behavior
5. As a workaround, implement custom state management to handle widget transitions
6. Consider informing users they may need to exit fullscreen to see updates
7. Check if the issue is specific to certain widget types or configurations

**Resources:**
- [GitHub Issue #108](https://github.com/openai/openai-apps-sdk-examples/issues/108)
- [OpenAI Apps SDK Documentation](https://platform.openai.com/docs/guides/apps-sdk)

**Reported by:** @dustfire
**Date Reported:** 2025-11-11
**Date Resolved:** Not yet resolved
**Contributors:** @dustfire, @henritoivar

