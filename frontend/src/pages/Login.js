import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Login({ onLogin }) {
    
    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const login_email = form.login_email;
        const login_password = form.login_password;
        console.log(login_email.value);
        console.log(login_password.value);
        onLogin([login_email.value, login_password.value]);
        form.reset();
        login_email.focus();
    }
    
    return (
    <div>
      <h2>Anmeldung</h2>
      <form noValidate autoComplete="off" onSubmit={handleSubmit} >
            <TextField id="login_email" label="E-Mail-Adresse" /><br></br>
            <TextField id="login_password" label="Passwort" type="password"/><br></br>
            <Button variant="contained" color="primary" type="submit">
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