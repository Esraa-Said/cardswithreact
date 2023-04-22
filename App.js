
import "./bootstrap/bootstrap.css"
import { useEffect } from "react";
import axios from "axios";
import Cards from "./Cards";
import {data} from "./data";
import React from "react";

export default function App() {
   

    console.log(data);
    const dataShow = data.map((el,index)=>
    <Cards key = {index} image = {el.image}  title = {el.title} address = {el.address} date = {el.date} review = {el.review} price = {el.price}/>);

    return (
        <div>
       
            <div className="d-flex justify-content-around align-items-center flex-wrap mt-5">
            {dataShow}
            </div>
            
        </div>


      

    );
}





