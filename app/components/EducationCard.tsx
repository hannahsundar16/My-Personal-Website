interface ECProjectCardProps {
    title: string;
    org: string;
    color: string;
    borderColor?: string;
  }
  
  function hexToRgba(hex: string, opacity: number) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  export const ECProjectBox: React.FC<ECProjectCardProps> = ({ title, org, color, borderColor }) => {
    return (
      <div
        className="w-full rounded-xl shadow-md p-6 transform transition-transform duration-300"
        style={{
          background: `linear-gradient(to bottom right, ${hexToRgba(color, 0.5)}, ${color})`,
          border: `3px solid ${borderColor}`,
        }}
      >
        <div className="text-left">
          <h1 className="text-xl sm:text-1xl font-bold text-gray-800 mb-2">{title}</h1>
          <p className="text-lg sm:text-xl text-gray-700">{org}</p>
        </div>
      </div>
    );
  };
  /*
  const cardStyles = {
    container: {
      borderRadius: "12px",
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      maxWidth: "250px",
      margin: "16px auto",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#333",
      letterSpacing: "0.5px",
    },
    org: {
      fontSize: "24px",
      color: "#333",
      marginBottom: "8px",
    },
    date: {
      fontSize: "20px",
      color: "#333",
      marginTop: "8px",
      fontWeight: "bold",
      marginBottom: "12px",
    }
  };
  */