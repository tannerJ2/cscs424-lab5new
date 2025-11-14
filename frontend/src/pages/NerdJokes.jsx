import { useState } from "react";

export default function NerdJokes() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/jokes");
      const data = await res.json();
      setJoke(data.joke);
    } catch (error) {
      setJoke("Error fetching joke. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="terminal">
      <h1>💻 SysAdmin Nerd Jokes Central</h1>
      <p>Press the button to generate a random sysadmin joke.</p>
      <button onClick={getJoke} disabled={loading}>
        {loading ? "Fetching..." : "Generate New Joke"}
      </button>
      {joke && <pre className="joke-output">{joke}</pre>}
    </div>
  );
}
