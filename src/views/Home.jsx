import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import githubMark from "../assets/github-mark.png"

export default function Home() {
  const history = useHistory()
  const [usernameInput, setUsernameInput] = useState("")

  return(
    <div>
      <h1>Github User's Repositories Viewer</h1>
      <img src={ githubMark } alt="github_mark_logo" />
      <input type="text" value={ usernameInput } onChange = { event => setUsernameInput(event.target.value) } />
      <button 
        onClick = { () => history.push(`/users/${usernameInput}`)}
        placeholder = "Github username"
      >
        Go!
      </button>
    </div>
  )
}