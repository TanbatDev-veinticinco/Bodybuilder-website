import feature1 from "../../assets/img/bg/feature-card_bg1.png";
// import feature2 from "../../assets/img/icon/feature-icon1-1.svg";
// import feature3 from "../../assets/img/bg/feature-card_bg1.png";
// import feature4 from "../../assets/img/icon/feature-icon1-2.svg";
// import feature5 from "../../assets/img/bg/feature-card_bg1.png";
// import feature6 from "../../assets/img/icon/feature-icon1-3.svg";

// const FeatureSection = () => {
//   return (
//     <div>
//       {/* <!--==============================
//     feature Area  
//     ==============================--> */}
//       <div className="space">
//         <div className="container">
//           <div className="feature-area">
//             <div className="row gx-0">
//               <div className="col-lg-4">
//                 <div className="feature-card">
//                   <div className="feature-card_bg">
//                     <img src={feature1} alt="img" />
//                   </div>
//                   <div className="feature-card_icon">
//                     <img src={feature2} alt="img" />
//                   </div>
//                   <h6 className="feature-card_subtitle">Healthier Life</h6>
//                   <h4 className="feature-card_title">
//                     <a href="#">Build a Stronger, Healthier Body</a>
//                   </h4>
//                   <p className="feature-card_text">
//                     With expert guidance and structured training, you’ll develop
//                     strength, confidence, and consistency inside and outside the
//                     gym.
//                   </p>
//                   <a href="#" className="btn style2">
//                     View Training Options
//                   </a>
//                 </div>
//               </div>
//               <div className="col-lg-4">
//                 <div className="feature-card feature-card-active">
//                   <div className="feature-card_bg">
//                     <img src={feature3} alt="img" />
//                   </div>
//                   <div className="feature-card_icon">
//                     <img src={feature4} alt="img" />
//                   </div>
//                   <h6 className="feature-card_subtitle">Achieve Your Goals</h6>
//                   <h4 className="feature-card_title">
//                     <a href="#">Certified. Experienced. Results-Focused.</a>
//                   </h4>
//                   <p className="feature-card_text">
//                     RJ combines proven bodybuilding methods with modern training
//                     principles to help you reach your physique and strength
//                     goals safely and effectively.
//                   </p>
//                   <a href="#" className="btn style2">
//                     View Training Options
//                   </a>
//                 </div>
//               </div>
//               <div className="col-lg-4">
//                 <div className="feature-card">
//                   <div className="feature-card_bg">
//                     <img src={feature5} alt="img" />
//                   </div>
//                   <div className="feature-card_icon">
//                     <img src={feature6} alt="img" />
//                   </div>
//                   <h6 className="feature-card_subtitle">Train Day and Night</h6>
//                   <h4 className="feature-card_title">
//                     <a href="#">Flexible Training That Fits Your Life</a>
//                   </h4>
//                   <p className="feature-card_text">
//                     Busy schedule? No problem. Train in-person or online with
//                     programs designed to fit your routine without sacrificing
//                     results.
//                   </p>
//                   <a href="#" className="btn style2">
//                     View Training Options
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;

import { Link } from 'react-router-dom';
import { features } from '../data/siteData';
// import './FeatureSection.css';

const FeatureCard = ({ icon, subtitle, title, text, buttonText, buttonLink, active }) => {
  return (
    <div className="col-lg-4">
      <div className={`feature-card ${active ? 'feature-card-active' : ''}`}>
        <div className="feature-card_bg">
          <img src={feature1} alt="background" />
        </div>
        <div className="feature-card_icon">
          <img src={icon} alt={title} />
        </div>
        <h6 className="feature-card_subtitle">{subtitle}</h6>
        <h4 className="feature-card_title">
          <Link to={buttonLink}>{title}</Link>
        </h4>
        <p className="feature-card_text">{text}</p>
        <Link to={buttonLink} className="btn style2">{buttonText}</Link>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <div className="space">
      <div className="container">
        <div className="feature-area">
          <div className="row gx-0">
            {features.map((feature) => (
              <FeatureCard key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
