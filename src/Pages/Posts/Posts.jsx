import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Post from '../../components/Post/Post';
import Loading from '../../components/UI/Loading/Loading';
import ScrollToTop from '../../components/UI/ScrollToTop/ScrollToTop';
import './posts.css';
import { GoSearch } from 'react-icons/go';

const Posts = (props) => {
  const [posts, setPosts] = useState();
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  useEffect(() => {
    setSearchParams({ query, isSubmit:0 }, { replace: true });
  }, [query]);

  const onQueryChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const onSearchClickHandler = () => {
    setSearchParams({...query, isSubmit:1}, {replace:true})
  };

  const allPosts =
    posts &&
    posts
      .filter((item) => {
        return item.body.includes(query) || item.title.includes(query);
      })
      .map((item, index) => {
        return (
          <Post
            content={item.body}
            key={index}
            title={item.title}
            postId={item.id}
          />
        );
      });

  const search = (
    <div className="search-container">
      <label htmlFor="search">Search Post: </label>
      <input
        type="search"
        className="search-input"
        id="search"
        onChange={onQueryChangeHandler}
        value={query}
      />
      <button onClick={onSearchClickHandler} id='btn-search'>Search <GoSearch/></button>
    </div>
  );

  return (
    <div className="posts-container">
      {posts ? (
        <>
          <ScrollToTop />
          {search}
          {allPosts}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Posts;
