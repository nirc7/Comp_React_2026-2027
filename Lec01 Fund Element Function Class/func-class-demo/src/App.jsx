
import './App.css';
import CCCar from './Class Comps/CCCar';
import EHeader from './Elements/EHeader';
import FCPerson from './Functional Comps/FCPerson';

function App() {

  return (
    <>
      <section id="center">
        {EHeader}
        <div>
          <h1>Get started</h1>
          <p>
            Ruppin
          </p>

          <CCCar speed={300} /> <br />

          <FCPerson id={1} name={"avi"} paddingSize={10} /> <br />
          <FCPerson id={20} name="ben" paddingSize={10} />
          <FCPerson id={30} name="chalrie" paddingSize={15} />
          {/* {EHeader} */}

        </div>
      </section>




    </>
  )
}

export default App
