/**
 * Web Audio API synthesized ambient rainforest soundscape.
 * Generates organic sounds of rainfall, tropical stream, and nocturnal forest insects.
 * Completely self-contained with no external dependencies or audio file requests.
 */

class RainforestSoundscape {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private rainNode: AudioNode | null = null;
  private cricketInterval: number | null = null;
  private masterGain: GainNode | null = null;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public start() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // 1. Soft Tropical Rain / River Stream generator (Pink noise with bandpass)
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(950, this.ctx.currentTime);

      const rainGain = this.ctx.createGain();
      rainGain.gain.setValueAtTime(0.5, this.ctx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(rainGain);
      rainGain.connect(this.masterGain);
      whiteNoise.start();
      this.rainNode = whiteNoise;

      // 2. Chirping forest sounds
      this.cricketInterval = window.setInterval(() => {
        if (!this.ctx || !this.isPlaying || !this.masterGain) return;
        this.playCicadaChirp();
      }, 3500);

      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  private playCicadaChirp() {
    if (!this.ctx || !this.masterGain) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      // Chirp frequency around 4500Hz typical for rainforest katydids
      osc.type = 'sine';
      osc.frequency.setValueAtTime(4200 + Math.random() * 600, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.4);
    } catch {
      // Audio node cleanup
    }
  }

  public stop() {
    try {
      if (this.cricketInterval) {
        clearInterval(this.cricketInterval);
        this.cricketInterval = null;
      }
      if (this.rainNode) {
        (this.rainNode as AudioBufferSourceNode).stop();
        this.rainNode = null;
      }
      if (this.ctx) {
        this.ctx.close();
        this.ctx = null;
      }
    } catch {
      // Silent catch
    }
    this.isPlaying = false;
  }
}

export const soundscape = new RainforestSoundscape();
