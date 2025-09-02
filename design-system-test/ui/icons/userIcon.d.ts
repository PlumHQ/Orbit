import { default as React } from '../../../node_modules/react';
interface UserIconProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
    className?: string;
    size?: string;
    disabled?: boolean;
}
declare const UserIcon: React.FC<UserIconProps>;
export default UserIcon;
