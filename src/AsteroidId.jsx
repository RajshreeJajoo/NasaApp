import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import "./Asteroid.css";
import { useState } from "react";
import axios from "axios";
import AsteroidForm from "./AsteroidForm";
import ErrorForm from "./ErrorForm";
// import "./Home.css";

const AsteroidId = () => {
  const [astid, setAstid] = useState();
  const [error, setError] = useState(false);
  const [response, setResponse] = useState(false);
const[randomData,setRandomdata]=useState([]);


    const sumbitId = () => {
        setResponse(pre=>true);
      axios.get(
          `https://api.nasa.gov/neo/rest/v1/neo/${astid}?api_key=9mfvC2LtoPfOd5fLd6U3e6Gum0Agt3r8BYcW4rWs`)
        .then((res) => {
        setRandomdata(res.data)
        setError((pre) => false);
      })       
       .catch((err) => {
        setResponse(pre=>false);
        setError(pre=>true);

        });
    };
  const randomId = () => {
    setResponse(pre=>true);
     axios.get(
      `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=9mfvC2LtoPfOd5fLd6U3e6Gum0Agt3r8BYcW4rWs`)
      .then((res) => {
        // setError((pre) => false);
       let len = res.data.near_earth_objects.length;
        let randomId = Math.floor(Math.random() * len);
        setRandomdata(res.data.near_earth_objects[randomId]);
      })
      .catch((err) => {
        setResponse(pre=>false);
        setError(pre=>true);
      });
  };

  const asteroidid = (e) => {
    setAstid(e.target.value);
    setResponse(false);
    setError(false);
  };
  const resetid = (e) => {
    setAstid("");
    setResponse(false);
    setError(false);
    setRandomdata([]);
  };
  return (
        <>
      <Container fixed>
        <TextField
          id="standard-basic"
          type="number"
          variant="standard"
          onChange={asteroidid}
          value={astid}
          name="astid"
        /> 
        <Button
          style={{ marginLeft: "20px", backgroundColor: "rgb(141, 139, 245)" }}
            onClick={sumbitId} disabled={!astid}
          variant="outlined"
        >
          Sumbit Id
        </Button>

        <Button
          variant="outlined"
          style={{ marginLeft: "20px", backgroundColor: "rgb(141, 139, 245)" }}
          onClick={randomId}
        >
          Random Id
        </Button>

        <Button
          variant="outlined"
          style={{ marginLeft: "20px", backgroundColor: "rgb(141, 139, 245)" }}
          onClick={resetid}
        >
          Reset
        </Button>

        {/* {response &&
            <AsteroidForm />
      } */}

      {response && randomData.length !==0 ? <AsteroidForm props={randomData} /> : null}

      {error &&
            <ErrorForm/>
      }
      </Container>
    </>
  );
};

export default AsteroidId;
// 2000433
// 2001221
// 2001620
// 2001866
// 2001917