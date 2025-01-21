import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  color?: string;
  label?: string;
  placeholder?: string;
  style?: React.CSSProperties;
  width?: string;
};

const PortfolioInput = ({
  type,
  name,
  label,
  placeholder,
  color,
  style,
  width = "100%",
}: TInputProps) => {
  return (
    <div style={{ marginBottom: "7px", ...style }}>
      <p className="block text-sm font-medium text-gray-100" style={{ marginBottom: "5px", color }}>{label ? label : null}</p>
      <Controller
        name={name}
        render={({ field }) => (
          <input
            className="w-full px-4 py-2 mt-1 border  rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-[#262A2C]"
            style={{ width }}
            type={type}
            id={name}
            placeholder={placeholder}
            {...field}
          />
        )}
      />
    </div>
  );
};

export default PortfolioInput;
