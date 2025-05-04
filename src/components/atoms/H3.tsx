type H3Props = {
  children: React.ReactNode;
  className?: string;
  bold?:
    | "font-black"
    | "font-bold"
    | "font-semibold"
    | "font-medium"
    | "font-normal"
    | "font-light"
    | "font-thin";
};

export default function H3({
  children,
  className,
  bold = "font-medium",
}: H3Props) {
  return <h1 className={`text-[24px] ${bold} ${className}`}>{children}</h1>;
}
