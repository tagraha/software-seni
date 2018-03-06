import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {
  fetchUserRepos,
} from '../../modules/githubusers';

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: ""
    }
  }
  componentDidMount() {
    const { match } = this.props;
    const slug = match.params.slug
    this.setState({ slug });

    this.props.fetchUserRepos(slug);
  }
  render() {
    return (
      <div>UserDetail</div>
    )
  }
}

const mapStateToProps = state => ({
  githubUserDetail: state.githubusers.userDetail
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchUserRepos,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);