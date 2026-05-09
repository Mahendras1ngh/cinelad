export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-red-primary'

  const variants = {
    primary: 'bg-accent-red-primary hover:bg-accent-red-dark text-white hover:scale-110 hover:shadow-red-glow transform transition-all duration-300',
    secondary: 'bg-dark-secondary hover:bg-dark-tertiary text-white border border-white/10 hover:border-accent-red-primary hover:scale-110 transform transition-all duration-300',
    accent: 'bg-gradient-to-r from-accent-red-primary to-accent-red-light text-white hover:scale-110 hover:shadow-red-glow-strong transform transition-all duration-300',
    outline: 'border-2 border-accent-red-primary text-white hover:bg-accent-red-primary hover:text-white hover:scale-110 transform transition-all duration-300',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-dark-primary hover:scale-110 transform transition-all duration-300'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const classes = `${baseClasses} ${variants[variant] || variants.primary} ${sizes[size]} ${className}`

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