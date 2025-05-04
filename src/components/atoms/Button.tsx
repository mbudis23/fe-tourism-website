"use client";
type Button = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  customPadding?: string;
  customFontSize?: string;
};

export default function Button({
  children,
  className,
  onClick = () => {
    alert("Button is clicked");
  },
  customPadding = "py-[12px] px-[24px]",
  customFontSize = "text-[16px]",
}: Button) {
  return (
    <button
      onClick={onClick}
      className={`font-bold min-w-[160px] duration-100 transition-all hover:translate-y-[4px] ease-in rounded-[4px] ${className} ${
        customPadding ? customPadding : "py-[12px] px-[24px]"
      } ${customFontSize ? customFontSize : "text-[16px]"}`}
    >
      {children}
    </button>
  );
}
