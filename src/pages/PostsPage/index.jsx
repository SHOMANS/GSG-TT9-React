import React, { Component } from 'react';
import Table from '../../components/Table';
import { Navigate } from 'react-router-dom';
import { POSTS_COLUMNS } from '../../constants/posts';

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

  handleDelete = (id) => {
    console.log(id, 'is deleted');
  };

  handleEdit = (id) => {
    console.log(id, 'is edited');
  };

  handleView = (row) => {
    console.log(row.id, 'is viewed');
    this.setState({ rowId: row.id });
  };

  render() {
    return (
      <div>
        <h1>Posts</h1>

        <Table
          columns={POSTS_COLUMNS(this.handleDelete, this.handleEdit)}
          data={this.state.posts}
          onRowClick={this.handleView}
          isLoading={this.state.isLoading}
        />

        {this.state.rowId && <Navigate to={`${this.state.rowId}`} />}
      </div>
    );
  }
}

export default PostsPage;
