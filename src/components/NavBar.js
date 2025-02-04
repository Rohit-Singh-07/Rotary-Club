import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Menu, X, ChevronDown } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Sun className="h-8 w-8 text-yellow-500" />
            <h1 className="ml-2 sm:text-2xl font-serif text-gray-800">Rtn Kaushlendra Bhadauria Adv</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            
            {/* Gallery Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-600 hover:text-yellow-500 font-medium transition-colors"
              >
                Gallery <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link
                      to="/gallery"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-yellow-500"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Rotary Club Gallery
                    </Link>
                    <Link
                      to="/redcross-gallery"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-yellow-500"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Red Cross Gallery
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/admin" className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors">
              Admin Panel
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <div className="px-3 py-2">
              <div className="font-medium text-gray-600">Gallery</div>
              <div className="pl-4 space-y-1 mt-1">
                <MobileNavLink to="/gallery" onClick={() => setIsOpen(false)}>Main Gallery</MobileNavLink>
                <MobileNavLink to="/redcross-gallery" onClick={() => setIsOpen(false)}>Red Cross Gallery</MobileNavLink>
              </div>
            </div>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact Us</MobileNavLink>
            <MobileNavLink to="/admin" onClick={() => setIsOpen(false)}>Admin Panel</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ children, ...props }) => (
  <Link
    {...props}
    className={`text-gray-600 hover:text-yellow-500 font-medium transition-colors ${props.className || ''}`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ children, onClick, ...props }) => (
  <Link
    {...props}
    onClick={onClick}
    className="block px-3 py-2 text-gray-600 hover:text-yellow-500 hover:bg-gray-50 rounded-md font-medium"
  >
    {children}
  </Link>
);

export default NavBar;