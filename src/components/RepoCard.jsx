import React from "react"

export default function Home(props) {
  return(
    <div class="repo-card">
      <a class="repo-title" href={ props.html_url } target="_blank"><h2>{ props.name }</h2></a>
      <div class="repo-detail">
        <p>Language: { props.language }</p>
        <p>Last Update: { props.updated_at }</p>
        <p>{ props.description }</p>
      </div>

    </div>
  )
}