import React from 'react';

/**
 * Reusable Skeleton loader primitive with shimmer and pulse animation.
 * Highly visible, smooth, and accessible.
 */
export default function Skeleton({
  variant = 'text',
  className = '',
  dark = false,
  animate = true,
  ...props
}) {
  const variantClasses = {
    text: 'h-4 w-full rounded-md',
    circle: 'rounded-full aspect-square',
    rect: 'rounded-2xl',
    pill: 'rounded-full'
  };

  const baseBg = dark ? 'bg-[#0B5678]' : 'bg-slate-200';
  const shimmerClass = dark ? 'skeleton-shimmer-dark' : 'skeleton-shimmer';
  const pulseClass = animate ? 'animate-pulse' : '';

  return (
    <div
      className={`
        overflow-hidden
        ${variantClasses[variant] || ''}
        ${baseBg}
        ${animate ? shimmerClass : ''}
        ${pulseClass}
        ${className}
      `}
      aria-hidden="true"
      {...props}
    />
  );
}
