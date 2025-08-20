import React from 'react';
import '../../styles/output.css';
import { sizeMap } from './utils';

interface LeftChevronIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
}

const LeftChevronIcon: React.FC<LeftChevronIconProps> = ({
  color = '',
  className,
  size = 'large',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sizeMap[size]}
      height={sizeMap[size]}
      viewBox={`0 0 24 24`}
      fill={color}
      className={className}
      {...props}
    >
      <path d="M8.82293 11.3948C8.48822 11.7296 8.48822 12.2731 8.82293 12.6078L13.9641 17.749C14.2988 18.0837 14.8423 18.0837 15.1771 17.749C15.5118 17.4143 15.5118 16.8707 15.1771 16.536L10.6411 12L15.1744 7.46402C15.5091 7.12931 15.5091 6.58574 15.1744 6.25103C14.8397 5.91632 14.2961 5.91632 13.9614 6.25103L8.82025 11.3922L8.82293 11.3948Z" fill={color}/>
    </svg>
  );
};

export default LeftChevronIcon;
