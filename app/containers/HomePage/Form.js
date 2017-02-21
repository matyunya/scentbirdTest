import React from 'react';
import styled from 'styled-components';

import H3 from 'components/H3';
import media from 'components/Media';
import Img from 'components/Img';

import lock from './lock.png';
import payment from './payment.png';
import Label from './Label';
import Input from './Input';

const Header = styled(H3)`
padding-bottom: 1em;
padding-top: 1.2em;
`;

const Col = styled.span`
display: inline-block;
${(props) => !props.noPad && 'padding-right: 1.2em;'}
padding-bottom: 0.8em;
width: 100%;
${media.phone`padding-bottom: 1.1em;`}
`;

const Wrapper = styled.div`
background-color: #FAFAFA;
padding: 1.5em;
padding-right: 1.2em;
border: 1px solid #e6e6e6;
`;

const TwoThirds = styled(Col)`
width: 66.7%;
${media.phone`width: 100%;`}
`;

const Third = styled(Col)`
width: 33.3%;
${media.phone`width: 100%;`}
`;

const Fourth = styled(Col)`
width: 25%;
${media.phone`width: 50%;`}
`;

const Half = styled(Col)`
width: 50%;
font-size: ${(props) => props.small ? '0.85em' : '1em'};
padding-right: ${(props) => props.noPad ? '0' : '1.2em'};
${media.phone`width: 100%;`}
`;

const Safe = styled(Half)`
color: #219700;
font-weight: 600;
font-size: 14px;
float: left;
`;

const ImgLock = styled(Img)`
padding-right: 0.7em;
`;

const ImgPayment = styled(Img)`
padding-top: 0.4em;
float: right;
${media.phone`float: left;`}
`;

const Button = styled.button`
width: 248px;
height: 50px;
color: white;
background-color: #FF458F;
font-weight: 600;
float: right;
margin-top: 1em;
cursor: hand;
cursor: pointer;
${media.phone`float: none; margin-top: 1.5em; margin-left: 3em;`}
`;

const Error = styled.div`
position: absolute;
color: red;
top: 38px;
font-size: 12px;
font-weight: 400;
`;
const Field = (props) =>
  (
    <Label inverted={props.inverted}>
      <Input
        error={props.error && props.error.length > 0}
        question={props.question}
        id={props.id}
        type={props.type}
        autocomplete="off"
        autocorrect="off"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        inverted={props.inverted}
      />
      {props.question && <Q />}
      {props.error && props.error.length > 0 && <Error>{props.error}</Error>}
    </Label>
    );

Field.propTypes = {
  id: React.PropTypes.string,
  onChange: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  value: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string,
  inverted: React.PropTypes.bool,
  question: React.PropTypes.bool,
  error: React.PropTypes.string,
};

const I = styled.i`
color: white !important;
padding: 0;
`;

const FAStack = styled.span`
top: 5px;
background-color: #FAFAFA;
height: 50px;
vertical-align: middle;
`;

const Q = () => (<FAStack className="fa-stack">
  <i className="fa fa-circle fa-stack-1x"></i>
  <I className="fa fa-question fa-stack-1x"></I>
</FAStack>);

const Checkbox = styled(Input)`
display: inline-block;
width: 22px;
`;

const CheckboxLabel = styled.label`
font-size: 0.8em;
`;

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      address: '',
      apt: '',
      zipcode: '',
      state: '',
      city: '',
      country: '',
      phone: '',
      useAddress: true,
    };
  }

  update = (field, e) => this.setState({ [field]: e.target.value });

  updateCheckbox = (field) => this.setState({ [field]: !this.state[field] });

  updatePass = (e, error) => { this.update('password', e); error.length > 0 && this.validatePass(e); };

  validatePass = (e) => this.setState({ passwordError: e.target.value.length < 10 ? 'Password has to be at least 10 symbols long.' : '' });

  updateEmail = (e, error) => { this.update('email', e); error.length > 0 && this.validateEmail(e); };

  validateEmail = (e) => this.setState({ emailError: e.target.value.indexOf('@') === -1 ? 'Valid email address required.' : '' });

  validateSecurityCode = (e) => this.setState({ secCodeError: e.target.value === '111' ? 'Bad security code.' : '' });

  render() {
    const state = this.state;

    return (
      <div>
        <Header>Create account</Header>
        <Half>
          <Field id="email" error={state.emailError} type="email" placeholder="Email address" value={state.email} onChange={(e) => { this.updateEmail(e, state.emailError); }} onBlur={this.validateEmail} />
        </Half>
        <Half>
          <Field id="password" error={state.passwordError} type="password" placeholder="Password" value={state.password} onChange={(e) => { this.updatePass(e, state.passwordError); }} onBlur={this.validatePass} />
        </Half>
        <Header>Shipping address</Header>
        <Half>
          <Field id="firstName" type="text" placeholder="First name" value={state.firstName} onChange={(e) => { this.update('firstName', e); }} />
        </Half>
        <Half>
          <Field id="lastName" type="text" placeholder="Last name" value={state.lastName} onChange={(e) => { this.update('lastName', e); }} />
        </Half>
        <TwoThirds>
          <Field id="address" type="text" placeholder="Street address" value={state.address} onChange={(e) => { this.update('address', e); }} />
        </TwoThirds>
        <Third>
          <Field id="apt" type="text" placeholder="Apt/Suite (Optional)" value={state.apt} onChange={(e) => { this.update('apt', e); }} />
        </Third>
        <Third>
          <Field id="zipcode" type="text" placeholder="Zip code" value={state.zipcode} onChange={(e) => { this.update('zipcode', e); }} />
        </Third>
        <Third>
          <Field id="state" type="text" placeholder="State" value={state.state} onChange={(e) => { this.update('state', e); }} />
        </Third>
        <Third>
          <Field id="city" type="text" placeholder="City" value={state.city} onChange={(e) => { this.update('city', e); }} />
        </Third>
        <Col>
          <Field id="country" type="text" placeholder="Country" value={state.country} onChange={(e) => { this.update('country', e); }} />
        </Col>
        <Half>
          <Field id="phone" type="text" placeholder="Mobile number (optional)" value={state.phone} onChange={(e) => { this.update('phone', e); }} />
        </Half>
        <Half small>
          We may send you special discounts and offers
        </Half>
        <div>
          <CheckboxLabel htmlFor="useAddress">
            <Checkbox
              id="useAddress"
              type="checkbox"
              checked={state.useAddress}
              onChange={(e) => { this.updateCheckbox('useAddress', e); }}
            />
            Use this address as my billing address
          </CheckboxLabel>
        </div>
        {!this.state.useAddress && 
          <span>
            <Header>Billing address</Header>
            <TwoThirds>
              <Field id="address" type="text" placeholder="Street address" value={state.address} onChange={(e) => { this.update('address', e); }} />
            </TwoThirds>
            <Third>
              <Field id="apt" type="text" placeholder="Apt/Suite (Optional)" value={state.apt} onChange={(e) => { this.update('apt', e); }} />
            </Third>
            <Third>
              <Field id="zipcode" type="text" placeholder="Zip code" value={state.zipcode} onChange={(e) => { this.update('zipcode', e); }} />
            </Third>
            <Third>
              <Field id="state" type="text" placeholder="State" value={state.state} onChange={(e) => { this.update('state', e); }} />
            </Third>
            <Third>
              <Field id="city" type="text" placeholder="City" value={state.city} onChange={(e) => { this.update('city', e); }} />
            </Third>
            <Col>
              <Field id="country" type="text" placeholder="Country" value={state.country} onChange={(e) => { this.update('country', e); }} />
            </Col>
          </span>}
        <Header>Secure credit card payment</Header>
        <Wrapper>
          <Safe><ImgLock src={lock} alt="encrypted" />128-BIT ENCRYPTION. YOU’RE SAFE
          </Safe>
          <Half noPad>
            <ImgPayment src={payment} alt="payment methods" />
          </Half>
          <TwoThirds>
            <Field inverted id="card" type="text" placeholder="Credit card number" value={state.card} onChange={(e) => { this.update('card', e); }} />
          </TwoThirds>
          <Third>
            <Field error={state.secCodeError} question inverted id="sec" type="text" placeholder="Security code" value={state.sec} onChange={(e) => { this.update('sec', e); this.validateSecurityCode(e); }} onBlur={this.validateSecurityCode} />
          </Third>
          <Fourth>
            <Field inverted id="month" type="text" placeholder="Month" value={state.month} onChange={(e) => { this.update('month', e); }} />
          </Fourth>
          <Fourth>
            <Field inverted id="year" type="text" placeholder="Year" value={state.year} onChange={(e) => { this.update('year', e); }} />
          </Fourth>
        </Wrapper>
        <Col noPad><Button>BUY NOW</Button></Col>
      </div>
    );
  }
}

export default Form;
