// import { Image } from "@mui/icons-material";
import { Grid, Typography, Box, Container, Card, CardMedia, CardContent } from "@mui/material";
import img from '../img/1697816115_klev-club-p-arti-anime-15.jpg'
import { Padding } from "@mui/icons-material";
 

function BlockDraw({ items, text }) {

  // const Item = styled('div')(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   border: '1px solid',
  //   borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  //   padding: theme.spacing(1),
  //   borderRadius: '4px',
  //   textAlign: 'center',
  //   height: '20rem',
  // }));
  

  return (
    <Container maxWidth='false' sx={{width: '95%', marginTop: '3rem'}}>
          <Typography variant="h4">{text}</Typography>
    <Box sx={{ width: '100%'}}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 12, sm: 4, md: 10 } } >
        {items.map((item) => (
          <Grid item xs={3} >
          <Card sx={{width: '25rem'}}>
            <CardMedia
          
          image={img}
          title={item.title}
          sx={{height:'20rem', width: '35rem'}}
        />
        <CardContent sx={{paddingBottom: '10px'}}>
          <Typography gutterBottom variant="h6" component="h2">
            {item.text}
          </Typography>
        </CardContent>
          </Card>
          </Grid>
        ))}
      </Grid>
      </Box>
      </Container>
  );
}

export default BlockDraw;
