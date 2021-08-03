import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Banner from "../banner/Banner";
import "../banner/banner.scss";
import bgimage from "../../assets/images/bg3.jpg";
import { Typography, Button, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className="banner_bg">
          <Paper className={classes.paper} elevation={0}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} className="text_content">
                <Typography variant="h4">
                  Discover, collect, and <br/> sell extraordinary NFTs
                </Typography>
                <Typography variant="p" className="span_text">
                  on the world's first & largest
                  <br/> NFT marketplace
                </Typography>
                
                <Box className="btns">
                <Button variant="contained" className="explore_btn">
                 Explore
                </Button>
                &nbsp; &nbsp;
                <Button variant="outlined" className="create_btn">
                  Create
                </Button>
                </Box>
              
              </Grid>
              <Grid item xs={12} sm={6}>
                <Banner />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
