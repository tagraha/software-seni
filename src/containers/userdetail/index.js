import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router-dom';
import {
  fetchUserRepos,
} from '../../modules/githubusers';

import UserRepos from './../../components/UserRepos'

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
    const { slug } = this.state;
    const { githubUserRepos } = this.props;

    return (
      <div>
        <div className="row">
          <div className="column">
            <h1>{slug}&nbsp;repositories</h1>
          </div>
        </div>

        <div>
          {githubUserRepos && githubUserRepos.length === 0 &&
            <span>
              <h3>found nothing <small>open your console</small></h3>
              <Link to="/">back</Link>
            </span>
          }
          {githubUserRepos.map((value) =>
            <UserRepos key={value.id} repoData={value} />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  githubUserRepos: state.githubusers.userRepos
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