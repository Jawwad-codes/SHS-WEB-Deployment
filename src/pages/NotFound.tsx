/** @format */

import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <div className="font-display text-8xl font-medium text-accent sm:text-9xl">
        404
      </div>
      <h1 className="mt-4 font-display text-2xl font-medium text-foreground sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-sm text-muted-foreground">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Button asChild variant="hero" className="mt-8">
        <Link to="/">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
