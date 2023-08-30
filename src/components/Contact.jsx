import { styled } from "styled-components";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <Div>
      {/* hero section starts here */}
      <div className="section">
        <div className="head">
          <Navbar />
          <br /> <br />
          <div className="sec">
            <img src="logo1.png" alt="" className="logo1" />

            <h1>
              Contact Us <hr />
            </h1>

            <img src="logo2.png" alt="" className="logo2" />
          </div>
        </div>
      </div>

      {/* hero section ends here */}

      {/* the main contact container */}
      {/* get in touch section start here */}
      <div className="contact-me">
        <div className="get-in-touch">
          <h1>Get In Touch</h1>

          <h3 className="wise">
            {" "}
            ``Through high expectations and a positive learning environment, the
            school, parents and community are responsible partners in the
            educational and social growth of its students.``
          </h3>

          <div className="number">
            <h2>Number</h2>

            <p className="icon-text">
              <FontAwesomeIcon icon={faPhone} />
              <span>+232 99 005 251 </span>
            </p>

            <p>
              deleprepschool@yahoo.co.uk <br />
              Mrs Eudora Francess Browne: Proprietress <br />
              Miss Christie M. Browne: Director of Administration <br />
              Mr Ayodele Browne: Director of Administration
            </p>
          </div>

          <h2>Location</h2>
          <p className="icon-text">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Reservation View, Allen Town (Old Road) </span>
          </p>

          <h2>Office Hours</h2>

          <p className="las">
            {" "}
            OPEN TO PARENTS & GUESTS <br />
            Mondays - Thursdays 8:45am - 3:00pm <br />
            Fridays 8:45am - 2:30pm <br /> <br />
            PUPILS HOURS <br />
            Mondays - Thursdays 7:00am - 3:30pm <br />
            Fridays 7:00 - 2:30pm
          </p>
        </div>

        {/* get in touch section end here */}

        {/* form section starts here */}
        <div className="form">
          <h1>Send Us a Message</h1>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="tel" placeholder="Phone" />
            <input type="email" placeholder="Email" />
            <textarea name="" id="" cols="60" rows="10"></textarea>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* form section ends here */}

      {/* map section start here */}
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d7892.448472327897!2d-13.235076057286763!3d8.477564077895645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0xf04c3a83ee08c83%3A0x540553ae55e4914d!2sAllen%20St%2C%20Freetown!3m2!1d8.477553499999999!2d-13.2299262!4m0!5e0!3m2!1sen!2ssl!4v1692668547336!5m2!1sen!2ssl"></iframe>
      </div>

      {/* map section end here */}
      <Footer />
    </Div>
  );
};

export default Contact;

const Div = styled.div`

.section{
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.60) 4.35%, rgba(255, 255, 255, 0.60) 10.00%, rgba(0, 0, 0, 0.00) 48.69%), linear-gradient(184deg, #01263D 0%, rgba(0, 0, 0, 0.00) 40.00%),  url('Main.png');
  height:500px;
background-size:cover;
  background-repeat:no-repeat;
}

.head{
  background: linear-gradient(180deg, #01263D 10.00%, rgba(0, 0, 0, 0.00) 100%);#
  width:100%;
  height:500px;
}

.sec{
  display:flex;
  justify-content:center;
  gap:50px;
  align-items:center;
}
.sec img{
  width:120px;
  height:120px;
}

.sec h1{

color: #70FF00;
text-align: center;
font-family: 'Fuzzy Bubbles', sans-serif;
font-size: 65px;
font-style: normal;
font-weight: 700;
letter-spacing: 2.5px;
text-transform: uppercase;

}


.contact-me{
display:flex;
gap:50px;
padding: 100px 150px 199.39px 150px;
justify-content: center;
background:black;
color:white;

}


.icon-text{
  display:flex;
  align-items:center;
  gap:15px;
}

.get-in-touch {
  display: flex;
max-width: 570px;
flex-direction: column;
align-items: flex-start;

}


.get-in-touch h1{
  color: #FFF;
font-family: 'Baloo Bhai', sans-serif;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: 48px; 
}



.wise{
  color: #FFF;
  font: 700 18px/24px "Baloo Bhai", sans-serif;

}

h2{
  color: #FFF;
font-family: 'Baloo Bhai', sans-serif;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 42px; 
letter-spacing: 2.5px;
  
}

 p{
  color: #FFF;
font-family: 'Baloo Bhai', sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28.8px; 

}

.las{
  color: #FAFF00;
font-family: 'Baloo Bhai', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 28.8px; 
}

.form form{
  display:flex;
  flex-direction:column;
}
.form h1{
  color: #FFF;
font-family: 'Baloo Bhai', sans-serif;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: 48px; 
}
form input{
  padding: 15px 13px 16px 13px;
  border-radius: 2px;
border: 1px solid #DDD;
background: #FAFAFA;
color: #757575;
font-family: 'Baloo Bhai', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom:10px;

}

button{
  padding: 17px 42.27px 19px 43px;
  border: 2px solid #BC1D2C;
background: #FFF;
width:144.24px;


color: #BC1D2C;
text-align: center;
font-family: 'Baloo Bhai', cursive;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 12px; /
letter-spacing: 2px;
text-transform: uppercase;

}

.map{
  display: flex;
width: 1920px;
max-width: 1920px;
align-items: flex-start;
}


iframe{
  width:  100%;
  height:489px;
}


@media(max-width:768px){
     .sec{
  position:relative;
  display:flex;
  flex-direction:column;
}

.logo1{
  position:absolute;
  top:50px;
  left:40px;
  width:120px;
  height:120px;
}


.logo2{
  position:absolute;
  top:50px;
  right:40px;
  width:120px;
  height:120px;
}

    .sec h1{
      position:absolute;
      top:150px;
         font-size:45px;
    }





      overflow:hidden;

  .contact-me{
    display:flex;
    flex-direction:column;
    padding:10px;
  }
  iframe{

  }
}


`;
