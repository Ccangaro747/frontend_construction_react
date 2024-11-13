import Footer from "../common/Footer";
import Header from "../common/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className="dashboard">
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              <div className="card shadow border-0">
                <div className="card-body">
                  <h4>Sidebar</h4>
                </div>
              </div>
              {/*Sidebar*/}
            </div>
            <div className="col-md-9 dashboard">
              {/*Dashboard*/}
              <div className="card shadow border-0">
                <div className="card-body d-flex justify-content-center align-items-center">
                  <h4>Welcome to admin console</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;