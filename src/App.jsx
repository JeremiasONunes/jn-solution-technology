import Footer from "./components/Footer";
import Header from "./components/Header";
import ChatWidget from "./components/chat/ChatWidget";
import About from "./sections/About";
import Benefits from "./sections/Benefits";
import Cases from "./sections/Cases";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Offers from "./sections/Offers";
import Services from "./sections/Services";

export default function App() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Services />
        <Cases />
        <About />
        <Benefits />
        <Contact />
        <Offers />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
