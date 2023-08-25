import { styled } from "styled-components";
import Navbar from "./Navbar";
import Reg from "./Modals/Reg";
import Transport from "./Modals/Transport";
import Canteen from "./Modals/Canteen";
import SchoolResource from "./Modals/SchoolResource";
import Faq from "./Modals/Faq";
import Curriculmn from "./Modals/Curriculumn";

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
            <span className="abt">About us</span>
          </div>
        </div>
      </div>
      <div className="info">
        <h1 className="info-head">Registration, Resources & More</h1>

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
        <img src="curri.png" alt="" />
      </div>
    </Div>
  );
};

export default HomePage;
const Div = styled.div`
.section{
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.60) 4.35%, rgba(255, 255, 255, 0.60) 10.00%, rgba(0, 0, 0, 0.00) 48.69%), linear-gradient(184deg, #01263D 0%, rgba(0, 0, 0, 0.00) 40.00%),  url('Main.png');
  height:600px;
background-size:cover;
  background-repeat:no-repeat;
}

.head{
  background: linear-gradient(180deg, #01263D 10.00%, rgba(0, 0, 0, 0.00) 100%);#
  width:100%;
  height:600px;
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


.sec h1{
  color: #800020;
  text-align: center;
  font: 700 50px/50px "Fuzzy Bubbles", sans-serif;
  text-transform: uppercase;
  position: relative;
  width: 1498px;
  height: 191px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:0;

}

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
font-family:' Bhoo loo Bhai', cursive;
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





color: #FAFF00;
font-family: Roboto;
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
  justify-content:center;
  text-align:center;
}


.info-head{
  color: #228B22;
text-align: center;
font-family: Fuzzy Bubbles;
font-size: 45px;
font-style: normal;
font-weight: 700;
line-height: 97.5px; 
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
font-family: Lato;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 28.8px; 
cursor:pointer;
}


.res h1{
  color: #FFF;
text-align: center;
font-family: 'Baloo Bhai', cursive;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 26px; 
text-transform: uppercase;
}




.curri{
  // opacity: 0.07999999821186066;


}





`;
