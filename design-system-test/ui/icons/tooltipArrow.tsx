import React from 'react';
import '../../styles/output.css';
import { sizeMap } from './utils';

interface TootipArrowProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
  disabled?: boolean;
}

const TootipArrow: React.FC<TootipArrowProps> = ({
  color="#2D3D54",
  className = ``,
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
        d="M20 10L10 1.73698e-07L3.47396e-07 10L8.58579 18.5858C9.36683 19.3668 10.6332 19.3668 11.4142 18.5858L20 10Z"
        fill={color}
      />
    </svg>
  );
};

export default TootipArrow;
