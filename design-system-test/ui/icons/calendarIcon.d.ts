import { default as React } from '../../../node_modules/react';
interface CalendarIconProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
    className?: string;
    size?: string;
    disabled?: boolean;
}
declare const CalendarIcon: React.FC<CalendarIconProps>;
export default CalendarIcon;
