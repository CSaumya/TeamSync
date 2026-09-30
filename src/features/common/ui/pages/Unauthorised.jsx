import React from 'react'

const Unauthorised = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-bg)]">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[var(--color-text)]">
          403
        </h1>

        <p className="mt-3 text-[var(--color-text-secondary)]">
          You are not authorised to access this page.
        </p>
      </div>
    </div>
  );
};

export default Unauthorised;

