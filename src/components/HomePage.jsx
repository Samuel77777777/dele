import { styled } from "styled-components";
import Navbar from "./Navbar";
import Reg from "./Modals/Reg";
import Transport from "./Modals/Transport";
import Canteen from "./Modals/Canteen";
import SchoolResource from "./Modals/SchoolResource";
import Faq from "./Modals/Faq";
import Curriculmn from "./Modals/Curriculumn";
import Slider from "./Slider";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Div>
      <div className="section">
        <div className="head">
          <Navbar />
          <br /> <br />
          <div className="sec">
            <img src="logo1.png" alt="" className="logo1" />

            <img src="letters.png" alt="" className="let" />

            <img src="logo2.png" alt="" className="logo2" />
          </div>
          <div className="ttt">
            <span className="wisee">
              A positive learning environment through high expectations.
            </span>
            <Link to="/about" className="abt">
              About us
            </Link>
          </div>
        </div>
      </div>
      <div className="info">
        <h1 className="info-head">Resources</h1>

        <div className="info1">
          <div className="res">
            <h1>Registration</h1>
            <Reg />
          </div>
          <div className="res">
            <h1>Transportation </h1>
            <Transport />
          </div>
          <div className="res">
            <h1>Canteen Services</h1>
            <Canteen />
          </div>
        </div>

        <div className="info2">
          <div className="res">
            <h1>School Resources</h1>
            <SchoolResource />
          </div>

          <div className="res">
            <h1>FAQ</h1>
            <Faq />
          </div>

          <div className="res">
            <h1>School Currriculum</h1>
            <Curriculmn />
          </div>
        </div>
      </div>
      <br /> <br /> <br />
      <div className="curri">
        <img src="cur.png" alt="" />
      </div>
      <div className="slid">
        <Slider />
      </div>
      <div className="sec-4">
        <p className="t1">
          Dele Preparatory School and Dele Peddle International High School{" "}
        </p>

        <p className="t2">
          OPEN TO PARENTS & GUESTS <br /> Mondays - Thursdays 8:45am - 3:00pm{" "}
          <br /> Fridays 8:45am - 2:30pm <br /> <br /> PUPILS HOURS <br />{" "}
          Mondays - Thursdays 7:00am - 3:30pm <br /> Fridays 7:00 - 2:30pm{" "}
          <br /> <br />
          GENERAL INFORMATION <br /> All Visitors are Kindly Asked To Sign In At
          The Security Post & Wait For Further Instructions Before Proceeding
          Into The School Compound. We Apologize For Any Inconvenience{" "}
        </p>
      </div>
      <div className="icons">
        <div className="icon1">
          <img src="icon1.png" alt="" />
          <h2>40+</h2>
          <p>Years of Excellence</p>
        </div>
        <div className="icon1">
          <img src="icon2.png" alt="" />
          <h2>500+</h2>
          <p>Number of Students</p>
        </div>
        <div className="icon1">
          <img src="icon3.png" alt="" />
          <h2>70</h2>
          <p>Teacher and Faculty</p>
        </div>
      </div>
      <Footer />
    </Div>
  );
};

export default HomePage;
const Div = styled.div`
overflow:hidden;
width:100%;


.section{
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.60) 4.35%, rgba(255, 255, 255, 0.60) 10.00%, rgba(0, 0, 0, 0.00) 48.69%), linear-gradient(184deg, #01263D 0%, rgba(0, 0, 0, 0.00) 40.00%),  url('Main.png');
  height:700px;
background-size:cover;
  background-repeat:no-repeat;
}

.head{
  background: linear-gradient(180deg, #01263D 10.00%, rgba(0, 0, 0, 0.00) 100%);#
  width:100%;
  height:700px;
}


.sec{
  display:flex;
  justify-content:center;
  gap:10px;
  align-items:center;
  position:relative;
  margin-bottom:0;
  margin-top:100px;
}


// .sec h1{
//   color: #800020;
//   text-align: center;
//   font: 700 50px/50px "Fuzzy Bubbles", sans-serif;
//   text-transform: uppercase;
//   position: relative;
//   width: 1498px;
//   height: 191px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin:0;

// }

.logo1{
    position:absolute;
    left:180px;
    bottom:60px;
      width:120px;
  height:120px;
}

.logo2{
    position:absolute;
    right:180px;
    bottom:60px;
      width:120px;
  height:120px;
}

.ttt{
  display:flex;
  flex-direction:column;
  margin-top:11px;
}

.wisee{
    color: #FFF;
font-family:' Bhoo loo Bhai', sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 32px;
text-align:center;
margin-bottom:40px;
text-align:center;
}


.abt{
width: 157.52px;
padding: 12px 35.52px 12px 35px;
align-items: center;
border-radius: 30px;
background: rgba(190, 30, 45, 0.75);
outline:none;
text-align:center;
justify-content:center;
margin:0 auto;
cursor:pointer;
text-decoration:none;



color: #FAFF00;
font-family: "Baloo Bhai", sans-serif;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: 20px; 
letter-spacing: 1px;
text-transform: uppercase;
}

.info{
    background: linear-gradient(180deg, #FFF 30.00%, rgba(0, 0, 0, 0.00) 100%);
}

.let{
  width:80%;
 
}

.info{
padding-top:300px;
  justify-content:center;
  text-align:center;
  align-items:center;
background: linear-gradient(180deg, #FFF 30.00%, rgba(0, 0, 0, 0.00) 100%);
  max-width: 1920px;
height: 800px;
}


.info-head{
  color: #228B22;
text-align: center;
  font: 700 55px/97.5px "Fuzzy Bubbles", sans-serif;
}

.info1{
display:flex;
justify-content:center;
gap:10px;
margin-bottom:10px;

}

.info2{
  display:flex;
  justify-content:center;
  gap:10px;
}

.res{
  display: flex;
flex-direction:column;
width:  300px;
padding: 46px 31px 51px 31px;
align-items: center;
border-radius: 3px;
background: rgba(128, 0, 32, 0.73);
text-align:center;

}

.res span{
  display: flex;
padding: 0px 13.31px 1.8px 13px;
align-items: flex-start;
border: 1px solid rgba(255, 255, 255, 0.25);

color: rgba(255, 255, 255, 0.25);
text-align: center;
  font: 400 16px/28.8px "Baloo Bhai", sans-serif;
cursor:pointer;
}


.res h1{
  color: #FFF;
text-align: center;
  font: 600 18px/26px "Baloo Bhai", sans-serif;
text-transform: uppercase;
}




.curri{
  width:100%;
}
.curri img{
  objet-fit:cover;
  width:100%;
}


.slid{
background: linear-gradient(0deg, #FFF 0%, #01263D 100%);
display: flex;
max-width: 1920px;
max-height: 900px;
padding: 120px 0px 110px 0px;
border:1px solid black;
}


.sec-4{
background:  linear-gradient(180deg, rgba(0, 0, 0, 0.83) 50%, #01263D 100%),url("m3.png");  
max-width: 1920px;
height: 1000px;
background-repeat:no-repeat;
background-size:cover;
color:white;
display:flex;
padding-top:50px;
justify-content:center;
align-items:center;
gap:20px;
padding-left:20px;
padding-right:20px;


}
.t1{
max-width: 842px;
justify-content: center;
color: #228B22;
font-family: "Fuzzy Bubbles", sans-serif;
font-size: 65px;
font-style: normal;
font-weight: 700;
}

.t2{
max-width: 568px;
color: #FAFF00;
font-family: "Baloo Bhai", sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 550;
line-height: 28.8px;

}

.icons{
background: linear-gradient(180deg, #01263D 0%, rgba(1, 38, 61, 0.93) 50%, #000615 100%);
max-width: 1920px;
height: 430.78px;
justify-content:center;
display:flex;
gap:40px;
color:white;
align-items:center;
}

.icon1{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
}

.icon1 h2{
  color: #FFF;
text-align: center;
font-family: "Baloo Bhai", sans-serif;
font-size: 28px;
font-style: normal;
font-weight: 900;
margin:0;
}


.icon1 p{
  color: #FFF;
text-align: center;
font-family: "Baloo Bhai", sans-serif;
font-size: 18px;
font-style: normal;
font-weight: 400;
margin:0;
}

.icon1 img{
width:41px;
height:40px;
object-fit:contain;

}







@media (max-width:768px){

.logo2{
    position:absolute;
    right:50px;
   bottom:60px;
  width:120px;
  height:120px;
}

.logo1{
    position:absolute;
    left:50px;
   bottom:60px;
  width:120px;
  height:120px;
  margin-right:20px;
}


.let{
    width:100%;
}



.info{
  display:block;
  margin-top:0px;
  padding-top:20px;
  height:auto;
}

.info1{
  display:block;
   gap:20px;

   align-items:center;
   padding:0;
}


.info2{
  display:block;
   gap:20px;

   align-items:center;
   padding:0;
}


.sec{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:0;
  width:100%;
  margin-top:200px;
  position:relative;

}

.res{
  justify-content:center;
  margin:10px auto;
  
}


  .slid{
background: linear-gradient(0deg, #FFF 0%, #01263D 100%);
display: flex;
padding: 120px 0px 110px 0px;
border:1px solid black;
margin:0;
}
.sec-4{
  display:flex;
  flex-direction:column;
  text-align:center;
  border:none;


}

.t1{
  font-size:40px ;
}

.t2{
  font-size:20px;
}

.icons{
  gap:2px;
  display:flex;

}

.info-head{
  font-size:45px;
}

.wisee{
  font-size:20px;
}


}


`;
