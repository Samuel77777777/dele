import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel"; // Import the Carousel component
import { styled } from "styled-components";

const Slider = () => {
  const images = [
    // {
    //   // original: "m2.png",
    //   thumbnail: "thumb.png",
    // },
    {
      original: "m1.png",
      thumbnail: "thumb1.png",
    },
    {
      original: "m3.png",
      thumbnail: "thumb2.png",
    },
    {
      original: "m4.png",
      thumbnail: "thumb3.png",
    },
    // {
    //   original: "m2.png",
    //   thumbnail: "thumb.png",
    // },
    {
      original: "m1.png",
      thumbnail: "thumb1.png",
    },
    {
      original: "m3.png",
      thumbnail: "thumb2.png",
    },
    {
      original: "m4.png",
      thumbnail: "thumb3.png",
    },

    // {
    //   original: "m2.png",
    //   thumbnail: "thumb.png",
    // },
    {
      original: "m1.png",
      thumbnail: "thumb1.png",
    },
    {
      original: "m3.png",
      thumbnail: "thumb2.png",
    },
    {
      original: "m4.png",
      thumbnail: "thumb3.png",
    },
    {
      original: "m1.png",
      thumbnail: "thumb1.png",
    },
    {
      original: "m3.png",
      thumbnail: "thumb2.png",
    },
    {
      original: "m4.png",
      thumbnail: "thumb3.png",
    },
  ];

  // eslint-disable-next-line react/prop-types
  // const CustomPrevArrow = ({ onClick }) => (
  //   <StyledArrow onClick={onClick}>Previous</StyledArrow>
  // );
  // // eslint-disable-next-line react/prop-types
  // const CustomNextArrow = ({ onClick }) => (
  //   <StyledArrow onClick={onClick}>Next</StyledArrow>
  // );

  return (
    <Div className="slider-container">
      <Carousel
        autoPlay={true}
        showArrows={true}
        showThumbs={true}
        showStatus={false}
        showIndicators={false}
        dynamicHeight={false}
        emulateTouch={true} // Enable touch swiping
        thumbWidth={200}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.original} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
    </Div>
  );
};

export default Slider;

const Div = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;

  .thumbs-wrapper {
    margin-top: 20px;
  }
  .thumbs-wrapper img {
    width: 208px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 auto;
    padding: 0px;
  }
`;
