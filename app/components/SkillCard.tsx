interface SkillCardProps {
  title: string;
  color: string;
  border?: string;
}

export const SkillBox: React.FC<SkillCardProps> = ({ title, color, border }) => {
  return (
    <div
      className="w-full sm:w-[155px] md:w-[160px] lg:w-[160px] xl:w-[160px] mx-auto mb-4"
      style={{ ...cardStyles.container, backgroundColor: color, border: `3px solid ${border}`, }}
    >
      <h1 style={cardStyles.title}>{title}</h1>
    </div>
  );
};

const cardStyles = {
  container: {
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "12px",
    margin: "8px",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "16px",
    color: "black",
  },
};
