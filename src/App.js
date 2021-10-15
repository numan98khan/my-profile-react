import React from 'react';
import Header from './Header'
import './App.css';


import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';



export default class PersonList extends React.Component {
  state = {
    name: '',
    postName: ''
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    // const user = {
    //   name: this.state.name
    // };

    // var bodyFormData = new FormData();
    // bodyFormData.append("name", this.state.name);

    var url = "https://backpoint.azurewebsites.net/";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);

          const obj = JSON.parse(xhr.responseText);

          this.setState({ postName: obj.returned });

      }}.bind(this);

    var data = `{"name":"${this.state.name}"}`;

    xhr.send(data);
  }

  // const classes = useStyles();
  // // create state variables for each input
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(firstName, lastName, email, password);
  //   handleClose();
  // };


  render() {
    return (
      <div className="container">
        <Header></Header>
        
        <MuiThemeProvider>
          <form
            onSubmit={this.handleSubmit}
          >
          <div 
          style={{
              position: 'absolute', left: '50%', 
              // top: '50%',
              top: '25em',
              transform: 'translate(-50%, -50%)'
          }}
          //className="container py-5"
          >
          <h1>Sign Up</h1>

          <TextField
            //  hintText="Display Name"
            //  floatingLabelText=" Display Name"
             id="standard-multiline-flexible"
            label="Display Name"
             value={this.state.displayName}
             onChange={this.handleDispChange}
             />
           <br/>
          <TextField
            //  hintText="Email"
            //  floatingLabelText="Email"
            id="standard-multiline-flexible"
            label="E-mail"
             value={this.state.email}
             onChange={this.handleEmailChange}
             />
           <br/>
           
             <TextField
                id="standard-multiline-flexible"
                label="Password"
                type="password"
              //  hintText="Password"
              //  floatingLabelText="Password"
               value={this.state.password}
               onChange={this.handlePassChange}
               //  style={{ marginBottom: '5%' }}
               />
               <br/>
               <TextField
                id="standard-multiline-flexible"
                label="Re-Type Password"
                type="password"
              //  hintText="Password"
              //  floatingLabelText="Password"
               value={this.state.passRep}
               onChange={this.handlePassRepChange}
               style={{ marginBottom: '5%' }}
               />

            <br></br>
            <div>
              <div 
              
              >
                <Button
                  style={{ width: '100%' }} 
                  // disabled={isDisabled} 
                  variant="contained" 
                  color="primary" 
                  // onClick={()=>{value.signUp(this.state.email,this.state.displayName,this.state.password, this.state.itemImage)}}
                  >
                    Sign Up
                </Button>
              </div>
              
              <div style={{paddingTop:"15px"}}>
                {/* <Link to="/">
                  <Button variant="contained" color="primary">
                    Sign In
                  </Button>
                </Link> */}
              </div>
            </div>

         </div>
         </form>
         </MuiThemeProvider>

        {/* <form 
        onSubmit={this.handleSubmit}
        >
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>

          <br/>
          <label>
            {this.state.postName}
          </label>
        </form> */}

      </div>
    )
  }
}