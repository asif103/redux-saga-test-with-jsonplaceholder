import { Button, Card, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./../redux/actions/userActions";
import { getPosts } from "./../redux/actions/postActions";
// import axios from "axios";

function Home() {
  const allUsers = useSelector((state) => state.allUsers.users);
  const loading = useSelector((state) => state.allUsers.loading);
  const errors = useSelector((state) => state.allUsers.errors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div>
      <Typography
        variant="h4"
        style={{ textAlign: "center", margin: "50px 0px" }}
      >
        Home Page
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item md={6}>
            <Card sx={{ minWidth: 275, textAlign: "center" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  All Posts
                </Typography>
              </CardContent>
              <CardActions
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link to="/posts">
                  <Button size="small" variant="contained">
                    All Post
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card sx={{ minWidth: 275, textAlign: "center" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Users
                </Typography>
              </CardContent>
              <CardActions
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link to="/users">
                  <Button size="small" variant="contained">
                    All Users
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <ul>
          <Typography variant="h6">
            List of User(First redux call and fetch data from store)
          </Typography>
          {loading && <p>Loading...</p>}
          <hr />
          {allUsers.length &&
            allUsers.map((user) => <li key={user.id}>{user.name}</li>)}
        </ul>
        {errors}
      </Container>
    </div>
  );
}

export default Home;
