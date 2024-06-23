
import './App.css'
import NavBar from './components/NavBar/NavBar'
import DaisyNav from './components/DaisyNav/DaisyNav'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'

function App() {

  


  return (
   <div>

    <NavBar></NavBar>
   
   <div className='mx-4'>
   <DaisyNav></DaisyNav>
    <PriceOptions></PriceOptions>

    
    <LineChart></LineChart>

    <Phones></Phones>



   </div>
   </div>
  )
}

export default App

