import { Link } from "@inertiajs/react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h4 className="text-xl text-green-600 font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+254793632888" className="hover:text-green-800">
                  +254 793 632 888
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                <a href="mailto:trendyvocational@gmail.com" className="hover:text-green-800">
                  trendyvocational@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                Moi South Lake Road
                <br />
                Naivasha, Kenya
              </p>
              <p>
                <Link href="/contact" className="hover:text-green-800">
                  Contact form
                </Link>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl text-green-600 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-800">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-green-800">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/student-life" className="hover:text-green-800">
                  Student Life
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-green-800">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-green-800">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="hover:text-green-800">
                  Alumni
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-green-800">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xl text-green-600 font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/academics/ict" className="hover:text-green-800">
                  ICT
                </Link>
              </li>
              <li>
                <Link href="/academics/computer-packages" className="hover:text-green-800">
                  Computer Packages
                </Link>
              </li>
              <li>
                <Link href="/academics/graphic-design" className="hover:text-green-800">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link href="/academics/beauty-therapy" className="hover:text-green-800">
                  Beauty Therapy
                </Link>
              </li>
              <li>
                <Link href="/academics/building-construction" className="hover:text-green-800">
                  Building & Construction
                </Link>
              </li>
              <li>
                <Link href="/academics/catering" className="hover:text-green-800">
                  Catering
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl text-green-600 font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.tiktok.com/@trendyvocational"
                className="hover:text-green-800"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <span className="text-2xl">🎵</span>
              </a>
              <a
                href="https://facebook.com/"
                className="hover:text-green-800"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <span className="text-2xl">📘</span>
              </a>
              <a
                href="https://www.youtube.com/@TRENDYVOCATIONAL"
                className="hover:text-green-800"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <span className="text-2xl">📺</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Trendy Vocational Training Centre. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-green-800">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-green-800">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
