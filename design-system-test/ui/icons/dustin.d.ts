import { default as React } from '../../../node_modules/react';
interface CircleIconProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
    className?: string;
    size?: string;
    disabled?: boolean;
}
declare const CircleIcon: React.FC<CircleIconProps>;
export default CircleIcon;
