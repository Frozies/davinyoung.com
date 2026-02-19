import { type ReactNode, type ReactElement, Children, isValidElement } from "react";
import CopyButton from "./CopyButton";

function extractText(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (!isValidElement(node)) return "";
  const el = node as ReactElement<{ children?: ReactNode }>;
  return Children.toArray(el.props.children).map(extractText).join("");
}

export default function CodeBlock(props: React.ComponentProps<"pre">) {
  const text = extractText(props.children).replace(/\n$/, "");

  return (
    <div className="relative group">
      <CopyButton text={text} />
      <pre {...props} />
    </div>
  );
}
