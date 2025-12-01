### Jittery Scrolling in Fullscreen Mode on Mobile

**Summary:** On the ChatGPT mobile app, scrolling in fullscreen mode is very jittery, requiring many swipes to navigate through content. This affects the user experience on mobile devices.

**Solution:**
1. Check if the issue is specific to fullscreen mode or occurs in other display modes
2. Review your app's CSS for overflow and scrolling properties
3. Ensure proper touch event handling for mobile devices
4. Test scrolling performance with different content sizes
5. Check if the issue is related to how the host renders fullscreen apps on mobile
6. Consider implementing custom scroll handling if needed
7. Test on actual mobile devices, not just browser dev tools
8. Monitor for updates to the Apps SDK that may address mobile scrolling issues

**Resources:**
- [GitHub Issue #111](https://github.com/openai/openai-apps-sdk-examples/issues/111)
- [OpenAI Apps SDK Documentation](https://platform.openai.com/docs/guides/apps-sdk)

**Reported by:** @samhirtarif
**Date Reported:** 2025-11-12
**Date Resolved:** Not yet resolved
**Contributors:** @samhirtarif, @trylaarsdam

