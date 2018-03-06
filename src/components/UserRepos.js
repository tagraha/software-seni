import React, { Component } from 'react';

class UserRepos extends Component {
  render() {
    const { repoData } = this.props;
    return (
      <ul className="list pl0 mt0 measure center">
        <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
          <div className="pl3 flex-auto">
            <span className="db black-70">{repoData.full_name}</span>
            <span className="db black-70">Updated at:&nbsp;{repoData.updated_at}</span>
          </div>
          <div>
            <a target="_blank" href={repoData.html_url} className="link blue hover-dark-gray">open in github</a>
          </div>
        </li>
      </ul>
    )
  }
}
export default UserRepos;