type InputTextProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  className?: string;
};

export default function InputText({
  placeholder,
  value,
  onChange,
  type = "text",
  className,
}: InputTextProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full outline-none p-[12px] border-[#0D9488] border-[1px] transition-all  duration-100 ease-in rounded-[4px] ${className}`}
    />
  );
}
