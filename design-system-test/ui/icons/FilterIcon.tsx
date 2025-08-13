import React from 'react';
import '@pluminsurance/design-system-test.styles';
import { sizeMap } from './utils';

interface FilterIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
  disabled?: boolean;
}

const FilterIcon: React.FC<FilterIconProps> = ({
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
        d="M3 5.46602C3 4.65742 3.65742 4 4.46602 4H19.534C20.3426 4 21 4.65742 21 5.46602C21 5.80352 20.884 6.13047 20.6695 6.39062L14.8125 13.5801V18.6145C14.8125 19.2402 14.3027 19.75 13.677 19.75C13.4203 19.75 13.1707 19.6621 12.9703 19.5039L9.71836 16.9234C9.38086 16.6562 9.1875 16.252 9.1875 15.823V13.5836L3.33047 6.39062C3.11602 6.13047 3 5.80352 3 5.46602ZM4.93359 5.6875L10.6852 12.7469C10.8082 12.898 10.875 13.0844 10.875 13.2812V15.6859L13.125 17.4719V13.2812C13.125 13.0879 13.1918 12.898 13.3148 12.7469L19.0664 5.6875H4.93359Z"
        fill={color}
      />
    </svg>
  );
};

export default FilterIcon;
