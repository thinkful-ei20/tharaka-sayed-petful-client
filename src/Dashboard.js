import React from 'react';
import Pet from './components/Pet'
import { fetchCat, fetchDog } from './actions';

class Dashboard extends React.Component{

  componentDidMount() {
    this.props.dispatch(fetchCat)
    this.props.dispatch(fetchDog)
  }

  render() {
    return (
      <div>
        <Pet petToAdopt={props.catToAdopt} onAdoptPet={props.onAdoptPet} />
        <Pet petToAdopt={props.dogToAdopt} onAdoptPet={props.onAdoptPet} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cat: state.cat,
  dog: state.dog
})