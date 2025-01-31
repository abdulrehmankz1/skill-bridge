import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react"; // For loading spinner
import { Slot } from "@radix-ui/react-slot"; // For asChild prop

// Define button variants using class-variance-authority (cva)
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-orange-50 text-absolute-white hover:bg-orange-45",
        secondary:
          "bg-absolute-white text-grey-15 hover:bg-white-90 border border-white-95",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90", // Destructive variant
      },
      size: {
        default: "py-3 px-6",
        sm: "py-3 px-3 rounded-md",
        lg: "py-[14px] px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Define props for the Button component
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean; // For asChild prop
  isLoading?: boolean; // For loading state
  icon?: React.ReactNode; // For icon
}

// Button Component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"; // Use Slot if asChild is true

    // If asChild is true, clone the child element and merge props
    if (asChild) {
      return (
        <Comp
          className={buttonVariants({ variant, size, className })}
          ref={ref}
          {...props}
        >
          {React.Children.only(children)}
        </Comp>
      );
    }

    // Default button behavior
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        disabled={isLoading || props.disabled} // Disable button when loading
        {...props}
      >
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> // Loading spinner
        ) : icon ? (
          <span className="mr-2">{icon}</span> // Icon
        ) : null}
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
