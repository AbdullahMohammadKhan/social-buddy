import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Posts = ({ userId, id, title }) => {
  const classes = useStyles();

  return (
    <>
      <Card
        className={classes.root}
        style={{ textAlign: "center" }}
        variant="outlined"
      >
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            UserId : {userId}
          </Typography>
          <Typography variant="h5" component="h2">
            Id : {id}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Post Title :
          </Typography>
          <Typography variant="body2" component="p">
            {title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="primary" href={`/${id}`}>
            See More
          </Button>
        </CardActions>
      </Card>
      <br />
    </>
  );
};

export default Posts;
