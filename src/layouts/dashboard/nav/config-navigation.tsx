// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.png`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  home: icon('Home'),
  admins: icon('Admin'),
  revenue: icon('Revenue'),
  sales: icon('Sales'),
  payout: icon('Payout'),
  pageManagement: icon('PageManagement'),
  report: icon('Report'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general v4.2.0',
    items: [
      { title: 'Home', path: PATH_DASHBOARD.one, icon: ICONS.home },
      { title: 'Admins', path: PATH_DASHBOARD.two, icon: ICONS.admins },
      { title: 'Revenue', path: PATH_DASHBOARD.three, icon: ICONS.revenue },
      { title: 'Sales', path: PATH_DASHBOARD.three, icon: ICONS.sales },
      { title: 'Payout', path: PATH_DASHBOARD.three, icon: ICONS.payout },
      { title: 'Page Management', path: PATH_DASHBOARD.three, icon: ICONS.pageManagement },
      { title: 'Report', path: PATH_DASHBOARD.three, icon: ICONS.report },
    ],
  },
];

export default navConfig;
