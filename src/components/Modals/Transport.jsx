// import { styled } from "styled-components";
import { useState } from "react";
import "./Modal.css";

const Transport = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div>
      <button onClick={showModal} className="mood">
        Transportation
      </button>
      {show && (
        <div className="opacity" onClick={hideModal}>
          <div className="reg-modal" onClick={(e) => e.stopPropagation()}>
            <div className="top">
              {" "}
              <h6>Registration</h6>
            </div>

            <p className="tts">
              Optional. 4 buses running. Route - Upgun to the school and Rokel
              to the school
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transport;

// const Div = styled.div`
//   .reg-modal {
//     max-width: 700px;
//     height: 500px;
//     border-radius: 25px;
//     background: #fff;
//     justify-content: center;
//     margin: 50px auto;
//     text-align: center;
//     border: 1px solid red;
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
//     overflow: auto;
//     -ms-overflow-style: none;
//     scrollbar-width: none;
//   }

//   .top {
//     background-color: brown;
//     width: 100%;
//     border-radius: 10px;
//     align-items: center;
//     justify-content: center;
//     height: 100px;
//     text-align: center;
//   }

//   .top h6 {
//     color: #fff;
//     text-align: center;
//     font-family: "Baloo Bhai", cursive;
//     font-size: 55px;
//     font-style: normal;
//     font-weight: 400;
//     margin: 0 auto;
//   }

//   .tts {
//     justify-content: center;
//     color: #000;
//     font-family: "Baloo Bhai", cursive;
//     font-size: 24px;
//     font-style: normal;
//     font-weight: 900;
//     line-height: 45px;
//     padding: 0 20px;
//     text-align: center;
//   }

//   .opacity {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.3);
//     z-index: 1000;
//     overflow: hidden;l
//   }
// `;

// import { useState } from "react";
// import { styled } from "styled-components";

// const ReviewModal = () => {
//   const [showModal, setShowModal] = useState(false);

//   const Open = () => {
//     setShowModal(true);
//   };

//   const Close = () => {
//     setShowModal(false);
//   };

//   return (
//     <Div>
//       <button onClick={Open} className="rev-btn">
//         Write a Rewiew <img src="assets/star.png" alt="" />
//       </button>

//       {showModal && (
//         <div className="modal-overlay" onClick={Close}>
//           <div className="modal" onClick={(e) => e.stopPropagation()}>
//             <span onClick={Close}>&times;</span>
//             <div className="headsss">
//               <span>Registration</span>
//             </div>

//             <p className="p">
//               Daycare to Year 1 (nursery 1) starts May 2023. you are required to
//               bring original birth certificate and original Under 5 Card. You
//               are also required to bring your printed NIN. <br /> <br />
//               Class 1 to Class 5- Registration starts July 2023. You need to
//               bring the original report card from previous school, birth //
//               certificate and printed NIN <br /> <br />
//               JSS1- Bring NPSE results not later 3 weeks after results are out.
//               Bring WAEC printed results from scratch card. Bring original class
//               5 & 6 report card, birth certificate and printed NIN. <br />{" "}
//               <br />
//               JSS2- Registration starts July 2023. Bring previous school JSS1
//               report card, original copy of NIN <br /> <br />
//               SS1- Bring BECE result not later 3 weeks after results are out.
//               Bring printed BECE results from scratch card. Bring original class
//               5 & 6 report card, birth certificate and printed NIN. <br />{" "}
//               <br />
//               SS2- Registration starts July 2023. Required to bring CASS number
//               (this is mandatory), previous school report card, birth
//               certificate and printed NIN. <br /> <br />
//             </p>
//           </div>
//         </div>
//       )}
//     </Div>
//   );
// };

// export default ReviewModal;

// const Div = styled.div`
//   .rev-btn {
//     height: 45px;
//     border-right: 4px solid red;
//     border-left: none;
//     border-top: none;
//     border-bottom: none;
//     background: white;
//     color: #000000;
//     text-align: center;
//     font: 500 21px "Josefin Sans", sans-serif;
//     display: flex;
//     align-items: center;
//     gap: 5px;
//     padding: 10px;
//   }

//   .headsss {
//     background-color: brown;
//     width: 100%;
//     border-radius: 10px;
//     align-items: center;
//     justify-content: center;
//     height: 100px;
//     text-align: center;
//   }

//   .headsss span {
//     color: #fff;
//     text-align: center;
//     font-family: "Baloo Bhai", cursive;
//     font-size: 55px;
//     font-style: normal;
//     font-weight: 400;
//   }

//   .p {
//     justify-content: center;
//     color: #000;
//     font-family: "Baloo Bhai", cursive;
//     font-size: 24px;
//     font-style: normal;
//     font-weight: 900;
//     line-height: 45px;
//     padding: 0 20px;
//   }

//   .modal-overlay {
//     // position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.5);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     overflow: scroll;
//   }

//   .modal {
//     background-color: #fefefe;
//     border: 1px solid #888;
//     padding: 20px;
//     position: relative;
//     max-width: 80%;
//     width: 600px;
//     animation: myAnim 2s ease-out 0s 1 normal forwards;
//   }

//   @keyframes myAnim {
//     0% {
//       opacity: 0;
//     }

//     100% {
//       opacity: 1;
//     }
//   }
// `;
