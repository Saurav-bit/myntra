import React, { useEffect, useRef, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "./GridImages.css";
import ReactImageZoom from "react-image-zoom";
import { ChangeCircle } from "@mui/icons-material";

function GridImages(props) {
  const [zoom, setzoom] = useState(false);

  const zo = useRef(false);
  useEffect(() => {
    setzoom(zoom);
    // zo.current=!zo.current;
  })



  const zoom_set = {
    zoomPosition: "original",
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: `${props.img}`,
  };
  const mystyle = {
    backgroundImage: `url(${props.img})`,
  };
//   console.log(zo.current+ " **zo")
  return (
    <div
      className="grid-outer"
      onMouseOver={() => {
        setzoom(true);
   
        // console.log(zo.current);
        //    console.log(zoom)
      }}
      onMouseOut={() => {
        // console.log("out")
        
        setzoom(false)
        // zo.current = false;
      }}
    >
      {/* {console.log(zo.current+ " **zo")} */}
{/* {console.log(zoom)} */}
      <div className="image-grid-container" onMouseOver={() => {}}>
        {/* <ReactImageZoom {...zoom_set} ></ReactImageZoom>
         */}

        <div className={`${zoom && "zoomed"}`}>
          {/* <ReactImageZoom {...zoom_set} className='grid-final-image'/> */}
          <img src={`${props.img}`} alt="pic" className="grid-final-image" />
          {/* </ReactImageZoom> */}
        </div>
      </div>
    </div>
  );
}

export default GridImages;
