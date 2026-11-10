
import './App.css';
import CCPerson from './ClassComps/CCPerson';


function App() {
  
  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
          <p>Ruppin</p>

          <CCPerson id={1} name={"avi"} age={50} hSize={10} />
          <CCPerson id={2} name={"ben"} age={51} hSize={20}/>
        </div>
      </section>
    </>
  )
}

export default App
