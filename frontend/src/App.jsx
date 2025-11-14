import Navbar from "./components/Navbar";

export default function App({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
