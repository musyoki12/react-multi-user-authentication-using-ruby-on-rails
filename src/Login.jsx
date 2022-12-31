import React from 'react'

function Login() {
  return (
    <div>
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="username"
                    placeholder="Username"
                />
            </div>
        </form>
    </div>
  )
}

export default Login