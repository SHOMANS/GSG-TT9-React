import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../components/Table';
import { useNavigate } from 'react-router-dom';
import { POSTS_COLUMNS } from '../../constants/posts';
import { PATHS } from '../../router/paths';
import { API_URL } from '../../config/api';
import useAPI from '../../hooks/useAPI';

const PostsPage = () => {
  const navigate = useNavigate();
  const { get, del, data, isLoading } = useAPI(API_URL + 'posts');

  // const [posts, setPosts] = useState([]);

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchData = async () => {

  // setIsLoading(true);
  // try {
  //   const { data } = await axios.get(API_URL + 'posts');
  //   setPosts(data);
  // } catch (error) {
  //   setError(error.message);
  // } finally {
  //   setIsLoading(false);
  // }
  // };

  useEffect(() => {
    get();
  }, [get]);

  const handleDelete = async (id) => {
    del(id);
    // setIsLoading(true);
    // try {
    //   await axios.delete(`${API_URL}posts/${id}`);
    //   setPosts(posts.filter((post) => post.id !== id));
    // } catch (err) {
    //   console.log(err);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const handleEdit = (id) => {
    navigate(PATHS.POSTS.EDIT.replace(':id', id));
  };

  const handleView = (row) => {
    navigate(PATHS.POSTS.VIEW.replace(':id', row.id));
  };

  return (
    <div>
      <h1>Posts</h1>

      <button onClick={() => navigate(PATHS.POSTS.CREATE)}>Create Post</button>

      <Table
        columns={POSTS_COLUMNS(handleDelete, handleEdit)}
        data={data}
        onRowClick={handleView}
        isLoading={isLoading}
      />
    </div>
  );
};

export default PostsPage;
