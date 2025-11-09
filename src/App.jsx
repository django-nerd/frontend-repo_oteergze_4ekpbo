import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <footer className="border-t border-black/5 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} DevForge Studio. All rights reserved.</p>
          <div className="text-sm text-gray-600">Built with love for the web and mobile.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
