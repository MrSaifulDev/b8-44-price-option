
import './App.css'
import NavBar from './components/NavBar/NavBar'
import DaisyNav from './components/DaisyNav/DaisyNav'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'

function App() {


  return (
   <div>

    <NavBar></NavBar>
   
   <div className='mx-4'>
   <DaisyNav></DaisyNav>
    <PriceOptions></PriceOptions>

    
    <LineChart></LineChart>
   </div>




    
   </div>
  )
}

export default App

