import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      this.setState({ posts: data.slice(0, 10) }); // load first 10 posts
    } catch (error) {
      throw new Error('Failed to fetch posts');
    }
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An error occurred: " + error.message);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong while loading posts.</h1>;
    }

    return (
      <div className="posts-container">
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
