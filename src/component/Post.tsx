import { useState } from 'react'
import { PostDTO } from '../types/dto'
import classes from './Post.module.css'

interface IPostProps {
  post: PostDTO
}

const Post = ({ post }: IPostProps) => {
  const [buttonMsg, setButtonMsg] = useState<boolean>(false)

  const toggleShow = () => {
    setButtonMsg(!buttonMsg)
  }

  return (
    <div className={classes.post}>
      <p>id: {post.id}</p>
      <p>postedBy: {post.userId}</p>
      <p>title: {post.title}</p>
      <p>body: {post.body}</p>
      {buttonMsg && <p> More post info</p>}
      <button onClick={toggleShow}>{buttonMsg ? 'Show Less' : ' Show more'}</button>
    </div>
  )
}

export default Post
