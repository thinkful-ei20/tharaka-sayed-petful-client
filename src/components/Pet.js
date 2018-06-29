import React from 'react';

export default function Pet(props) {
  const pets = props.petToAdopt.name
  if (!pets) {
    return (
      <p>Nothing left</p>
    )
  } else {
    return (
      <section>
        <header>
          <h2>{props.petToAdopt.name}</h2>
          <img src={props.petToAdopt.imageURL} alt={props.petToAdopt.imageDescription} />
        </header>
        <main>
          <dl>
            <dt>sex:</dt>
            <dd>{props.petToAdopt.sex}</dd>
            <dt>age:</dt>
            <dd>{props.petToAdopt.age}</dd>
            <dt>breed:</dt>
            <dd>{props.petToAdopt.breed}</dd>
            <dt>story:</dt>
            <dd>{props.petToAdopt.story}</dd>
          </dl>
          <button onClick={() => props.onAdoptPet()}>Adopt</button>
        </main>
      </section>
    )
  }
}