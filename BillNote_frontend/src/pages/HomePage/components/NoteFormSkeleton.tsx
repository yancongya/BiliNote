import React from 'react';
import Skeleton from '@/components/Skeleton';

const NoteFormSkeleton = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <Skeleton className="h-8 w-1/3 mb-4 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />
      </div>

      <div className="space-y-4">
        <Skeleton className="h-12 w-full rounded" />
        <Skeleton className="h-12 w-full rounded" />
        <Skeleton className="h-32 w-full rounded" />
        <Skeleton className="h-10 w-32 self-start rounded" />
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Skeleton className="h-48 w-full rounded" />
        <Skeleton className="h-48 w-full rounded" />
      </div>
    </div>
  );
};

export default NoteFormSkeleton;