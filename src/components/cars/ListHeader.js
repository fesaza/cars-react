import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    <Cell size={2} style={{ textAlign: 'right' }}>
      <Link href="/compare" to="/compare">
        <Button
          tooltipLabel="Comparar modelos seleccionados"
          label="Comparar"
          style={styleButton}
          primary
          raised
        >
          compare
        </Button>
      </Link>
    </Cell>
  </Grid>
);

ListHeader.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default ListHeader;
