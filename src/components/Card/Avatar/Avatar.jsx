// AvatarWithStatus.js

import React from "react";
import styles from "./Avatar.module.css";

const AvatarWithStatus = ({ statusColor, grouping, indashBoard }) => {
  return (
    <>
      {indashBoard ? (<div className={styles.avatarContainer}>
        <img
          src={
            "data:image/png;base64,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"
          }
          alt="MG"
          className={styles.avatar}
        />
        <span
          className={styles.status}
          style={{ backgroundColor: statusColor }}
        />
      </div>) : (<div></div>)}


      {/* {grouping !== undefined && grouping !== "user" ? (
        <div className={styles.avatarContainer}>
          <img
            src={
              "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-caFI7LjxM-erobG_E-_OF-u1iIIUAvM3vqq3pqZIAZ2XQKoV"
            }
            alt="MG"
            className={styles.avatar}
          />
          <span
            className={styles.status}
            style={{ backgroundColor: statusColor }}
          />
        </div>
      ) : (
        <div></div>
      )} */}

      {/* <div className={styles.avatarContainer}>
        <img
          src={
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-caFI7LjxM-erobG_E-_OF-u1iIIUAvM3vqq3pqZIAZ2XQKoV"
          }
          alt="MG"
          className={styles.avatar}
        />
        <span
          className={styles.status}
          style={{ backgroundColor: statusColor }}
        />
      </div> */}
    </>
  );
};

export default AvatarWithStatus;
