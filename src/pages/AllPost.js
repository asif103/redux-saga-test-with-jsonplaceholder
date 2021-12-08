import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import Post from "../components/Post";
import { Container, Grid, Typography } from "@mui/material";

const AllPost = () => {
  const allPosts = useSelector((state) => state.allPosts.posts);
  const allUsers = useSelector((state) => state.allUsers.users);

  return (
    <Box>
      <Container maxWidth="lg">
        <Typography variant="h3">
          List of Post(fetch data from redux store)
        </Typography>
        <hr />
        <Grid container spacing={3}>
          {allPosts?.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </Grid>
        <Typography variant="h5">
          Working Redux State management (user List in post page)
        </Typography>
        <ul>
          {allUsers?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </Container>
    </Box>
  );
};

export default AllPost;
