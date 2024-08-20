import ProfilePic from '../assets/ProfilePic.png';
import styles from './ProfileImage.module.css';

function ProfileImage() {
  return (  
    <>    
      <img src={ProfilePic} alt="JM Lagumbay" className={styles.ProfilePic}/>
    </>
  );
}

export default ProfileImage;
