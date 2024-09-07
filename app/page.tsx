import Hero from "./components/Sections/Hero";
import Intro from "./components/Sections/Intro";
import Goals from "./components/Sections/Goals";
import Video from "./components/Sections/Video";
import Signin from "./components/Sections/Signin";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Goals />
      <Video />
      <Signin />
    </main>
  );
}
