import React from 'react';
import goalImg from '../../assets/img/normal/goal_1-1.png';
import goalIcon1 from '../../assets/img/icon/goal-icon_1-1.svg';
import goalIcon2 from '../../assets/img/icon/goal-icon_1-2.svg';

const GoalSection = () => {
  return (
    <>
      {/* Goal Area */}
      <section className="goal-area space">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-2 text-lg-end">
              <div className="goal-thumb-1 mb-40 mb-lg-0">
                <img src={goalImg} alt="img" />
                <div className="goal-badge-wrap">
                  <div className="goal-badge">
                    We Have Train More Than
                    <span className="counter-number">1580</span>+ Students
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="title-area">
                <span className="sub-title">RJ Bodybuilder Training Goal </span>
                <h2 className="sec-title">
                  Unlock Your Full Potential, Achieve Your Fitness Goals.
                </h2>
              </div>
              <div className="about-grid">
                <div className="about-grid_icon">
                  <img src={goalIcon1} alt="img" />
                </div>
                <div className="about-grid_content">
                  <h4 className="about-grid_title">Free Fitness Training</h4>
                  <p className="about-grid_text">
                    Pedal your way to fitness in our specialized indoor cycling
                    studio. Equipped with stationary bikes...
                  </p>
                </div>
              </div>
              <div className="about-grid">
                <div className="about-grid_icon">
                  <img src={goalIcon2} alt="img" />
                </div>
                <div className="about-grid_content">
                  <h4 className="about-grid_title">Cardio and Strength</h4>
                  <p className="about-grid_text">
                    Pedal your way to fitness in our specialized indoor cycling
                    studio. Equipped with stationary bikes...
                  </p>
                </div>
              </div>
              <a className="btn btn-border2" href="#">Read Details</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GoalSection;