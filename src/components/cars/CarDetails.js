import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardTitle, CardText, Media, Grid, Cell, Button } from 'react-md';
import { getCarById, addCarToCompare } from '../../actions/CarsActions';

class CarDetails extends Component {
  static propTypes = {
    car: PropTypes.object.isRequired,
    getCar: PropTypes.func.isRequired,
    match: PropTypes.any.isRequired,
  };

  componentDidMount() {
    const {
      match, getCar, car,
    } = this.props;
    if (car.id !== match.params.id) {
      getCar(Number(match.params.id));
    }
  }

  render() {
    const { car } = this.props;
    return car.id ? (
      <Card>
        <Grid>
          <Cell size={4}>
            <Media aspectRatio="4-3">
              <img src={car.picture} alt="Foto del carro" />
            </Media>
            <CardTitle title={car.brand} subtitle={car.model} >
              <Link className="md-cell--right" href="/" to="/">
                <Button
                  tooltipLabel="Volver al listado"
                  className="md-cell--right"
                  icon
                  secondary
                >
                    arrow_back
                </Button>
              </Link>
            </CardTitle>
          </Cell>
          <Cell size={8}>
            <CardText>
              <Grid>
                <Cell><div><b>Año:</b> {car.year}</div></Cell>
                <Cell><div><b>Precio:</b> $ {car.price}</div></Cell>
              </Grid>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend odio.
                Vivamus quis quam eget augue facilisis laoreet. Aliquam egestas turpis pellentesque
                cursus porta. Vivamus nisl odio, maximus vel lacinia non, suscipit quis nibh. Sed et
                lacus tempor, interdum nisl ornare, feugiat arcu. Suspendisse aliquam malesuada dui,
                in dignissim velit maximus vitae. Cras ac mattis libero. Proin feugiat justo nec nisi
                sodales, et gravida augue faucibus. Maecenas quis porttitor nunc. Suspendisse congue
                ipsum arcu, id aliquam ante dignissim non. Donec maximus, sapien in faucibus molestie,
                eros nisi ornare neque, et vulputate augue velit vel ante. Phasellus rhoncus, elit
                cursus accumsan viverra, mi lectus dictum elit, non vehicula diam nunc non lectus.
                Sed elementum, risus eget fermentum accumsan, nunc ante commodo diam, eget pulvinar
                risus velit eu sapien. Nunc vitae pellentesque nisl.
              </p>
              <p>
                Maecenas lacinia enim ut risus pellentesque euismod. Vestibulum gravida, risus non
                condimentum volutpat, orci elit laoreet elit, in auctor eros orci non quam. Proin ut
                tellus et est dignissim efficitur. Aliquam erat volutpat. Proin pellentesque metus
                sit amet libero auctor aliquet. Donec scelerisque erat in magna sagittis hendrerit.
                Sed pulvinar enim mattis mauris sodales semper. Mauris eu urna at arcu dapibus
                pretium et in ligula. Sed vel vestibulum nunc.
              </p>
            </CardText>
          </Cell>
        </Grid>
      </Card>
    ) : (<div>Cargando...</div>);
  }
}

const mapDispatchToProps = dispatch => ({
  getCar: id => dispatch(getCarById(id)),
  addCar: id => dispatch(addCarToCompare(id)),
});

const mapStateToProps = state => ({
  car: { ...state.cars.selectedCar },
});

export default connect(mapStateToProps, mapDispatchToProps)(CarDetails);
