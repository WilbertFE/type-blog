import { Badge } from "@/components/ui/badge";

export function Menus() {
  return (
    <div className="flex justify-between mt-8">
      <Badge variant="default" className="px-4 py-2 bg-secondary-config">
        Create Blog
      </Badge>
      <Badge variant="default" className="px-4 py-2 bg-secondary-config">
        My Blog
      </Badge>
      <Badge variant="default" className="px-4 py-2 bg-secondary-config">
        Profile
      </Badge>
    </div>
  );
}
