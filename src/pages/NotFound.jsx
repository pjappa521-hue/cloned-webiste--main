import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen pt-36 pb-24 px-5 sm:px-8">
      <section className="max-w-3xl mx-auto text-center">
        <p className="font-mono2 text-xs uppercase tracking-[0.2em] text-brand-accent">404</p>
        <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl mt-4">Page not found</h1>
        <p className="mt-6 text-gray-400 leading-relaxed">The page you requested does not exist or may have moved.</p>
        <Link to="/" className="inline-flex mt-8 px-6 py-3 rounded-full bg-brand-accent text-white text-sm font-medium">Return home</Link>
      </section>
    </main>
  );
}
