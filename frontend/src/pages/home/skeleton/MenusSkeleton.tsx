import { Skeleton } from "@/components/ui/skeleton";

export function MenusSkeleton() {
  return (
    <div className="flex justify-between mt-8">
      <Skeleton className="w-24 h-6 rounded-full" />
      <Skeleton className="w-24 h-6 rounded-full" />
      <Skeleton className="w-24 h-6 rounded-full" />
    </div>
  );
}
