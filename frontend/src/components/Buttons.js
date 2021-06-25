import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import Tooltip from "@material-ui/core/Tooltip";
import { green, red } from "@material-ui/core/colors";
import moment from "moment";
import deleteTest from "../lib/deleteTest";
import getTestState from "../lib/getTestState";
import updateTest from "../lib/updateTest";

export default function Buttons({ test, onChangeTest }) {
  const [deleteWarningOpen, setDeleteWarningOpen] = React.useState(false);
  const testState = getTestState(test);

  const handleClickDelete = () => {
    setDeleteWarningOpen(true);
  };

  const handleClickDeleteClose = () => {
    setDeleteWarningOpen(false);
  };

  function handleClickDeleteDelete(id) {
    deleteTest(id);
    setDeleteWarningOpen(false);
  }

  function handleClickEdit(id) {
    //TODO Test Edit
  }

  function handleClickStart(test) {
    test.time_test = moment().format("HH:mm:ss");
    updateTest(test);
    onChangeTest();
  }

  function handleClickNegativ(id) {
    test.time_evaluation = moment().format("HH:mm:ss");
    test.test_result = "negativ";
    updateTest(test);
    onChangeTest();
  }

  function handleClickPositive(id) {
    test.time_evaluation = moment().format("HH:mm:ss");
    test.test_result = "positiv";
    console.log(test.time_evaluation);
    updateTest(test);
    onChangeTest();
  }

  function handleClickCopy(id) {
    //TODO Test Copy
  }

  function handleClickCertificate(id) {
    //TODO Test Zertifikat
  }

  if (testState === "ready") {
    return (
      <div>
        <ButtonTestEdit
          id={test.id}
          onHandleClick={handleClickEdit}
        ></ButtonTestEdit>
        <ButtonTestStart
          test={test}
          onHandleClick={handleClickStart}
        ></ButtonTestStart>
        <ButtonTestDelete
          id={test.id}
          onHandleClick={handleClickDelete}
        ></ButtonTestDelete>

        <Dialog
          open={deleteWarningOpen}
          onClose={handleClickDeleteClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Test löschen?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Soll der Test wirklich gelöscht werden`
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickDeleteClose} color="primary" autoFocus>
              Abbrechen
            </Button>
            <Button
              id={test.id}
              onClick={() => handleClickDeleteDelete(test.id)}
              color="primary"
            >
              Löschen
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  } else if (testState === "uncomplete") {
    return (
      <div>
        <ButtonTestEdit
          id={test.id}
          onHandleClick={handleClickEdit}
        ></ButtonTestEdit>
        <ButtonTestDelete
          id={test.id}
          onHandleClick={handleClickDelete}
        ></ButtonTestDelete>

        <Dialog
          open={deleteWarningOpen}
          onClose={handleClickDeleteClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Test löschen?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Soll der Test wirklich gelöscht werden`
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickDeleteClose} color="primary" autoFocus>
              Abbrechen
            </Button>
            <Button
              id={test.id}
              onClick={() => handleClickDeleteDelete(test.id)}
              color="primary"
            >
              Löschen
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  } else if (testState === "evaluation") {
    return (
      <span>
        <ButtonTestEdit
          id={test.id}
          onHandleClick={handleClickEdit}
        ></ButtonTestEdit>
        <ButtonTestNegativ
          id={test.id}
          onHandleClick={handleClickNegativ}
        ></ButtonTestNegativ>
        <ButtonTestPositive
          id={test.id}
          onHandleClick={handleClickPositive}
        ></ButtonTestPositive>
      </span>
    );
  } else if (testState === "running") {
    return (
      <span>
        <ButtonTestEdit
          id={test.id}
          onHandleClick={handleClickEdit}
        ></ButtonTestEdit>
        <ButtonTestNegativ
          id={test.id}
          onHandleClick={handleClickNegativ}
        ></ButtonTestNegativ>
        <ButtonTestPositive
          id={test.id}
          onHandleClick={handleClickPositive}
        ></ButtonTestPositive>
      </span>
    );
  } else if (testState === "finished") {
    return (
      <span>
        <ButtonTestEdit
          id={test.id}
          onHandleClick={handleClickEdit}
        ></ButtonTestEdit>
        <ButtonTestCopy
          id={test.id}
          onHandleClick={handleClickCopy}
        ></ButtonTestCopy>
        <ButtonTestCertificate
          id={test.id}
          onHandleClick={handleClickCertificate}
        ></ButtonTestCertificate>
      </span>
    );
  } else {
    return (
      <span>
        <ButtonTestNegativ
          id={test.id}
          onHandleClick={handleClickNegativ}
        ></ButtonTestNegativ>
        <ButtonTestPositive
          id={test.id}
          onHandleClick={handleClickPositive}
        ></ButtonTestPositive>
        <ButtonTestCopy
          id={test.id}
          onHandleClick={handleClickCopy}
        ></ButtonTestCopy>
        <ButtonTestCertificate
          id={test.id}
          onHandleClick={handleClickCertificate}
        ></ButtonTestCertificate>
      </span>
    );
  }
}

function ButtonTestEdit() {
  return (
    <Tooltip title="Bearbeiten">
      <IconButton aria-label="edit">
        <EditIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
}

function ButtonTestStart({ test, onHandleClick }) {
  return (
    <Tooltip title="Test starten">
      <IconButton
        test={test}
        aria-label="start"
        onClick={() => onHandleClick(test)}
      >
        <PlayArrowIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
}

function ButtonTestDelete({ id, onHandleClick }) {
  //console.log(id);
  return (
    <Tooltip title="Löschen">
      <IconButton id={id} aria-label="delete" onClick={() => onHandleClick(id)}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
}

function ButtonTestNegativ({ id, onHandleClick }) {
  return (
    <Tooltip title="Test negativ">
      <IconButton aria-label="negativ">
        <RemoveIcon
          id={id}
          fontSize="small"
          style={{ color: green[500] }}
          onClick={() => onHandleClick(id)}
        />
      </IconButton>
    </Tooltip>
  );
}

function ButtonTestPositive({ id, onHandleClick }) {
  return (
    <Tooltip title="Test positiv">
      <IconButton aria-label="positiv">
        <AddIcon
          id={id}
          fontSize="small"
          style={{ color: red[500] }}
          onClick={() => onHandleClick(id)}
        />
      </IconButton>
    </Tooltip>
  );
}

function ButtonTestCopy() {
  return (
    <Tooltip title="Kopieren">
      <IconButton aria-label="copy">
        <FileCopyIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
}

function ButtonTestCertificate() {
  return (
    <Tooltip title="Bestätigung">
      <IconButton aria-label="certificate">
        <InsertDriveFileIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
}
