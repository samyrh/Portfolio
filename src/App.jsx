import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Education from "./components/EducationCard.jsx";

const App = () => {
  return (
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>

          {/* Global Stars Background Layer */}
          <div className="fixed inset-0 -z-10">
            <StarsCanvas />
          </div>

          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            {/* anchor for Home */}
            <section id="home" className="scroll-mt-28">
              <Hero />
            </section>
          </div>

          {/* the rest already get ids from SectionWrapper if you used it */}
          <About />
          <Experience />
          <Education />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
        </div>
      </BrowserRouter>
  );
};

export default App;
