import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, Grid, Cell } from 'react-md';

const CarItemList = ({ car }) => (
  <Card className="md-block-centered card" style={{ margin: '4px 4px 12px 4px' }}>
    <CardText>
      <Grid>
        <Cell size={2}>
          <div>
            <img src={car.picture} alt={car.name} width="100%" height="100%" />
          </div>
        </Cell>
        <Cell size={9}>
          <div>
            <div >
              <h2 className="md-card-title--title md-card-title--large md-text">{car.brand}</h2>
              <h3 className="md-card-title--title md-text--secondary">{car.model}</h3>
            </div>
            <br />
            <div><b>Precio:</b> ${car.price}</div>
            <div><b>Año:</b> {car.year}</div>
          </div>
        </Cell>
      </Grid>
    </CardText>
  </Card>
);

CarItemList.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarItemList;
