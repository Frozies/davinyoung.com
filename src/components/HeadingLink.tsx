import { type ReactNode } from "react";

interface HeadingLinkProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  id?: string;
  children?: ReactNode;
}

export default function HeadingLink({ as: Tag, id, children }: HeadingLinkProps) {
  return (
    <Tag id={id} className="group scroll-mt-24">
      {children}
      {id && (
        <a
          href={`#${id}`}
          className="ml-2 text-muted opacity-0 group-hover:opacity-100 transition-opacity no-underline"
          aria-label={`Link to this section`}
        >
          #
        </a>
      )}
    </Tag>
  );
}
