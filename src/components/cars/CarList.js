import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardText } from 'react-md';
import { requestCars, filterCars, addCarToCompare } from '../../actions/CarsActions';
import ListHeader from './ListHeader';
import CarItemList from './CarItemList';

class CarList extends PureComponent {
  static propTypes = {
    load: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onFilter: PropTypes.func.isRequired,
    addToCompare: PropTypes.func.isRequired,
  }

  state = {
    toasts: [],
  }

  componentDidMount() {
    const { load, items } = this.props;
    if (items.length === 0) {
      load();
    }
  }

  onDimissMsg() {
    return () => {
      const [, ...toasts] = this.state.toasts;
      this.setState({ toasts });
    };
  }

  showAddMsg() {
    return () => {
      this.setState((state) => {
        const toasts = state.toasts.slice();
        toasts.push({ text: 'Agregado!' });
        return { toasts };
      });
    };
  }

  render() {
    const {
      items, isLoading, onFilter, addToCompare,
    } = this.props;
    const { toasts } = this.state;
    return (
      <Card style={{ opacity: isLoading ? 0.5 : 1 }}>
        <CardText>
          <ListHeader onFilter={onFilter} />
          {items.map(car => <CarItemList onDimissMsg={this.onDimissMsg()} toasts={toasts} showAddMsg={this.showAddMsg()} key={car.model} car={car} addToCompare={addToCompare} />)}
        </CardText>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(requestCars()),
  onFilter: filterValue => dispatch(filterCars(filterValue)),
  addToCompare: id => dispatch(addCarToCompare(id)),
});

const mapStateToProps = state => ({
  isLoading: state.cars.isLoading,
  items: [...state.cars.cars],
});

export default connect(mapStateToProps, mapDispatchToProps)(CarList);
