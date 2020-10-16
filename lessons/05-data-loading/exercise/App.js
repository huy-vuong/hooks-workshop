import LoggedIn from "app/LoggedIn"
import LoggedOut from "app/LoggedOut"
import { onAuthStateChanged } from "app/utils"
import React, { useEffect, useState } from "react"

/*
woof@woof.com
woofwoof
*/

function useAuth() {
  const [auth, setAuth] = useState(false)
  const [authAttempted, setAuthAttempted] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authState => {
      setAuth(authState)
      setAuthAttempted(true)
    })

    return unsubscribe
  }, [])

  return { auth, authAttempted }
}

export default function App() {
  const { auth, authAttempted } = useAuth()

  if (!authAttempted) {
    return <p>Authenticating...</p>
  }

  return (
    <div className="Layout">
      {auth ? <LoggedIn auth={auth} /> : <LoggedOut />}
    </div>
  )
}
