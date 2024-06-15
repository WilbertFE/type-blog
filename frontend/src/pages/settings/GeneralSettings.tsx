import { Separator } from "@/components/ui/separator";
import { ChevronRight, LockKeyhole } from "lucide-react";

export function GeneralSettings() {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium tracking-wide text-light-config">
        General
      </h3>
      <div className="flex flex-col p-4 rounded-lg gap-y-3 bg-slate-700">
        <div className="flex gap-x-2 text-light-config">
          <LockKeyhole />
          <span className="flex-1 font-medium tracking-wider">
            Change Password
          </span>
          <ChevronRight strokeWidth={3} />
        </div>
        <Separator orientation="horizontal" className="bg-muted-foreground" />
      </div>
    </div>
  );
}
