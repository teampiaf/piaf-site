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
  primary:
    'bg-[#4AA171]/85 text-white backdrop-blur-md border border-white/25 shadow-lg shadow-black/10 hover:bg-[#4AA171]/95 hover:shadow-xl hover:shadow-black/15',
  secondary:
    'bg-white/55 text-[#4AA171] backdrop-blur-md border border-white/40 shadow-md shadow-black/10 hover:bg-white/65 hover:shadow-lg hover:shadow-black/12',
  outline:
    'bg-white/10 text-[#4AA171] backdrop-blur-md border border-white/25 shadow-sm shadow-black/5 hover:bg-white/15'
};

  return <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon && <ArrowRight className="ml-2 h-5 w-5" />}
    </button>;
}