import React from 'react';
import '../../styles/output.css';
import { sizeMap } from './utils';

interface SquareArrowOutUpRightIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
  disabled?: boolean;
}

const SquareArrowOutUpRightIcon: React.FC<SquareArrowOutUpRightIconProps> = ({
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
      <path d="M3.29732 12.7019C3.10848 12.5171 3 12.268 3 12.0028C3 11.7376 3.10848 11.4885 3.29732 11.3037L10.3687 4.5537C10.7545 4.18406 11.3652 4.20013 11.7308 4.58584C12.0964 4.97156 12.0844 5.58227 11.6987 5.9479L6.37098 11.0385H20.0357C20.5701 11.0385 21 11.4684 21 12.0028C21 12.5372 20.5701 12.9671 20.0357 12.9671H6.37098L11.7027 18.0537C12.0884 18.4233 12.1004 19.03 11.7348 19.4158C11.3692 19.8015 10.7585 19.8135 10.3728 19.4479L3.30134 12.6979L3.29732 12.7019Z" fill={color} />
    </svg>
  );
};

export default SquareArrowOutUpRightIcon;
