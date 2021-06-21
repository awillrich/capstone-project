import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TestForm() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  const [age, setAge] = React.useState('');
  const [currency, setCurrency] = React.useState('no');
  const cwaOptions = [
  {
    value: 'no',
    label: 'Keine',
  },
  {
    value: 'anonym',
    label: 'Anonym',
  },
  {
    value: 'personal',
    label: 'Personalisiert',
  },
];
  const testManufacturer = [
  {
    value: '1',
    label: 'Siemens',
  },
  {
    value: '2',
    label: 'Watmind',
  },
  {
    value: '3',
    label: 'Abbott',
  },
];

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <AppBar position="static">
      <Tabs value={value} onChange={handleTabChange} aria-label="simple tabs example">
        <Tab label="Stammdaten" {...a11yProps(0)} />
        <Tab label="Zeiten" {...a11yProps(1)} />
        <Tab label="Aktionen" {...a11yProps(2)} />
      </Tabs>
    </AppBar>
    <TabPanel value={value} index={0}>
      <div>
        <TextField
          disabled
          id="outlined-required"
          value="123"
          label="Nummer"
          variant="outlined"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="ID"
          value="17c0c1ae-a82a-4ab0-ba16-6cce80dc06fa"
          variant="outlined"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Stammkunden ID"
          value="17c0c1ae-a82a-4ab0-ba16-6cce80dc06fa"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-disabled"
          label="Vorname"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-disabled"
          label="Geburtsdatum"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Straße"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-disabled"
          label="Telefon"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="PLZ"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-disabled"
          label="Ort"
          variant="outlined"
        />
        <TextField 
          id="outlined-disabled"
          label="E-Mail"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-select-currency"
          select
          required
          label="Corona-Warn-App"
          value={currency}
          onChange={handleChange}
          helperText="Datenschutzerklärung beachten"
          variant="outlined"
        >
          {cwaOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          required
          label="Hersteller"
          value={currency}
          onChange={handleChange}
          variant="outlined"
        >
          {testManufacturer.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          id="outlined-required"
          label="Charge"
          variant="outlined"
        />
      </div>
      <div>
        <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="email_notification"
            color="primary"
          />
        }
        label="E-Mail Benachrichtigung"
      />
        <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="email_notification"
            color="primary"
          />
        }
        label="Offline Ergebnis"
      />
      </div>
    </TabPanel>
    <TabPanel value={value} index={1}>
      <div>
        <TextField
          id="time"
          label="Registrierung"
          type="time"
          disabled
          defaultValue="07:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          id="time"
          label="Rezeption"
          type="time"
          disabled
          defaultValue="07:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </div>
      <div>
        <TextField
          id="time"
          label="Test Start"
          type="time"
          defaultValue="07:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          id="time"
          label="Test Auswertung"
          type="time"
          defaultValue="07:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          id="outlined-select-currency"
          select
          required
          label="Ergebnis"
          value={currency}
          onChange={handleChange}
          variant="outlined"
        >
            <MenuItem key='null' value='null'>
              offen
            </MenuItem>
            <MenuItem key='negativ' value='negativ'>
              negativ
            </MenuItem>
            <MenuItem key='positiv' value='positiv'>
              positiv
            </MenuItem>
            <MenuItem key='na' value='na'>
              nicht auswertbar
            </MenuItem>
          
        </TextField>
      </div>
      <div>
        <TextField
          id="time"
          label="E-Mail Benachrichtigung"
          type="time"
          disabled
          defaultValue="07:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          id="time"
          label="Info Teamleitung"
          type="time"
          defaultValue="07:30"
          className={classes.textField}
          disabled
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </div>
      <div>
        <TextField
          id="time"
          label="Info Gesundheitsamt"
          type="time"
          defaultValue="07:30"
          disabled
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          id="time"
          disabled
          label="Bestätigung Gesundheitsamt "
          type="time"
          defaultValue="07:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </div>
      
    </TabPanel>
    <TabPanel value={value} index={2}>
      <div>
        <Button variant="contained">Test Start</Button>
      </div>
      <div>
        <Button variant="contained" disabled>Test negativ</Button>
      </div>
      <div>
        <Button variant="contained" disabled>Test positiv</Button>
      </div>
      <div>
        <Button variant="contained">CWA erneut senden</Button>
      </div>
      <div>
        <Button variant="contained" disabled>E-Mail erneut senden</Button>
      </div>

    </TabPanel>
    </form>
  );
}