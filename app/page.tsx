import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedBlogs from "./components/FeaturedBlogs";
import FeaturedVideos from "./components/FeaturedVideos";
import Footer from "./components/Footer";
import { FloatingNav } from "./components/ui/floating-navbar";


export default function Home() {
  return (
    <div>
      <FloatingNav
        navItems={[
          {
            name: "Home",
            link: "/",
          },
          {
            name: "About",
            link: "#About",
          },
          {
            name: "Contact",
            link: "#Contact",
          },
        ]}
      />
  
      <Hero />
      <About />
      <FeaturedBlogs />
      <FeaturedVideos />
      <Footer />
    </div>
  );
}