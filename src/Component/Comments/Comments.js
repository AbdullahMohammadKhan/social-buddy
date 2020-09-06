import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Comments = ({ id }) => {
  const classes = useStyles();
  const [comment, setComment] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    axios(url).then((data) =>
      //console.log(data.data)
      setComment(data.data)
    );
  }, [id]);
  return (
    <>
      {Object.entries(comment).map((item) => (
        <>
          <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/4894075/pexels-photo-4894075.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                />
              </ListItemAvatar>

              <ListItemText primary={item[1].name} secondary={item[1].body} />
            </ListItem>
            <Typography variant="body4" color="textSecondary" component="p">
              <strong>Mail :</strong> {item[1].email}
            </Typography>

            <Typography variant="body4" color="textSecondary" component="p">
              <strong>Post Id :</strong>
              {item[1].postId}
            </Typography>
            <Typography variant="body4" color="textSecondary" component="p">
              <strong> Id </strong>: {item[1].id}
            </Typography>
            <br />
            <Divider variant="inset" component="li" />
          </List>
        </>
      ))}
    </>
  );
};

export default Comments;
