import React from "react";
import "../../App.css";
import Footer from "../Footer";

export default function SignUp() {
  return (
    <div>
      <h1 className="sign-up">
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/cVjyDgFrb2g"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </h1>

      {/* <div className='containers'>
      <div className='item-container'>
          <div className='img'>
          <img src="images-notifier\img2.jpg" alt="" />
          </div>
          <div className='img'>
          <img src="images-notifier\img2.jpg" alt="" />
          </div>
          <div className='img'>
          <img src="images-notifier\img2.jpg" alt="" />
          </div>
          <div className='img'>
          <img src="images-notifier\img2.jpg" alt="" />
          </div>
          <div className='img'>
          <img src="images-notifier\img2.jpg" alt="" />
          </div>
          <div className='img'>
          <img src="images-notifier\img2.jpg" alt="" />
          </div>
      </div>
    </div> */}
      <Footer />
    </div>
  );
}
