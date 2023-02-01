import * as React from "react";
import { Link } from "gatsby";

function WritingView({ writing }: any) {
  return (
    <div className="wrapper">
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <main>
        <h1>{writing.name}</h1>
        <p>
          {writing.description}. Appeared in {writing.appearance}.
        </p>
      </main>
      <footer>writing provided by Incite.</footer>
    </div>
  );
}

export default WritingView;
