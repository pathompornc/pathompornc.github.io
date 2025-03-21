
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center max-w-lg px-6">
          <h1 className="text-9xl font-display font-medium tracking-tight mb-6">404</h1>
          <p className="text-2xl text-muted-foreground mb-10">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-5 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Return to Home
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
