import ImagedParagraph from './imaged-p/imaged-p.jsx';
import Navbar from './navbar/Navbar.jsx';

function App() {

  return (
    <>
      <Navbar />
      <ImagedParagraph 
      href="https://github.com/VoidScientist" 
      src="https://avatars.githubusercontent.com/u/81984954?v=4"
      title="Overview" 
      content="I am **Louis ARCELON** aka **VoidScientist** on most places. 
      I'm an 18 years old french **engineering student** at ESME Sudria who's **passionate about programming**.
      At the moment what I do is mostly for **fun** and **training** although I aim to become **professional**.
      On my website **you'll find**:
      - Informations about how to contact me.
      - Links to some of my personal projects.
      - Devlogs about these projects.
      That's it for this index page! Do not hesitate to click on my profile **picture on the left** to go and look at my **github profile.**"
      />
    </>
  );
}

export default App;
