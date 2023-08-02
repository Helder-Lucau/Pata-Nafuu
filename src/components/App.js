import '../App.css';
import BookAppointment from './BookAppointment';

function App() {

  const formInputValues = (values) => {
    console.log(values);
  }
  return (
    <div className="App">
     <BookAppointment formInputValues={formInputValues}/>
    </div>
  );
}

export default App;
