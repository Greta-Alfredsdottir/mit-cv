import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Palette, Printer, Menu, X } from 'lucide-react';

const Header = ({ theme, setTheme, accent, setAccent, name = "Alex Rivera", hasPublications = false }) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const panelRef = useRef(null);

  const colors = [
    { name: 'crimson', value: '#a31f34', label: 'MIT Crimson' },
    { name: 'indigo', value: '#6366f1', label: 'Space Indigo' },
    { name: 'emerald', value: '#10b981', label: 'Forest Emerald' },
    { name: 'amber', value: '#f59e0b', label: 'Solar Amber' },
    { name: 'violet', value: '#a855f7', label: 'Neon Violet' }
  ];

  // Close customizer on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setShowColorPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'timeline', 'skills', 'projects', 'research', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const nameParts = name.split(' ');
  const firstLogoName = nameParts[0] || 'Alex';
  const secondLogoName = nameParts[1] || 'Rivera';

  const navLinks = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#timeline', label: 'Experience', id: 'timeline' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#research', label: hasPublications ? 'Publications' : 'Certifications', id: 'research' },
    { href: '#contact', label: 'Contact', id: 'contact' }
  ];

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#home" className="logo">
          {firstLogoName}<span>{secondLogoName}</span>
        </a>

        {/* Desktop Nav */}
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Controls */}
        <div className="controls">
          {/* Print PDF Button */}
          <button
            onClick={handlePrint}
            className="icon-btn"
            title="Print Resume / Save PDF"
            aria-label="Print PDF"
          >
            <Printer size={18} />
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="icon-btn"
            title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Accent Color customizer */}
          <div className="theme-panel-toggle" ref={panelRef}>
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="icon-btn"
              title="Customize Accent Color"
              aria-label="Accent Palette"
            >
              <Palette size={18} />
            </button>

            {showColorPicker && (
              <div className="customizer card-glass">
                <h4>Accent Theme</h4>
                <div className="color-picker">
                  {colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setAccent(c.name)}
                      className={`color-dot ${accent === c.name ? 'active' : ''}`}
                      style={{ backgroundColor: c.value }}
                      title={c.label}
                      aria-label={`Select ${c.label} Accent`}
                    />
                  ))}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Active Accent: <strong style={{ color: 'var(--accent-color)' }}>{accent}</strong>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="icon-btn"
            style={{ display: window.innerWidth < 768 ? 'flex' : 'none' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div
          className="card-glass"
          style={{
            position: 'absolute',
            top: '4.5rem',
            left: '1rem',
            right: '1rem',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            zIndex: 99
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
