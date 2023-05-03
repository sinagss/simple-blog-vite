import { Link, useNavigate, useParams } from 'react-router-dom';
import './post.css';

const Post = (props) => {
  const navigate = useNavigate();

  const onClickHandler = () => navigate(`/comments/${props.postId}`);

  return (
    <div className="post-container" onClick={onClickHandler}>
      <h2 id="post-title">{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default Post;
