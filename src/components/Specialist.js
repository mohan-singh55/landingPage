import "./Specialist.css";

const Specialist = (props) => {
    return (
        <>
            <div className="specialist-wrapper">
                <div className="img-div"></div>
                <div className="specialist">
                    <h4 className="specialist-name">{props.SpecialistName}</h4>
                    <p className="specialist-field">{props.SpecialistField}</p>
                </div>
            </div>
        </>
    )
}

export default Specialist;