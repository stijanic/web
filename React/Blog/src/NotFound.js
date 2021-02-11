import { Link } from "react-router-dom"

const NotFound = () =>  {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <br/>
            <Link to="/" style={{
                color: "white",
                padding: '4px',
                backgroundColor: "#f1356d",
                borderRadius: '8px',
                textDecoration: 'none'
            }}>Back to the Home...</Link>
        </div>
    );
}

export default NotFound;