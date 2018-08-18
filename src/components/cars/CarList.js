import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardText } from 'react-md';
import { requestCars, filterCars } from '../../actions/CarsActions';
import ListHeader from './ListHeader';
import CarItemList from './CarItemList';

class CarList extends Component {
  static propTypes = {
    load: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onFilter: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { load, items } = this.props;
    if (items.length === 0) {
      load();
    }
  }

  render() {
    const {
      items, isLoading, onFilter, load,
    } = this.props;
    return (
      <Card style={{ opacity: isLoading ? 0.5 : 1 }}>
        <CardText>
          <ListHeader onFilter={onFilter} />
          {items.map(car => <CarItemList key={car.model} car={car} />)}
        </CardText>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(requestCars()),
  onFilter: filterValue => dispatch(filterCars(filterValue)),
});

const mapStateToProps = state => ({
  isLoading: state.cars.isLoading,
  items: [...state.cars.cars],
});

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
