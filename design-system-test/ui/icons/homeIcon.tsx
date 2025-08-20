import React from 'react';
import '../../styles/output.css';
import { sizeMap } from './utils';

interface HomeIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
}

const HomeIcon: React.FC<HomeIconProps> = ({
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
      fill="none"
      color={color}
      className={className}
      {...props}
    >
      <path d="M12.5399 3.30924C12.2274 3.04536 11.7726 3.04536 11.4601 3.30924L2.29359 11.0869C1.9429 11.3855 1.90124 11.9098 2.19637 12.2605C2.4915 12.6111 3.01927 12.6528 3.36996 12.3577L4.22411 11.6355V18.111C4.22411 19.6457 5.46714 20.8888 7.00183 20.8888H17.0016C18.5363 20.8888 19.7794 19.6457 19.7794 18.111V11.6355L20.63 12.3577C20.9807 12.6563 21.5085 12.6111 21.8036 12.2605C22.0988 11.9098 22.0571 11.382 21.7064 11.0869L12.5399 3.30924ZM5.89074 18.111V10.2223L12.0017 5.03837L18.1127 10.2223V18.111C18.1127 18.7256 17.6162 19.2221 17.0016 19.2221H15.335V13.9445C15.335 13.1771 14.7135 12.5556 13.9461 12.5556H10.0573C9.28998 12.5556 8.66847 13.1771 8.66847 13.9445V19.2221H7.00183C6.38726 19.2221 5.89074 18.7256 5.89074 18.111ZM10.3351 19.2221V14.2222H13.6684V19.2221H10.3351Z" fill={color} />

    </svg>
  );
};

export default HomeIcon;
