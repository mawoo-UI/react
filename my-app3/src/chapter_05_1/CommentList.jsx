import React from 'react'
import Comment from '../chapter_05_1/Comment'

const comments = [
  {name:'oneweeks', comment:"ㅋㅋ"},
  {name:'치킨맨', comment:"ㅋㅋ"},
  {name:'피자맨', comment:"ㅋㅋ"}
]

const CommentList = () => {
  return (
    <div>
      {comments.map((comment) => {
        return(
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
      {/* <Comment name="oneweeks" comment="안녕하세요" />
      <Comment name="oneweeks" comment="안녕하세요" />
      <Comment name="oneweeks" comment="안녕하세요" /> */}
    </div>
  )
}
export default CommentList
