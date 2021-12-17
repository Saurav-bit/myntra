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

function MainFilter(props) {
  const [brandList, setbrandList] = useState([]);
  const [gender, setgender] = useState("Men");

  const handleChange = (value) => {
    setgender(value);
  };

  useEffect(() => {
    props.GenderChange(gender);
  }, [gender]);

  // console.log(gender);
  console.log("main render");

  const uniqueBrands = [];
  props.list.map((item) => {
    if (uniqueBrands.indexOf(item.brand) === -1) {
      uniqueBrands.push(item.brand);
    }
  });

  console.log(uniqueBrands);

  const removed=(val)=>{
    const arr=brandList.filter((item)=>{
     return( (item!==val));

    })
    setbrandList(arr);
    console.log(brandList);

  }

  const brands = (bran) => {
    if (brandList.indexOf(bran) === -1) {
      setbrandList([...brandList, bran]);
    } else {
      removed(bran)
    }
  };
  console.log(brandList);

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

        <div className="vertical-filters">
          <div className="brand-head">
            <div className="brand-heading">BRAND</div>
            <IconButton className="search-icon-filter">
              <SearchIcon />
            </IconButton>
          </div>
          <div>
            {uniqueBrands.map((brand) => {
              // {console.log(brand)}
              return <Checkboxes name={brand} addon={brands} list={brandList} remove={removed} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainFilter;
