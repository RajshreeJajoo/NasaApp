import "./Asteroid.css";
import Card from "@material-ui/core/Card";

const ErrorForm=()=>
{
  
    return(
        <>
        <Card style={{marginTop:"40px",
          background: "linear-gradient(to bottom, #e8bdbd 0%, #ef1717 180%)"
         }}>
        <div className="errorclass">
            <h1>404 Error </h1>
            <h1 > Data Not found</h1>
            </div>
        </Card>
        
        </>
    )

}
export default ErrorForm;