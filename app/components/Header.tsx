// components/Header.tsx
import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  user?: { name: string; email: string }; // Example user information
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* StreamPay Logo/Branding */}
        <Link href="/">
          <a className="text-white text-2xl font-bold">
            StreamPay™
          </a>
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link href="/">
            <a className="text-white">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-white">About</a>
          </Link>
          <Link href="/faq">
            <a className="text-white">FAQ</a>
          </Link>
        </nav>

        {/* User Account Information */}
        {user ? (
          <div className="text-white">
            Welcome, {user.name} | <a href="/logout">Logout</a>
          </div>
        ) : (
          <Link href="/login">
            <a className="text-white">Login</a>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
