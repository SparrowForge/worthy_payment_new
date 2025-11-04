import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button, ButtonShapeVariant, ButtonColorVariant, ButtonSizeVariant, ButtonChevronVariant } from '../Buttons/Button';

interface NavItem {
  label: string;
  href?: string;
  children?: string[];
  
}

const navItems: NavItem[] = [
  {
    label: 'Products',
    children: ['Payment Gateway', 'POS Systems', 'Virtual Terminal']
  },
  {
    label: 'Solutions',
    children: ['E-commerce', 'Retail', 'Mobile']
  },
  
  {    label: 'Developers',
    children: []
  },
  {
    label: 'Resources',
    children: []
  },
  {
    label: 'Partners',
    children: []
  },
  {
    label: 'Pricing',
    href: '/pricing'
  },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();


  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="layout-content bg-white shadow-md mt-md rounded-[20px] border border-white">
        <div className="flex items-center h-[75px] px-4 xl:px-6 gap-4 justify-between">
          {/* Logo + Mobile Button Wrapper */}
          <div className="flex items-center justify-between w-full xl:w-auto">
            {/* Logo */}
            <Link to="/" className="font-body-medium pl-sm">
              Worthy Payments
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden text-gray-700 hover:text-black"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Center Column (Navigation Items) */}
          <div
            ref={dropdownRef}
            className="hidden xl:flex flex-1 justify-center items-center gap-2 lg:px-2"
          >
            {navItems.map((item) => {
              return (
                <div key={item.label} className="relative">
                  <Button 
                    onClick={() => toggleDropdown(item.label)}
                    size={ButtonSizeVariant.big}
                    shape={ButtonShapeVariant.default}
                    colorVariant={ButtonColorVariant.menu}
                    content={item.label}
                    chevronVariant={
                      !item.children
                        ? undefined
                        : mobileOpen
                        ? ButtonChevronVariant.ChevronDown
                        : ButtonChevronVariant.ChevronRight
                    }
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column (Sign In + Contact) */}
          <div className="hidden xl:flex justify-end items-center gap-2 lg:px-3">
            <Button
              link="/signin"
              shape={ButtonShapeVariant.default}
              size={ButtonSizeVariant.long}
              colorVariant={ButtonColorVariant.transparentSecondary}
              content="Sign In"
              chevronVariant={ButtonChevronVariant.ChevronRight}
            />
            <div className="whitespace-nowrap">
              <Button 
                link="/contact"
                shape={ButtonShapeVariant.default}
                size={ButtonSizeVariant.long}
                colorVariant={ButtonColorVariant.primary}
                content="Contact Us"
                chevronVariant={ButtonChevronVariant.ChevronRight}
              />
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;