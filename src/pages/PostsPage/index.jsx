import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../components/Table';
import { Navigate } from 'react-router-dom';
import { POSTS_COLUMNS } from '../../constants/posts';
import { PATHS } from '../../router/paths';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * useEffect(() => {}, []); // it takes call back function, and array of dependencies
   * useEffect(() => {}); // after every render
   * useEffect(() => {}, []); // after first render only
   * useEffect(() => {}, [counters]); // after first render, and after every change of the [dependencies]
   * useEffect(() => {}, [counters, isLoading]); // after first render, and after every change of the [dependencies]
   * useEffect(() => {
   *  return () => {
   *    console.log('un mounting');
   *  };
   * }, []); // in mounting and before unmounting
   */

  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const { data } = await axios.get(
  //       'https://jsonplaceholder.typicode.com/posts'
  //     );
  //     setPosts(data);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    // fetchData();

    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setPosts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleDelete = async (id) => {
    console.log(id, 'is deleted');
    setIsLoading(true);
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (id) => {
    console.log(id, 'is edited');
  };

  const handleView = (row) => {
    console.log(row.id, 'is viewed');
  };

  return (
    <div>
      <h1>Posts</h1>

      <button onClick={() => console.log('create')}>Create Post</button>

      <Table
        columns={POSTS_COLUMNS(handleDelete, handleEdit)}
        data={posts}
        onRowClick={handleView}
        isLoading={isLoading}
      />

      {/* {this.state.rowId && <Navigate to={`${this.state.rowId}`} replace />}
      {this.state.editId && (
        <Navigate
          to={PATHS.POSTS.EDIT.replace(':id', this.state?.editId)}
          replace
        />
      )}
      {this.state?.isCreating && <Navigate to={PATHS.POSTS.CREATE} replace />} */}
    </div>
  );
};

export default PostsPage;
