"use client";

import LoginForm from "./login-form";

export default function LastLogin() {
  return (
    <section>
      <h2 id="last_login">Last login</h2>
      <div>
        <p>
          Make it easy and obvious for the users to know which login method they
          used last time.
        </p>
        <p>
          <strong>Problem:</strong>
        </p>
        <ul>
          <li>
            <p>
              With so many login/signup options it can be hard to remember which
              was the last loggin/signup method I used.
            </p>
          </li>
          <li>
            <p>
              When doing this analysis I personally experimented this, as I
              didn't remember what was the signup method I used last time.
            </p>
          </li>
        </ul>
        <p>
          <strong>Solution:</strong>
        </p>
        <ul>
          <li>
            With something as simple as local storage, we can save the last
            login/signup method used and highlight it in the login/signup form.
          </li>
          <li>
            To test it out, just click one of the buttons above and refresh the
            site.
          </li>
        </ul>
        <div className=" w-96">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
