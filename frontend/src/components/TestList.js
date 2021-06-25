import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Pagination from "@material-ui/lab/Pagination";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import formatDate from "../lib/formatDate";
import Buttons from "./Buttons";
import getTests from "../lib/getTests";
import TestState from "./TestState";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
  table: {
    minWidth: 650,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function TestList() {
  const { period } = useParams();
  const classes = useStyles();
  const [tests, setTests] = useState([]);
  const [paginateTests, setpaginateTests] = useState([]);
  const [page, setPage] = useState([1]);
  const [openBackdrop, setOpenBackdrop] = React.useState(false);
  const [rerender, setRerender] = React.useState(1);
  const handleOpenBackdrop = () => {
    setOpenBackdrop(true);
  };
  const handleCloseBackdrop = () => {
    setOpenBackdrop(false);
  };

  const handleTestChange = () => {
    setRerender(rerender + 1);
  };

  useEffect(() => {
    handleOpenBackdrop();
    getTests(period, paginateTests, page).then((items) => {
      const itemsFetchedFromAPI = items.data.data;
      itemsFetchedFromAPI.forEach((element) => {
        element.date = formatDate(element.date);

        element.dob = formatDate(element.dob);
      });
      setTests(itemsFetchedFromAPI);
      const paginateAPI = items.data.links.map((item) => ({
        url: item.url,
        label: item.label,
        active: item.active,
      }));
      setpaginateTests(paginateAPI);
    });
    handleCloseBackdrop();
  }, [period, page, rerender]);

  function changePage(event, value) {
    setPage(value);
  }

  return (
    <div>
      <Backdrop
        className={classes.backdrop}
        open={openBackdrop}
        onClick={handleCloseBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      Hier kommt die Test-Liste hin:
      {period}
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
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
                <TableCell>
                  {test.name}, {test.firstname}
                </TableCell>
                <TableCell>
                  <TestState test={test}></TestState>
                </TableCell>
                <TableCell>
                  <Buttons
                    test={test}
                    onChangeTest={handleTestChange}
                  ></Buttons>
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
  );
}
