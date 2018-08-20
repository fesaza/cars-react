import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-md';
import { removeCarToCompare } from '../../actions/CarsActions';
import ItemCompare from './ItemCompare';

const CompareComponent = ({ cars, removeCar }) => (
  cars.length > 0 ? (
    <div className="md-grid">
      {cars.map(car => <ItemCompare key={car.id} removeCar={removeCar} car={car} />)}
    </div>
  ) : (
    <div>
      <p>No hay carros para comparar, por favor vaya a la lista de vehiculos y seleccione</p>
      <br />
      <Link className="md-cell--right" href="/" to="/">
        <Button
          tooltipLabel="Volver al listado"
          className="md-cell--right"
          primary
          raised
        >
            Ir al Listado
        </Button>
      </Link>
    </div>
  )
);

CompareComponent.propTypes = {
  cars: PropTypes.array.isRequired,
  removeCar: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  removeCar: id => dispatch(removeCarToCompare(id)),
});

const mapStateToProps = state => ({
  cars: state.cars.carsToCompare,
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareComponent);
