import { useId, useRef, useState } from 'react'
import css from './Signup.module.scss'
import MainForm from './MainForm'
import { Group } from './FormUtils'
import CameraIcon from '$assets/icons/camera.svg?component'

const Signup = (props) => {
  const imageId = useId()
  const inputFileRef = useRef()
  const [previewImageSrc, setPreviewImageSrc] = useState(null)
  const clickPickImage = () => inputFileRef.current.click()

  const handlePickImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      setPreviewImageSrc(URL.createObjectURL(file))
    } else {
      setPreviewImageSrc(null)
    }
  }

  return (
    <MainForm {...props} type="signup">
      <label className={css.image} htmlFor={imageId}>
        <input
          onChange={handlePickImage}
          ref={inputFileRef}
          type="file"
          name="avatar"
          id={imageId}
        />

        <div className={css.image__preview}>
          {previewImageSrc ? <img src={previewImageSrc} /> : <CameraIcon />}
        </div>
      </label>

      <Group label="Full Name*">
        <input type="text" name="name" required />
      </Group>

      <Group label="Username*">
        <input type="text" name="username" required />
      </Group>

      <Group label="Password*">
        <input type="password" name="password" required />
      </Group>

      <Group label="Confirm Password*">
        <input type="password" name="confirmPassword" required />
      </Group>
    </MainForm>
  )
}

export default Signup
