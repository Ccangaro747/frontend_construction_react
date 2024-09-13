import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import AboutImg from '../../assets/images/about-us.jpg'


const Home = () => {
  return (
    <>
    <header>
      <div className="container py-3">
        <Navbar expand="lg">
          <Navbar.Brand href="#home" className='logo'>
            <span>UrbanEdge </span>Constructions
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
              <Nav.Link href="#link" className="nav-link">About Us</Nav.Link>
              <Nav.Link href="#link" className="nav-link">Services</Nav.Link>
              <Nav.Link href="#link" className="nav-link">Projects</Nav.Link>
              <Nav.Link href="#link" className="nav-link">Blogs</Nav.Link>
              <Nav.Link href="#link" className="nav-link">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
    <main>
      {/*Hero section*/}
      <section className='section-1'>
        <div className='hero d-flex align-items-center'>
          <div className="container-fluid">
            <div className="text-center">
              <span>Welcome Amazing Constructions</span>
              <h1> Crafting dreams with <br />precision and excellence.</h1>
              <p>We excel at transforming visions into reality through outstanding craftsmanship and precise <br />attention to detail. With years of experience and a dedication to quality</p>
              <div className="mt-4">
                <a className="btn btn-primary">Contact Now</a>
                <a className="btn btn-secondary ms-2">View Projects</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*About us section*/}
      <section className='section-2 py-5'>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <img src={AboutImg} className="w-100" />
            </div>
            <div className="col-md-6">
              <span>about us</span>
              <h2>Crafting structures that last a lifetime</h2>
              <p>Building enduring structures requires a comprehensive approach that combines advanced materials, resilient design, routine maintenance, and sustainable practices. By drawing on hisotircal insights and utilizing modern technology.</p>
              <p>Designing structures that stand the test of time involves a seamless blend of cutting-edge materials, durable design, ongoing upkeep, and eco-friendly practices. By combining lessons from the past with the power of modern technology.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3">
            <h3>UrbanEdge Constructions</h3>
              <div className="pe-5">
                <p>Our post-construction services give you peace of mind knowing that we are still here for you even after.</p>
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
                Av. del Trabajo 1234 <br />Ciudad del Progreso, Buenos Aires, Argentina
              </p>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Home;
