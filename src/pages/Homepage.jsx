import Navigation from "../components/Navigation";
import Header from "../components/Header";
import ProfileImage from "../components/ProfileImage";
import SocialMedia from "../components/SocialMedia";
import Stacks from "../components/Stacks";
import WorkExperience from "../components/WorkExperience";

function Homepage() {
  return (
    <>
      <Navigation />
      <Header />
      <SocialMedia />
      <ProfileImage />
      <Stacks />
      <WorkExperience />
    </>
  );
}

export default Homepage;
