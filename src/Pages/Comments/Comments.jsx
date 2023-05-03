import { useEffect, useState } from 'react';
import { json, Link, useParams } from 'react-router-dom';
import Comment from '../../components/Comment/Comment';
import Loading from '../../components/UI/Loading/Loading';
import ScrollToTop from '../../components/UI/ScrollToTop/ScrollToTop';
import './comments.css';

const Comments = (props) => {
  const { postId } = useParams();
  const URL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => {
        setComments([...json]);
        setLoading(false);
      });
  }, []);

  const postComments = comments.map((item, index) => {
    return (
      <Comment
        content={item.body}
        name={item.name}
        email={item.email}
        key={item.id}
      />
    );
  });

  return (
    <div className="comments-container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ScrollToTop /> {postComments}
        </>
      )}
      <Link to="/posts">Back To Posts</Link>
    </div>
  );
};

export default Comments;
