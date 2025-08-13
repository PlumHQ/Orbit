import React from 'react';
import { Progress } from './component';

export const SmallProgress = () => {
  return (
    <div className="space-y-4 p-6">
      <div>
        <h3 className="text-lg font-semibold font-primary text-surface-text-gray-normal mb-2">Small Progress Bars</h3>
        <div className="flex flex-col gap-2">
          <Progress variant='positive' size="small" progress={25} />
          <Progress variant='positive' size="small" progress={50} />
          <Progress variant='positive' size="small" progress={75} />
          <Progress variant='positive' size="small" progress={100} />
        </div>
      </div>
    </div>
  );
};

export const MediumProgress = () => {
  return (
    <div className="space-y-4 p-6">
      <div>
        <h3 className="text-lg font-semibold font-primary text-surface-text-gray-normal mb-2">Medium Progress Bars</h3>
        <div className="flex flex-col gap-2">
          <Progress variant='positive' size="medium" progress={25} />
          <Progress variant='positive' size="medium" progress={50} />
          <Progress variant='positive' size="medium" progress={75} />
          <Progress variant='positive' size="medium" progress={100} />
        </div>
      </div>
    </div>
  );
};

export const LargeProgress = () => {
  return (
    <div className="space-y-4 p-6">
      <div>
        <h3 className="text-lg font-semibold font-primary text-surface-text-gray-normal mb-2">Large Progress Bars</h3>
        <div className="flex flex-col gap-2">
          <Progress variant='positive' size="large" progress={25} />
          <Progress variant='positive' size="large" progress={50} />
          <Progress variant='positive' size="large" progress={75} />
          <Progress variant='positive' size="large" progress={100} />
        </div>
      </div>
    </div>
  );
};

export const AnimatedProgress = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4 p-6">
      <div>
        <h3 className="text-lg font-semibold font-primary text-surface-text-gray-normal mb-2">Animated Progress</h3>
        <div className="flex flex-col gap-4">
          <Progress variant='positive' size="small" progress={progress} />
          <Progress variant='positive' size="medium" progress={progress} />
          <Progress variant='positive' size="large" progress={progress} />
        </div>
        <p className="text-sm font-primary text-surface-text-gray-subtle mt-2">
          Progress: {progress}%
        </p>
      </div>
    </div>
  );
}; 