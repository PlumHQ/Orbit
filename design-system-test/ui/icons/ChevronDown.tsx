import React from 'react';
import '../../styles/output.css';
import { sizeMap } from './utils';

interface ChevronDownIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
  disabled?: boolean;
}

const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({
  color,
  className = `fill-interactive-icon-gray-muted`,
  size = 'large',
  disabled = false,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeMap[size]}
      height={sizeMap[size]}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M11.5258 15.1392C11.787 15.4003 12.2092 15.4003 12.4676 15.1392L17.8041 9.80536C18.0653 9.54423 18.0653 9.12197 17.8041 8.86361C17.543 8.60526 17.1208 8.60248 16.8624 8.86361L12.0009 13.7251L7.13656 8.86084C6.87542 8.5997 6.45317 8.5997 6.19481 8.86084C5.93645 9.12197 5.93368 9.54423 6.19481 9.80258L11.5258 15.1392Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronDownIcon;
