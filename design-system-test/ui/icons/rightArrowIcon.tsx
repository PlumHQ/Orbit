import React from 'react';
import '../../styles/output.css';
import { sizeMap } from './utils';

interface RightArrowIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
}

const RightArrowIcon: React.FC<RightArrowIconProps> = ({
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
      <path
        d="M20.7027 12.7019C20.8915 12.5211 21 12.268 21 12.0028C21 11.7377 20.8915 11.4886 20.7027 11.3037L13.6313 4.55373C13.2455 4.18409 12.6348 4.20016 12.2692 4.58587C11.9036 4.97159 11.9156 5.5823 12.3013 5.94793L17.629 11.0386H3.96429C3.42991 11.0386 3 11.4685 3 12.0028C3 12.5372 3.42991 12.9671 3.96429 12.9671H17.629L12.2973 18.0537C11.9116 18.4234 11.8996 19.0301 12.2652 19.4158C12.6308 19.8015 13.2415 19.8136 13.6272 19.4479L20.6987 12.6979L20.7027 12.7019Z"
        fill={color}
      />
    </svg>
  );
};

export default RightArrowIcon;
