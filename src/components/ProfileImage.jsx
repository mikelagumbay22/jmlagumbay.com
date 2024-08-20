import ProfilePic from "../assets/ProfilePic.png";
import styles from "./ProfileImage.module.css";
import About from "./About";

function ProfileImage() {
  return (
    <>
      <div className={styles.container}>
        <img src={ProfilePic} alt="JM Lagumbay" className={styles.ProfilePic} />
        <About />
      </div>
    </>
  );
}

export default ProfileImage;
