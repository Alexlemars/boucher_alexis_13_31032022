import React from 'react'
import "./Register.css"

import Button from '../../component/button/Button'

export default function Register() {
  return (
    <div><div>
    <main className="main bg-dark">
  <section className="sign-up-content">
    <h1 className='sign-in-title'>Sign up</h1>
    <form>

    <div className="input-wrapper">
        <label for="Email">Email</label
        ><input type="text" id="Email" />
      </div>
    <div className="input-wrapper">
        <label for="Nom">Nom</label
        ><input type="text" id="Nom" />
      </div>
    <div className="input-wrapper">
        <label for="Prénom">Prénom</label
        ><input type="text" id="Prénom" />
      </div>
      
      <div className="input-wrapper">
        <label for="password">Password</label
        ><input type="password" id="password" />
      </div>
      

      <Button
                path="/signIn"
                className="sign-in-button"
                text="Sign up"
            />

    </form>
  </section>
</main>

</div></div>
  )
}
