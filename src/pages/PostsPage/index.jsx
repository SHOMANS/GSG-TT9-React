import React, { useEffect } from 'react';
import Table from '../../components/Table';
import { useNavigate } from 'react-router-dom';
import { POSTS_COLUMNS } from '../../constants/posts';
import { PATHS } from '../../router/paths';
import { API_URL } from '../../config/api';
import useAPI from '../../hooks/useAPI';

const PostsPage = () => {
  const navigate = useNavigate();
  const config = { headers: { Authorization: 'Bearer lskfjhlkf' } };
  const { get, del, data, isLoading } = useAPI(API_URL + 'posts', config);

  const handleDelete = async (id) => {
    del(id);
  };

  const handleEdit = (id) => {
    navigate(PATHS.POSTS.EDIT.replace(':id', id));
  };

  const handleView = (row) => {
    navigate(PATHS.POSTS.VIEW.replace(':id', row.id));
  };

  useEffect(() => {
    get({ params: { limit: 10, page: 1 } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
