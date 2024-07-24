import { Container, Grid, GoodsItem } from "@mui/material";
import Header from "./Header/Header";
import { useEffect, useState } from "react";

function MainPage() {

  const [items, setItems] = useState([])

  

useEffect(()=> {
  async function  getData () {
    fetch('http://manga.gotogrow.ru/api/v1/m/title/chapters/', {method: 'Get'})
    .then((data) => console.log(data))
    console.log(items)
  }
  getData()
},[])


 

    return (
      <>
     <Header></Header>
     
     <div>{items}</div>
     </>
    );
  }
  
  export default MainPage;
  