import React, { Component } from 'react';
import WithParams from '../../components/WithParams';
import Container from '../../components/Container';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import axios from 'axios';

class PostPage extends Component {
  state = {
    post: null,
    isLoading: true,
    isEditing: false,
  };

  id = this.props?.params?.id;

  handleEdit = () => {
    console.log(this.id, 'is edited');
    this.setState({ isEditing: true });
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${this.id}`
      );
      this.setState({ post: data });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
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
        <button onClick={this.handleEdit}>Edit</button>
        {this.state.isEditing && (
          <Navigate to={PATHS.POSTS.EDIT.replace(':id', this.id)} replace />
        )}
      </Container>
    );
  }
}

export default WithParams(PostPage);
