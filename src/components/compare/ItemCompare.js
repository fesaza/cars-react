import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, Button, CardText, Media, MediaOverlay, List, ListItem } from 'react-md';

const ItemCompare = ({ car, removeCar }) => {
  return (
    <Card className="md-cell md-cell--4 md-cell--12-tablet">
      <Media aspectRatio="4-3">
        <img src={car.picture} alt="Foto" />
        <MediaOverlay>
          <CardTitle title={car.brand} subtitle={car.model}>
            <Button
              className="md-cell--right"
              onClick={() => {
                removeCar(car.id);
              }}
              tooltipLabel="Quitar de la comparación"
              icon
            >
              delete
            </Button>
          </CardTitle>
        </MediaOverlay>
      </Media>
      <CardText>
        <List ordered>
          <ListItem primaryText={`Año: ${car.year}`} />
          <ListItem primaryText={`Precio: $${car.price}`} />
        </List>
      </CardText>
    </Card>
  );
};

ItemCompare.propTypes = {
  car: PropTypes.object.isRequired,
  removeCar: PropTypes.func.isRequired,
};

export default ItemCompare;
