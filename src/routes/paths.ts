// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_ADMIN_DASHBOARD = '';
const ROOTS_HOST_DASHBOARD = '';
const ROOTS_USER_DASHBOARD = '';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: '/login',
};

export const PATH_DASHBOARD = {
  root: ROOTS_ADMIN_DASHBOARD,
  home: path(ROOTS_ADMIN_DASHBOARD, '/admin/home'),
  one: path(ROOTS_ADMIN_DASHBOARD, '/admin/one'),
  two: path(ROOTS_ADMIN_DASHBOARD, '/admin/two'),
  three: path(ROOTS_ADMIN_DASHBOARD, '/admin/three'),
};
