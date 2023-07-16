import React, { Component } from 'react';
import axios from 'axios';
import { H1 } from '../../components/Typography';
import Container from '../../components/Container';
import PostForm from '../../components/PostForm';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';

class CreatePostPage extends Component {
  state = {
    isLoading: false,
    isGoToListPage: false,
  };

  handleCreatePost = async (body) => {
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', body);
      this.setState({ isLoading: false, isGoToListPage: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Container>
          <H1>Create Post</H1>

          <PostForm
            handleSubmit={this.handleCreatePost}
            isLoading={this.state.isLoading}
          />
        </Container>
        {this.state.isGoToListPage && <Navigate to={PATHS.POSTS.ROOT} />}
      </div>
    );
  }
}

export default CreatePostPage;
