import Avatar from "./Avatar";
import Userinfo from "./Userinfo";

const Comment = function(props) {
  const {author, text, date} = props;
  const eles = <div className="comment">
    <Userinfo author={author} />
    <div className="comment-text">{text}</div>
    <div className="comment-date">{formatDate(date)}</div>
  </div>
  
  return eles;
}
function formatDate(d) {
  return new Date(d).toLocaleDateString('ko-KR');
}




export default Comment