import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Landing from "./pages/landing";
import Features from "./pages/features";
import Faq from "./pages/faq";
import Contact from "./pages/contact";
import ThankYou from "./pages/thankyou";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";

function MainContent() {
  const location = useLocation();
  
  // If on auth pages, only show that page
  if (location.pathname === '/signup' || location.pathname === '/signin') {
    return (
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    );
  }
  
  // Otherwise show the full scrollable layout
  return (
    <div className="App">
      <section id="home">
        <Landing />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="thankyou">
        <ThankYou />
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  )
}

export default App