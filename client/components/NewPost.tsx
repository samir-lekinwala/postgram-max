import React, { useState } from 'react'
// import { Form } from 'react-router-dom'

const imagesObject = {}
const imagesArray = []

function saveImageToLocal(
  imageKey: string,
  imageData: object,
  caption: string
) {
  const count = 1
  const fr = new FileReader()
  fr.readAsDataURL(imageData)
  fr.addEventListener('load', () => {
    const imageUrl = fr.result
    localStorage.setItem(imageKey, imageUrl)
    imagesObject[count] = { imageKey, imageUrl, caption }
    count + 1
    imagesArray.push(imageUrl)
    // console.log(imagesObject)
    return imageUrl
  })

  return imagesObject
}

let storedImageKey

function loadImageFromLocal(imageKey: string) {
  storedImageKey = imageKey
  const imageString = localStorage.getItem(imageKey)
  console.log(storedImageKey)
  return imageString
}

// loadImageFromLocal('Samir')

export function NewPost() {
  const [name, setName] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const target = event.currentTarget
    const form = new FormData(target)
    const image = form.get('image')?.valueOf()
    const caption = form.get('caption')?.valueOf()
    const name = form.get('name')?.valueOf()
    saveImageToLocal(name as string, image as object, caption as string)
    setName(name)
  }

  return (
    <div className="newPostForm">
      <form onSubmit={handleSubmit} method="post" action="/form">
        <label htmlFor="name">Name</label>
        <input id="name" name="name"></input>
        <label htmlFor="image">Image</label>
        <input id="image" type="file" alt="" name="image"></input>
        <label htmlFor="caption">Caption</label>
        <input type="text" name="caption" id="caption"></input>
        <button type="submit">Submit</button>
      </form>
      <img src={loadImageFromLocal(`${name}`)} alt="dsad" />
    </div>
  )
}

export default NewPost
