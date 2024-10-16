import Footer from "../common/Footer";
import Header from "../common/Header";
import Hero from "../common/Hero";
import ConstructionImg from "../../assets/images/construction2.jpg";

const Projects = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality. Integrity. Value."
          heading="Our Projects"
          text="We excel at transforming visions into reality <br /> through
            outstanding craftsmanship and precise."
        />
      </main>
      <section className="section-3 bg-light py-5">
        <div className="container py-5">
          <div className="section-header text-center">
            <span>Our Projects</span>
            <h2>Discover our diverse range of projects</h2>
            <p>
              We offer a diverse array of construction services, spanning
              residential, commercial, and insdustrial projects.
            </p>
          </div>
          <div className="row pt-4">
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ConstructionImg} alt="" className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Kolkata Project</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin vestibulum augue at ex eleifend ultricies. Praesent
                      sagittis turpis tortor, sit amet ultrices libero
                      pellentesque at.
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ConstructionImg} alt="" className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>New Delhi Project</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin vestibulum augue at ex eleifend ultricies. Praesent
                      sagittis turpis tortor, sit amet ultrices libero
                      pellentesque at.
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ConstructionImg} alt="" className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Kanpur Project</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin vestibulum augue at ex eleifend ultricies. Praesent
                      sagittis turpis tortor, sit amet ultrices libero
                      pellentesque at.
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ConstructionImg} alt="" className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Lucknow Project</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin vestibulum augue at ex eleifend ultricies. Praesent
                      sagittis turpis tortor, sit amet ultrices libero
                      pellentesque at.
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ConstructionImg} alt="" className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Lucknow Project</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin vestibulum augue at ex eleifend ultricies. Praesent
                      sagittis turpis tortor, sit amet ultrices libero
                      pellentesque at.
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ConstructionImg} alt="" className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Lucknow Project</h3>
                  </div>
                  <div className="service-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin vestibulum augue at ex eleifend ultricies. Praesent
                      sagittis turpis tortor, sit amet ultrices libero
                      pellentesque at.
                    </p>
                  </div>
                  <a href="#" className="btn btn-primary small">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
