import React from 'react'
import CommentList from '../chapter_05_1/CommentList'

const styles = {
  wrapper : {
    margin:8,
    padding:8,
    display:"fiex",
    flexDirection:"row",
    border:"1px solid grey",
    borderRadius : "1em"
  },
  imageContainer : {},
  image: {
    width:50,
    height:50,
    borderRadius:25,
  },
  contentContainer: {
    marginLeft:8,
    display:"flex",
    flexDirection: "column",
    justifyContent: "center",

  },
  nameText: {
    color: "black",
    fontSize: 16 ,
    fontWeight: "bold",

  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
};
const Comment = (props) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img src='https://mblogthumb-phinf.pstatic.net/MjAyMTExMDFfNjgg/MDAxNjM1NzM5Mjc0MDI4.d8uiOg711vEC3uv3QnDfsucpuof1-P0lgkReMXy10Akg.9vVrqNpy12QeV0ygQsT-Ls2bEpJ3lMgJj8YWCF9qNN4g.PNG.love56one/01.png?type=w800  ' alt='profile' style={styles.image} />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        {/* <span style={{...styles.commentText, color:'blue'}}>{props.comment}</span> */}
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
}
export default Comment