import React from 'react';
import '../../styles/output.css';
import { sizeMap } from './utils';

interface CalendarIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
  disabled?: boolean;
}

const CalendarIcon: React.FC<CalendarIconProps> = ({
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
        d="M9.46875 3.84375C9.46875 3.37617 9.09258 3 8.625 3C8.15742 3 7.78125 3.37617 7.78125 3.84375V5.25H6.375C5.13398 5.25 4.125 6.25898 4.125 7.5V8.0625V9.75V18.75C4.125 19.991 5.13398 21 6.375 21H17.625C18.866 21 19.875 19.991 19.875 18.75V9.75V8.0625V7.5C19.875 6.25898 18.866 5.25 17.625 5.25H16.2188V3.84375C16.2188 3.37617 15.8426 3 15.375 3C14.9074 3 14.5312 3.37617 14.5312 3.84375V5.25H9.46875V3.84375ZM5.8125 9.75H18.1875V18.75C18.1875 19.0594 17.9344 19.3125 17.625 19.3125H6.375C6.06562 19.3125 5.8125 19.0594 5.8125 18.75V9.75Z"
        fill={color}
      />
    </svg>
  );
};

export default CalendarIcon;
