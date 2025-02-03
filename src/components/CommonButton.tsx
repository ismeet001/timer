import React from "react";

interface CommonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  title?: string;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  children,
  onClick,
  className,
  type = "button",
  disabled = false,
  title = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
};

export default CommonButton;
