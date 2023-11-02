import React, { useState } from 'react'
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

export function Add() {
  const [post, setPost] = useState({ name: '', image: '', caption: '' })
  // const [name, setName] = useState('')
  const [imageSelected, setImageSelected] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const target = event.currentTarget
    const form = new FormData(target)
    const image = form.get('dropdown')?.valueOf()
    const caption = form.get('caption')?.valueOf()
    const name = form.get('name')?.valueOf()
    // setName(name as string)
    setImageSelected(image as string)
    setPost({ name: name, image: image, caption: caption } as postData)
    console.log(post)
    redirect('/')
  }

  return (
    <div className="newPostForm">
      <form onSubmit={handleSubmit} method="post" action="/form">
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          placeholder="Your name to be displayed"
        ></input>
        <label htmlFor="dropdown">Select an Image</label>
        <select
          name="dropdown"
          id="dropdown"
          onChange={(event) => {
            const selectedImage = event.target.value
            setImageSelected(selectedImage)
          }}
        >
          {getImages(images)}
        </select>
        <label htmlFor="caption">Caption</label>
        <input
          type="text"
          name="caption"
          id="caption"
          placeholder="Enter a caption here!"
        ></input>
        <button type="submit" onClick={() => handleSubmit}>
          Submit
        </button>
      </form>
      <img
        width="400px"
        src={`client/public/images/${imageSelected}`}
        alt={'alt'}
      />
    </div>
  )
}

export default Add
