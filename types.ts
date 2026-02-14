export enum RewriteMode {
  STANDARD = 'Standard',
  DEEP_HUMANIZE = 'Deep Humanize',
  ACADEMIC_POLISH = 'Academic Polish'
}

export interface RewriterConfig {
  mode: RewriteMode;
  inputText: string;
}

export interface StreamResponseChunk {
  text: string;
  isComplete: boolean;
}