import { Header } from "./settings/Header";

export function Settings() {
  return (
    <main className="pb-32 bg-primary-config">
      <div className="container">
        <div className="flex flex-col min-h-screen">
          <Header />
          {/* <Profile />
            <General />
            <Support /> */}
        </div>
      </div>
    </main>
  );
}
