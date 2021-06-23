import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Tooltip from '@material-ui/core/Tooltip';
import { green, red } from '@material-ui/core/colors';

export default function Buttons({test}) {
    console.log(test)
    if(test.time_test === null) {
        return (
            <div>
                <ButtonTestEdit></ButtonTestEdit>
                <ButtonTestStart></ButtonTestStart>
                <ButtonTestDelete></ButtonTestDelete>
                <ButtonTestNegativ></ButtonTestNegativ>
                <ButtonTestPositive></ButtonTestPositive>
                <ButtonTestCopy></ButtonTestCopy>
                <ButtonTestCertificate></ButtonTestCertificate>
            </div>
        )
    } else {
        return (
            <span>
                
            </span>
        )
    }
}

function ButtonTestEdit() {
    return (<Tooltip title="Bearbeiten">
                    <IconButton aria-label="edit">
                        <EditIcon fontSize="small" />
                    </IconButton>
                </Tooltip>)
}

function ButtonTestStart() {
    return (<Tooltip title="Test starten">
                    <IconButton aria-label="start">
                        <PlayArrowIcon fontSize="small" />
                    </IconButton>
                </Tooltip>)
}

function ButtonTestDelete() {
    return (<Tooltip title="Löschen">
        <IconButton aria-label="delete">
            <DeleteIcon fontSize="small" />
        </IconButton>
    </Tooltip>)
}

function ButtonTestNegativ() {
    return (<Tooltip title="Test negativ">
                    <IconButton aria-label="negativ">
                        <RemoveIcon fontSize="small" style={{ color: green[500] }}/>
                    </IconButton>
                </Tooltip>)
}

function ButtonTestPositive() {
    return (<Tooltip title="Test positiv">
                    <IconButton aria-label="positiv">
                        <AddIcon fontSize="small" style={{ color: red[500] }}/>
                    </IconButton>
                </Tooltip>)
}

function ButtonTestCopy() {
    return (<Tooltip title="Kopieren">
                    <IconButton aria-label="copy">
                        <FileCopyIcon fontSize="small" />
                    </IconButton>
                </Tooltip>)
}

function ButtonTestCertificate() {
    return (<Tooltip title="Bestätigung">
                    <IconButton aria-label="certificate">
                        <InsertDriveFileIcon fontSize="small" />
                    </IconButton>
                </Tooltip>)
}