import React from 'react';

const Skeleton = ({ className }) => {
  return (
    <div 
      className={`animate-pulse bg-white/10 rounded-2xl ${className}`}
      style={{
        backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
        backgroundSize: '200% 100%',
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, shimmer 2s infinite'
      }}
    />
  );
};

export default Skeleton;
