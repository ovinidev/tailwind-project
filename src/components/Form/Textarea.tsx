import { ComponentProps } from "react";

interface TextAreaProps extends ComponentProps<"textarea"> {}

export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      className="p min-h-[120px] w-full resize-none rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  );
}