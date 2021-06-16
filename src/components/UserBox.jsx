import React from "react"

export default function UserBox(props) {
  return(
    <div id="userbox">
      <img src={ props.avatar_url } alt="user's avatar" />
      <a href={ props.html_url } target="_blank"><h2>{ props.login }</h2></a>
      { props.name && 
        <h3>({ props.name })</h3>
      }
      <p>{ props.bio }</p>
      <p>{ props.followers } Followers</p>
      <p>{ props.following } Following</p>
    </div>
  )
}