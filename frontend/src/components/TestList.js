import React from 'react';
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(number, time, name, state) {
  return { number, time, name, state };
}

const rows = [
  createData('12345', '21.06.2021 12:59', "Mustermann, Max", 1),
  createData('12346', '21.06.2021 12:59', "Mustermann, Max", 2),
  createData('12347', '21.06.2021 12:59', "Mustermann, Max", 3),
  createData('12348', '21.06.2021 12:59', "Mustermann, Max", 1),
  createData('12349', '21.06.2021 12:59', "Mustermann, Max", 2),
];

export default function TestList() {
    let { period } = useParams();
    const classes = useStyles();

    return (
        <div>
            Hier kommt die Test-Liste hin:
            { period }

            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Nummer</TableCell>
                        <TableCell>Zeit</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>#</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.number}
                        </TableCell>
                        <TableCell>{row.time}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>#####</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </div>
    )
}