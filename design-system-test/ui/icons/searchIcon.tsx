import React from 'react';
import '@pluminsurance/design-system-test.styles';
import { sizeMap } from './utils';

interface SearchIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({
  color,
  className = `fill-interactive-icon-gray-normal`,
  size = 24,
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
        d="M15.9373 10.3137C15.9373 8.82165 15.3446 7.39067 14.2895 6.33559C13.2344 5.28052 11.8034 4.68779 10.3113 4.68779C8.81924 4.68779 7.38826 5.28052 6.33318 6.33559C5.27811 7.39067 4.68538 8.82165 4.68538 10.3137C4.68538 11.8058 5.27811 13.2368 6.33318 14.2919C7.38826 15.347 8.81924 15.9397 10.3113 15.9397C11.8034 15.9397 13.2344 15.347 14.2895 14.2919C15.3446 13.2368 15.9373 11.8058 15.9373 10.3137ZM14.8508 16.0487C13.606 17.0368 12.0273 17.6275 10.3113 17.6275C6.27119 17.6275 2.99759 14.3539 2.99759 10.3137C2.99759 6.27361 6.27119 3 10.3113 3C14.3515 3 17.6251 6.27361 17.6251 10.3137C17.6251 12.0297 17.0344 13.6085 16.0463 14.8532L20.7545 19.5614C21.0851 19.8919 21.0851 20.4264 20.7545 20.7534C20.424 21.0804 19.8895 21.0839 19.5625 20.7534L14.8508 16.0487Z"
        fill={color}
      />
    </svg>
  );
};

export default SearchIcon;
