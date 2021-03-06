import React, { useState } from "react"
import { useAppState } from "app/app-state"
import Avatar from "app/Avatar"
import Minutes from "app/Minutes"
import { FaDumbbell } from "react-icons/fa"
import RecentPostsDropdown from "app/RecentPostsDropdown"

const errorClass = "NewPost_error"

const MAX_MESSAGE_LENGTH = 200

export default function NewPost({ takeFocus, date, onSuccess, showAvatar }) {
  const [{ auth }] = useAppState()
  const [workoutDescription, setWorkoutDescription] = useState("I did stuff")

  return (
    <div
      className={
        workoutDescription.length > MAX_MESSAGE_LENGTH
          ? `NewPost ${errorClass}`
          : "NewPost"
      }
    >
      {showAvatar && <Avatar uid={auth.uid} size={70} />}
      <form className="NewPost_form">
        <textarea
          className="NewPost_input"
          placeholder="Tell us about your workout!"
          onChange={event => setWorkoutDescription(event.target.value)}
          defaultValue={workoutDescription}
        />
        <div className="NewPost_char_count">
          {workoutDescription.length}/{MAX_MESSAGE_LENGTH}
        </div>
        <RecentPostsDropdown uid={auth.uid} onSelect={message => {}} />
        <div className="NewPost_buttons">
          <Minutes date={date} />
          <div>
            <button type="submit" className="icon_button cta">
              <FaDumbbell /> <span>Post</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
