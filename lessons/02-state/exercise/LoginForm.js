import React, { useState, useRef } from "react"
import VisuallyHidden from "@reach/visually-hidden"
import { FaSignInAlt } from "react-icons/fa"
import TabsButton from "app/TabsButton"
import { login } from "app/utils"

// import LoginFormFinal from './LoginForm.final'
// export default LoginFormFinal

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const loginRef = useRef()
  const passwordRef = useRef()
  return (
    <form
      onSubmit={async event => {
        setLoading(true)
        event.preventDefault()
        const emailNode = loginRef.current
        const passwordNode = passwordRef.current
        try {
          await login(emailNode.value, passwordNode.value)
        } catch (error) {
          alert(error)
        }
      }}
    >
      <VisuallyHidden>
        <label htmlFor="login:email">Email:</label>
      </VisuallyHidden>
      <input
        type="text"
        id="login:email"
        className="inputField"
        placeholder="you@example.com"
        ref={loginRef}
      />

      <VisuallyHidden>
        <label htmlFor="login:password">Password:</label>
      </VisuallyHidden>
      <input
        id="login:password"
        type={showPassword ? "text" : "password"}
        className="inputField"
        placeholder="Password"
        ref={passwordRef}
      />

      <div>
        <label>
          <input
            className="passwordCheckbox"
            type="checkbox"
            defaultChecked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />{" "}
          show password
        </label>
      </div>

      {loading ? (
        <TabsButton>
          <span>Loading...</span>
        </TabsButton>
      ) : (
        <TabsButton>
          <FaSignInAlt />
          <span>Login</span>
        </TabsButton>
      )}
    </form>
  )
}
