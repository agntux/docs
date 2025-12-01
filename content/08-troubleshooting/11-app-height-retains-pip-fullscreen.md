### App Retains Previous Height When Returning from PiP/Fullscreen to Inline Mode

**Summary:** When an app transitions from Picture-in-Picture (PiP) or fullscreen mode back to inline mode, it retains the height from the previous mode instead of resetting to the appropriate inline height.

**Solution:**
1. Implement height reset logic when transitioning between display modes
2. Use the Apps SDK's display mode change events to detect mode transitions
3. Call `notifyIntrinsicHeight` with the correct height when returning to inline mode
4. Check if the host is properly handling height updates during mode transitions
5. Review the Apps SDK documentation for proper height management across display modes
6. Test mode transitions to ensure height is updated correctly

**Resources:**
- [GitHub Issue #97](https://github.com/openai/openai-apps-sdk-examples/issues/97)
- [OpenAI Apps SDK Documentation](https://platform.openai.com/docs/guides/apps-sdk)

**Reported by:** @gbmarcos
**Date Reported:** 2025-11-05
**Date Resolved:** Not yet resolved
**Contributors:** @gbmarcos

