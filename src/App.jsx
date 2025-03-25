import{ lazy} from "react"
import './App.css'
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom' 
const Dashboard = lazy(()=> import( './components/Dashboard'))
const Landing = lazy(()=> import ('./components/landing'))

function App() {
   
     return(
        <div>
    <BrowserRouter>
    <AppBar></AppBar>
    <Routes>
      <Route path ="/Dashboard" element={<Dashboard/>}/>
      <Route path="/" element ={<Landing/>}/>
    </Routes>
      
    </BrowserRouter>
    </div>
  )
}
function AppBar(){
  const navigate =useNavigate();
  
  return <div>
        <button onClick= {()=>{
          navigate("/");
        }}>Landing Page</button>

        <button onClick={()=>{
          navigate("/Dashboard");
        }}>Dashboard</button>
</div>
}

export default App
