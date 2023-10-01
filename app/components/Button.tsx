// components/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
