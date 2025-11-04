import React from 'react';

const Copyright: React.FC = () => {
  const links = [
    { text: 'Privacy notice', href: '/privacy-notice' },
    { text: 'Cookies policy', href: '/cookies-policy' },
    { text: 'Terms of use', href: '/terms-of-use' },
    { text: 'Licences and certifications', href: '/licences-certifications' },
    { text: 'Bank disclosures', href: '/bank-disclosures' },
    { text: 'Reviews and testimonials', href: '/reviews-testimonials' },
  ];

  return (
    <div className="flex items-center justify-between flex-wrap my-5">
      <p className="font-caption-small text-[#424443]">
        © 2025 WorthyFX Tech LLC. All right reserved
      </p>
      
      <nav className="flex items-center gap-6 flex-wrap">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="font-caption-small text-[#424443] hover:opacity-80 transition-opacity"
          >
            {link.text}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Copyright;