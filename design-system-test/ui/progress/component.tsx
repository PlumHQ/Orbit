import * as React from "react";
import { cn } from '../utilities';
import '../../styles/output.css';
import '@fontsource/inter';
import { TProgressSize } from "./types";
import { AlertFilledIcon, CircleCheckFilledIcon } from "../icons";


export interface IProgress {
  size?: TProgressSize;
  progress: number; // 0-100
  className?: string;
  variant?: "neutral" | "positive" | "negative";
  label?: string;
  primaryText?: string;
  secondaryText?: string;
}

const ProgressBar = ({
  size = "medium",
  progress,
  className,
  variant,
  primaryText,
  secondaryText,
  label
}: IProgress) => {
  // Height mapping based on size
  const heightClasses = {
    large: "h-4",
    medium: "h-3",
    small: "h-2"
  };

  // Ensure progress is between 0-100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  const Icon = variant === "positive" ? CircleCheckFilledIcon : AlertFilledIcon;
  return (
    <div className="flex flex-col gap-15">
      <div className="flex justify-between">
        <p className={`text-${size === "small" ? "sm" : "base"} font-medium font-primary text-feedback-text-neutral-subtle ${variant === "neutral" ? "text-feedback-text-neutral-normal" : ""}`}>
          {label}
        </p>
        <div className="flex items-center gap-1">
          <p className={`text-${size === "small" ? "sm" : "base"} font-semibold font-primary text-feedback-text-neutral-normal`}>{primaryText}</p>
          <p className={`text-${size === "small" ? "sm" : "base"} font-semibold font-primary text-feedback-text-neutral-subtle`}>{secondaryText}</p>
          {variant !== "neutral" && <Icon size={'large'} className={`fill-feedback-icon-${variant}-${variant === "positive" ? "subtle" : "intense"}`} />}
        </div>
      </div>
      <div
        className={cn(
          "w-full bg-interactive-background-neutral-subtle rounded-8 overflow-hidden",
          heightClasses[size],
          className
        )}
      >
        <div
          className={`h-full bg-feedback-background-${variant}-intense transition-all duration-300 ease-in-out`}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  );
};

export const Progress = ProgressBar;
export default Progress;