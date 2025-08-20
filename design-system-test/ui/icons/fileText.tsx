import React from 'react';
import '../../styles/output.css';
import { sizeMap } from './utils';

interface FileTextProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
}

const FileText: React.FC<FileTextProps> = ({
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
      <path d="M7.5 19.3125C7.19062 19.3125 6.9375 19.0594 6.9375 18.75V5.25C6.9375 4.94062 7.19062 4.6875 7.5 4.6875H13.125V7.5C13.125 8.12227 13.6277 8.625 14.25 8.625H17.0625V18.75C17.0625 19.0594 16.8094 19.3125 16.5 19.3125H7.5ZM7.5 3C6.25898 3 5.25 4.00898 5.25 5.25V18.75C5.25 19.991 6.25898 21 7.5 21H16.5C17.741 21 18.75 19.991 18.75 18.75V8.43164C18.75 7.83398 18.5145 7.26094 18.0926 6.83906L14.9074 3.65742C14.4855 3.23555 13.916 3 13.3184 3H7.5ZM9.46875 12C9.00117 12 8.625 12.3762 8.625 12.8438C8.625 13.3113 9.00117 13.6875 9.46875 13.6875H14.5312C14.9988 13.6875 15.375 13.3113 15.375 12.8438C15.375 12.3762 14.9988 12 14.5312 12H9.46875ZM9.46875 15.375C9.00117 15.375 8.625 15.7512 8.625 16.2188C8.625 16.6863 9.00117 17.0625 9.46875 17.0625H14.5312C14.9988 17.0625 15.375 16.6863 15.375 16.2188C15.375 15.7512 14.9988 15.375 14.5312 15.375H9.46875Z" fill={color}  />

    </svg>
  );
};

export default FileText;
