"use client";

import * as runtime from "react/jsx-runtime";
import { useMDXComponents } from "./mdx-components";

interface MdxContentProps {
  code: string;
}

export function MdxContent({ code }: MdxContentProps) {
  const components = useMDXComponents();
  const fn = new Function(code);
  const result = fn({ ...runtime });
  const Component = result.default;
  return <Component components={components} />;
}
