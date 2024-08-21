import { Grid, GoodsItem, Telegraphy} from "@mui/material";

function Choice({items}) {
    return (
      <>
     <Telegraphy>{items.text}</Telegraphy>
     <Grid container spacing={2}>
            {items.map((item) => (
                <GoodsItem key={item.id}  />
            ))}
        </Grid>
     <div>GHHJKK</div>
     </>
    );
  }
  
  export default Choice;