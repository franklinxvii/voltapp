import React from 'react';
import { Card,Table} from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

import Navi from '../components/Navi';
import RealTimeChart from '../components/RealTimeChart';
import SendingButton from '../components/SendingButton';



  const VitalSignReport: React.FC = ()=>{
  const location = useLocation();
  const state:any= location.state 
  const data =state || {
    date: "jour",
    mood: "🙂",
    arythmia: false,
    chestPain: false,
    fever: false,
    bluredVision: false,
    avc: false,
  };
  console.log(data)
  
  
return(
  <div className="container mt-4" >
  <Navi></Navi>
      
    <Card className="mb-3" >
    <Card.Body>
      <Card.Title className= "container text-center">Electrocardiogramme du {data.date} </Card.Title>
      <div className= "container text-center" >
      <RealTimeChart/>
      </div>

     
      <Card.Text>
      <Table borderless={true} responsive="sm">
                  <thead>
                    <tr>
                      <th> Vous avez declarez : </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> Ressenti Global </td>
                      <td> {data.mood}</td>
                    </tr>
                    <tr>
                      <td> ressentir une arythmie </td>
                      <td> { data.arythmia ? "Oui" : "Non" } </td>
                    </tr>
                    <tr>
                      <td> avoir eu une fièvre supérieure à 38°C </td>
                      <td> { data.fever ? "Oui" : "Non" } </td>
                    </tr>
                    
                    <tr>
                      <td> ressentir  une détérioration soudaine de votre vision  </td>
                      <td> { data.bluredVision ? "Oui" : "Non" } </td>
                    </tr>
                    <tr>
                      <td> ressentir  une douleur à la poitrine </td>
                      <td> { data.chestPain ? "Oui" : "Non" } </td>
                    </tr>
                    <tr>
                      <td> ressentir des signes d'un AVC (difficulté d'élocution, engourdissement ou faiblesse au visage, aux bras ou aux jambes) </td>
                      <td> { data.avc ? "Oui" : "Non" } </td>
                    </tr>
                  </tbody>
        </Table>
        
         <div className="container text-center">
         <p><strong> { data.avc | data.chestPain | data.bluredVision | data.fever ? "Urgence!!! Vous devez consulter immédiatement un medecin" : "Prompt rétablissement à vous" }</strong></p>
         <SendingButton/>
          </div>
      </Card.Text>
    </Card.Body>
  </Card>  
      

    </div>  );
       

}
export default VitalSignReport;





