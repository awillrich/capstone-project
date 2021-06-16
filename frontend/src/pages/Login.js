import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Login() {
    return (
    <div>
      <h2>Anmeldung</h2>
      <form noValidate autoComplete="off">
              <TextField id="login_email" label="E-Mail-Adresse" /><br></br>
              <TextField id="login_password" label="Passwort" type="password"/><br></br>
              <Button variant="contained" color="primary">
                Anmelden
            </Button>
            </form>
    </div>
  );
}

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;