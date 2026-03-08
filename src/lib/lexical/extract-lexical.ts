type LexicalNode = {
  text?: string;
  children?: LexicalNode[];
};

type LexicalValue = {
  root?: {
    children?: LexicalNode[];
  };
};

function walkNodes(nodes: LexicalNode[] = []): string {
  return nodes
    .map((node) => {
      const ownText = typeof node.text === "string" ? node.text : "";
      const childrenText = Array.isArray(node.children)
        ? walkNodes(node.children)
        : "";
      return `${ownText} ${childrenText}`.trim();
    })
    .filter(Boolean)
    .join(" ");
}

export function extractLexicalText(value?: LexicalValue | null): string {
  if (!value?.root?.children) {
    return "";
  }

  return walkNodes(value.root.children).replace(/\s+/g, " ").trim();
}
