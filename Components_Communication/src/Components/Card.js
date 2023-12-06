import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Card ({details}) {

    return <>
        <div class="card">
         <img src={details.imgSrc} class="card-img-top" alt="Nature"/>
            <div class="card-body">
                <h5 class="card-title">{details.title}</h5>
                <p class="card-text">{details.text}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </>
}