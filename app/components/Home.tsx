import React, {useEffect} from 'react';
import {CircularProgress, Grid} from "@material-ui/core";


export default function Home(): JSX.Element {

  useEffect(() => {
    window.location = "https://www.reddit.com";
  },[])

  return (
    <Grid id={"loader"} container justify={"center"} alignItems={"center"}>
      <CircularProgress  color="secondary" />
    </Grid>
  );
}
