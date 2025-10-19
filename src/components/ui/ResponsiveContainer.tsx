import React from 'react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  layout?: 'grid' | 'flex';
  columns?: 1 | 2 | 3 | 4 | 'auto';
  direction?: 'col' | 'row';
  gap?: 4 | 6 | 8;
  className?: string;
  style?: React.CSSProperties;
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  layout = 'grid',
  columns = 'auto',
  direction = 'col',
  gap = 6,
  className = '',
  style
}) => {
  // Build responsive classes based on props
  const getLayoutClasses = () => {
    if (layout === 'grid') {
      const columnClass = columns === 'auto' ? 'cols-auto' : `cols-${columns}`;
      const gapClass = `gap-${gap}`;
      return `responsive-grid ${columnClass} ${gapClass}`;
    } else {
      const directionClass = direction === 'col' ? 'col' : 'row';
      const gapClass = `gap-${gap}`;
      return `responsive-flex ${directionClass} ${gapClass}`;
    }
  };

  return (
    <div 
      className={`${getLayoutClasses()} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;
