import { useId } from 'react'
import css from './Collections.module.scss'

const Collection = ({ collection, selectInput }) => {
  const id = useId()
  const handleChange = ({ currentTarget }) => {
    if (currentTarget.checked) {
      selectInput(collection._id)
    }
  }

  return (
    <div className={css.collectionGroup}>
      <label htmlFor={id}>
        {selectInput && (
          <input
            id={id}
            type="radio"
            name="collection"
            value={collection._id}
            onChange={handleChange}
            className="visually-hidden"
          />
        )}

        {collection.hue && (
          <div
            className={css.collectionColor}
            style={{ background: `hsl(${collection.hue}, 100%, 50%)` }}
          />
        )}

        <span>{collection.name}</span>
      </label>
    </div>
  )
}
export default Collection
