import { IconButton } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import Checkboxes from './Checkboxes';
import SearchIcon from "@mui/icons-material/Search";

function Check(props) {
    // const [activeBrands, setactiveBrands] = useState([]);
  
    const [brandList, setbrandList] = useState([]);
    const uniqueBrands = [];
  props.list.map((item) => {
    if (uniqueBrands.indexOf(item.brand) === -1) {
      uniqueBrands.push(item.brand);
    }
  });

  const brands = (bran) => {
    if (brandList.indexOf(bran) === -1) {
      setbrandList([...brandList, bran]);
     
    } else {
      removed(bran)
    }
  };

  useEffect(() => {
    // props.brands(brandList);

    // setbrandList([])



   
   
  }, [brandList])

  const removed=(val)=>{
    const arr=brandList.filter((item)=>{
     return( (item!==val));

    })
    setbrandList(arr);
    console.log(brandList);

  }

    return (
        <div>
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
    )
}

export default Check
