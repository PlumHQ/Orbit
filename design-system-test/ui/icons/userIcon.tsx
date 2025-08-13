import React from 'react';
import '@pluminsurance/design-system-test.styles';
import { sizeMap } from './utils';

interface UserIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  size?: string;
  disabled?: boolean;
}

const UserIcon: React.FC<UserIconProps> = ({
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
        d="M14.5 8.00005C14.5 7.337 14.2366 6.70111 13.7678 6.23226C13.2989 5.76341 12.663 5.50002 12 5.50002C11.3369 5.50002 10.701 5.76341 10.2322 6.23226C9.76333 6.70111 9.49993 7.337 9.49993 8.00005C9.49993 8.6631 9.76333 9.29899 10.2322 9.76784C10.701 10.2367 11.3369 10.5001 12 10.5001C12.663 10.5001 13.2989 10.2367 13.7678 9.76784C14.2366 9.29899 14.5 8.6631 14.5 8.00005ZM7.99991 8.00005C7.99991 6.93917 8.42135 5.92174 9.1715 5.17159C9.92166 4.42143 10.9391 4 12 4C13.0608 4 14.0783 4.42143 14.8284 5.17159C15.5786 5.92174 16 6.93917 16 8.00005C16 9.06093 15.5786 10.0784 14.8284 10.8285C14.0783 11.5787 13.0608 12.0001 12 12.0001C10.9391 12.0001 9.92166 11.5787 9.1715 10.8285C8.42135 10.0784 7.99991 9.06093 7.99991 8.00005ZM6.54052 18.5002H17.4625C17.1844 16.522 15.4844 15.0001 13.4312 15.0001H10.5749C8.5218 15.0001 6.82178 16.522 6.54365 18.5002H6.54052ZM4.99988 19.0721C4.99988 15.9939 7.49366 13.5001 10.5718 13.5001H13.4281C16.5063 13.5001 19 15.9939 19 19.0721C19 19.5846 18.5844 20.0002 18.0719 20.0002H5.92801C5.41551 20.0002 4.99988 19.5846 4.99988 19.0721Z"
        fill={color}
      />
    </svg>
  );
};

export default UserIcon;
