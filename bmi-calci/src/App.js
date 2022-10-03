import React , {useState} from 'react';
import './App.css';
import './index.css'
function App() {
//  state
      const [weight, setWeight] = useState(0);
      const [height, setHeight] = useState(0);
      const [bmi, setBmi] = useState('');
      const [message, setMessage] = useState('');
 
      let imgSrc ='';
 
 
  return (
    <div className="app">
      <div className='container'>
           <h2 className='center'>BMI Calculator</h2>
           <form>
            <div>
              <label>weight (lbs)</label>
              <input value={weight} />
            </div>
            <div>
              <label>height (in)</label>
              <input value={height} />
            </div>
            <div>
              <button className='btn' type='submit'>Submit</button>
              <button className='btn btn-outline' type='submit'>Submit</button>
            </div>
           </form>
           <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
           <p>{message}</p>
           </div>
           <div className='image-container'>
               <img src={imgSrc} alt='' />
           </div>
      </div>
    </div>
  );
}

export default App;
