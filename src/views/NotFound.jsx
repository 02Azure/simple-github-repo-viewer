import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
  return(
    <div id="notfound-page" class="page">
      <h1>Error: Either the user you just entered not found, you navigated to the non-existent page, or internal server error</h1>
      <Link to="/"><h2>I'm scared, return me to home!</h2></Link>
    </div>
  )
}