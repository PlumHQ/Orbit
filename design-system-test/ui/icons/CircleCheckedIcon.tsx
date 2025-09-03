import React from 'react';
import '../../styles/output.css';
import { sizeMap } from './utils';

interface CircleCheckedIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
  disabled?: boolean;
}

const CircleCheckedIcon: React.FC<CircleCheckedIconProps> = ({
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
      <path d="M12 4.6875C13.9394 4.6875 15.7994 5.45792 17.1707 6.82928C18.5421 8.20064 19.3125 10.0606 19.3125 12C19.3125 13.9394 18.5421 15.7994 17.1707 17.1707C15.7994 18.5421 13.9394 19.3125 12 19.3125C10.0606 19.3125 8.20064 18.5421 6.82928 17.1707C5.45792 15.7994 4.6875 13.9394 4.6875 12C4.6875 10.0606 5.45792 8.20064 6.82928 6.82928C8.20064 5.45792 10.0606 4.6875 12 4.6875ZM12 21C14.3869 21 16.6761 20.0518 18.364 18.364C20.0518 16.6761 21 14.3869 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM15.9727 10.3477C16.3031 10.0172 16.3031 9.48281 15.9727 9.15586C15.6422 8.82891 15.1078 8.82539 14.7809 9.15586L10.8785 13.0582L9.22617 11.4059C8.8957 11.0754 8.36133 11.0754 8.03437 11.4059C7.70742 11.7363 7.70391 12.2707 8.03437 12.5977L10.2844 14.8477C10.6148 15.1781 11.1492 15.1781 11.4762 14.8477L15.9727 10.3477Z" fill={color} />
    </svg>
  );
};

export default CircleCheckedIcon;
