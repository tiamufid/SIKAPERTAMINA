const Button = ({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  size = 'medium',
  isLoading = false, 
  disabled = false,
  className = '',
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary/30 shadow-lg hover:shadow-xl",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-300/30",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/30",
    ghost: "text-primary hover:bg-primary/10 focus:ring-primary/30"
  };
  
  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-4 text-lg",
    large: "px-8 py-5 text-xl"
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center">
          <svg 
            className="animate-spin -ml-1 mr-3 h-5 w-5" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Memproses...
        </div>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
