function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600",
    ghost: "bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 focus:ring-blue-500",
  };

  return (
    <button type={type} className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;