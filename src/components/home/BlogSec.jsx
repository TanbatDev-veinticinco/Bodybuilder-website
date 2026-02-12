import React from 'react';
import blog1 from '../../assets/img/blog/blog_1_1.png';
import blog2 from '../../assets/img/blog/blog_1_2.png';
import blog3 from '../../assets/img/blog/blog_1_3.png';
import blog4 from '../../assets/img/blog/blog_2_1.png';
import blog5 from '../../assets/img/blog/blog_2_2.png';
import blog6 from '../../assets/img/blog/blog_2_3.png';
import blogCardBg from '../../assets/img/blog/blog_card1_bg.png';

const BlogSec = () => {
  return (
    <div>
      {/* Blog Area */}
      <section className="blog-area space bg-smoke3">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Blog Posts </span>
            <h2 className="sec-title">Read Our Latest Articles</h2>
          </div>
          <div
            className="row global-carousel blog-slider"
            data-slide-show="3"
            data-lg-slide-show="2"
            data-md-slide-show="2"
            data-sm-slide-show="1"
            data-xs-slide-show="1"
            data-dots="false"
            data-md-dots="true"
          >
            <div className="col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-img">
                  <img
                    src={blog1}
                    alt="Nutrition for muscle growth"
                  />
                </div>
                <div
                  className="blog-content"
                  style={{ backgroundImage: `url(${blogCardBg})` }}
                >
                  <div className="blog-meta">
                    <a href="#"><i className="fal fa-calendar"></i>10 Jan 2024</a>
                    <a href="#"><i className="far fa-user"></i>by RJ</a>
                  </div>
                  <h3 className="blog-title box-title">
                    <a href="#">Nutrition Tips for Muscle Growth & Fat Loss</a>
                  </h3>
                  <p className="blog-text">
                    Learn how proper nutrition supports muscle growth, fat loss,
                    and recovery, with simple strategies that fit real lifestyles.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-img">
                  <img
                    src={blog2}
                    alt="Strength training fundamentals"
                  />
                </div>
                <div
                  className="blog-content"
                  style={{ backgroundImage: `url(${blogCardBg})` }}
                >
                  <div className="blog-meta">
                    <a href="#"><i className="fal fa-calendar"></i>14 Jan 2024</a>
                    <a href="#"><i className="far fa-user"></i>by RJ</a>
                  </div>
                  <h3 className="blog-title box-title">
                    <a href="#">How to Build Real Strength Without Injury</a>
                  </h3>
                  <p className="blog-text">
                    Discover proven strength training principles that help you
                    lift heavier, move better, and stay injury-free long term.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-img">
                  <img
                    src={blog3}
                    alt="Beginner training mistakes"
                  />
                </div>
                <div
                  className="blog-content"
                  style={{ backgroundImage: `url(${blogCardBg})` }}
                >
                  <div className="blog-meta">
                    <a href="#"><i className="fal fa-calendar"></i>18 Jan 2024</a>
                    <a href="#"><i className="far fa-user"></i>by RJ</a>
                  </div>
                  <h3 className="blog-title box-title">
                    <a href="#">Beginner Gym Mistakes That Kill Progress</a>
                  </h3>
                  <p className="blog-text">
                    Avoid common training mistakes that slow results. Learn how
                    proper form, programming, and consistency make all the
                    difference.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-img">
                  <img
                    src={blog4}
                    alt="Custom training programs"
                  />
                </div>
                <div
                  className="blog-content"
                  style={{ backgroundImage: `url(${blogCardBg})` }}
                >
                  <div className="blog-meta">
                    <a href="#"><i className="fal fa-calendar"></i>22 Jan 2024</a>
                    <a href="#"><i className="far fa-user"></i>by RJ</a>
                  </div>
                  <h3 className="blog-title box-title">
                    <a href="#">Why Customized Training Beats Generic Programs</a>
                  </h3>
                  <p className="blog-text">
                    Learn why personalized training programs deliver faster,
                    safer, and more sustainable results compared to
                    one-size-fits-all plans.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-img">
                  <img
                    src={blog5}
                    alt="Online coaching vs personal training"
                  />
                </div>
                <div
                  className="blog-content"
                  style={{ backgroundImage: `url(${blogCardBg})` }}
                >
                  <div className="blog-meta">
                    <a href="#"><i className="fal fa-calendar"></i>26 Jan 2024</a>
                    <a href="#"><i className="far fa-user"></i>by RJ</a>
                  </div>
                  <h3 className="blog-title box-title">
                    <a href="#">Online Coaching vs In-Person Training</a>
                  </h3>
                  <p className="blog-text">
                    Explore the benefits of online and in-person coaching and find
                    out which training style fits your goals and lifestyle best.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-card">
                <div className="blog-img">
                  <img
                    src={blog6}
                    alt="Consistency in fitness"
                  />
                </div>
                <div
                  className="blog-content"
                  style={{ backgroundImage: `url(${blogCardBg})` }}
                >
                  <div className="blog-meta">
                    <a href="#"><i className="fal fa-calendar"></i>30 Jan 2024</a>
                    <a href="#"><i className="far fa-user"></i>by RJ</a>
                  </div>
                  <h3 className="blog-title box-title">
                    <a href="#">Why Consistency Is the Key to Transformation</a>
                  </h3>
                  <p className="blog-text">
                    Motivation fades, but consistency builds results. Learn how
                    structure, discipline, and accountability transform your
                    physique over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSec;