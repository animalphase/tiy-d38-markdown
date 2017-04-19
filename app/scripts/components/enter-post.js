import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import container from '../containers/all.js';

class EnterPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>New Blog Post</h2>
        <section className="enter-post-section">
          <label htmlFor="post-raw-text">New post markdown</label>
          <textarea
            className="post-entry"
            id="post-raw-text"
            name="post raw text in markdown"
            rows="12"
            cols="60"
            placeholder="type post in markdown…"
          />
        </section>
        <section className="markdown-preview-section">
          <article className="markdown-article">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </article>
        </section>
      </div>
    );
  }
}

export default connect()(EnterPost);
