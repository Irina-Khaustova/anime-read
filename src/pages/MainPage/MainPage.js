// import { Container, Grid, GoodsItem } from "@mui/material";
import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import image1 from "../../img/1697816115_klev-club-p-arti-anime-15.jpg";
import image2 from "../../img/1697816116_klev-club-p-arti-anime-16.jpg";
import image3 from "../../img/1697816120_klev-club-p-arti-anime-24.jpg";
import { Box } from "@mui/material";
import BlockDraw from "../../components/BlockDraw";
import data from "../../components/Data";

function MainPage() {
  // const [items, setItems] = useState([])

  const pictures = [
    {
      src: image1,
    },
    {
      src: image2,
    },
    {
      src: image3,
    },
  ];

  useEffect(() => {
    async function getData() {
      fetch("http://manga.gotogrow.ru/api/v1/m/title/chapters/", {
        method: "Get",
      }).then((data) => console.log(data));
    }
    getData();
  }, []);

  return (
    <>
      <Carousel>
        {pictures.map((el, i) => (
          <Box
            key={i}
            sx={{
              height: "35rem",
              backgroundSize: "cover",
              backgroundImage: `url(${el.src})`,
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        ))}
      </Carousel>
      <BlockDraw items={data} text='Weekly Editor Choice'></BlockDraw>
      <BlockDraw items={data} text='Most Followed'></BlockDraw>
    </>
  );
}

export default MainPage;
