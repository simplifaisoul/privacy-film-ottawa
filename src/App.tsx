import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { ContentSection } from "./components/ContentSection";
import { ContactForm } from "./components/ContactForm";

import door1 from "./assets/door-1.jpg";
import door2 from "./assets/door-2.jpg";
import door3 from "./assets/door-3.jpg";

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />

        <div id="benefits">
          {/* Section 1: Intro + Privacy (Image Left) */}
          <ContentSection
            imageSrc={door1}
            imageAlt="Front door with privacy film allowing natural light"
            title="Increased Privacy Without Sacrificing Natural Light"
            imagePosition="left"
            content={
              <div className="space-y-4">
                <p className="font-semibold text-gray-700">
                  Your front door is one of the most important features of your home—it sets the tone for your exterior design while also providing privacy, security, and energy efficiency.
                </p>
                <p>
                  If you have clear glass on your front or back door, one simple yet effective way to enhance your front door's look and performance is by adding window film. Whether your door has a large glass panel or just a small decorative insert, window film can offer a range of benefits that improve both aesthetics and functionality.
                </p>
                <p>
                  One of the primary reasons homeowners choose window film for their front doors is to add privacy while still allowing natural light to enter. Traditional blinds or curtains block out light completely, but window film provides a frosted, tinted, textured or decorative effect that obscures the view from outside while keeping your entryway bright and welcoming. This is especially useful for homes with glass-paneled doors or sidelights that may otherwise expose too much of the interior.
                </p>
              </div>
            }
          />

          {/* Section 2: Security (Image Right) */}
          <ContentSection
            imageSrc={door2}
            imageAlt="Secure front entryway"
            title="Enhanced Security and Safety"
            imagePosition="right"
            className="bg-gray-50"
            content={
              <div className="space-y-4">
                <p>
                  Glass inserts in front doors are beautiful but can also be a vulnerability. Window film helps reinforce the glass by making it more shatter-resistant.
                </p>
                <p>
                  In the event of an attempted break-in, the film holds the glass together, making it harder for intruders to gain access. Additionally, if the glass does break due to an accident or extreme weather, the film reduces the risk of sharp shards scattering, providing an added layer of safety.
                </p>
              </div>
            }
          />

          {/* Section 3: UV & Energy (Image Right - as requested "Picture under that text on the left Picture on the right") */}
          <ContentSection
            imageSrc={door3}
            imageAlt="Modern door with window film protection"
            title="UV Protection & Improved Energy Efficiency"
            imagePosition="left"
            content={
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">UV Protection to Prevent Fading</h3>
                  <p>
                    Ultraviolet (UV) rays from the sun can cause significant damage to flooring, furniture, and décor near your front door. Over time, prolonged exposure leads to fading and deterioration. Window film can block up to 99% of harmful UV rays, preserving the appearance and lifespan of your home's interior. This is especially beneficial for homes with large glass doors that let in a lot of sunlight.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Improved Energy Efficiency</h3>
                  <p>
                    Window film can help regulate indoor temperatures by reducing heat gain in the summer and heat loss in the winter. Tinted or reflective films minimize the amount of solar heat entering your home, lowering cooling costs during warm months. In colder seasons, insulating films help retain warmth, making your home more energy-efficient year-round. This translates to lower energy bills and a more comfortable living space.
                  </p>
                </div>
              </div>
            }
          />
        </div>

        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
