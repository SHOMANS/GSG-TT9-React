import React, { Component } from 'react';
import axios from 'axios';
import Table from '../../components/Table';
import { Navigate } from 'react-router-dom';
import { POSTS_COLUMNS } from '../../constants/posts';
import { PATHS } from '../../router/paths';

class PostsPage extends Component {
  state = {
    posts: [],
    isLoading: true,
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data, isLoading: false }));
  }

  handleDelete = async (id) => {
    console.log(id, 'is deleted');
    try {
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  handleEdit = (id) => {
    console.log(id, 'is edited');
    this.setState({ editId: id });
  };

  handleView = (row) => {
    console.log(row.id, 'is viewed');
    this.setState({ rowId: row.id });
  };

  render() {
    return (
      <div>
        <h1>Posts</h1>

        <button onClick={() => this.setState({ isCreating: true })}>
          Create Post
        </button>

        <Table
          columns={POSTS_COLUMNS(this.handleDelete, this.handleEdit)}
          data={this.state.posts}
          onRowClick={this.handleView}
          isLoading={this.state.isLoading}
        />

        {this.state.rowId && <Navigate to={`${this.state.rowId}`} replace />}
        {this.state.editId && (
          <Navigate
            to={PATHS.POSTS.EDIT.replace(':id', this.state?.editId)}
            replace
          />
        )}
        {this.state?.isCreating && <Navigate to={PATHS.POSTS.CREATE} replace />}
      </div>
    );
  }
}

export default PostsPage;
