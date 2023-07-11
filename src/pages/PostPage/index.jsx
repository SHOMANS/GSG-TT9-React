import React, { Component } from 'react';
import WithParams from '../../components/WithParams';
import Container from '../../components/Container';

class PostPage extends Component {
  state = {
    post: null,
    isLoading: true,
  };

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.props?.params?.id}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ post: data, isLoading: false }));
  }

  render() {
    return (
      <Container>
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1>Post {this.state.post.id}</h1>
            <h2>{this.state.post?.title}</h2>
            <p>{this.state.post.body}</p>
          </>
        )}
      </Container>
    );
  }
}

export default WithParams(PostPage);
