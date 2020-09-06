import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comments from "../Comments/Comments.js";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const BuddyDetail = () => {
  const classes = useStyles();
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    axios(url).then(
      (data) => setDetail(data.data)
      //console.log(data.data)
    );
  }, [id]);

  return (
    <Container maxWidth="sm">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {detail.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {detail.body}
            </Typography>
            <br />
            <Typography variant="body4" color="textSecondary" component="p">
              Post ID : {detail.userId}
            </Typography>
            <Typography variant="body4" color="textSecondary" component="p">
              ID : {detail.id}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Comments
          </Button>
        </CardActions>
      </Card>
      <Comments id={id} />
    </Container>
  );
};

export default BuddyDetail;
