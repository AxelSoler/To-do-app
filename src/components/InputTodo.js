import React from "react"

const InputTodo = () => {
  let state = {
    title: "",
  }

  const onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (state.title.trim()) {
      this.props.addTodoProps(this.state.title)
      this.setState({
        title: "",
      })
    } else {
      alert("Please write item")
    }
  }
    return (
      
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={state.title}
          name="title"
          onChange={onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
    )

}
export default InputTodo;