import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Create() {
  return (
    <main id="create" className="bg-primary-config">
      <div className="container">
        <div className="flex flex-wrap min-h-screen">
          <form className="flex flex-col w-full mt-12 gap-y-6">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold tracking-wide text-light-config">
                Buat Blog
              </h1>
              <span className="text-sm font-medium text-light-config">
                isi apa saja
              </span>
            </div>
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-2">
                <Label
                  htmlFor="judul"
                  className="text-xl tracking-wide text-light-config"
                >
                  * Judul
                </Label>
                <Input id="judul" name="judul" type="text" />
              </div>
              <div className="flex flex-col gap-y-1">
                <Label
                  htmlFor="description"
                  className="text-xl tracking-wide text-light-config"
                >
                  * Description
                </Label>
                <Input id="description" name="description" type="text" />
              </div>
              <div className="flex flex-col gap-y-1">
                <Label
                  htmlFor="body"
                  className="text-xl tracking-wide text-light-config"
                >
                  * Body
                </Label>
                <Textarea placeholder="type your blog here" />
              </div>
            </div>
            <div className="flex">
              <Button type="submit">Buat Blog</Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
