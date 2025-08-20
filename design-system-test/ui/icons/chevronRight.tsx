import React from 'react';
import '../../styles/output.css';
import { sizeMap } from './utils';

interface ChevronRightProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
  disabled?: boolean;
}

const ChevronRight: React.FC<ChevronRightProps> = ({
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
        d="M15.1392 11.5258C15.4003 11.787 15.4003 12.2092 15.1392 12.4676L9.80542 17.8041C9.54428 18.0653 9.12202 18.0653 8.86367 17.8041C8.60531 17.543 8.60253 17.1208 8.86367 16.8624L13.7252 12.0009L8.86089 7.13656C8.59976 6.87542 8.59976 6.45317 8.86089 6.19481C9.12202 5.93645 9.54428 5.93368 9.80264 6.19481L15.1392 11.5258Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronRight;
