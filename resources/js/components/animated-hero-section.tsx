import React from 'react'

interface Button {
  text: string
  href: string
  variant?: 'primary' | 'secondary'
  external?: boolean
  icon?: React.ReactNode
}

interface AnimatedHeroProps {
  title?: string
  subtitle?: string
  buttons?: Button[]
  className?: string
  gradientFrom?: string
  gradientVia?: string
  gradientTo?: string
}

const AnimatedHero: React.FC<AnimatedHeroProps> = ({ 
  title, 
  subtitle, 
  buttons = [], 
  className = "",
  gradientFrom = "emerald-500",
  gradientVia = "emerald-600", 
  gradientTo = "emerald-700"
}) => {
  return (
    <section className={`relative pt-32 pb-16 bg-gradient-to-tr from-${gradientFrom} via-${gradientVia} to-${gradientTo} overflow-hidden ${className}`}>
      {/* Animated Background Rays */}
      <div className="absolute inset-0">
        {/* Primary rays */}
        <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-white/80 via-white to-transparent transform skew-x-6 animate-pulse"></div>
        <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-white/70 via-white/10 to-transparent transform -skew-x-12 animation-delay-500"></div>
        <div className="absolute top-0 left-3/4 w-0.5 h-full bg-gradient-to-b from-white/20 via-white/10 to-transparent transform -skew-x-12 animate-pulse animation-delay-1000"></div>
        
        {/* Secondary rays */}
        <div className="absolute top-0 left-1/8 w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent transform -skew-x-12 animate-pulse animation-delay-200"></div>
        <div className="absolute top-0 left-3/8 w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent transform -skew-x-12 animate-pulse animation-delay-700"></div>
        <div className="absolute top-0 left-5/8 w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent transform -skew-x-12 animate-pulse animation-delay-300"></div>
        <div className="absolute top-0 left-7/8 w-px h-full bg-gradient-to-b from-white/10 via-white/5 to-transparent transform -skew-x-12 animate-pulse animation-delay-900"></div>
        
        {/* Moving light beams */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-bounce animation-delay-300"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/3 rounded-full blur-xl animate-bounce animation-delay-600"></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-white/4 rounded-full blur-xl animate-bounce animation-delay-900"></div>
        </div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:32px_32px] animate-pulse"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        {title && (
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-in-up">
            {title}
          </h1>
        )}
        
        {subtitle && (
          <p className="text-white mt-6 max-w-3xl mx-auto text-lg md:text-xl animate-fade-in-up animation-delay-300">
            {subtitle}
          </p>
        )}
        
        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up animation-delay-600">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold transition-all duration-200 ${
                  button.variant === 'secondary' 
                    ? 'bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 backdrop-blur-sm' 
                    : 'bg-white text-emerald-600 hover:bg-gray-50 shadow-lg hover:shadow-xl'
                }`}
                {...(button.external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                {button.text}
                {button.icon && <span className="ml-2">{button.icon}</span>}
              </a>
            ))}
          </div>
        )}
      </div>
      
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        
        .animation-delay-900 {
          animation-delay: 0.9s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  )
}

export default AnimatedHero