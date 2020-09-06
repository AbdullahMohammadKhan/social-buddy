import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import Posts from "../Posts/Posts.js";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios(url).then((data) => setPost(data.data));
  }, []);

  return (
    <Container maxWidth="sm">
      <div style={{ textAlign: "center" }}>
        <h1>Social-Buddy</h1>
      </div>

      {post.map((each) => (
        <Posts userId={each.userId} id={each.id} title={each.title} />
      ))}
    </Container>
  );
};

export default Home;
