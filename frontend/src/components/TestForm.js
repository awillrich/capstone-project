import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
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
          <Typography component={'span'}>{children}</Typography>
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

export default function TestForm({ onSubmit }) {
  const mustertest = {
        "id": "",
        "number": "",
        "test_station": "17c0c1ae-a82a-4ab0-ba16-6cce80dc06fa",
        "state": "registration",
        "appointment": null,
        "type": "preregistration",
        "name": "Mustermann",
        "firstname": "Max",
        "street": "Hauptstraße",
        "zip": "67433",
        "city": "Neustadt",
        "phone": "06321",
        "email": "aaa",
        "dob": "2012-01-15T00:00:00.000000Z",
        "date": "2021-06-09T00:00:00.000000Z",
        "certificate_offline": 1,
        "certificate_email": 0,
        "certificate_online": 0,
        "certificate_cwa_personal": 0,
        "certificate_cwa_anonym": 0,
        "test_manufacturer_id": 1,
        "test_charge": "aaa",
        "test_result": null,
        "time_register": null,
        "time_reception": null,
        "time_test": null,
        "time_evaluation": null,
        "time_email_notification": null,
        "time_positive_leader": null,
        "time_health_department": null,
        "time_health_department_confirmation": null,
        "time_certificate": null,
        "result_uuid": null,
        "result_url": null,
        "result_cwa_salt": null,
        "result_cwa_hash": null,
        "result_cwa_url": null,
        "customer_id": null,
        "company_id": null,
        "created_at": "2021-06-22T11:56:13.000000Z",
        "updated_at": "2021-06-22T11:56:13.000000Z",
        "deleted_at": null
    };
  const [test, setTest] = React.useState(mustertest);
  const [TabValue, setTabValue] = React.useState(0);
  const classes = useStyles();
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
    setTest({ ...test, [event.target.name]: event.target.checked });
  };

  const handleFormChange = (event) => {
    setTest({ ...test, [event.target.name]: event.target.value });
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  function handleSubmit(event) {
    event.preventDefault()
    console.log('submit TestForm');
    onSubmit(test);
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <AppBar position="static">
      <Tabs value={TabValue} onChange={handleTabChange} aria-label="simple tabs example">
        <Tab label="Stammdaten" {...a11yProps(0)} />
        <Tab label="Zeiten" {...a11yProps(1)} />
        <Tab label="Aktionen" {...a11yProps(2)} />
      </Tabs>
    </AppBar>
    <TabPanel value={TabValue} index={0}>
      <div>
        <TextField
          disabled
          id="number"
          name="number"
          value={test.number}
          label="Nummer"
          variant="outlined"
        />
        <TextField
          disabled
          id="id"
          name="id"
          label="ID"
          value={test.id}
          variant="outlined"
        />
        <TextField
          disabled
          id="customer_id"
          name="customer_id"
          label="Stammkunden ID"
          value={test.customer_id}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          required
          id="name"
          name="name"
          onChange={handleFormChange}
          label="Name"
          value={test.name}
          variant="outlined"
        />
        <TextField
          required
          id="outlined-disabled"
          label="Vorname"
          name="firstname"
          value={test.firstname}
          onChange={handleFormChange}
          variant="outlined"
        />
        <TextField
          required
          id="outlined-disabled"
          //type="date"
          label="Geburtsdatum"
          value={test.dob}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Straße"
          value={test.street}
          variant="outlined"
        />
        <TextField
          required
          id="outlined-disabled"
          label="Telefon"
          value={test.phone}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="PLZ"
          value={test.zip}
          variant="outlined"
        />
        <TextField
          required
          id="outlined-disabled"
          label="Ort"
          value={test.city}
          variant="outlined"
        />
        <TextField 
          id="outlined-disabled"
          label="E-Mail"
          value={(test.email === null) ? "" : test.email}
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
          id="outlined-required"
          label="Charge"
          value={(test.test_charge === null) ? "" : test.test_charge}
          variant="outlined"
        />
      </div>
      <div>
        <FormControlLabel
        control={
          <Switch
            checked={Boolean(Number(test.certificate_email))}
            onChange={handleChange}
            name="certificate_email"
            color="primary"
          />
        }
        label="E-Mail Benachrichtigung"
      />
        <FormControlLabel
        control={
          <Switch
            checked={Boolean(Number(test.certificate_offline))}
            onChange={handleChange}
            name="certificate_offline"
            color="primary"
          />
        }
        label="Offline Ergebnis"
      />
      </div>
    </TabPanel>
    <TabPanel value={TabValue} index={1}>
      <div>
        <TextField
          id="time"
          label="Registrierung"
          type="time"
          disabled
          value={test.time_register}
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
          value={test.time_reception}
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
          value={test.time_test}
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
          value={test.time_evaluation}
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
          value={test.test_result}
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
          value={test.time_email_notification}
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
          value={test.time_positive_leader}
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
          value={test.time_health_department}
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
          value={test.time_health_department_confirmation}
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
    <TabPanel value={TabValue} index={2}>
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
    <Button variant="contained" color="primary" type="submit">
      Speichern
    </Button>
    </form>
  );
}