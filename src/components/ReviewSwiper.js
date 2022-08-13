import { useEffect, useState } from "react";
import axios from 'axios';
import "./ReviewCard.css";


const ReviewSwiper = (props) => {

    const [name, setName] = useState();
    const [review, setReview] = useState();

    try {

        useEffect(() => {
            const getData = async () => {
                const response = await axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1');
                // console.log(response);

                setName(response.data.data[props.index].Name);
                setReview(response.data.data[props.index].Reviews);
            }

            getData();
        });



    } catch (error) {
        console.log(`error found: ${error}`);
    }


    return (
        <>
            <div className="review-card">
                <div className="quote-icon"><i class="fa-solid fa-quote-left"></i></div>
                <p className="common-para pd-bottom">{review}</p>
                <div className="patient-div">
                    <div className="patient-img">
                        <img src={props.ClientImg} />
                    </div>
                    <div className="patient-name">
                        <h4>{name}</h4>
                        <p className="specialist-field">Patient</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewSwiper;