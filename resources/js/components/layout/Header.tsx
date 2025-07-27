import { useState, useEffect } from "react"
import { ChevronDown, Menu, X, ExternalLink } from "lucide-react"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "/academics", label: "Academics" },
    { href: "/driving-school", label: "Driving School" },
    { href: "/admissions", label: "Admissions" },
    { href: "/team", label: "Team" },
    { href: "/careers", label: "Careers" }
  ]

  const studentDropdown = [
    { href: "/student-life", label: "Student Life" },
    { href: "/alumni", label: "Alumni" }
  ]

  const portalDropdown = [
    { href: "https://portal.trendyvocationaltrainingcentre.com", label: "Student Portal", external: true },
    { href: "https://portal.trendyvocationaltrainingcentre.com/", label: "Staff Portal", external: true }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-green-100/80 backdrop-blur-lg shadow-xl' 
        : 'bg-green-100/80 backdrop-blur-sm '
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src="/images/trendy-logo.webp"
                  alt="Trendy Vocational Logo"
                  className="h-10 w-10 lg:h-12 lg:w-12 rounded-xl shadow-sm transition-transform group-hover:scale-105"
                />
              </div>
              <div className="">
                <h1 className="text-xl font-bold text-emerald-950 group-hover:text-emerald-600 transition-colors">
                  Trendy Vocational
                </h1>
                <p className=" text-md text-gray-600 -mt-1 group-hover:text-emerald-700">Training Centre</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
              >
                {item.label}
              </a>
            ))}

            {/* Students Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200">
                Students
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full z-10 left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                {studentDropdown.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 first:rounded-t-xl last:rounded-b-xl transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Portal Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200">
                Portal
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full z-10 left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                {portalDropdown.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 first:rounded-t-xl last:rounded-b-xl transition-colors"
                    {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {item.label}
                    {item.external && <ExternalLink className="h-3 w-3 ml-2" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <a
              href="https://portal.trendyvocationaltrainingcentre.com/admissions/apply"
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-full hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-200 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Apply Now
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              aria-label="Open mobile menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
        mobileMenuOpen ? 'visible' : ' invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
            <div className="flex items-center space-x-3">
              <img
                src="/images/trendy-logo.webp"
                alt="Trendy Vocational Logo"
                className="h-8 w-8 rounded-lg"
              />
              <span className="font-semibold text-gray-900">Menu</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col py-3 px-6 space-y-2 overflow-y-auto bg-white">
            <a
              href="/"
              className="px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Students Section */}
            <div className="pt-2">
              <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Students</p>
              {studentDropdown.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Portal Section */}
            <div className="pt-2">
              <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Portal</p>
              {portalDropdown.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {item.label}
                  {item.external && <ExternalLink className="h-4 w-4" />}
                </a>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="pt-6 mt-6 border-t border-gray-200">
              <a
                href="https://portal.trendyvocationaltrainingcentre.com/admissions/apply"
                className="flex items-center justify-center w-full px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-600 to-blue-400/95 backdrop-blur py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 text-sm text-white">
          <a href="tel:+254793632888" className="flex items-center hover:text-gray-200 transition-colors">
            📞 +254 793 632 888
          </a>
          <span className="hidden sm:inline text-white/50">|</span>
          <a href="/careers" className="hover:text-gray-200 transition-colors">
            💼 Job Applications
          </a>
          <span className="hidden sm:inline text-white/50">|</span>
          <a href="https://portal.trendyvocationaltrainingcentre.com/admissions/apply" className="hover:text-gray-200 transition-colors" target="_blank" rel="noopener noreferrer" >
            🎓 Apply for Admission
          </a>
          <span className="hidden sm:inline text-white/50">|</span>
          <a href="https://portal.trendyvocationaltrainingcentre.com" className="hover:text-gray-200 transition-colors" target="_blank" rel="noopener noreferrer">
            👨‍🎓 Student Portal
          </a>
          <span className="hidden sm:inline text-white/50">|</span>
          <a href="https://portal.trendyvocationaltrainingcentre.com/" className="hover:text-gray-200 transition-colors" target="_blank" rel="noopener noreferrer">
             Staff Portal
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header