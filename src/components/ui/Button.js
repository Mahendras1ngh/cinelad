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
    primary: 'electric-gradient hover:scale-105 text-white focus:ring-brand-electric shadow-lg hover:shadow-2xl hover:rotate-1 transition-all duration-300',
    secondary: 'purple-gradient hover:scale-105 text-white focus:ring-brand-purple shadow-lg hover:shadow-2xl hover:-rotate-1 transition-all duration-300',
    accent: 'orange-gradient hover:scale-105 text-white focus:ring-brand-neon shadow-lg hover:shadow-2xl hover:rotate-1 transition-all duration-300',
    outline: 'border-2 border-brand-electric text-brand-electric hover:electric-gradient hover:text-white hover:scale-105 focus:ring-brand-electric glass-effect hover:-rotate-1 transition-all duration-300'
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}