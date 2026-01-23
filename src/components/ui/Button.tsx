// src/components/ui/Button.tsx
import React from "react";
import { Link } from "react-router-dom";

type BaseProps = {
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never;
    href?: never;
  };

type ButtonAsLink = BaseProps & {
  to: string;            // route interne
  href?: never;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonAsAnchor = BaseProps & {
  href: string;          // lien externe
  to?: never;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type Props = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export function Button(props: Props) {
  const { className = "", children, ...rest } = props as any;

  const classes =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all " +
    className;

  // ✅ route interne (React Router)
  if ("to" in props && props.to) {
    const { to, ...linkProps } = rest;
    return (
      <Link to={to} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  // ✅ lien externe (ou simple <a>)
  if ("href" in props && props.href) {
    const { href, ...aProps } = rest;
    return (
      <a href={href} className={classes} {...aProps}>
        {children}
      </a>
    );
  }

  // ✅ vrai bouton
  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
