import { styled } from "styled-components";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
      <Div>
          <div className="section">
        <div className="head">
          <Navbar />
          <br /> <br />
          <div className="sec">
                      <img src="logo1.png" alt="" className="logo1" />
                      
                      <div>
                          

                          
                      </div>

            <h1>
                Dele Preparatory School <br />
& <br />
 Dele Peddle International High School <br />
            </h1>

            <img src="logo2.png" alt=""  className="logo2"/>
                  </div>
                  
                  <p className="wisee">A positive learning environment through high expectations.</p>
                  <p className="abt">About us</p>
        </div>
          </div>
          





          <div className="info">
              <h1>Registration, Resources & More</h1>
              <div className="infoo">
                  
                  
              </div>
              
              

          </div>

    </Div>
  )
}

export default HomePage
const Div = styled.div`
.section{
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.60) 4.35%, rgba(255, 255, 255, 0.60) 10.00%, rgba(0, 0, 0, 0.00) 48.69%), linear-gradient(184deg, #01263D 0%, rgba(0, 0, 0, 0.00) 40.00%),  url('Main.png');
  height:70vh;
background-size:cover;
  background-repeat:no-repeat;
}

.head{
  background: linear-gradient(180deg, #01263D 10.00%, rgba(0, 0, 0, 0.00) 100%);#
  width:100%;
  height:70vh;
}


.sec{
  display:flex;
  justify-content:center;
  gap:10px;
  align-items:center;
  position:relative;
  margin-bottom:0;
}
.sec img{
  width:120px;
  height:120px;
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
    bottom:80px;
}

.logo2{
    position:absolute;
    right:180px;
    bottom:80px;
}

.wisee{
    color: #FFF;
font-family:' Bhoo loo Bhai', cursive;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 32px;
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



`;