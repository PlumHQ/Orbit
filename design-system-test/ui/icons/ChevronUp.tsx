import React from 'react';
import '../../styles/output.css';
import { sizeMap } from './utils';

interface ChevronDownIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
  disabled?: boolean;
}

const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({
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
      <path d="M9.4957 7.3525C9.77463 7.07358 10.2276 7.07358 10.5065 7.3525L14.7908 11.6368C15.0697 11.9157 15.0697 12.3687 14.7908 12.6476C14.5119 12.9265 14.0589 12.9265 13.78 12.6476L10 8.86762L6.22002 12.6454C5.94109 12.9243 5.48812 12.9243 5.20919 12.6454C4.93027 12.3664 4.93027 11.9135 5.20919 11.6346L9.49347 7.35027L9.4957 7.3525Z" fill={color}/>

    </svg>
  );
};

export default ChevronDownIcon;
