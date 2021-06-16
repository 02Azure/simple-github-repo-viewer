import React from "react"

export default function Home(props) {
  return(
    <div>
      <a href={ props.html_url } target="_blank"><h2>{ props.name }</h2></a>
      <p>{ props.description }</p>
      <p>Language: { props.language }</p>
      <p>Last Update: { props.updated_at }</p>
    </div>
  )
}