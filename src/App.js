import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import ReactDOM from "react-dom";
import "./App.css";
import AddBanner from "./Components/AddBanner";
import MainFilter from "./Components/FilterSection/MainFilter";
import Location from "./Components/Location";
import Main from "./Components/Main/Main";
import NavBar from "./Components/NavBar";
import data from "./Data.js";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useParams,
} from "react-router-dom";
import GridImages from "./GridImages";
import SizeCircle from "./SizeCircle";

function App() {
  // const [gender, setgender] = useState("Men");
  // const [ls,setls]=useState([]);
  // const handleChange=(value)=>{
  //   setgender(value);

  // }

  // const filteredList=data.filter((item)=>{return item.gender===gender});

  // // console.log(gender)
  // const handlebrands=(val)=>{
  //   console.log(val);
  // }

  // console.log("app render")

  return (
    <Router>
      <div>
        <NavBar />
        <AddBanner />

        <Link to="/"></Link>
        <Link to="/new"></Link>
        {/* <div className='margin-all show-values'>
      <h6>Shirts For Men & Women</h6>

      </div>
      <div className='main-body'>
      <MainFilter GenderChange={handleChange} list={filteredList} brands={handlebrands}/>
      <Main filter_gender={gender} list={filteredList}/>
      </div> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new/:br" element={<New />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

const Home = () => {

  const check = useRef(0);
  
  // const handleCheck=()=>{
  //   check.current=check.current+1
  // }

  useEffect(() => {
    check.current=check.current+1;
   
  })
  const [gender, setgender] = useState("Men");
  const [ls, setls] = useState([]);
  const handleChange = (value) => {
    setgender(value);
  };

  const filteredList = data.filter((item) => {
    return item.gender === gender;
  });

  // console.log(gender)
  const handlebrands = (val) => {
    console.log(val);
  };

  return (
    <div>
      <Location />

      <div className="margin-all show-values">
        <h6>Shirts For Men & Women</h6>
      </div>
      <div className="main-body">
        <MainFilter
          GenderChange={handleChange}
          list={filteredList}
          brands={handlebrands}
        />
        <Main filter_gender={gender} list={filteredList} />
      </div>

  
    </div>
  );
};

const New = () => {
  // console.log(props)

  
 
  const { br } = useParams();
  // console.log(typeof(br));
  const id = parseInt(br);

  const obj = data.find((item) => {
    // console.log(item.productId)

    return item.productId === id;
  });
  console.log(obj);

  const sizes_array=obj.sizes.split(",");
  // console.log(sizes_array);
  return (
    <div className="new-wrapper">
      <div className="new-header">
        <div className="new-header-text">
          Home/
          Clothing / Men Clothing / Shirts / <span className="make_text-bold">{obj.brand} </span> Shirts / <span className="make_text-bold">More by {obj.brand} </span>
        </div>
      </div>

    <div className="inner-grid-wrapper">

   
      <div className="new-main-container">
        <div className="new-image-container">
          <GridImages img={obj.images[0].src}/>
          <GridImages img={obj.images[2].src}/>
          <GridImages img={obj.images[3].src}/>
          <GridImages img={obj.images[1].src}/>
         
        </div>

      </div>

      <div className="image-description-container">
        <div className="image-price-full">
          <h1 className="item-title">
            {obj.brand}
          </h1>
          <h1 className="item-name">
            {obj.additionalInfo}
            </h1>
            <div className="price-container">
              <div className="overall-rating">
                <div>

                {obj.rating.toFixed(2)}

                  </div>
                  <span className="sprite-logo">

                  </span>
                  <div className="index-sep">|
                  </div>
                  <div className="rating-cnt">
                    {obj.ratingCount} 
                    <span className="index-sep">

                    </span>
                    Rating

                  </div>




              </div>
              </div>

        </div>


        <div className="price-bottom-container">
          <span className="grid-price">
            Rs. {obj.price}
          </span>
          <span className="extra-space"> 

          </span>
          <span className="grid-mrp">
            Rs {obj.mrp}
          </span>
          <span className="extra-space"> 

          </span>
          <span className="grid-discount">
            {obj.discountDisplayLabel}
          </span>

         
          </div>
          <div className="inclusive-container">
            <span className="vat-info">
              Inclusive of all Prices

            </span>

          </div>
          <div className="size-button-container">
            <div className="size-header">
              <h4 className="select-size-text">
                Select Size
              </h4>
              <span className="size-chart">
                  <span className="size-chart-text">
                  Size chart {">"}
                  </span>
              </span>
            </div>

            <div className="buttons-size-container">
              {/* <SizeCircle /> */}
              {/* {console.log(obj.sizes)} */}
              {sizes_array.map((item)=>{
                return (<SizeCircle number={item} />);
                {console.log(item)}
                // {const val=item}
               
              })

             }

              

            </div>

          </div>




      </div>

       </div>
    </div>
  );
};
