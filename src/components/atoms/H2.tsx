type H2Props = {
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

export default function H2({
  children,
  className,
  bold = "font-bold",
}: H2Props) {
  return <h1 className={`text-[36px] ${bold} ${className}`}>{children}</h1>;
}
