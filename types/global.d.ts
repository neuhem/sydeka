// Global type declarations for MathJax
declare global {
  interface Window {
    MathJax: {
      typesetPromise: (elements?: Element[]) => Promise<void>;
      tex: {
        inlineMath: string[][];
        displayMath: string[][];
        processEscapes: boolean;
        processEnvironments: boolean;
      };
      options: {
        skipHtmlTags: string[];
      };
    };
  }
}

export {};
