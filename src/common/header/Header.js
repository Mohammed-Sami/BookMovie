import React from 'react'
import './Header.css'
import headerLogo from '../../assets/logo.svg'
import { Button } from '@material-ui/core'
import Login from './Login.js'
import Login_UI from './Login_UI.js'
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'


function Header() {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  let subtitle;
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div>
            {children}
          </div>
        )}
      </div>
    );
  }

  const [login, setLogin] = React.useState({
    e_mail: "",
    password: ""
  });

  const { e_mail, password } = login;

  const inputChangedHandler = (e) => {
    const state = login;
    state[e.target.name] = e.target.value;
    setLogin({ ...state })
  }

  const [register, setRegister] = React.useState({
    firstName: "",
    lastName: "",
    reg_e_mail: "",
    reg_password: "",
    contactNo: ""
  });

  const { firstName, lastName, reg_e_mail, reg_password, contactNo } = register;

  var item = sessionStorage.getItem('user');
  return (
    <div className='header'>
      <img src={headerLogo} className='logo' />

      {item ?
        <Button className='button' variant="contained" onClick={Login}>LOGOUT</Button>
        :
        <Button className='button' variant="contained" onClick={() => setIsOpen(true)}>LOGIN</Button>
      }

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="LOGIN" />
            <Tab label="REGISTER" />
          </Tabs>

          <TabPanel value={value} index={0}>
            <ValidatorForm onSubmit={() => { }}>


              <TextValidator
                label="Username*"
                type="email"
                name="e_mail"
                onChange={inputChangedHandler}
                value={e_mail}
                validators={['required']}
                errorMessages={['Name cannot be empty']}
              >
              </TextValidator>


              <br /><br />


              <TextValidator
                type="password"
                name="password"
                onChange={inputChangedHandler}
                label="Password*"
                value={password}
                validators={['required']}
                errorMessages={['Phone Number cannot be empty']}
              ></TextValidator>

              <br /><br />
              <div>
                <span>Subscriber to be added: </span><br />
                <span>email: {e_mail}</span><br />
                <span>Password: {password}</span><br />
              </div>

              <button type="submit" className="custom-btn add-btn">Submit</button>
            </ValidatorForm>


          </TabPanel>
          <TabPanel value={value} index={1}>
            <ValidatorForm onSubmit={() => { }}>
              <TextValidator
                label="First Name*"
                type="text"
                name="firstName"
                onChange={inputChangedHandler}
                value={firstName}
                validators={['required']}
                errorMessages={['Name cannot be empty']}
              >
              </TextValidator>
              <br /><br />
              <TextValidator
                label="Last Name*"
                type="text"
                name="lastName"
                onChange={inputChangedHandler}
                value={lastName}
                validators={['required']}
                errorMessages={['Name cannot be empty']}
              >
                <br /><br />

                <TextValidator
                  label="Email*"
                  type="email"
                  name="reg_e_mail"
                  onChange={inputChangedHandler}
                  value={reg_e_mail}
                  validators={['required']}
                  errorMessages={['Email cannot be empty']}
                ></TextValidator>
              </TextValidator>

              <br /><br />

              <TextValidator
                label="Password*"
                type="password"
                name="reg_password"
                onChange={inputChangedHandler}
                value={reg_password}
                validators={['required']}
                errorMessages={['Password cannot be empty']}
              ></TextValidator>

              <br /><br />

              <TextValidator
                label="Contact No*"
                type="text"
                name="contactNo"
                onChange={inputChangedHandler}
                value={contactNo}
                validators={['required']}
                errorMessages={['Contact No cannot be empty']}
              ></TextValidator>

              <button type="submit" className="custom-btn add-btn">REGISTER</button>
            </ValidatorForm>
          </TabPanel>
        </div>
      </Modal>
    </div>

  )
}

export default Header