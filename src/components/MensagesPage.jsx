import axios from "axios"
import { useState,useEffect } from "react"
import { CardGroup,Container,Navbar } from "react-bootstrap"
import Mensage from "./Mensage"

const MensagesPage = () => {
  const [mensages, setMensages] = useState([])
  
  const fetchData = async () => {
    const result = await axios.get("http://localhost:8000/api/mensages/")
    setMensages(result.data)
  }
  
  useEffect(()=>{
    fetchData()
  },[])
  
  //make pagination of the mensages
  return (
    <>
    <Container>
      <CardGroup className="d-block">
        {mensages.reverse().map(mensage => (
          <Mensage 
          key={mensage.id} 
          author={mensage.author}
          mensage={mensage.text} />
        ))}
      </CardGroup>
    </Container>
    <Navbar position="fixed" bg="dark" className="justify-content-center">
      <p style={{color:"#f0f8ff"}}>©Copyright by <a className="afooter" href="https://github.com/R0drig">Rodrigo dos Reis</a></p>
    </Navbar>
    </>
  )
}

export default MensagesPage
