import "./bootstrap/bootstrap.css";

export default function Cards(props) {
    return (
        <div>

        
        <div className="container ">


            <div className="card" style={{width:"20rem"}}>
                <img src = {props.image} className="card-image-top" />
                <div className="card-body">
                    
                    <h3 className="card-title">
                        {props.title}
                        <b><span className="fa-solid fa-star" style={{color: "yellow",fontSize:"1.5vw",marginLeft:"50px"}}></span></b>
                            <span style={{fontWeight:"normal",marginLeft:"1px",fontSize:"1.5vw"}}>{props.review}</span></h3>
                    <p className="card-text">{props.address}</p>
                    <p className="card-text">{props.date}</p>
                    
                    <p className="card-text">{props.price} <b>night</b></p>


            </div>

            </div>

        </div>
        </div>

    );
}
