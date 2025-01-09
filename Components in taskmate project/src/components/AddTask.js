export const AddTask = () => {
  return (
    <section className="addTask">
      <form>
        <input type = "text" name = "task" placeholder="Add Task" autoComplete="off" />
        <button type = "submit">Add</button>
      </form>
    </section>
  )
}
