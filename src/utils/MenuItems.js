const TO_PREFIX = '';

const navItems = [{
  label: 'Lista de carros',
  to: `${TO_PREFIX}/`,
  exact: true,
  icon: 'directions_car',
}, {
  label: 'Ver comparación',
  to: `${TO_PREFIX}/compare`,
  icon: 'compare',
}];

export { navItems };
