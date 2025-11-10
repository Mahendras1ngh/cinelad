export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href,
  onClick,
  ...props 
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'text-white hover:scale-105 focus:ring-red-500 shadow-lg hover:shadow-2xl hover:rotate-1 transition-all duration-300',
    secondary: 'text-white hover:scale-105 focus:ring-red-500 shadow-lg hover:shadow-2xl hover:-rotate-1 transition-all duration-300',
    accent: 'text-white hover:scale-105 focus:ring-red-500 shadow-lg hover:shadow-2xl hover:rotate-1 transition-all duration-300',
    outline: 'border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:scale-105 focus:ring-red-500 hover:-rotate-1 transition-all duration-300'
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const getButtonStyle = (variant) => {
    if (variant === 'primary' || variant === 'accent') {
      return {
        background: 'linear-gradient(45deg, #e31e25 0%, #ff4757 100%)',
        boxShadow: '0 0 15px rgba(227, 30, 37, 0.3)'
      }
    }
    return {}
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  if (href) {
    return (
      <a href={href} className={classes} style={getButtonStyle(variant)} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={classes} style={getButtonStyle(variant)} onClick={onClick} {...props}>
      {children}
    </button>
  )
}