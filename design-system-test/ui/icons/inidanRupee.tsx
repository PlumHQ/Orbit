import React from 'react';
import '../../styles/output.css';
import { sizeMap } from './utils';

interface IndianRupeeProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
}

const IndianRupee: React.FC<IndianRupeeProps> = ({
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
      <path d="M5.57239 3.96414C5.57239 3.42985 6.00223 3 6.53653 3H9.75033H17.4635C17.9977 3 18.4276 3.42985 18.4276 3.96414C18.4276 4.49843 17.9977 4.92828 17.4635 4.92828H14.0608C14.7719 5.7237 15.27 6.71998 15.4548 7.8207H17.4635C17.9977 7.8207 18.4276 8.25055 18.4276 8.78484C18.4276 9.31914 17.9977 9.74898 17.4635 9.74898H15.4548C14.9969 12.4847 12.6146 14.5697 9.75033 14.5697H9.54545L16.0976 19.2498C16.5315 19.5591 16.6319 20.1617 16.3226 20.5956C16.0132 21.0294 15.4106 21.1299 14.9768 20.8205L5.97813 14.3929C5.63666 14.1479 5.49204 13.71 5.61658 13.3123C5.74111 12.9146 6.11873 12.6414 6.53653 12.6414H9.75033C11.546 12.6414 13.0565 11.4121 13.4864 9.74898H6.53653C6.00223 9.74898 5.57239 9.31914 5.57239 8.78484C5.57239 8.25055 6.00223 7.8207 6.53653 7.8207H13.4864C13.0565 6.15756 11.5501 4.92828 9.75033 4.92828H6.53653C6.00223 4.92828 5.57239 4.49843 5.57239 3.96414Z" fill={color}/>

    </svg>
  );
};

export default IndianRupee;
