import { Container, Grid, GoodsItem } from "@mui/material";
import Header from "./Header/Header";

function Choice({goods}) {
    return (
      <>
     <Header></Header>
     <Grid container spacing={2}>
            {goods.map((item) => (
                <GoodsItem key={item.id}  />
            ))}
        </Grid>
     <div>GHHJKK</div>
     </>
    );
  }
  
  export default Choice;