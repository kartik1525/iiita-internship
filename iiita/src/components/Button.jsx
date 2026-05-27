function Button({ text }) {
  return (
    <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition duration-300 shadow-md">
      {text}
    </button>
  )
}

export default Button