import "./clinicCard.css"

const ClinicCard = (props) => {
    return (
        <>
            <div className={`clinic-card ${props.rightImg}`}>
                <img src={props.image} />
                <h4>{props.ServiceName}</h4>
            </div>
        </>
    )
}

export default ClinicCard;