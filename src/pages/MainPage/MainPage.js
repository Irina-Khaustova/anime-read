import { Container, Grid, GoodsItem } from "@mui/material";
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
     <div>{items}</div>
     </>
    );
  }
  
  export default MainPage;
  