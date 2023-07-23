import axios from 'axios';
import React, { useState } from 'react';
import Container from '../../components/Container';
import { GIPHY_KEY, GIPHY_URL } from '../../config/api';
import useAPI from '../../hooks/useAPI';

const Giffs = () => {
  const [search, setSearch] = useState('');

  const { data, isLoading, get } = useAPI(`${GIPHY_URL}gifs/search`);

  const config = {
    params: {
      api_key: GIPHY_KEY,
      q: search,
      limit: 20,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    get(config);
  };

  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setIsLoading(true);
  //     // const data = await axios.get(
  //     //   `${GIPHY_URL}gifs/search?api_key=${GIPHY_KEY}&s=${search}`
  //     // );

  //     const res = await axios.get(`${GIPHY_URL}gifs/search`, {
  //       params: {
  //         api_key: GIPHY_KEY,
  //         q: search,
  //         limit: 20,
  //       },
  //     });

  //     setData(res.data.data);
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data.map((item) => (
            <img
              key={item.id}
              src={item.images.downsized_medium.url}
              alt={item.title}
            />
          ))
        )}
      </div>
    </Container>
  );
};

export default Giffs;
