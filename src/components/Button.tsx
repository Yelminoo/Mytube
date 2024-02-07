import React, { ComponentProps } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonStyle = cva([, "transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["hover:bg-gray-100"],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const classes = buttonStyle({ size: "icon" });

type ButtonProps = VariantProps<typeof buttonStyle> & ComponentProps<"button">;
function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyle({ variant, size }), className)}
    />
  );
}

export default Button;
