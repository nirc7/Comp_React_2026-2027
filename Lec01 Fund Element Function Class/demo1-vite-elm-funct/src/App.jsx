
import './App.css';
import './Elements/EHeader';
import EHeader from './Elements/EHeader';
import FCPerson from './Functional Comps/FCPerson';

function App() {

  return (
    <>
      <section id="center">
        <div>
          {EHeader}
          <h1>Get started</h1>
          <p>
            Ruppin <br />
          </p>
          <FCPerson id={1} name="avi" /> <br />
          <FCPerson id={2} name="ben" />
          {EHeader}

        </div>
      </section>
    </>
  )
}

export default App
