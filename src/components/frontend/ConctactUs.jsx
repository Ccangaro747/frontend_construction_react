import Footer from "../common/Footer";
import Header from "../common/Header";
import Hero from "../common/Hero";

const ConctactUs = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          preHeading="Quality. Integrity. Value."
          heading="Contact Us"
          text="We excel at transforming visions into reality <br /> through
            outstanding craftsmanship and precise."
        />
      </main>
      <section className="section-9 py-5">
        <div className="container">
          <div className="section-header text-center">
            <span></span>
            <h2>Contact Us</h2>
            <p>
              Our dedicated experts are here to help you with any of your
              questions, contact us by <br /> filling out the form below and we
              will be in touch shortly.
            </p>
          </div>

          <div className="row mt-5">
            <div className="col-md-3">
              <div className="card shadow border-0 mb-3">
                <div className="card-body p-4">
                  <h3>Call Us</h3>
                  <div>
                    <a href="">(888-000-0000)</a>
                  </div>
                  <div>
                    <a href="">(222-123-12345)</a>
                  </div>
                  <h3 className="mt-4">You can write us:</h3>
                  <div>
                    <a href="#">example@correo.com</a>
                  </div>
                  <h3 className="mt-4">Address</h3>
                  <div>
                    Av. del Libertador 902,
                    <br /> Vicente López, Buenos Aires, Argentina
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card shadow border-0">
                <div className="card-body p-5">
                  <form action="">
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="" className="fomr-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Enter Name"
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="" className="fomr-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="" className="fomr-label">
                          Phone
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Phone No."
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="" className="fomr-label">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Subject"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="" className="fomr-label">
                        Message
                      </label>
                      <textarea
                        name=""
                        placeholder="Message"
                        rows={4}
                        id=""
                        className="form-control form-control-lg"
                      ></textarea>
                    </div>
                    <button className="btn btn-primary large mt-3">
                        Submit
                    </button>
                  </form>
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

export default ConctactUs;