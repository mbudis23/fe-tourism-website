type PProps = {
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

export default function P({
  children,
  className,
  bold = "font-normal",
}: PProps) {
  return <h1 className={`text-[16px] ${bold} ${className}`}>{children}</h1>;
}
