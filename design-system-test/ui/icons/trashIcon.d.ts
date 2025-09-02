import { default as React } from '../../../node_modules/react';
interface TrashIconProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
    className?: string;
    size?: string;
    disabled?: boolean;
}
declare const TrashIcon: React.FC<TrashIconProps>;
export default TrashIcon;
