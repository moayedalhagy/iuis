import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Goals from "./components/Goals";
import Video from "./components/Video";
import Signin from "./components/Signin";

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
