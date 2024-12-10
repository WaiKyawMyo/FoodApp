import { useState } from "react"
import Search from "./components/Search"
import Foodlist from "./components/Foodlist"
import Nav from "./components/Nav"
import './App.css'
import Container from "./components/Container"
import InnerContainer from "./components/InnerContainer"
import Fooddetails from "./components/Fooddetail"

function App() {
 const [fooddata,Setfooddata]= useState([])
 const [foodid,Setfoodid]= useState('642583')

  return (
    <div  className="body">
     <Nav />
     <Search fooddata={fooddata} Setfooddata={Setfooddata}/>
     <Container >
        <InnerContainer>
          <Foodlist Setfoodid={Setfoodid} fooddata={fooddata}/>
        </InnerContainer>
        <InnerContainer>
          <Fooddetails foodid={foodid}/>
        </InnerContainer>
     </Container>
    </div>
  )
}

export default App
