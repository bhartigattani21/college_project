// import React from "react";
// import "../Card/card.css";
// // import profile from "../../assets/demo.png"

// function Card() {
//   return (
//     <>
//       <div className="main flex-gap-10">
//         <div className="top">
//           <h3>CAM-4</h3>
//           <img
//             src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-caFI7LjxM-erobG_E-_OF-u1iIIUAvM3vqq3pqZIAZ2XQKoV"
//             alt="profile photos"
//           ></img>
//           <div></div>
//         </div>
//         <div>
//           <h3 className="title">Add Multi-Language Support</h3>
//         </div>

//         <div className="lower">
//           <div className="first">...</div>
//           <div className="second">
//             <div></div>
//             <h4>Feature Request</h4>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Card;
// FeatureRequestCard.js

import React from "react";
import styles from "./Card.module.css";
import AvatarWithStatus from "./Avatar/Avatar";
const FeatureRequestCard = ({ id, title, tag,grouping }) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className={styles.headerText}>{id}</span>
          <span className={styles.statusBubble}></span>
          <AvatarWithStatus statusColor={"green"} grouping={grouping} indashBoard={grouping!=="user"}/>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <div  className={styles.inside}>
            <div className={styles.nafl}>    ...    </div>
            <div className={styles.dot}></div>
            <button className={styles.featureRequestButton}> {tag} </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureRequestCard;
