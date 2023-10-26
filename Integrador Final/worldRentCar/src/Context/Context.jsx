import React, { useContext, useEffect, useState } from "react";


const [vehiculo,setVehiculo]=useState([])
const url= "https://jsonplaceholder.typicode.com/users"

  useEffect(()=>{
    fetch(url)
  .then(response =>{
    return response.json();
  })
  .then(data => {
    data.map((each)=>{
    setVehiculo(each)
    })
  })
  }, [])


