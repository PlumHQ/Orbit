import React from 'react';
import '../../styles/output.css';
import { sizeMap } from './utils';

interface CircleIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
  disabled?: boolean;
}

const CircleIcon: React.FC<CircleIconProps> = ({
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
        d="M19.3125 12C19.3125 10.0606 18.5421 8.20064 17.1707 6.82928C15.7994 5.45792 13.9394 4.6875 12 4.6875C10.0606 4.6875 8.20064 5.45792 6.82928 6.82928C5.45792 8.20064 4.6875 10.0606 4.6875 12C4.6875 13.9394 5.45792 15.7994 6.82928 17.1707C8.20064 18.5421 10.0606 19.3125 12 19.3125C13.9394 19.3125 15.7994 18.5421 17.1707 17.1707C18.5421 15.7994 19.3125 13.9394 19.3125 12ZM3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21C9.61305 21 7.32387 20.0518 5.63604 18.364C3.94821 16.6761 3 14.3869 3 12Z"
        fill={color}
      />
    </svg>
  );
};

export default CircleIcon;
