import { styled } from "styled-components";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Academics = () => {
  return (
    <Div>
      <div className="section">
        <div className="head">
          <Navbar />
          <br /> <br />
          <div className="sec">
            <img src="logo1.png" alt="" />

            <h1>
              Academics
              <hr />
            </h1>

            <img src="logo2.png" alt="" />
          </div>
        </div>
      </div>

      <div className="section--1">
        <center>
          Dele Preparatory School and Dele Peddle International High School will
          be embracing, teaching about, <br /> modeling and expecting the
          following CORE <br /> VALUES to be infused throughout the building.{" "}
          <br /> Please help us model & teach these from home! It takes a
          village to raise a child! Let’s work to strengthen our village!.
        </center>
      </div>

      <div className="section--2">
        <center>
          <h1 className="section--2-head">Performance Plans</h1>
          <span>
            Dele Preparatory School and Dele Peddle International High School
            will be embracing, teaching about, <br /> modeling and expecting the
            following CORE <br /> VALUES to be infused throughout the building.{" "}
            <br /> Please help us model & teach these from home! It takes a
            village to raise a child! Let’s work to strengthen our village!.
          </span>
        </center>
      </div>

      <Footer />
    </Div>
  );
};

export default Academics;

const Div = styled.div`
overflow:hidden;
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

.section--1{
max-width: 1920px;
height: 460px;
background:#0D0B06;
color:white;
justify-content:center;
align-items:center;
margin:0 auto;


}

.section--1 center{
max-width:1000px;
font-family: 'Baloo Bhai', sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 400;
padding-top:200px;
margin: 0 auto;
text-align:left;

}

.section--2{
display: flex;
max-width: 1920px;
padding: 199px 390px 200px 390px;
justify-content: center;
align-items: flex-start;
background: #FFF;
}

.section--2-head{
color: #01263D;
font-family: 'Baloo Bhai', sans-serif;
font-size: 56px;
font-style: normal;
font-weight: 900;
line-height: 64px;
}


.section--2 span{
 display: flex;
max-width: 516px;
flex-direction: column;
align-items: flex-start;
gap: -0.2px;
flex-shrink: 0;
text-align:left;


color: #000615;
font-family: Lato;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28.8px; 
}



@media(max-width:769px){
    .section--1 {
     height:600px;
       padding-left:10px;
    }
   .section--2{
    padding:0;
   }

.section--2-head{
  font-size:45px;

   }


   .section--2 span{
    font-family: 'Baloo Bhai', sans-serif;
    padding-bottom:50px;
   }



}




`;
