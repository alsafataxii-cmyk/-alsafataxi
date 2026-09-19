import { Star } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

type ReviewButtonProps = {
  variant?: "primary" | "gold" | "outline-light" | "outline-dark";
  className?: string;
};

export default function ReviewButton({ variant = "outline-dark", className }: ReviewButtonProps) {
  return (
    <Button
      href={siteConfig.trustpilotUrl}
      variant={variant}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Star className="h-4 w-4" aria-hidden="true" />
      Review Us on Trustpilot
      <span className="sr-only"> (opens in a new tab)</span>
    </Button>
  );
}
