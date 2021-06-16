import React from "react"

export default function Home(props) {
  let lastUpdate = new Date(props.updated_at)
  lastUpdate = lastUpdate.toLocaleString("en-US")
  return(
    <div class="repo-card">
      <a class="repo-title" href={ props.html_url } target="_blank"><h2>{ props.name }</h2></a>
      <div class="repo-detail">
        <p><span class="bold-text">Language:</span> { props.language }</p>
        <p><span class="bold-text">Last Update:</span> { lastUpdate }</p>
        <p class="repo-desc">{ props.description }</p>
      </div>

    </div>
  )
}