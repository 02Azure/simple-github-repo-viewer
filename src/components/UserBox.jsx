import React from "react"

export default function UserBox(props) {
  return(
    <div id="userbox">
      <div id="avatar-container">
        <img id="user-avatar" src={ props.avatar_url } alt="user's avatar" />
      </div>
      <a href={ props.html_url } target="_blank"><h2>{ props.login }</h2></a>
      { props.name && 
        <h3>({ props.name })</h3>
      }
      <p>{ props.bio }</p>
      <p class="bold-text">{ props.followers } Followers</p>
      <p class="bold-text">{ props.following } Following</p>
    </div>
  )
}