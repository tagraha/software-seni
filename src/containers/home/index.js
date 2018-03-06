import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  searchUserReq,
} from '../../modules/githubusers';

import UserList from './../../components/UserList';

let debounce;

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const keyword = ev.target.value;
    clearTimeout(debounce);

    debounce = setTimeout(() => {
      this.props.searchUserReq(keyword);
    }, 700);
  }

  render() {
    const { changePage, githubUsers } = this.props;

    return (
      <div>
        <div className="row">
          <div className="column">
            <h1>Home</h1>

            <input
              type="text" 
              placeholder="enter github username to search"
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div>
          {githubUsers.map((value) => 
            <UserList userData={value}/>
          )}
        </div>

        <div className="row">
          <div className="column">
            <a onClick={() => changePage()}>
              dev.nugrata@gmail.com
            </a>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  githubUsers: state.githubusers.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchUserReq,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
