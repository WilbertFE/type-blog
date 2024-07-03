import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function BlogSkeleton() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <div className="space-y-2">
            <Skeleton className="w-40 h-6 bg-slate-300" />
            <Skeleton className="w-64 h-6 bg-slate-300" />
          </div>
          <div className="flex items-center gap-x-2">
            <Skeleton className="rounded-full w-11 h-11 bg-slate-300" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <Skeleton className="w-full h-6 bg-slate-300" />
        <Skeleton className="w-4/5 h-6 bg-slate-300" />
        <Skeleton className="w-3/5 h-6 bg-slate-300" />
      </CardContent>
      <CardFooter>
        <div>
          <div className="flex mb-2 gap-x-4">
            <div className="flex items-end gap-x-1">
              <Skeleton className="w-8 h-8 bg-slate-300" />
              <Skeleton className="w-6 h-4 bg-slate-300" />
            </div>
            <div className="flex items-end gap-x-1">
              <Skeleton className="w-8 h-8 bg-slate-300" />
              <Skeleton className="w-6 h-4 bg-slate-300" />
            </div>
          </div>
          <Skeleton className="w-64 h-6 bg-slate-300" />
        </div>
      </CardFooter>
    </Card>
  );
}
