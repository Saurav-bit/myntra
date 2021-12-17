import React, { useEffect, useState } from "react";
import "./Checkboxes.css";
import { Checkbox } from "@mui/material";

function Checkboxes(props) {
//   const [brands, setbrands] = useState("");

//   var newbg = [];
  const updatebrands = (val) => {
    // console.log(val);
    // setbrands(val);
    if (props.brandList.indexOf(val) === -1) {
      props.setbrandList([...props.brandList, val]);
    } else {
      console.log("already");
    }
  };

//   console.log(brands);

  // useEffect(() => {
  //     // console.log(brands)
  //     // setbrands(newbg)
  //     // setbrands()
  //     // console.log(brands);

  //    props.addon(brands)

  // }, [brands])

  return (
    <div className="checkbox-filter-each">
      <Checkbox
        value={props.name}
        onChange={(e) => {
          updatebrands(e.target.value);
        }}
      />
      {props.name}
    </div>
  );
}

export default Checkboxes;
