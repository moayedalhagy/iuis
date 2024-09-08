import Hero from "./components/Sections/Hero";
import Intro from "./components/Sections/Intro";
import Video from "./components/Sections/Video";
import Signin from "./components/Sections/Signin";
import LatestNews from "./components/Sections/LatestNews";

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <LatestNews />
      <Video />
      <Signin />
    </main>
  );
}
