type H1Props = {
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

export default function H1({
  children,
  className,
  bold = "font-black",
}: H1Props) {
  return <h1 className={`text-[48px] ${bold} ${className}`}>{children}</h1>;
}
