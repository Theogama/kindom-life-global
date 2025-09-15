import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

type BackButtonProps = {
  className?: string;
  label?: string;
};

const BackButton = ({ className = "", label = "Back" }: BackButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      aria-label="Go back"
      onClick={() => navigate(-1)}
      className={`mb-4 inline-flex items-center text-foreground hover:text-primary transition-colors ${className}`}
    >
      <ArrowLeft className="h-5 w-5 mr-2" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

export default BackButton;



