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
      <path d="M13.6875 3.84375C13.6875 4.31133 14.0637 4.6875 14.5312 4.6875H18.1207L10.2773 12.5273C9.94688 12.8578 9.94688 13.3922 10.2773 13.7191C10.6078 14.0461 11.1422 14.0496 11.4691 13.7191L19.309 5.8793L19.3125 9.46875C19.3125 9.93633 19.6887 10.3125 20.1562 10.3125C20.6238 10.3125 21 9.93633 21 9.46875V3.84375C21 3.37617 20.6238 3 20.1562 3H14.5312C14.0637 3 13.6875 3.37617 13.6875 3.84375ZM5.53125 4.125C4.13203 4.125 3 5.25703 3 6.65625V18.4688C3 19.868 4.13203 21 5.53125 21H17.3438C18.743 21 19.875 19.868 19.875 18.4688V13.9688C19.875 13.5012 19.4988 13.125 19.0312 13.125C18.5637 13.125 18.1875 13.5012 18.1875 13.9688V18.4688C18.1875 18.9363 17.8113 19.3125 17.3438 19.3125H5.53125C5.06367 19.3125 4.6875 18.9363 4.6875 18.4688V6.65625C4.6875 6.18867 5.06367 5.8125 5.53125 5.8125H10.0312C10.4988 5.8125 10.875 5.43633 10.875 4.96875C10.875 4.50117 10.4988 4.125 10.0312 4.125H5.53125Z" fill={color} />
    </svg>
  );
};

export default SquareArrowOutUpRightIcon;
