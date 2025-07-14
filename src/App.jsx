import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/services';


function HomePage() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      <Navbar />
      <main className="flex-grow p-8">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quidem quo odio labore dolore reiciendis ducimus a dolorum dignissimos veniam magni commodi rem, sed harum omnis perferendis voluptatibus non ex?Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
