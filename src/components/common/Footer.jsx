const Footer = () => {
  return (
    <footer>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <h3 className="mb-3">UrbanEdge Constructions</h3>
            <div className="pe-5">
              <p>
                Our post-construction services give you peace of mind knowing
                that we are still here for you even after.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Our Services</h3>
            <ul>
              <li>
                <a href="">Specialy Construction</a>
              </li>
              <li>
                <a href="">Civil Construction</a>
              </li>
              <li>
                <a href="">Residential Construction</a>
              </li>
              <li>
                <a href="">Corporate Construction</a>
              </li>
              <li>
                <a href="">Building Construction</a>
              </li>
              <li>
                <a href="">Industrial Construction</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Quick Links</h3>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Contact Us</h3>
            <ul>
              <li>
                <a href="">0800-10-456789</a>
              </li>
              <li>
                <a href="">info@example.com</a>
              </li>
              <p>
                Av. del Trabajo 1234 <br />
                Ciudad del Progreso, Buenos Aires, Argentina
              </p>
            </ul>
          </div>
          <hr />
          <div className="text-center pt-4">
            Copyright © 2024 UrbanEdge Constructions. All Right Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
