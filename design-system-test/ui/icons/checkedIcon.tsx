import React from 'react';
import '../../styles/output.css';
import { sizeMap } from './utils';

interface CheckedIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
  disabled?: boolean;
}

const CheckedIcon: React.FC<CheckedIconProps> = ({
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
        d="M19.7483 6.25173C20.0839 6.58737 20.0839 7.1301 19.7483 7.46217L10.3218 16.8922C9.98621 17.2278 9.44347 17.2278 9.1114 16.8922L4.25179 12.0361C3.91615 11.7005 3.91615 11.1578 4.25179 10.8257C4.58743 10.4936 5.13016 10.4901 5.46223 10.8257L9.71127 15.0747L18.5343 6.25173C18.8699 5.91609 19.4126 5.91609 19.7447 6.25173H19.7483Z"
        fill={color}
      />
    </svg>
  );
};

export default CheckedIcon;
