import Navigation from "../components/Navigation";
import About from "../components/About";
import Header from "../components/Header";
import ProfileImage from "../components/ProfileImage";
import SocialMedia from "../components/SocialMedia";
import Stacks from "../components/Stacks";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";

function Homepage() {
  return (
    <>
      <Navigation />
      <div id="about">
        <Header />
      </div>
      <SocialMedia />
      <ProfileImage />
      <Stacks /> <About />
      <div id="resume">
        <WorkExperience />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </>
  );
}

export default Homepage;
