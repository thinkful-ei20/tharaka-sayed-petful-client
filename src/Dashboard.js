import React from 'react';
import { connect } from 'react-redux'
import Pet from './components/Pet'
import { fetchCat, fetchDog, adoptCat, adoptDog } from './actions';

class Dashboard extends React.Component{

  componentDidMount() {
    this.props.dispatch(fetchCat())
    this.props.dispatch(fetchDog())
  }

  render() {
    return (
      <div>
        <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={() => this.props.dispatch(adoptCat())} />
        <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={() => this.props.dispatch(adoptDog())} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.cat.cats,
  dogToAdopt: state.dog.dogs
})

export default connect(mapStateToProps)(Dashboard)