import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class UserList extends Component {
  render() {
    const { userData } = this.props;

    return (
        <ul className="list pl0 mt0 measure center">
          <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img className="w2 h2 w3-ns h3-ns br-100" src={userData.avatar_url} />
            <div className="pl3 flex-auto">
              <span className="db black-70">
                {userData.login} 
                <Link to={`/user/${userData.login}`}>&nbsp;view detail</Link>
              </span>
              <span className="db black-70">Score:&nbsp;{userData.score}</span>
            </div>
            <div>
              <a target="_blank" href={userData.html_url} className="link blue hover-dark-gray">open in github</a>
            </div>
          </li>
        </ul>
    )
  }
}
export default UserList;