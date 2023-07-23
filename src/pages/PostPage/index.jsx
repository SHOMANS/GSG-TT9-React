import React, { useState } from 'react';
import Container from '../../components/Container';
import { useNavigate, useParams } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import axios from 'axios';

import { useEffect } from 'react';
import { API_URL } from '../../config/api';
import useAPI from '../../hooks/useAPI';

const PostPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getSingle, item: post, isLoading } = useAPI(`${API_URL}posts`);

  // const [post, setPost] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const handleEdit = () => navigate(PATHS.POSTS.EDIT.replace(':id', id));

  useEffect(() => {
    // (async () => {
    //   setIsLoading(true);
    //   try {
    //     const { data } = await axios.get(`${API_URL}posts/${id}`);
    //     setPost(data);
    //   } catch (error) {
    //     setError(error.message);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // })();
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
