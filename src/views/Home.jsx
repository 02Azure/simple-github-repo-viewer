import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import githubMark from "../assets/github-mark.png"

export default function Home() {
  const history = useHistory()
  const [usernameInput, setUsernameInput] = useState("")

  return(
    <div id="home-page" class="page">
      <h1 id="home-title">Github User's Repositories Viewer</h1>

      <div id="logo-input-container">
        <img id="home-logo" src={ githubMark } alt="github_mark_logo" />
        <Link to="/users/02Azure">For example, my github account: 02azure</Link>
        <div>
          <input 
            type="text" 
            value={ usernameInput } 
            onChange = { event => setUsernameInput(event.target.value) } 
            placeholder = "Github username"
          />
          <button onClick = { () => history.push(`/users/${usernameInput}`)}>Go!</button>
        </div>
      </div>
    </div>
  )
}