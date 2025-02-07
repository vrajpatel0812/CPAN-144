import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center", padding: "20px" }}>Welcome to Task Manager</h1>
      <p style={{ textAlign: "center" }}>Click on "Tasks" to manage your tasks.</p>
    </div>
  );
}
