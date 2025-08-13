import React from "react";
import { Skeleton } from "./component";

export const SkeletonCircle = () => {
  return (
    <div className="flex items-center space-x-4 p-6">
      <Skeleton shape="circle" className="w-12 h-12" />
      <div className="space-y-2">
        <Skeleton shape="quadrilaterals" className="h-4 w-40" />
        <Skeleton shape="quadrilaterals" className="h-4 w-32" />
      </div>
    </div>
  );
};

export const SkeletonQuadrilaterals = () => {
  return (
    <div className="space-y-4 p-6">
      <Skeleton shape="quadrilaterals" className="h-8 w-64 mt-2" />
      <Skeleton shape="quadrilaterals" className="h-6 w-full mt-2" />
      <Skeleton shape="quadrilaterals" className="h-4 w-3/4 mt-2" />
      <Skeleton shape="quadrilaterals" className="h-2 w-1/2 mt-2" />
    </div>
  );
};

export const SkeletonCard = () => {
  return (
    <div className="p-6 border border-surface-border-gray-subtle rounded-4 space-y-4 max-w-sm">
      <div className="flex items-center space-x-3">
        <Skeleton shape="circle" className="w-10 h-10" />
        <div className="ml-2">
          <Skeleton shape="quadrilaterals" className="h-4 w-24" />
          <Skeleton shape="quadrilaterals" className="h-3 w-16 mt-2" />
        </div>
      </div>
      <Skeleton shape="quadrilaterals" className="h-32 w-full" />
      <div className="mt-2">
        <Skeleton shape="quadrilaterals" className="h-4 w-full" />
        <Skeleton shape="quadrilaterals" className="h-4 w-3/4 mt-2" />
      </div>
    </div>
  );
};

export const SkeletonTable = () => {
  return (
    <div className="space-y-3 p-6">
      <div className="flex space-x-4">
        <Skeleton shape="quadrilaterals" className="h-4 w-24 mt-2" />
        <Skeleton shape="quadrilaterals" className="h-4 w-32 mt-2" />
        <Skeleton shape="quadrilaterals" className="h-4 w-20 mt-2" />
        <Skeleton shape="quadrilaterals" className="h-4 w-16 mt-2" />
      </div>
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex space-x-4">
          <Skeleton shape="quadrilaterals" className="h-4 w-24 mt-2" />
          <Skeleton shape="quadrilaterals" className="h-4 w-32 mt-2" />
          <Skeleton shape="quadrilaterals" className="h-4 w-20 mt-2" />
          <Skeleton shape="quadrilaterals" className="h-4 w-16 mt-2" />
        </div>
      ))}
    </div>
  );
};