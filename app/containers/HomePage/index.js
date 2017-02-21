import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import H4 from 'components/H4';
import media from 'components/Media';
import LeftBlock from './LeftBlock';
import ShippingBlock from './ShippingBlock';
import Form from './Form';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';

const ColLeft = styled.span`
float: left;
display: inline-block;
width: 33%;
margin-right: 3em;
${media.phone`width: 100%;`}
`;

const ColRight = styled.span`
display: inline-block;
width: 60%;
${media.phone`display: block; width: 100%; float: left;`}
`;

const OnlyDesktop = styled.span`
${media.phone`display:none;`}
`;

const OnlyPhone = styled.span`
display: none;
${media.phone`display:block;`}
`;

const Lead = () => <span><H2>MONTH-TO-MONTH SUBSCRIPTION</H2><H4>Billed monthly. Renews automatically, cancel any time. Free shipping.</H4></span>;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    return (
      <div>
        <div>
          <ColLeft>
            <OnlyPhone><Lead /></OnlyPhone>
            <LeftBlock />
            <OnlyDesktop><ShippingBlock /></OnlyDesktop>
          </ColLeft>
          <ColRight>
            <OnlyDesktop><Lead /></OnlyDesktop>
            <Form onSubmit={this.props.onSubmitForm} onChangeUsername={this.props.onChangeUsername} />
            <OnlyPhone><ShippingBlock /></OnlyPhone>
          </ColRight>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
