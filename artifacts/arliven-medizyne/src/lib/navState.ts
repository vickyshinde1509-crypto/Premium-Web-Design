// Shared module-level flag — read by FadeIn at component mount time
// Set true during back navigation so FadeIn skips re-animation
export let skipFadeAnimations = false;
export function setSkipFadeAnimations(v: boolean) { skipFadeAnimations = v; }
