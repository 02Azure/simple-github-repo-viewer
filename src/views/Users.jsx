import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import RepoCard from "../components/RepoCard"
import UserBox from "../components/UserBox"

let githubAPI = "https://api.github.com"

export default function Home() {
  const history = useHistory()
  const { username } = useParams()

  const [userData, setUserData] = useState({})
  const [userRepos, setUserRepos] = useState([])
  const [usernameInput, setUsernameInput] = useState("")

  useEffect(() => {
    fetch(githubAPI + `/users/${username}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (!response.ok) {
        history.push("/notfound")
      } else {
        return response.json()
      }
    })
    .then(data => {
      setUserData(data)
      return fetch(githubAPI + `/users/${username}/repos`)
    })
    .then(response => response.json())
    .then(data => {
      setUserRepos(data)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, [username])

  let repoCards = userRepos?.map(repo => {
    return(
      <RepoCard
        { ...repo }
        key = { repo.id }
      />
    )
  }) 


  return(
    <div id="user-page" class="page">
      <div id="input-container">
        <input 
          type="text" 
          value={ usernameInput } 
          onChange = { event => setUsernameInput(event.target.value) } 
          placeholder = "Github username"
        />
        <button class="username-button" onClick = { () => history.push(`/users/${usernameInput}`)}>Go!</button>
      </div>


      <div id="user-data-container">
        <UserBox
          { ...userData }
        />
        <div id = "repo-cards-box">
          <h2>Public Repositories:</h2>
          <div id ="repo-cards-container">
            { repoCards }
          </div>
        </div>
      </div>

    </div>
  )
}