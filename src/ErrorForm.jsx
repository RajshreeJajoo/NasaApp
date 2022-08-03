import "./Asteroid.css";
import Card from "@material-ui/core/Card";

const ErrorForm=()=>
{
  
    return(
        <>
        <Card style={{marginTop:"40px", backgroundColor:"rgb(248, 153, 153)"}}>
        <div className="errorclass">
            <h1>404 Error </h1>
            <h1 > Data Not found</h1>
            </div>
        </Card>
        
        </>
    )

}
export default ErrorForm;