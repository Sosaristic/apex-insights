import { useState } from "react";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
export function TextField({
  type,
  startIcon,
  placeholder,
  label,
  onChange,
  value,
  name,
  id,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleInputType = (type) => {
    if (type != "password") return type;

    if (showPassword) return "text";
    if (!showPassword) return "password";
  };
  return (
    <div className="flex flex-col font-inter">
      <label htmlFor={id} className="font-[600]">
        {label}*
      </label>
      <div
        className={`flex group gap-1 px-1 items-center relative h-[3rem] border-2 border-stone-700 focus-within:border-primary ${
          error && "focus-within:border-red-600"
        } transition-colors duration-200 rounded-md pr-2 overflow-hidden`}
      >
        <span
          className={`text-[2rem] group-focus-within:text-primary ${
            error && "group-focus-within:text-red-600"
          }`}
        >
          {startIcon}
        </span>
        <input
          type={handleInputType(type)}
          required
          id={id}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete="off"
          className="h-full w-full outline-none text-[1.2rem]"
        />
        {type == "password" && (
          <button
            type="button"
            className={`text-[2rem] group-focus-within:text-primary ${
              error && "group-focus-within:text-red-600"
            }`}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
          </button>
        )}
      </div>
      <p
        className={`text-red-500 min-h-4 text-sm font-inter ${error ? "visible" : "invisible"} `}
      >
        {error}
      </p>
    </div>
  );
}
