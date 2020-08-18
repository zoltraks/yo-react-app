import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
    // Revert to original document title
    return () => {
      document.title = Counter.originalTitle
    }  
  })

  return (
    <div>
      <h1>Counter</h1>

      <p>This is a simple example of a React component.</p>

      <p aria-live="polite">Current count: <strong>{count}</strong></p>

      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

Counter.originalTitle = document.title

export default Counter
