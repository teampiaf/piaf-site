import React from 'react';
import { ArrowRight } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
}
export function Button({
  children,
  variant = 'primary',
  icon = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all duration-300 ease-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4AA171]';
  const variants = {
    primary: 'bg-[#4AA171] text-white shadow-lg shadow-[#4AA171]/20 hover:shadow-xl hover:shadow-[#4AA171]/30 hover:bg-[#3d8c60]',
    secondary: 'bg-white text-[#4AA171] shadow-md hover:shadow-lg',
    outline: 'border-2 border-[#4AA171] text-[#4AA171] hover:bg-[#4AA171]/5'
  };
  return <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon && <ArrowRight className="ml-2 h-5 w-5" />}
    </button>;
}