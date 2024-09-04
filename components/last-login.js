"use client";

import LoginForm from "./login-form";

export default function LastLogin() {
  return (
    <section>
      <h2 className="text-2xl">Medium improvements</h2>
      <div>
        <h3>
          Let the users know what log-in method they used when they last logged
          in:
        </h3>
        <p>
          <strong>Current:</strong>
        </p>
        <p>
          <strong>Proposed change:</strong>
        </p>
        <div className=" w-96">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
