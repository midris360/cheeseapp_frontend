import { useState } from "react"
import { Link } from "react-router-dom"

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    title: "",
  })

  // handleChange function for form
  const handleChange = event => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value })
  }

  // handle submit function for form
  const handleSubmit = event => {
    event.preventDefault()
    props.createCheeses(newForm)
    setNewForm({
      name: "",
      image: "",
      title: "",
    })
  }

  // loaded function
  const loaded = () => {
    return props.cheeses.map(cheese => (
      <div key={cheese._id} className="person">
        <Link to={`/cheeses/${cheese._id}`}>
          <h1>{cheese.name}</h1>
        </Link>
        <img src={cheese.image} alt={cheese.name} />
        <h3>{cheese.title}</h3>
      </div>
    ))
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Create Cheese" />
      </form>
      {props.cheeses ? loaded() : loading()}
    </section>
  )
}

export default Index