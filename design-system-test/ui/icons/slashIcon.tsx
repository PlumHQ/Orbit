import React from 'react';
import '../../styles/output.css';
import { sizeMap } from './utils';

interface SlashIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
  disabled?: boolean;
}

const SlashIcon: React.FC<SlashIconProps> = ({
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
      <path d="M17.128 4.10324C17.4842 4.31261 17.6061 4.77197 17.3967 5.1282L8.89699 19.6277C8.68762 19.984 8.22826 20.1058 7.87202 19.8965C7.51578 19.6871 7.39391 19.2278 7.60328 18.8715L16.103 4.37198C16.3124 4.01262 16.7717 3.89387 17.128 4.10324Z" 
      fill={color}
    />
    </svg>
  );
};

export default SlashIcon;
