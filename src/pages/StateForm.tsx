import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { Card, Form, FormGroup, Table} from 'react-bootstrap';
import Navi from '../components/Navi';
interface Information  {
  date : string;
  mood : string;
  arythmia : boolean;
  chestPain : boolean;
  fever : boolean;
  bluredVision : boolean;
  avc : boolean;
}

const StateForm: React.FC = () => {
 
  const [formData, setFormData]=useState<Information>({
    date: new Date().toLocaleDateString(), mood:"🙂", arythmia:false ,chestPain:false, fever:false,bluredVision:false,avc:false
  })
 
 
function handleChange(e: any){
  setFormData(prevFormData =>{
    return {
      ...prevFormData,
      [e.target.name]: parseInt(e.target.value)===1 ? true : false
    }
  })
}

  return (

    <div className="container mt-4" >
      <Navi></Navi>
      <Card >
        <Card.Header>Etat du jour</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Date</Form.Label>
              <Form.Control className='text-center' name="date" type="text" defaultValue={formData.date} disabled />
            </Form.Group>

            <Table borderless={true} className="container" >
              <tbody>
                <tr>
                  <td> <Form.Label >Ressenti Global</Form.Label> </td>
                  <td> <Form.Range
                    className="container"
                    name="mood"
                    step={25}
                    defaultValue={50}
                    onChange={(e)=>{
                     let mooD="";
                      if (parseInt(e.target.value) < 20) {
                        mooD="😔"
                      } else if (parseInt(e.target.value)>= 20 && parseInt(e.target.value) < 40) {
                        mooD="😐"
                      } else if (parseInt(e.target.value) >= 40 && parseInt(e.target.value) < 60) {
                        mooD="🙂"
                      } else if (parseInt(e.target.value) >= 60 &&parseInt(e.target.value)< 80) {
                        mooD="😄"
                      } else if (parseInt(e.target.value) >= 80) {
                        mooD="😎"
                      }
                      setFormData(prevFormData =>{
                        return {
                          ...prevFormData,
                            [e.target.name]: mooD
                            }
                        })
                      }
                    }
                    
                    style={{ width: "150px" }} />
                  </td>
                  <td> <p style={{ fontSize: "30px" }}>{formData.mood}</p> </td>
                </tr>
              </tbody>
            </Table>
            <FormGroup>
              <div>
                <Table borderless={true} responsive="sm">
                  <thead>
                    <tr>
                      <th> Depuis la dernière saisie... </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> Avez-vous ressenti(e) une arythmie ? </td>
                      <td> <Form.Check inline label="Oui" name="arythmia" value={1} type="radio"  onChange={handleChange} /> </td>
                      <td> <Form.Check inline label="Non" name="arythmia" value={0} type="radio" onChange={handleChange} checked={true}/> </td>
                    </tr>
                    <tr>
                      
                    </tr>
                    
                    <tr>
                      <td> Avez-vous ressenti(e) une douleur à la poitrine ? </td>
                      <td> <Form.Check inline label="Oui" name="chestPain" value={1} type="radio" onChange={handleChange} /> </td>
                      <td> <Form.Check inline label="Non" name="chestPain" value={0} type="radio" onChange={handleChange} checked={true} /> </td>
                    </tr>
                    <tr>
                      <td> Avez-vous eu une fièvre supérieure à 38°C ? </td>
                      <td> <Form.Check inline label="Oui" name="fever" value={1} type="radio" onChange={handleChange} /> </td>
                      <td> <Form.Check inline label="Non" name="fever" value={0} type="radio" onChange={handleChange} checked={true} /> </td>
                    </tr>
                    <tr>
                      <td> Avez-vous ressenti(e) une détérioration soudaine de votre vision ? </td>
                      <td> <Form.Check inline label="Oui" name="bluredVision" value={1} type="radio" onChange={handleChange}  /> </td>
                      <td> <Form.Check inline label="Non" name="bluredVision" value={0} type="radio" onChange={handleChange} checked={true} /> </td>
                    </tr>
                    <tr>
                      <td> Avez-vous ressenti(e) des signes d'un AVC (difficulté d'élocution, engourdissement ou faiblesse au visage, aux bras ou aux jambes) ? </td>
                      <td> <Form.Check inline label="Oui" name="avc" type="radio" value={1} onChange={handleChange} /> </td>
                      <td> <Form.Check inline label="Non" name="avc" type="radio" value={0} onChange={handleChange} checked={true}/> </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="container text-center">
                <Link to={{pathname:"/rapport"}} state={formData}   className="btn btn-primary" >Soumettre</Link>
              </div>
            </FormGroup>
            
          </Form>
        </Card.Body>
        
      </Card>
    </div>
  )
};




export default StateForm;