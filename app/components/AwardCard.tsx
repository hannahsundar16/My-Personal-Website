interface ACProjectCardProps {
    title: string;
    org?: string;
  }
  
  export const ACProjectBox: React.FC<ACProjectCardProps> = ({ title, org }) => {
    return (
      <div
        className={`w-full flex flex-col p-3 rounded-lg shadow-lg mx-auto transform transition-transform duration-300`}
        style={{
          background: `white`,
          border: `1px solid black`,
        }}
      >
        <div className="flex-grow">
          <h1 style={cardStyles.title}>{title}</h1>
          <p style={cardStyles.org}>{org}</p>
        </div>
      </div>
    );
  };
  
  const cardStyles = {
    container: {
      borderRadius: "12px",
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      padding: "8px",
      maxWidth: "250px",
      margin: "16px auto",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "4px",
      color: "#333",
      letterSpacing: "0.5px",
    },
    org: {
      fontSize: "13px",
      color: "#333",
      marginBottom: "4px",
    },
  };
  