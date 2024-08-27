import ProfilePic from "../assets/ProfilePic.png";
import styles from "./ProfileImage.module.css";
import About from "./About";
import Header from "./Header";
import SocialMedia from "./SocialMedia";

function ProfileImage() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Header />
          <SocialMedia />
        </div>
        <div className={styles.imagecontainer}>
          <img
            src={ProfilePic}
            alt="JM Lagumbay"
            className={styles.ProfilePic}
          />
          <About />
        </div>
      </div>
    </>
  );
}

export default ProfileImage;
