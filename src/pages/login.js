import React, { useState } from 'react';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import Container, { FlexContainer } from '../components/Container';
import Text from '../components/Text';
import CardOptions from '../components/CardOptions';
import Button from '../components/Button';
import Input from '../components/Input';
import { styledIcon } from '../components/Input/style';
import { checkValidPassword } from '../helper/form';

const MailIcon = styledIcon(MailOutlined);
const LockIcon = styledIcon(LockOutlined);

const options = [
  { imgSrc: process.env.PUBLIC_URL + '/doctor.svg', optionName: 'Doctor' },
  { imgSrc: process.env.PUBLIC_URL + '/patient.svg', optionName: 'Patient' },
];

export default () => {
  const [accountType, setAccountType] = useState('Doctor');
  const [focused, setFocused] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: '', password: '' });

  const handleFocus = (e) => {
    setFocused(e.target.name);
  };

  const handleBlur = () => {
    setFocused('');
  };

  const handleEmailChange = (e) => {
    setError({
      ...error,
      email: '',
    });
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setError({
      ...error,
      password: '',
    });
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordIsValid = checkValidPassword(email, password);
    if (!passwordIsValid) {
      setError({
        ...error,
        password: 'Invalid Password',
      });
    }
  };

  const forgetPassword = {
    name: 'Forgot?',
    onClick: () => console.log('go to a page or open a modal'),
  };

  return (
    <Container align="center">
      <Text size="lg" color="main" mb="32px">
        Choose Account Type
      </Text>
      <CardOptions
        options={options}
        changeAccountType={setAccountType}
        selected={accountType}
      />
      <Text size="sm" color="greyDark" align="center" mb="32px">
        Hello {accountType}!
        <br />
        Please fill out the form below to get started
      </Text>
      <form style={{ width: '100%' }} onSubmit={handleSubmit}>
        <Input
          name="Email"
          type="email"
          Icon={MailIcon}
          placeholder="Email"
          onBlur={handleBlur}
          onFocus={handleFocus}
          focused={focused === 'Email'}
          value={email}
          onChange={handleEmailChange}
          error={error.email}
        />
        <Input
          name="Password"
          type="password"
          Icon={LockIcon}
          placeholder="Password"
          onBlur={handleBlur}
          onFocus={handleFocus}
          focused={focused === 'Password'}
          action={forgetPassword}
          value={password}
          onChange={handlePasswordChange}
          error={error.password}
        />
        <FlexContainer>
          <Text size="sm" color="greyDarkExtreme" mr="4px">
            No account?
          </Text>
          <Text size="sm" mr="auto" color="main" clickable={true}>
            Signup
          </Text>
          <Button>Login</Button>
        </FlexContainer>
      </form>
    </Container>
  );
};
