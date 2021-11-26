import {Card} from 'react-bootstrap'
import {memo} from 'react'

const Mensage = (props) => {

  return (
    <>
    <Card className="rounded m-2">
      <Card.Body>
        <Card.Header className="bg-secondary ">
          {props.author}
        </Card.Header>
        <Card.Text>
          {props.mensage}
        </Card.Text>    
      </Card.Body>
    </Card>  
    </>)
  }
       
export default memo(Mensage)
