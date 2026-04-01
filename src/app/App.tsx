import { Header, Footer } from "@/components/layout";
import { HomePage } from "@/pages/HomePage";

export function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
