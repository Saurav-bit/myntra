import React, { useState } from 'react'
import "./Main.css"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import data from "../../Data"
import ShowItem from './ShowItem';
function Main(props) {
    // const filteredList=data.filter((item)=>{return item.gender===props.filter_gender});
    const filteredList=props.list;
    const [sort, setsort] = useState("Customer Rating");

    const handleSorting=(val)=>{
        setsort(val);
    }
    console.log(sort);

    function sorting_data(){
        if(sort==='Customer Rating')
        {
            filteredList.sort((a,b)=>{
                return (a.rating-b.rating);

            })
        }
        else if(sort==='Popularity')
        {
            filteredList.sort((a,b)=>{
                return (a.ratingCount-b.ratingCount);

            })
            

        }
        else if(sort==='Price Low to High'){

            filteredList.sort((a,b)=>{
                return (a.price-b.price);

            })
            
        }
        else
        {
            filteredList.sort((a,b)=>{
                return (b.price-a.price);

            })

        }
    }
    // console.log(data)
    // console.log(props)
   sorting_data();
    // console.log(filteredList)
    const options = [
        "Customer Rating","Popularity","Price Low to High","Price High to Low"
      ]; 
      //popularity ===rating count 
      //price low to high
      //price high to low
      //customer rating === rating 
      const defaultOption = options[0];
    return (
        <div className='main-start'>
           {/* <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />; */}
            <div className='sorting-container'>
                <div className='sorting-container-left'>

                </div>

            
           <div className='new-dropdown sorting-main'>
            Sort By :
           
           <Dropdown options={options}  value={defaultOption} placeholder="Select an option" className='old' onChange={(e)=>{
               handleSorting(e.value)

           }}/>
           </div>
           </div>


           <div className='items-main'>

            <div className='item-showcase'>
                {filteredList.map((item)=>{
                    
                    return(
                        <ShowItem imgs={item.images} brand={item.brand} info={item.additionalInfo} rate={item.rating} disc={item.discountDisplayLabel} cut={item.mrp} show={item.price}/>
                    );

                })}


            </div>
           </div>
        </div>
    )
}

export default Main
