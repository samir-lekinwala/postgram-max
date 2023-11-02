import { useState } from 'react'
import { Link } from 'react-router-dom'

function Posts() {
  const [liked, setLiked] = useState(false)

  function handleLike() {
    setLiked(!liked)
  }

  return (
    <div>
      <Link to={`/add`}>Add</Link>
      <button onClick={handleLike} style={{ fontSize: '24px', color: liked ? 'red' : 'black' }}>{liked? '❤️' : '♡'}</button>
    </div>
  )
}

export default Posts
