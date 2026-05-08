export default function Card({ children, className = '', hover = false, dark = false, ...props }) {
  const baseClasses = 'rounded-xl transition-all duration-500 overflow-hidden'
  const hoverClasses = hover ? 'hover-lift cursor-pointer hover:shadow-2xl hover:scale-105' : ''
  const themeClasses = dark ? 'card-dark' : 'card-light'

  return (
    <div className={`${baseClasses} ${hoverClasses} ${themeClasses} ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}

export function CardBody({ children, className = '' }) {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`p-6 pt-0 ${className}`}>
      {children}
    </div>
  )
}
