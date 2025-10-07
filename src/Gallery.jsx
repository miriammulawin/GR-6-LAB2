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
  // If want to add more photos, just add a new photo down in the array/list
  const images = [
    pngG01, pngG02, pngG03, pngG04, pngG05, 
    pngG06, pngG07, pngG08, pngG09, pngG10, 
    pngG11, pngG12, pngG13, pngG14, pngG15,
  ];

  return (
    // With Lazy Loading
    // Where the images will load...
    // This gets the image from the array
    <div className="gallery-container">
      {images.map((src, index) => (
        <div className="gallery-item" key={index}>
          <img src={src} alt={`PNC Gallery ${index + 1}`} loading="lazy" />
        </div>
      ))}
    </div>
  );
}
export default Gallery;