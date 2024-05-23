import * as React from "react";
import { useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Book = ({ book }) => {
  useEffect(() => {
    axios.get(`/api/book/?q=${book.title}`).then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <Card className="center" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://clipart-library.com/images/6cp5X4yEi.png"
          alt={book.title}
        />
        <CardContent dir="rtl">
          <Typography
            className="center"
            gutterBottom
            variant="h5"
            component="div"
          >
            {book.title}
          </Typography>
          <Typography>מחבר :{Object.values(book)[1]}</Typography>
          <Typography>מספר עמודים :{Object.values(book)[2]}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default Book;
