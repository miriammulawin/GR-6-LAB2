import pnc from "./images/pnc6.jpg";
import p from "./images/pamantasan.png"
import CHAS from "./images/CHAS.png"
import CAS from "./images/CAS.png";
import COED from "./images/COED.png";
import COE from "./images/COE.png";
import CCS from "./images/CCS.png";
import CBAA from "./images/CBAA1.png";

function Home() {
  return (
    <>
      <div className="banner position-relative">
        <img src={pnc} alt="pnc" className="pnc-banner image-fluid" />

        <div className="overlay-text position-absolute start-50 top-50 translate-middle text-center text-white">
          <h1 className="display-1 fw-bold">University of Cabuyao</h1>
          <p className="lead">
            Dangal ng Bayan, bringing pride and honor to the nation
          </p>
          <button className="btn py-2">ENROLL NOW</button>
        </div>
      </div>

      <div className="program-container mt-3">
        <div className="container text-center">
          <img src={p} alt="" className="py-3" />
          <hr />
          <h1 className="fw-bold mb-2 mt-5">Discover Our Programs</h1>
          <p className="mb-5 text-muted">
            Explore our academic programs designed to inspire learning, growth,
            and success for every student.
          </p>

          <div className="row g-5">
            <div className="program col-md-6">
              <div className="under-grad card  h-100">
                <div className="card-title text-center mt-4 fw-bold">
                  Under Graduate
                </div>
                <div className="card-body text-center px-5">
                  <p>Bachelor of Science in Accountancy</p>
                  <p>
                    Bachelor of Science in Business Administration Major in
                    Financial Management
                  </p>
                  <p>
                    Bachelor of Science in Business Administration Major in
                    Marketing Management
                  </p>
                  <p>Bachelor of Science in Computer Science</p>
                  <p>Bachelor of Science in Information Technology</p>
                  <p>Bachelor of Science in Nursing</p>
                  <p>Bachelor of Science in Psychology</p>
                  <p>Bachelor of Science in Computer Engineering</p>
                  <p>Bachelor of Science in Electronics Engineering</p>
                  <p>Bachelor of Science in Industrial Engineering</p>
                </div>
              </div>
            </div>

            <div className="program col-md-6">
              <div className="grad card h-100">
                <div className="card-title text-center mt-4 fw-bold">
                  Graduate
                </div>
                <div className="card-body text-center px-5">
                  <p>
                    Master of Arts in Education Major in Administration and
                    Supervision
                  </p>
                  <p>Master of Arts in Education Major in English</p>
                  <p>Master of Arts in Education Major in Filipino</p>
                  <p>Master of Arts in Education Major in Mathematics</p>
                  <p>Master of Arts in Education Major in Social Studies</p>
                  <p>Master of Arts in Business Administration</p>
                  <p>Master of Arts in Information Technology</p>
                  <p>Master of Arts in Psychology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <hr />
      </div>

      <div className="department py-5  ">
        <div className="container text-center">
          <h1 className="fw-bold mb-3">College Departments</h1>
          <p className="mb-5 text-muted">
            Our college departments are committed to providing quality education
            and fostering innovation across diverse fields of study.
          </p>

          <div className="row g-4 mt-5">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <img src={CCS} alt="" />
                  <h5 className="card-title text-center mt-3 px-5 fw-bold">
                    College of Computing Studies
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <img src={CBAA} alt="" />
                  <h5 className="card-title text-center mt-3 fw-bold">
                    College of Business, Accountancy and Administration
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <img src={COED} alt="" />
                  <h5 className="card-title text-center mt-3 fw-bold">
                    College of Education
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-3">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <img src={CAS} alt="" />
                  <h5 className="card-title text-center mt-3 fw-bold">
                    College of Arts and Science
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <img src={CHAS} alt="" />
                  <h5 className="card-title text-center mt-3 px-5 fw-bold">
                    College of Health and Allied Science
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <img src={COE} alt="" />
                  <h5 className="card-title text-center mt-3 fw-bold">
                    College of Engineering
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>


      <footer className="footer  text-white py-3 mt-5">
        <div className="container text-center">
     
          <h5 className="fw-bold mt-3">Pamantasan ng Cabuyao</h5>
          <p className="small ">
            Brgy. Banay-Banay, City of Cabuyao, Laguna, Philippines
          </p>
        </div>
      </footer>
    </>
  );
}

export default Home;
