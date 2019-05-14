import React from 'react'
import './App'

export default function CelebDetail(props) {
  let celebrities = celebrities.find(c => c.id === props.match.params.celebritiesId)
  return (
    <div className="CelebDetail">
      <h2>Celeb detail</h2>
      <strong> Name: </strong> {celebrities.name} <br />
      {/* <strong> Id: </strong> {props.match.params.userId}  <br /> */}
      <img src={"https://image.tmdb.org/t/p/w185" + celebrities.poster_path} alt="" />
      <strong> Know for: </strong> {celebrities.original_title} <br />
    </div>
  )
}