
import "./index.css";
import pnc from "./images/pnc.png";
import je from "./images/je.jpg";
import MIR from "./images/MIR.jpg";
import rose from "./images/rose.jpg";
import jaz from "./images/jaz.jpg";
import mj from "./images/mj.jpg";
import jii from "./images/jii.jpg";
import jc from "./images/jc.jpg";

function About() {
  return (
    <>
      <div className="tex">
        <img src={pnc} alt="" className="hed-pic" />
        <h1 className="team-title">MEET THE TEAM!</h1>

        <div className="members-con">
          <div className="member-card">
            <h5>Miriam Mulawin</h5>
          <img src={MIR} alt="" className="profile-pic"/>
            <p>
              <em>
                "A dedicated IT student who believes that every line of code
                brings her closer to achieving her goals"
              </em>
            </p>
            <p>
              Position: Leader <br></br>
              mulawinmiriam75@gmail.com
            </p>
          </div>

          <div className="member-card">
            <h5>Rose Bren Dungo</h5>
          <img src={rose} alt="" className="profile-pic"/>
            <p>
              <em>
                "A determined IT student preparing to be part of the digital
                future."
              </em>
            </p>
            <p>
              Position: Member<br></br>
              dungorosebren34@gmail.com
            </p>
          </div>

          <div className="member-card">
            <h5>Jazmine Cruz</h5>
          <img src={jaz} alt="" className="profile-pic "/>
            <p>
              <em>
                "An IT student who sees technology as a tool to turn small ideas
                into big possibilities"
              </em>
            </p>
            <p>
              Position: Member<br></br>
              cruzjazminee50@gmail.com
            </p>
          </div>

          <div className="member-card">
            <h5>Maryje Clasin</h5>
          <img src={je} alt="" className="profile-pic" />
            <p>
              <em>
                "Information Technology turns imagination into innovation,
                building bridges between people and possibilities"
              </em>
            </p>
            <p>
              Position: Member<br></br>
              clasinmaryje56@gmail.com
            </p>
          </div>

          <div className="member-card">
            <h5>Michael Velasquez</h5>
          <img src= {mj} alt="" className="profile-pic" />
            <p>
              <em>
                "As both an artist and IT student, I am passionate about
                transforming ideas into creative, functional solutions that
                bridge design and technology."
              </em>
            </p>
            <p>
              Position: Member<br></br>
              velasquezmichaeljabez24@gmail.com
            </p>
          </div>

          <div className="member-card">
            <h5>Jehus Cabalejo</h5>
          <img src={jii} alt="" className="profile-pic " />
            <p>
              <em>
                "As an IT student, I'm defining my future with every line of
                code I write."
              </em>
            </p>
            <p>
              Position: Member<br></br>
              cabalejojehus55@gmail.com
            </p>
          </div>

          <div className="member-card">
            <h5>Jesus Cenido</h5>
          <img src={jc} alt="" className="profile-pic" />
            <p>
              <em>
                "As an IT student, I'm defining my future with every line of
                code I write."
              </em>
            </p>
            <p>
              Position: Member<br></br>
              cenidojesus2203308@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
 