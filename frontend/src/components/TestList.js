import React from 'react';
import { Redirect, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, red, grey } from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Pagination from '@material-ui/lab/Pagination';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Tooltip from '@material-ui/core/Tooltip';
import Buttons from './Buttons'
import getTests from '../lib/getTests'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  table: {
    minWidth: 650,
  },
  
}));


export default function TestList() {
    let { period } = useParams();
    const classes = useStyles();
    const [tests, setTests] = useState([]);
    const [paginateTests, setpaginateTests] = useState([]);
    const [page, setPage] = useState([1]);

    useEffect(() => {
      getTests(period, paginateTests, page).then((items) => {
        const itemsFetchedFromAPI = items.data.data;

        /*const itemsFetchedFromAPI = items.data.data.map((item) => ({
          id: item.id,
          number: item.number,
          time: item.date,
          name: item.name,
          firstname: item.firstname,
        }));*/
        setTests(itemsFetchedFromAPI);
        const paginateAPI = items.data.links.map((item) => ({
          url: item.url,
          label: item.label,
          active: item.active,
        }));
        //console.log(paginateAPI)
        setpaginateTests(paginateAPI);
      });
    }, [period, page]);

    function changePage(event, value) {
      //console.log(value)
      setPage(value)
    }

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
                    {tests.map((test) => (
                        <TableRow key={test.id}>
                        <TableCell component="th" scope="row">
                            {test.number}
                        </TableCell>
                        <TableCell>{test.date}</TableCell>
                        <TableCell>{test.name}, {test.firstname}</TableCell>
                        <TableCell>
                          <Tooltip title="Abgeschlossen">
                            <FiberManualRecordIcon 
                              fontSize="small" 
                              style={{ color: green[500] }}
                            />
                          </Tooltip>
                          <FiberManualRecordIcon 
                            fontSize="small" 
                            style={{ color: red[500] }}
                          />
                          <FiberManualRecordIcon 
                            fontSize="small" 
                            style={{ color: grey[500] }}
                          />
                        </TableCell>
                        <TableCell>
                          <Buttons test={test}></Buttons>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
              </TableContainer>
              
              <div className={classes.root}>
                <Pagination 
                count={paginateTests.length - 2} 
                size="small" 
                onChange={changePage}
                variant="outlined"
                />
              </div>
        </div>
    )
}