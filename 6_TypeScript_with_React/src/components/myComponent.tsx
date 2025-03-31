import React from 'react'

interface myComponentProps {
    name: string
    age?: number
}

export default function MyComponent({name="John", age=10}: myComponentProps) {
  return (
    <div>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
    </div>
  )
}
