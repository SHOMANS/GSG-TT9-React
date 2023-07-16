import React, { Component } from 'react';
import axios from 'axios';
import WithParams from '../../components/WithParams';
import { H1 } from '../../components/Typography';
import Container from '../../components/Container';
import PostForm from '../../components/PostForm';
import { PATHS } from '../../router/paths';
import { Navigate } from 'react-router-dom';

class EditPostPage extends Component {
  state = {
    post: null,
    isLoading: true,
    isGotToListPage: false,
  };

  id = this.props.params.id;

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

  handleEditPost = async (body) => {
    this.setState({ isLoading: true });
    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${this.id}`,
        body
      );
      console.log(res.data);
      this.setState({
        post: res.data,
        isLoading: false,
        isGotToListPage: true,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <div>
        <Container>
          <H1>Edit Post {this.id}</H1>

          <PostForm
            post={this.state.post}
            handleSubmit={this.handleEditPost}
            isLoading={this.state.isLoading}
          />
        </Container>

        {this.state.isGotToListPage && (
          <Navigate to={PATHS.POSTS.ROOT} replace />
        )}
      </div>
    );
  }
}

export default WithParams(EditPostPage);
