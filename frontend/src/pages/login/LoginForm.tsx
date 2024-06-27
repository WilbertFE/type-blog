import { ActionForm } from "./ActionForm";

export function LoginForm() {
  return (
    <div className="flex flex-col w-full max-w-sm m-auto rounded-lg bg-light-config">
      <div className="p-4 border-b-2 border-slate-300">
        <h1 className="text-lg font-bold tracking-wide text-secondary-config">
          Login
        </h1>
      </div>
      <div className="flex flex-col p-4 gap-y-4">
        <ActionForm />
        <span className="block w-full text-sm text-center text-slate-500">
          Buat blog, dan berkomentar setelah login!
        </span>
      </div>
    </div>
  );
}
