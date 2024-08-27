import Navigation from "../components/Navigation";
import ProfileImage from "../components/ProfileImage";
import Stacks from "../components/Stacks";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import classes from "./Homepage.module.css";

function Homepage() {
  return (
    <>
      <div className={classes.homepagecontainer}>
        <div id="about">
          <Navigation />
        </div>


        <ProfileImage />

        <Stacks />
        <div id="resume">
          <WorkExperience />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
    </>
  );
}

export default Homepage;
