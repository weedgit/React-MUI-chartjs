import { useState, useEffect } from 'react';
// @mui
import {
  Table,
  Tooltip,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  IconButton,
  TableContainer,
  Stack,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
// components
import Iconify from '../../../components/iconify';
import { CustomAvatar } from '../../../components/custom-avatar';
import Scrollbar from '../../../components/scrollbar';
import {
  useTable,
  emptyRows,
  getComparator,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from '../../../components/table';

// ----------------------------------------------------------------------

type RowDataType = {
  name: any;
  calories: string;
  fat: string;
  access: any;
  protein: any;
  action: any;
};

const TABLE_HEAD = [
  { id: 'name', label: 'Name', align: 'center' },
  { id: 'calories', label: <>Role <img src="/assets/icons/navbar/help.png" alt="question" /></>, align: 'center' },
  { id: 'fat', label: 'Email address', align: 'center' },
  { id: 'carbs', label: 'Acess', align: 'center' },
  { id: 'protein', label: 'Date added', align: 'center' },
  { id: 'action', label: '', align: 'center' },
];

// ----------------------------------------------------------------------

export default function SortingSelecting() {
  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    //
    selected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({
    defaultOrderBy: 'calories',
  });

  // const [tableData, setTableData] = useState<RowDataType[]>([]);
  const [open, setOpen] = useState(false);

  const createData = (tname: any, calories: string, fat: string, taccess: any, protein: any, action: any) => {
    const name = <Grid sx={{ display: 'flex', ml: '25%' }} alignItems='center'><CustomAvatar src="/assets/icons/navbar/avatar.png" sx={{ mr: '5px' }} />  {tname}</Grid>;
    const access = <Chip avatar={<Avatar> </Avatar>} size='small' label={taccess} color="error" />;
    action = <Grid sx={{ display: 'flex', pl: '25%' }} alignItems='center'>
      <Button sx={{ float: 'right', backgroundColor: 'white' }} onClick={() => handleClickOpen()}><img src='/assets/icons/navbar/trashbin.png' alt='trash' /></Button>
      <Button sx={{ float: 'right', backgroundColor: 'white', width: '38px', height: '50px' }}><img src='/assets/icons/navbar/edit.png' alt='edit' /></Button>
    </Grid>;
    return { name, calories, fat, access, protein, action };
  }

  const TABLE_DATA = [
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
    createData('Cupcake', 'Admin', 'olivia@untitledui.com', 'Users', '2023-06-08', ''),
  ];

  const tableData: RowDataType[] = TABLE_DATA;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(order, orderBy),
  });

  return (
    <div>
      <Stack direction="row" alignItems="center" sx={{ p: 3 }}>
        <Typography variant="h6">Admin</Typography>
        <Chip size='small' label="1000 admins" color="error" />
      </Stack>

      <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
        <Scrollbar>
          <Table size={dense ? 'small' : 'medium'} sx={{ minWidth: 800 }}>
            <TableHeadCustom
              order={order}
              orderBy={orderBy}
              headLabel={TABLE_HEAD}
              rowCount={tableData.length}
              numSelected={selected.length}
              onSort={onSort}
            />

            <TableBody>
              {dataFiltered
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    hover
                    key={row.name}
                  >
                    <TableCell align='center'> {row.name} </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.access}</TableCell>
                    <TableCell align="center">{row.protein}</TableCell>
                    <TableCell align="center">{row.action}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>

      <TablePaginationCustom
        count={dataFiltered.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={onChangePage}
        onRowsPerPageChange={onChangeRowsPerPage}
        dense={dense}
        onChangeDense={onChangeDense}
      />

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle sx={{ display: 'flex', ml: '31%' }} alignItems='center'>
          <img src="/assets/icons/navbar/warning.png" alt="warning" />
          <Typography variant='h4'>Delete Admin?</Typography>

        </DialogTitle>

        <DialogContent sx={{ ml: '23%' }}>
          <DialogContentText id="alert-dialog-description">
            Are you sure want to delete this admin?
          </DialogContentText>
        </DialogContent>

        <DialogActions sx={{ mr: '31%' }}>
          <Button variant='contained' onClick={handleClose}>No</Button>
          <Button sx={{ backgroundColor: '#FFE3D6', color: 'Linear button' }} onClick={handleClose} autoFocus>
            Yes, delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// ----------------------------------------------------------------------

function applyFilter({
  inputData,
  comparator,
}: {
  inputData: RowDataType[];
  comparator: (a: any, b: any) => number;
}) {
  const stabilizedThis = inputData.map((el, index) => [el, index] as const);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);

    if (order !== 0) return order;

    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  return inputData;
}
