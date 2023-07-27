import React, { Component } from 'react';
import axios from 'axios';
import { H1 } from '../../components/Typography';
import Container from '../../components/Container';
import PostForm from '../../components/PostForm';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import { API_URL } from '../../config/api';

class CreatePostPage extends Component {
  state = {
    isLoading: false,
    isGoToListPage: false,
  };
  // const navigate = useNavigate() // in functional component

  handleCreatePost = async (body) => {
    try {
      // localhost:3001/posts
      await axios.post(`${API_URL}posts`, body);
      this.setState({ isLoading: false, isGoToListPage: true });
      // navigate(PATHS.POSTS.ROOT)
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
