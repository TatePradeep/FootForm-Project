import React from "react";
import "./customer.css";

const Customer = () => {


    return(
        <div className="wrapper">

            {/* <div className="head">Customer Reviews</div> */}
            
            <div class="container">
                <div class="review-card">
                
                <p>"I can't get enough of Foot Form shoes! The attention to detail in every pair is evident. They're not just shoes; they're wearable art. Plus, the compliments I receive whenever I wear them are just the cherry on top!" - Michael Patel</p>
                </div>
                <div class="review-card">
                
                <p>"Absolutely stunning! The heels from Foot Form are a dream come true. Not only are they exquisitely crafted, but they're also surprisingly comfortable. I feel like a queen every time I wear them." - Emily Johnson</p>
                </div>
                <div class="review-card">
                
                <p>"Foot Form has raised the bar for luxury footwear. I recently purchased a pair of their fashion heels, and I must say, I've never felt more confident. The quality is exceptional, and they make any outfit stand out effortlessly." - Samantha Nguyen</p>
                </div>
            </div>
            
        </div>
    );

};

export default Customer;