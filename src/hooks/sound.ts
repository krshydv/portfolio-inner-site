// @ts-ignore
import clickSoundSrc from '../assets/audio/click.wav';

let clickAudio: HTMLAudioElement | null = null;

function getClickAudio(): HTMLAudioElement {
    if (!clickAudio) {
        clickAudio = new Audio(clickSoundSrc);
        clickAudio.volume = 0.35;
    }
    return clickAudio;
}

export function playClickSound() {
    const audio = getClickAudio();
    try {
        audio.currentTime = 0;
        const playPromise = audio.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {
                // Ignore autoplay-policy rejections (e.g. no user gesture yet)
            });
        }
    } catch (e) {
        // Ignore - never let a sound failure break the interaction
    }
}
