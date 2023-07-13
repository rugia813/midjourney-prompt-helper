import './App.css';
import Navbar from './components/Navbar';

function About() {

  return (
    <div className="App h-screen flex flex-col items-center max-w-xl m-auto justify-around">

      {/* Nav bar */}
      <Navbar />

      {/* About Page Content */}
      <div id="about" className='text-white h-3/6 flex flex-col gap-12'>
        <p className=''>
          <h1 className='text-4xl font-bold mb-4'>About</h1>
          This is a tool to help you make prompts for <a href="https://www.midjourney.com/" className='underline' target='_blank' rel="noreferrer">midjourney</a>.
          The idea is that the app provides a collection of tokens for you to pick from, and you can pick those that you might use for your current project,
          and then you can mix and match them to form prompts, and test them out in midjourney.
          You will be doing these mostly by clicking buttons, saving you lots of key strokes.
        </p>

        <p>
          <h1 className='text-4xl font-bold mb-4'>Additional Informations</h1>
          Parameter List: <a href="https://docs.midjourney.com/docs/parameter-list" className='underline' target='_blank' rel="noreferrer">https://docs.midjourney.com/docs/parameter-list</a>
        </p>
      </div>
    </div>
  );
}

export default About;
