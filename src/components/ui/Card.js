export default function Card({ children, className = '', hover = false, ...props }) {
  const baseClasses = 'bg-white rounded-xl shadow-md overflow-hidden'
  const hoverClasses = hover ? 'card-hover cursor-pointer' : ''
  const classes = `${baseClasses} ${hoverClasses} ${className}`
  
  return (
    <div className={classes} {...props}>
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