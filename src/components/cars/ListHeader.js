import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextField, FontIcon, Grid, Cell } from 'react-md';

const styleButton = { margin: '2px' };
const styleHeaderIcon = { textAlign: 'center' };

const ListHeader = ({
  onFilter,
}) => (
  <Grid >
    <Cell size={1} style={styleHeaderIcon}>
      <FontIcon style={{ fontSize: '40px' }}>list</FontIcon>
    </Cell>
    <Cell size={9}>
      <TextField
        id="filterCards"
        name="filterCards"
        leftIcon={<FontIcon>search</FontIcon>}
        placeholder="Filtrar por marca"
        onChange={onFilter}
      />
    </Cell>
    <Cell size={1} />
    <Cell size={1}>
      <Button
        tooltipLabel="Comparar modelos seleccionados"
        label="Comparar"
        style={styleButton}
        floating
        secondary
        mini
      >
        add_circle_outline
      </Button>
    </Cell>
  </Grid>
);

ListHeader.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default ListHeader;
