import React from 'react';

interface WhatsAppIconProps {
  className?: string;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ className = "w-4 h-4" }) => {
  return (
    <img 
      src="https://img.icons8.com/material-outlined/96/whatsapp.png" 
      alt="WhatsApp" 
      className={`${className} filter brightness-0 invert`}
    />
  );
};