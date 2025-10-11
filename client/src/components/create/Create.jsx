import React from 'react'
import classes from './create.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Create = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [category, setCategory] = useState("burger")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const [review, setReview] = useState("")
  const navigate = useNavigate()
  // we get the auth slice from the entire state, which(auth slice) 
  // is the userInfo and the token
  const { token } = useSelector((state) => state.auth)


  // type="file", e.target.files[0]
  const onChangeFile = (e) => {
    setImage(e.target.files[0])
  }

  const handleCloseImg = () => {
    setImage('')
  }

  const handleChange = (e) => {setCategory(e.target.value)};



  const handleCreateProduct = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()
      let filename = null

      if (image) {
        filename = Date.now() + image.name
        formData.append("filename", filename)
        formData.append("image", image)

        await fetch(`http://localhost:5000/upload/image`, {
          headers: {
            "Authorization": `Bearer ${token}`
          },
          method: "POST",
          body: formData
        })
      }

      // uploading product 
      const res = await fetch(`http://localhost:5000/product`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          category,
          img: filename,
          price,
          review
        })
      })

      const food = await res.json()
      console.log(food)

      navigate('/foods')

    } catch (error) {
      console.error(error.message)
    }
  }



  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Create food</h2>
        <form onSubmit={handleCreateProduct} encType="multipart/form-data">
          <div className={classes.inputWrapper}>
            <label>Title: </label>
            <input type="text"
              placeholder='Title...'
              className={classes.input}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Description: </label>
            <input type="text"
              placeholder='Description...'
              className={classes.input}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div className={classes.inputWrapper}>
            <label htmlFor="category">Category:</label>
            <select name="category" id="category" className={classes.input} value={category}
              onChange={handleChange}>
              <option value="burger">burger</option>
              <option value="gyros">gyros</option>
              <option value="pizza">pizza</option>
              <option value="pasta">pasta</option>
              <option value="momos">momos</option>
              <option value="fries">fries</option>
              <option value="petis">petis</option>
              <option value="roll">roll</option>
              <option value="tikichat">tikichat</option>
              <option value="chowmin">chowmin</option>
              <option value="namkeen">namkeen</option>
              <option value="pakode">pakode</option>
            </select>
          </div>

          {/* <p>Selected: {category}</p> */}


          {/* <div className={classes.inputWrapper}>
            <label>Category: </label>
            <input type="text"
              placeholder='Category...'
              className={classes.input}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div> */}

          <div className={classes.inputWrapperImage}>
            <label htmlFor="image" className={classes.labelFileInput}>Image: <span>Upload here</span></label>
            <input type="file"
              id="image"
              placeholder='Image...'
              className={classes.input}
              onChange={onChangeFile}
              style={{ display: 'none' }}
            />
            {image && <p className={classes.imageName}>{image.name} <AiOutlineCloseCircle onClick={handleCloseImg} className={classes.closeIcon} /></p>}
          </div>
          <div className={classes.inputWrapper}>
            <label>Price: </label>
            <input type="number"
              step={0.01}
              placeholder='Price...'
              className={classes.input}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Review: </label>
            <input type="number"
              step={0.1}
              min={1}
              max={5}
              placeholder='Review...'
              className={classes.input}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div className={classes.buttonWrapper}>
            <button type="submit" className={classes.submitBtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Create