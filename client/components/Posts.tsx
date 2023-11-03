import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { redirect } from 'react-router-dom'
import images from '../images'

interface imagesFileNames {
  key: string
}

function getImages(images: imagesFileNames) {
  const options = []

  for (const key in images) {
    const imageFileNames = images[key]
    // console.log(imageFileNames)
    options.push(<option value={imageFileNames}>{key}</option>)
  }
  return options
}

interface postData {
  name: string
  image: string
  caption: string
}

function Posts() {
  const [posts, setPosts] = useState([
    {
      owner: 'Cong',
      description: 'Lazy cat',
      liked: false,
      img: 'https://www.thesprucepets.com/thmb/APYdMl_MTqwODmH4dDqaY5q0UoE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/all-about-tabby-cats-552489-hero-a23a9118af8c477b914a0a1570d4f787.jpg',
    },
    {
      owner: 'Will',
      description: 'On the run from the police',
      liked: true,
      img: 'client/public/images/IMG_4351.jpg',
    },
    {
      owner: 'Samir',
      description: 'Empty class',
      liked: false,
      img: 'client/public/images/20231102_084724.jpg',
    },
    {
      owner: 'Samir',
      description: 'Working hard or hardly working?',
      liked: true,
      img: 'client/public/images/20231102_162116.jpg',
    },
    {
      owner: 'Samir',
      description: 'Hug it out bois',
      liked: true,
      img: 'client/public/images/20231102_162838.jpg',
    },
    {
      owner: 'Samir',
      description: 'Straight up gangsta',
      liked: false,
      img: 'client/public/images/20231102_163424.jpg',
    },
    {
      owner: 'Samir',
      description: 'Sleepy boi',
      liked: false,
      img: 'client/public/images/20231102_162039.jpg',
    },
    {
      owner: 'Samir',
      description: 'Still waiting on my money Rich',
      liked: true,
      img: 'client/public/images/20231102_162625.jpg',
    },
  ])

  const [post, setPost] = useState({ name: '', image: '', caption: '' })
  // const [name, setName] = useState('')
  const [imageSelected, setImageSelected] = useState('')

  const onClear = () => {
    setValue('')
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const target = event.currentTarget
    const form = new FormData(target)
    const image = form.get('dropdown')?.valueOf()
    const caption = form.get('caption')?.valueOf()
    const name = form.get('name')?.valueOf()
    console.log(image)
    console.log(caption)
    console.log(name)
    setPost({ name: '', image: '', caption: '' })
    setImageSelected('')
    // setImageSelected(image as string)
    // setPost({ name: name, image: image, caption: caption } as postData)
    setPosts([
      ...posts,
      {
        owner: name,
        description: caption,
        liked: false,
        img: `client/public/images/${image}`,
      },
    ])
  }

  return (
    <>
      <div className="newPostForm">
        <form onSubmit={handleSubmit} method="post" action="/form">
          <label htmlFor="name">Name: </label>
          <input
            required
            id="name"
            name="name"
            placeholder="Your name to be displayed"
            value={post.name}
            onChange={(e) =>
              setPost({ name: e.target.value, image: '', caption: '' })
            }
          ></input>
          <label htmlFor="dropdown">Select an Image:</label>
          <select
            required
            name="dropdown"
            id="dropdown"
            onChange={(event) => {
              const selectedImage = event.target.value
              setImageSelected(selectedImage)
            }}
          >
            {getImages(images)}
          </select>
          <label htmlFor="caption">Caption:</label>
          <input
            required
            type="text"
            name="caption"
            id="caption"
            placeholder="Enter a caption here!"
            value={post.caption}
            onChange={(e) =>
              setPost({
                // name: e.target.value,
                image: '',
                caption: e.target.value,
              })
            }
          ></input>
          <button type="submit" onClick={() => handleSubmit}>
            Submit
          </button>
        </form>
        <br />
        {imageSelected && (
          <img
            className="addImage"
            width="400px"
            src={`client/public/images/${imageSelected}`}
            alt={'alt'}
          />
        )}
      </div>

      <div className="posts">
        {/* <Link to={`/add`}>Add</Link> */}
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
                <p className="owner">Owner: {post.owner}</p>
                <img
                  className="imagePosts"
                  alt={post.description}
                  src={post.img}
                />
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
    </>
  )
}

export default Posts
