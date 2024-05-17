import { GoogleButton } from "./GoogleButton";

export function LoginForm() {
  return (
    <div className="flex flex-col w-full max-w-sm m-auto rounded-lg bg-light-config">
      <div className="p-4 border-b-2 border-slate-300">
        <h1 className="text-lg font-bold text-secondary-config">Login</h1>
      </div>
      <div className="flex flex-col p-4">
        <h3 className="font-medium tracking-wide text-center">
          Pilih Metode Login
        </h3>
        <GoogleButton />
        <span className="mt-4 text-sm text-center text-slate-500">
          Buat blog, dan berkomentar setelah login!
        </span>
      </div>
    </div>
  );
}
