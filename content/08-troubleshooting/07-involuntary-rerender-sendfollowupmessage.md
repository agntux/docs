### Involuntary Re-rendering of Widget When Using sendFollowUpMessage

**Summary:** When calling `sendFollowUpMessage`, the widget unexpectedly re-renders, causing UI flickering and potential loss of user input or state.

**Solution:**
1. Check if the re-render is caused by state changes triggered by the follow-up message
2. Implement proper state management to prevent unnecessary re-renders
3. Use React's `useMemo` or `useCallback` hooks to stabilize references if using React
4. Review the component lifecycle and ensure `sendFollowUpMessage` isn't triggering state updates
5. Check if the host is re-rendering the widget in response to the follow-up message
6. Consider debouncing or throttling follow-up message calls if they're being called frequently

**Resources:**
- [GitHub Issue #129](https://github.com/openai/openai-apps-sdk-examples/issues/129)
- [OpenAI Apps SDK Documentation](https://platform.openai.com/docs/guides/apps-sdk)

**Reported by:** @diegoquiroz-jpg
**Date Reported:** 2025-11-24
**Date Resolved:** Not yet resolved
**Contributors:** @diegoquiroz-jpg

