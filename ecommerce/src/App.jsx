import './App.css'
import { Navbar } from './componets/navbar/NavBar'
import { itemListContainer } from './componets/ItemListContainer/itemListcontainer'



export const App =() => {

  return (
    

    <div>
      
      <Navbar/>
      <itemListContainer greeting= {"productos"} />
      <itemCount/>
      



    </div>



  )



}

export default App;
