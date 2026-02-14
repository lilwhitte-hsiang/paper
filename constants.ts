import React from 'react';
import { RewriteMode } from './types';

export const SYSTEM_INSTRUCTION = `
Role: You are a professional academic editor and writing specialist. Your expertise lies in transforming AI-generated text into natural, authentic, and high-quality human academic writing. You understand the nuances of "perplexity" and "burstiness" in linguistics.

Task: Rewrite the provided text based on the user's selected mode.

General Constraints:
1. Maintain the original meaning accuracy; do not fabricate facts.
2. Avoid common AI tropes, repetitive transitions (e.g., "In conclusion", "delve into", "a testament to"), and overly uniform sentence structures.
3. Ensure the tone is objective, scholarly, and professional.
4. Output ONLY the rewritten text. Do not provide explanations, preambles, or markdown formatting like "**Rewritten Text:**".
`;

export const MODE_PROMPTS: Record<RewriteMode, string> = {
  [RewriteMode.STANDARD]: `
    Mode: Standard Rewrite.
    Goal: Balance readability with academic tone. Smooth out rough edges and make the flow natural.
  `,
  [RewriteMode.DEEP_HUMANIZE]: `
    Mode: Deep Humanize / Anti-AI Detection.
    Goal: Drastically lower AI detection scores. 
    Tactics: 
    - Use a mix of short, punchy sentences and complex, compound sentences (High Burstiness).
    - Use varied vocabulary that is precise but not overly obscure.
    - Break up predictable rhythmic patterns common in LLM outputs.
  `,
  [RewriteMode.ACADEMIC_POLISH]: `
    Mode: Academic Polish.
    Goal: Elevate the register to a publication-ready standard.
    Tactics:
    - Use sophisticated academic vocabulary.
    - Ensure precise terminology.
    - Focus on clarity, cohesion, and logical flow suited for journals.
  `
};

// Icons (Lucide-react style SVGs) using React.createElement to avoid JSX in .ts file
export const Icons = {
  Eraser: (props: React.SVGProps<SVGSVGElement>) => React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    },
    React.createElement("path", { d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" }),
    React.createElement("path", { d: "M22 21H7" }),
    React.createElement("path", { d: "m5 11 9 9" })
  ),
  Copy: (props: React.SVGProps<SVGSVGElement>) => React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    },
    React.createElement("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }),
    React.createElement("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  ),
  Check: (props: React.SVGProps<SVGSVGElement>) => React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    },
    React.createElement("path", { d: "M20 6 9 17l-5-5" })
  ),
  Sparkles: (props: React.SVGProps<SVGSVGElement>) => React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    },
    React.createElement("path", { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z" }),
    React.createElement("path", { d: "M5 3v4" }),
    React.createElement("path", { d: "M9 3v4" }),
    React.createElement("path", { d: "M3 9h4" }),
    React.createElement("path", { d: "M3 5h4" })
  ),
  Feather: (props: React.SVGProps<SVGSVGElement>) => React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    },
    React.createElement("path", { d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" }),
    React.createElement("line", { x1: "16", x2: "2", y1: "8", y2: "22" }),
    React.createElement("line", { x1: "17.5", x2: "9", y1: "15", y2: "15" })
  ),
  Github: (props: React.SVGProps<SVGSVGElement>) => React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    },
    React.createElement("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
    React.createElement("path", { d: "M9 18c-4.51 2-5-2-7-2" })
  ),
  Key: (props: React.SVGProps<SVGSVGElement>) => React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props
    },
    React.createElement("circle", { cx: "7.5", cy: "15.5", r: "5.5" }),
    React.createElement("path", { d: "m21 2-9.6 9.6" }),
    React.createElement("path", { d: "m15.5 7.5 3 3L22 7l-3-3" })
  )
};