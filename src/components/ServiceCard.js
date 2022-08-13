import "./ServiceCard.css"

const ServiceCard = (props) => {
    return (
        <>
            <div className="service-card">
                <i class="fa-solid fa-tooth"></i>
                <h3>{props.Services}</h3>
                <div className="hover-link"><span><a>LEARN MORE</a></span><i class="fa-solid fa-angle-right"></i></div>
            </div>
        </>
    )
}

export default ServiceCard;