import pncimg1 from "./images/pncimg1.jpg";
import p from "./images/pamantasan.png";
import pngG01 from "./images/Gallery/pncGallery01.jpg";
import pngG02 from "./images/Gallery/pncGallery02.jpg";
import pngG03 from "./images/Gallery/pncGallery03.jpg";
import pngG04 from "./images/Gallery/pncGallery04.jpg";
import pngG05 from "./images/Gallery/pncGallery05.jpg";
import pngG06 from "./images/Gallery/pncGallery06.jpg";
import pngG07 from "./images/Gallery/pncGallery07.jpg";
import pngG08 from "./images/Gallery/pncGallery08.jpg";
import pngG09 from "./images/Gallery/pncGallery09.jpg";
import pngG10 from "./images/Gallery/pncGallery10.jpg";
import pngG11 from "./images/Gallery/pncGallery11.jpg";
import pngG12 from "./images/Gallery/pncGallery12.jpg";
import pngG13 from "./images/Gallery/pncGallery13.jpg";
import pngG14 from "./images/Gallery/pncGallery14.jpg";
import pngG15 from "./images/Gallery/pncGallery15.jpg";

function Gallery() {
   const images = [
     pngG01,
     pngG02,
     pngG03,
     pngG04,
     pngG05,
     pngG06,
     pngG07,
     pngG08,
     pngG09,
     pngG10,
     pngG11,
     pngG12,
     pngG13,
     pngG14,
     pngG15,
   ];
  return (
    <>
      <div className="gallery px-5 mt-4 text-center">
        <img src={p} alt="" />
      </div>

      <div className="photo-container py-4 px-5">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="photo card h-100 border-0 shadow">
              <img src={pncimg1} alt="" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="caption card h-100 rounded-0 shadow">
              <div className="card-body px-5 py-5">
                <p>
                  The Pamantasan ng Cabuyao is a university in the city of
                  Cabuyao, province of Laguna, Philippines. It was founded by
                  then Mayor Proceso “Etok” D. Aguillo, through the enactment of
                  Municipal Ordinance 2003-059 approved on April 16, 2003. TO
                  OUR UNIVERSITY
                </p>

                <p>
                  On April 16, 2003, then-municipal mayor Proceso D. Aguillo
                  signed Municipal Ordinance No. 2003-059, “Ordinance
                  Establishing the Pamantasan ng Cabuyao (University of Cabuyao)
                  and Other Purposes,” creating the Pamantasan ng Cabuyao (PnC).
                  The institution began offering classes in business
                  administration, information technology, education, nursing,
                  and midwifery in June 2003. Before the Pamantasan ng Cabuyao
                  was founded, the Laguna State Polytechnic University (LSPU)
                  had a satellite campus at the Cabuyao National High School. A
                  memorandum of understanding between the mayor of Cabuyao
                  Municipality and the LSPU president served as the basis for
                  the LSPU’s operations. The LSPC-Cabuyao Campus began its
                  operation in 1993 and ended on March 31, 2003.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />

      <div className="gallery px-5  mb-3 text-center">
        <h1 className="fw-bold mb-2 mt-5">Explore Our University</h1>
        <p className="mb-5 text-muted ">
          Discover the vibrant learning environment, collaborative spaces, and
          the rich culture that shapes the experiences of our students and
          faculty alike.
        </p>
      </div>

      <div className="gallery-container px-5 mt-5">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`PNC Gallery ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

     
    </>
  );
}

export default Gallery;
