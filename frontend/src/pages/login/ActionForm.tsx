import { GoogleButton } from "./GoogleButton";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ActionForm() {
  return (
    <>
      <div className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="email" className="tracking-wider">
            Email
          </Label>
          <Input type="email" placeholder="Email" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password" className="tracking-wider">
            Password
          </Label>
          <Input type="password" placeholder="password" />
        </div>
      </div>
      <div className="space-y-1">
        <Button type="button" className="w-full tracking-wider">
          Login
        </Button>
        <span className="block text-sm text-center text-muted-foreground">
          or
        </span>
        <GoogleButton />
      </div>
    </>
  );
}
