import { Skeleton } from "@/components/ui/skeleton";

export function TopbarSkeleton() {
  return (
    <>
      <div className="flex items-center justify-between mt-12 gap-x-2">
        <div className="flex flex-1 gap-x-2">
          <Skeleton className="w-10 h-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="w-full h-4 rounded-full" />
            <Skeleton className="w-full h-4 rounded-full" />
          </div>
        </div>
        <div className="text-light-config">
          <Skeleton className="w-10 h-10" />
        </div>
      </div>
    </>
  );
}
