import React, { useRef, useState,useEffect } from 'react'
import "./ShowItem.css";
import SimpleImageSlider from "react-simple-image-slider";



function ShowItem(props) {

    const [hover, sethover] = useState(false);
    const [slide, setslide] = useState(false);
    

    const ChangeToHover=()=>{
       
            sethover(true);
       
      
        
    }


    const ChangetoNotHover=()=>{
       
        sethover(false);
        }






// console.log(hover);
   
    // console.log(props.brand)
    const images = [
        { url: props.imgs[0].src },
        { url:  props.imgs[1].src},
        { url: props.imgs[2].src },
        { url:  props.imgs[3].src},
        // { url: props.imgs[4].src },
        // { url: props.imgs[5].src },
        
      ];
    // console.log(props.imgs)
    return (
        <div className='wrapper'onMouseOver={()=>{
            ChangeToHover();

         }}
         onMouseOut={()=>{
             ChangetoNotHover();
             
            
         }}>
            <div className='product'>
            
                <div className='product-image-container' onMouseOver={()=>{
                    console.log("slides")
                    setslide(true)
                }}>
                    {/* {console.log(hover)} */}

                    {slide ? <SimpleImageSlider
               width={300}
               height={300}
                images={images}
               
                autoPlay={true}
                className='image-item'
                
                /> : <SimpleImageSlider
                width={300}
                height={300}
                 images={images}
                
                 autoPlay={false}
                 className='image-item'
                 
                 />}
                {/* <SimpleImageSlider
               width={300}
               height={300}
                images={images}
               
                autoPlay={slide}
                className='image-item'
                
                /> */}
                {/* <img src={props.imgs[0].src} alt="pic" className='image-item'/> */}

                 {props.rate &&  <div className='rating'>
                    {/* {console.log(props.rate.toFixed(2))} */}
                    {props.rate.toFixed(2)}
                    <span className='start-bg-rating'>

                    </span>

                 </div>}
                

                </div>
                <div className='product-info'>

                   <h4>{props.brand}</h4>
                   <p style={{"marginBottom":"0"}}>{props.info}</p>



                    </div>

                 
                    <div className='product-price'>
                   <span className='product-discountPrice'>
                    Rs . {props.show}
                    </span>
                    <span className="product-strike">{props.cut}
                    </span>
                    <span className='discount-percen'>{props.disc}

                    </span>


                    </div>


            


                </div>
        </div>
    )
}

export default ShowItem
