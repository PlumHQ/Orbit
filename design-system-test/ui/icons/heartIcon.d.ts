import { default as React } from '../../../node_modules/react';
interface HeartIconProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
    className?: string;
    size?: string;
    disabled?: boolean;
}
declare const HeartIcon: React.FC<HeartIconProps>;
export default HeartIcon;
