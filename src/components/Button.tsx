import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border h-10 rounded-2xl px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-blue-200 text-neutral-950  border-blue-400" ,
      secondary: "bg-blue-600 text-neutral-950  border-blue-400"
    },
    size : {
      sm: "h-6"
    },
  },
});


export default function Button(
    props: {
      variant: "primary" | "secondary";
      size?: "sm";
    } & ButtonHTMLAttributes<HTMLButtonElement>
  ) {
    const { variant, className, size, ...otherProps } = props;
  
    return (
      <button
        className={`${classes({ variant, size })} ${className}`}
        {...otherProps}
        
      />
    );
  }