import Footer from "../common/Footer";
import Header from "../common/Header";
import Hero from "../common/Hero";
import ServiceImg from "../../assets/images/construction1.jpg";

const Services = () => {
  return (
    <>
      <Header />
      <Hero
        preHeading="Quality. Integrity. Value."
        heading="Services"
        text="We excel at transforming visions into reality <br /> through
            outstanding craftsmanship and precise."
      />

      <section className="section-3 bg-light py-5">
        <div className="container py-5">
          <div className="section-header text-center">
            <span>Our Services</span>
            <h2>Our construction services</h2>
            <p>
              We offer a diverse array of construction services, spanning
              residential, commercial, and insdustrial projects.
            </p>
          </div>
          <div className="row pt-4">
            <div className="col-md-4 col-lg-4">
              <div className="item">
                <div className="service-image">
                  <img src={ServiceImg} alt="" className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Specialy Construction</h3>
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
                  <img src={ServiceImg} alt="" className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Corporate Construction</h3>
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
                  <img src={ServiceImg} alt="" className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Civil Construction</h3>
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
                  <img src={ServiceImg} alt="" className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Residential Construction</h3>
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
                  <img src={ServiceImg} alt="" className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Residential Construction</h3>
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
                  <img src={ServiceImg} alt="" className="w-100" />
                </div>
                <div className="service-body">
                  <div className="service-title">
                    <h3>Residential Construction</h3>
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

export default Services;
