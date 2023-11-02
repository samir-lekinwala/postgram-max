import { useState } from 'react'
import { Link } from 'react-router-dom'

function Posts() {
  const [posts, setPosts] = useState([
    {
      owner: 'Cong',
      description: 'Lazy cat',
      liked: false,
      img: 'https://www.thesprucepets.com/thmb/APYdMl_MTqwODmH4dDqaY5q0UoE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg',
    },
    {
      owner: 'Samir',
      description: 'Lazy cat',
      liked: false,
      img: 'https://www.thesprucepets.com/thmb/APYdMl_MTqwODmH4dDqaY5q0UoE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg',
    },
    {
      owner: 'V',
      description: 'Lazy cat',
      liked: false,
      img: 'https://www.thesprucepets.com/thmb/APYdMl_MTqwODmH4dDqaY5q0UoE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg',
    },
    {
      owner: 'Ricky',
      description: 'Lazy cat',
      liked: false,
      img: 'https://www.thesprucepets.com/thmb/APYdMl_MTqwODmH4dDqaY5q0UoE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg',
    },
  ])

  return (
    <div className="posts">
      <Link to={`/add`}>Add</Link>
      <ul>
        {posts.map((post) => (
          <button
            className="post"
            key={post.img}
            onDoubleClick={() => {
              setPosts(
                posts.map((item) => {
                  if (item !== post) {
                    return item
                  } else {
                    return { ...post, liked: !post.liked }
                  }
                })
              )
            }}
          >
            <li>
              <p>Owner: {post.owner}</p>
              <img alt={post.description} src={post.img} />
              <div className="descriptionLiked-container">
                <p className="description">{post.description}</p>
                <button
                  className="liked"
                  onClick={() => {
                    setPosts(
                      posts.map((item) => {
                        if (item !== post) {
                          return item
                        } else {
                          return { ...post, liked: !post.liked }
                        }
                      })
                    )
                  }}
                  style={{ fontSize: '24px' }}
                >
                  {post.liked ? '❤️' : '♡'}
                </button>
              </div>
            </li>
          </button>
        ))}
      </ul>
    </div>
  )
}

export default Posts
