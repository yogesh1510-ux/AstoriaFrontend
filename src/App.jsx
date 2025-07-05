import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Form from "./components/Form";
import Footer from "./Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const description = `Royal living is reimagined as Astoria Royals, a
luxurious project of spacious 4 & 3 BHK homes.
Thoughtful layout and optimal use of space are
not the only defining attributes of this gem of a
residence; it also boasts a massive array of
amenities. Tucked in a fast-developing location
and constructed with precision in mind to
bring to you a lifestyle that resonates with the
name of the project itself.`;

const title = `Where
prestige
takes
residence`;

const infoContent = {
  intro1: {
    title: `Where\nprestige\ntakes\nresidence`,
    description: `Royal living is reimagined as Astoria Royals, a
luxurious project of spacious 4 & 3 BHK homes.
Thoughtful layout and optimal use of space are
not the only defining attributes of this gem of a
residence; it also boasts a massive array of
amenities. Tucked in a fast-developing location
and constructed with precision in mind to
bring to you a lifestyle that resonates with the
name of the project itself.`,
  },
  intro2: {
    title: `A stellar\nlineup\nof luxuries`,
    description: `Luxury isn't a label at Astoria Royals, it is a
full-blown experience. From indulgent
leisure spaces and wellness facilities to
top-tier entertainment, every amenity is
designed to surpass expectations.
Whatever you desire, chances are, it’s
already waiting for you.`,
  },

  intro3: {
    title: `A landmark\ndestination for\nelevated\nliving`,
    description: `Ravet is where Pune's future is unfolding.
Tucked between the Pune-Mumbai
Expressway and the Katraj-Dehu Bypass,
this rapidly developing suburban
neighbourhood connects you to wherever
you want to be without the usual hassle. It
owes its incredible connectivity to the old
and new Mumbai highways, the
Aundh-Ravet BRTS road, and Akurdi
Railway Station. Top schools, business hubs,
entertainment enclaves, healthcare
facilities and other essentials are all within
close proximity. This isn't just a convenient
location, but a smart one.`,
  },
};

function App() {
  return (
    <>
      <Hero />
      <Info
        title={infoContent.intro1.title}
        description={infoContent.intro1.description}
      />
      <Form />
      <Info
        title={infoContent.intro2.title}
        description={infoContent.intro2.description}
      />
      <Info
        title={infoContent.intro3.title}
        description={infoContent.intro3.description}
      />

      <Footer />

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
