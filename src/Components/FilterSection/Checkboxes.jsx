import React, { useEffect, useState } from "react";
import "./Checkboxes.css";
import { Checkbox } from "@mui/material";

function Checkboxes(props) {
  const [brands, setbrands] = useState("");

//   var newbg = [];
  const updatebrands = (val,e) => {

    // console.log(val);

    // if (props.list.indexOf(val) !== -1) {
    //     props.remove(val);
    //   } else {
    //     setbrands(val);
    //   }

    if(e.target.checked===false)
    {
        props.remove(val);
    }
    else
    {
      setbrands(val);
    }
   
    // if (props.brandList.indexOf(val) === -1) {
    //   props.setbrandList([...props.brandList, val]);
    // } else {
    //   console.log("already");
    // }
  };

//   console.log(brands);

  useEffect(() => {
    //   console.log(brands)
    //   setbrands(newbg)
    //   setbrands()
    //   console.log(brands);

     props.addon(brands)
     console.log(brands)

  }, [brands])

  return (
    <div className="checkbox-filter-each">
      <Checkbox
        value={props.name}
        onChange={(e) => {
          updatebrands(e.target.value,e);
          // console.log(e.target.checked);
          
        }}
      />
      {props.name}
    </div>
  );
}

export default Checkboxes;
