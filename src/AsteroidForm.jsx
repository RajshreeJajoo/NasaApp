import React from "react";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";


const AsteroidForm = (props) => {
  return (
    <>
    <Container>
        <Card style={{ marginTop:"40px", backgroundColor: "#c5cdf7" }}>
      <CardContent>
        <div className="displaydata">
          <label>Name:-</label>
          <span className="valuedata">{props.props?.name}</span>
        </div>

        <div className="displaydata">
          <label>Nasa_jpl_url:-</label>
          <Button   style={{ marginLeft:"20px" ,backgroundColor: "rgb(219, 161, 214)" }}
            variant="contained"
            href={props.props?.nasa_jpl_url}
            target="_blank"
          >
            Url
          </Button>
        </div>

        <div className="displaydata">
          <label> Is_potentially_hazardous_asteroid:-</label>
          <span className="valuedata">
            {props.props?.is_potentially_hazardous_asteroid.toString()}
          </span>
        </div>
      </CardContent>
      
    </Card>
    </Container>
    </>
  );
};

export default AsteroidForm;
