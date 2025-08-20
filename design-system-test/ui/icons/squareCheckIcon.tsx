import React from 'react';
import '../../styles/output.css';
import { sizeMap } from './utils';

interface SquareCheckIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
  disabled?: boolean;
}

const SquareCheckIcon: React.FC<SquareCheckIconProps> = ({
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
        d="M5.57143 3C4.15313 3 3 4.15313 3 5.57143V18.4286C3 19.8469 4.15313 21 5.57143 21H18.4286C19.8469 21 21 19.8469 21 18.4286V5.57143C21 4.15313 19.8469 3 18.4286 3H5.57143ZM16.5402 10.1116L11.3973 15.2545C11.0196 15.6321 10.4089 15.6321 10.0353 15.2545L7.46384 12.683C7.08616 12.3054 7.08616 11.6946 7.46384 11.321C7.84152 10.9473 8.45223 10.9433 8.82589 11.321L10.7143 13.2094L15.1741 8.74554C15.5518 8.36786 16.1625 8.36786 16.5362 8.74554C16.9098 9.12321 16.9138 9.73393 16.5362 10.1076L16.5402 10.1116Z"
        fill={color}
      />
    </svg>
  );
};

export default SquareCheckIcon;
