import * as React from "react"
import { cn } from '@pluminsurance/design-system-test.utilities';
import { TSkeletonShape } from "./types";
import '@pluminsurance/design-system-test.styles';
import '@fontsource/inter';

export interface ISkeleton {
  shape?: TSkeletonShape;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Skeleton = ({
  shape = "quadrilaterals",
  className,
  children,
  style,
  onClick,
  ...props
}: ISkeleton) => {
  return (
    <div 
      className={cn(
        "animate-pulse bg-interactive-background-gray-muted w-full h-full",
        shape === "circle" ? "rounded-8" : "rounded-3",
        className
      )} 
      style={style}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Skeleton;