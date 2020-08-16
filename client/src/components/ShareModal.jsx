import React from 'react';
import styles from '../ShareModal.css';

const ShareModal = ({showModal, handleClose}) => {
   const showHideClassName = showModal ? 'displayShare' : 'displayShareNone';
  if (showModal === false) {
    return null;
  }
    return (
    <div className={styles.showHideClassName}>
      <div className={styles.shareModal}>
      <button className={styles.closeBtn} onClick={handleClose}> X </button>
        <div className={styles.gridModal}>
          <div className={styles.title}>Share this place with <br></br>friends and family</div>
          <div className={styles.l1}>______________________________________</div>
          <div className={styles.facebookIcon}><i className="fab fa-facebook-f"></i></div>
          <div className={styles.facebook}>Facebook</div>
          <div className={styles.l2}>______________________________________</div>
          <div className={styles.twitterIcon}><i className="fab fa-twitter"></i></div>
          <div className={styles.twitter}>Twitter</div>
          <div className={styles.l3}>______________________________________</div>
          <div className={styles.copyIcon}><i className="fas fa-copy"></i></div>
          <div className={styles.copy}>CopyLink</div>
          <div className={styles.l4}>______________________________________</div>
          <div className={styles.emailIcon}><i className="fas fa-envelope"></i></div>
          <div className={styles.email}>Email</div>
          <div className={styles.l5}>______________________________________</div>
          <div className={styles.smsIcon}><i className="fas fa-comment-dots"></i></div>
          <div className={styles.sms}>SMS</div>
          <div className={styles.l6}>______________________________________</div>
          <div className={styles.messangerIcon}><i className="fab fa-facebook-messenger"></i></div>
          <div className={styles.messanger}>Messenger</div>
          <div className={styles.l7}>______________________________________</div>
          <div className={styles.whatsAppIcon}><i className="fab fa-whatsapp"></i></div>
          <div className={styles.whatsApp}>WhatsApp</div>
          <div className={styles.l8}>______________________________________</div>
          <div className={styles.embedIcon}><i className="fas fa-code"></i></div>
          <div className={styles.embed}>Embed</div>
          <div className={styles.l9}>______________________________________</div>
        </div>
      </div>
    </div>
    );
};

export default ShareModal;
