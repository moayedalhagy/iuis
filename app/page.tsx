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
      <div className="mt-20 bg-red-600">
        <IdFile />
      </div>
      <Signin />
    </main>
  );
}
