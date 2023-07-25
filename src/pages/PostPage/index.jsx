import Container from '../../components/Container';
import { useNavigate, useParams } from 'react-router-dom';
import { PATHS } from '../../router/paths';

import { useEffect } from 'react';
import { API_URL } from '../../config/api';
import useAPI from '../../hooks/useAPI';

const PostPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getSingle, item: post, isLoading } = useAPI(`${API_URL}posts`);

  const handleEdit = () => navigate(PATHS.POSTS.EDIT.replace(':id', id));

  useEffect(() => {
    getSingle(id);
  }, [getSingle, id]);

  return (
    <Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Post {post?.id}</h1>
          <h2>{post?.title}</h2>
          <p>{post?.author}</p>
        </>
      )}
      <button onClick={handleEdit}>Edit</button>
    </Container>
  );
};

export default PostPage;
