import React from 'react'

const Alert = () => {
    console.log(first)
  return (
    <div>
        <h3>Are you Sure?</h3>
        <span>If you Delete this, its not gonna come back</span>
        <div>
            <button type="button" class="btn btn-success">Yes, Delete This</button>
            <button type="button" class="btn btn-danger">Nah I'm Good</button>
        </div>
    </div>
  )
}

export default Alert