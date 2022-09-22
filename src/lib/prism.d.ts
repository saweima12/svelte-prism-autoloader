export type HighlightCallback = (element: Element) => void;

export interface Prism {
    languages: Languages;
    plugins: Record<string, any>;
    hooks: Record<string, any>;
    disableWorkerMessageHandler: boolean | undefined;
    manual: boolean | undefined;
    highlightAll(async?: boolean, callback?: HighlightCallback): void;
    highlightAllUnder(container: ParentNode, async?: boolean, callback?: HighlightCallback): void;
    highlightElement(element: Element, async?: boolean, callback?: HighlightCallback): void;
    highlight(text: string, grammar: Grammar, language: string): string;
    tokenize(text: string, grammar: Grammar): Array<string | Token>;
}