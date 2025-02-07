import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav style={{ 
      padding: "10px", 
      background: "blue", 
      color: "white", 
      display: "flex", 
      justifyContent: "flex-start", 
      alignItems: "center" 
    }}>
      <button 
        onClick={() => router.push('/')} 
        style={{ 
          margin: "5px", 
          padding: "8px 15px", 
          cursor: "pointer", 
          border: "none", 
          borderRadius: "5px",
          background: "white",
          color: "blue",
          fontWeight: "bold"
        }}>
        Home
      </button>
      
      <button 
        onClick={() => router.push('/tasks')} 
        style={{ 
          margin: "5px", 
          padding: "8px 15px", 
          cursor: "pointer", 
          border: "none", 
          borderRadius: "5px",
          background: "white",
          color: "blue",
          fontWeight: "bold"
        }}>
        Tasks
      </button>
    </nav>
  );
};

export default Navbar;
