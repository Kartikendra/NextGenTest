
import './App.css'
import { Navbar } from './components/navbar/navbar'

import NavItems from './configs/navItems.json'
function App() {

  return (
  <>
  <div className='mainbody'>
    <div className='navbar'>
      {
        NavItems.navItems.map((item)=>{
          return(<div>
              {item.label}
          </div>
        
          )
        })
      }

    </div>
    <div className='content'>
         <div className='maps'></div>
         <div className='searchbar'></div>
    </div>

  </div>
  </>
  )
}

export default App