import React from 'react';
import '@pluminsurance/design-system-test.styles';
import { sizeMap } from './utils';

interface SquareIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
  disabled?: boolean;
}

const SquareIcon: React.FC<SquareIconProps> = ({
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
        d="M18.4286 4.92857C18.7821 4.92857 19.0714 5.21786 19.0714 5.57143V18.4286C19.0714 18.7821 18.7821 19.0714 18.4286 19.0714H5.57143C5.21786 19.0714 4.92857 18.7821 4.92857 18.4286V5.57143C4.92857 5.21786 5.21786 4.92857 5.57143 4.92857H18.4286ZM5.57143 3C4.15313 3 3 4.15313 3 5.57143V18.4286C3 19.8469 4.15313 21 5.57143 21H18.4286C19.8469 21 21 19.8469 21 18.4286V5.57143C21 4.15313 19.8469 3 18.4286 3H5.57143Z"
        fill={color}
      />
    </svg>
  );
};

export default SquareIcon;
