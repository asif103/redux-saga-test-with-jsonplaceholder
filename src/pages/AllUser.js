import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, Container, Grid, Typography } from "@mui/material";
import { removeUsers } from "./../redux/actions/userActions";
import User from "./../components/User";
import { Link } from "react-router-dom";

const AllUser = () => {
  const allUsers = useSelector((state) => state.allUsers.users);
  const dispatch = useDispatch();

  const clearUsers = () => {
    dispatch(removeUsers());
  };
  return (
    <Box>
      <Container maxWidth="lg">
        <Typography variant="h3">
          List of User(fetch data from redux store)
        </Typography>
        <hr />
        {allUsers.length && (
          <Button onClick={clearUsers} variant="contained" color="secondary">
            {" "}
            click to clear user data
          </Button>
        )}

        <br />
        <br />
        <Grid container spacing={3}>
          {allUsers.length ? (
            allUsers.map((user) => <User user={user} key={user.id} />)
          ) : (
            <Typography variant="h6" color="secondary">
              Only the homepage stores user and post data. Go back to{" "}
              <Link to="/">Home Page</Link> to get data again.
            </Typography>
          )}
        </Grid>
      </Container>
      {/* <Typography variant="h5">
        Working Redux State management (post List in user page)
      </Typography> */}
      {/* <ul>
        {allPosts?.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul> */}
    </Box>
  );
};

export default AllUser;
