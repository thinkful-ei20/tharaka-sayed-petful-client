import React from 'react';
import Pet from './components/Pet'

export default function Dashboard(props) {
  return (
    <div>
      <Pet petToAdopt={props.catToAdopt} onAdoptPet={props.onAdoptPet} />
      <Pet petToAdopt={props.dogToAdopt} onAdoptPet={props.onAdoptPet} />
    </div>
  )
}