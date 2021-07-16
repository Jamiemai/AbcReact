  
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
// import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '2C:54:91:88:C9:E39', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '2c-54-91-88-c9-e3', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '00:00:00:a1:2b:cc', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '06:54:66:d1:b4:c4', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '76:04:96:g1:b8:a4', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function ListDevice() {
const [openAdd, setOpenAdd] = React.useState(false);
const [openEdit, setOpenEdit] = React.useState(false);

const handleClickOpen = () => {
    setOpenAdd(true);
   // setOpenEdit(true);
};

const handleClickOpenEdit = () => {
    setOpenEdit(true);
};

const handleClose = () => {
    setOpenAdd(false);
    setOpenEdit(false);
};

// const handleChange = (event) => {
//     const name = event.target.name;
//     setState({
//       ...state,
//       [name]: event.target.value,
//     });
//   };

  const classes = useStyles();

  return (
    <React.Fragment>
      {/* <Title>Recent Orders</Title> */}
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>MAC address</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Tags</TableCell>
            {/* <TableCell>Payment Method</TableCell> */}
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              {/* <TableCell>{row.paymentMethod}</TableCell> */}
              <TableCell align="right">
                <IconButton aria-label="add">
                    <AddIcon onClick={handleClickOpen} />
                </IconButton>
                <IconButton aria-label="edit">
                    <EditIcon  onClick={handleClickOpenEdit}/>
                </IconButton>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>

                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


      <Dialog open={openAdd} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle >Add</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="MAC address"
            type="email"
            fullWidth
          />
            <InputLabel shrink htmlFor="age-native-label-placeholder">
            Name
            </InputLabel>
            <NativeSelect
            // value={state.age}
            // onChange={handleChange}
            // inputProps={{
            //     name: 'age',
            //     id: 'age-native-label-placeholder',
            // }}
            >
            <option value="">None</option>
            <option value={10}>Name 1</option>
            <option value={20}>Name 2</option>
            <option value={30}>Name 3</option>
            </NativeSelect>

            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tags"
            type="tags"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openEdit} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle >Edit</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="MAC address"
            type="email"
            fullWidth
            disabled
          />
            <InputLabel shrink htmlFor="age-native-label-placeholder">
            Name
            </InputLabel>
            <NativeSelect
            // value={state.age}
            // onChange={handleChange}
            // inputProps={{
            //     name: 'age',
            //     id: 'age-native-label-placeholder',
            // }}
            >
            <option value="">None</option>
            <option value={10}>Name 1</option>
            <option value={20}>Name 2</option>
            <option value={30}>Name 3</option>
            </NativeSelect>

            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tags"
            type="tags"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

    </React.Fragment>
  );
}