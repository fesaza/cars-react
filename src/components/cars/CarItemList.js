import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText, Grid, Cell, CardActions, Button, Snackbar } from 'react-md';

const CarItemList = ({ car, addToCompare, showAddMsg, toasts, onDimissMsg }) => (
  <Card className="md-block-centered card" style={{ margin: '4px 4px 12px 4px' }}>
    {/* <CardTitle title={car.brand} subtitle={car.model} /> */}
    <CardText>
      <Grid>
        <Cell size={2}>
          <div>
            <img src={car.picture} alt={car.name} width="100%" height="100%" />
          </div>
        </Cell>
        <Cell size={9}>
          <div>
            <div style={{ marginLeft: '9px', marginTop: '10px' }} >
              <h2 className="md-card-title--title md-card-title--large md-text">{car.brand}</h2>
              <h3 className="md-card-title--title md-text--secondary">{car.model}</h3>
            </div>

            <CardActions>
              <Link href={`/details/${car.id}`} to={`/details/${car.id}`}>
                <Button
                  tooltipLabel="Ver detalles"
                  label="Detalles"
                  secondary
                  raised
                  style={{ marginRight: '2px' }}
                >
                  details
                </Button>
              </Link>
              <Button
                tooltipLabel="Seleccionar para comparar"
                label="Seleccionar"
                raised
                secondary
                style={{ marginLeft: '2px' }}
                onClick={() => {
                  addToCompare(car.id);
                  showAddMsg();
                }}
              >
                compare
              </Button>
            </CardActions>
            <Snackbar
              id="example-snackbar"
              toasts={toasts}
              autohide
              onDismiss={onDimissMsg}
            />
          </div>
        </Cell>
      </Grid>
    </CardText>
  </Card>
);

CarItemList.propTypes = {
  car: PropTypes.object.isRequired,
  addToCompare: PropTypes.func.isRequired,
  showAddMsg: PropTypes.func.isRequired,
  toast: PropTypes.any,
};

export default CarItemList;
