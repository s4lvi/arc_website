import {
  Navigation,
  Hero,
  About,
  Solutions,
  Technology,
  Contact,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <Solutions />
      <Technology />
      <Contact />
      <Footer />
    </main>
  );
}
