import './comment.css';

const Comment = (props) => {
  return (
    <div className="comment-container">
      <p>
        <span>{props.name}</span> commented:
      </p>
      <small>Email: {props.email}</small>
      <p>{props.content}</p>
    </div>
  );
};

export default Comment;
