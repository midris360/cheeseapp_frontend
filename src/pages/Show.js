import { useState } from "react"
function Show(props) {
  const id = props.match.params.id
  const cheeses = props.cheeses
  const cheese = cheeses.find(p => p._id === id)

  // state for form
  const [editForm, setEditForm] = useState(cheese)

  // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value })
  }

  // handlesubmit for form
  const handleSubmit = event => {
    event.preventDefault()
    props.updateCheeses(editForm)
    // redirect cheeses back to index
    props.history.push("/")
  }

  const removeCheese = () => {
    props.deleteCheeses(cheese._id)
    props.history.push("/")
  }

  return (
    <div className="cheese">
      <h1>{cheese.name}</h1>
      <h2>{cheese.title}</h2>
      <img src={cheese.image} alt={cheese.name} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Update Cheese" />
      </form>
    </div>
  )
}

export default Show