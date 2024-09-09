import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Goals from "./components/Goals";
import Video from "./components/Video";
import Signin from "./components/Signin";
import IdFile from "./components/IdFile";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Goals />
      <Video />
      <IdFile />
      <Signin />
    </main>
  );
}
