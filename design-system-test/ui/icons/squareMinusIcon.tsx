import React from 'react';
import '@pluminsurance/design-system-test.styles';
import { sizeMap } from './utils';

interface SquareMinusIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
  disabled?: boolean;
}

const SquareMinusIcon: React.FC<SquareMinusIconProps> = ({
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
        d="M5.57143 3C4.15313 3 3 4.15313 3 5.57143V18.4286C3 19.8469 4.15313 21 5.57143 21H18.4286C19.8469 21 21 19.8469 21 18.4286V5.57143C21 4.15313 19.8469 3 18.4286 3H5.57143ZM9.10714 11.0357H14.8929C15.4272 11.0357 15.8571 11.4656 15.8571 12C15.8571 12.5344 15.4272 12.9643 14.8929 12.9643H9.10714C8.57277 12.9643 8.14286 12.5344 8.14286 12C8.14286 11.4656 8.57277 11.0357 9.10714 11.0357Z"
        fill={color}
      />
    </svg>
  );
};

export default SquareMinusIcon;
