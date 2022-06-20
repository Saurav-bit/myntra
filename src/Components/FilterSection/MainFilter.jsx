import { SearchRounded } from "@mui/icons-material";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./MainFIlter.css";
import SearchIcon from "@mui/icons-material/Search";
import Checkboxes from "./Checkboxes";
import Check from "./Check";

function MainFilter(props) {
 
  const [gender, setgender] = useState("Men");
  const [brands, setbrands] = useState([])
  const handleChange = (value) => {
    setgender(value);
  };

  useEffect(() => {
    props.GenderChange(gender);
    // setbrandList([]);
  }, [gender]);

  // console.log(gender);
  console.log("main filter render");

  // const uniqueBrands = [];
  // props.list.map((item) => {
  //   if (uniqueBrands.indexOf(item.brand) === -1) {
  //     uniqueBrands.push(item.brand);
  //   }
  // });

  // console.log(uniqueBrands);

  // const removed=(val)=>{
  //   const arr=brandList.filter((item)=>{
  //    return( (item!==val));

  //   })
  //   setbrandList(arr);
  //   console.log(brandList);

  // }

  // const brands = (bran) => {
  //   if (brandList.indexOf(bran) === -1) {
  //     setbrandList([...brandList, bran]);
  //   } else {
  //     removed(bran)
  //   }
  // };

  // useEffect(() => {
  //   props.brands(brandList);
   
   
  // }, [brandList])


  // console.log(brandList);

  return (
    <div className="filterSection">
      <div className="condition">
        <div className="filter-heading vertical-filters ">FILTERS</div>

        <div className="vertical-filters">
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="controlled-radio-buttons-group"
              // value={value}
              // onChange={handleChange}
            >
              {/* {console.log(value)} */}
              <FormControlLabel
                value="Women"
                control={<Radio />}
                label="Women"
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
                className="bullet-name"
              />
              <FormControlLabel
                value="Men"
                control={<Radio />}
                label="Men"
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
                className="bullet-name"
              />
              <FormControlLabel
                value="Boys"
                control={<Radio />}
                label="Boys"
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
                className="bullet-name"
              />
              <FormControlLabel
                value="Girls"
                control={<Radio />}
                label="Girls"
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
                className="bullet-name"
              />
            </RadioGroup>
          </FormControl>
        </div>





        {/* <div className="vertical-filters">
          <Check list={props.list} brands={brands} setbrands={setbrands}/>
         
        </div> */}
      </div>
    </div>
  );
}

export default MainFilter;
