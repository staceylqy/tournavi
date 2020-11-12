import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    marginBottom: 15,
    backgroundColor: "#f7dad9",
    maxWidth: 600
  },
  image: {
    paddingLeft: "15px",
    width: 250,
    borderRadius: "1.5"
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  title: {
    fontWeight: "bold",
    paddingTop: "10px",
    paddingBottom: "10px"
  },
  text: {
    textAlign: "center",
    paddingLeft: "5px"
  }
}));

export default function ComplexGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={50}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                // src="/static/images/grid/complex.jpg"
                src={props.grid.img}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  className={classes.title}
                >
                  {props.grid.title}
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  className={classes.text}
                >
                  {props.grid.text}
                </Typography>
                {/* <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography> */}
              </Grid>
              <Grid item>
                <button
                  variant="body2"
                  className="btn"
                  style={{ cursor: "pointer" }}
                >
                  <span>詳細を見る</span>
                </button>
              </Grid>
            </Grid>

            <Grid item>
              <Typography
                variant="body2"
                className={classes.like}
                style={{ cursor: "pointer" }}
              >
                ✰
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
