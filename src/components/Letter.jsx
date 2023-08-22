import { styled } from "styled-components";

const Text = ({ text }) => {
  const letters = text.split('');

    return (
        <Div>
            
  <div className="text-with-individual-borders">
      {letters.map((letter, index) => (
        <span key={index} className="letter">
          {letter}
        </span>
      ))}
    </div>
            


      </Div>

  );
};

export default Text;
const Div = styled.div`
.text-with-individual-borders {
  display: inline-block;
  position: relative;
}

.letter {
    color:blue;
  display: inline-block;
  position: relative;
  font-size: 24px; /* Adjust font size as needed */
}

.letter::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 5px solid red; /* Border color and size */
  pointer-events: none; /* Ensure the border doesn't interfere with interaction */
  z-index: -1; /* Place the border behind the text */
  transform: translate(-2px, -2px); /* Adjust for border width */
}


`;
