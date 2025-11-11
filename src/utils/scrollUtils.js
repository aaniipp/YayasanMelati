// Utility functions for smooth scrolling
export const smoothScrollTo = (elementId, headerOffset = 80) => {
  const element = document.querySelector(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const handleNavClick = (e, href, setMobileMenuOpen) => {
  e.preventDefault();
  smoothScrollTo(href);
  if (setMobileMenuOpen) {
    setMobileMenuOpen(false);
  }
};