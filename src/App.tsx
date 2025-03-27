
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter } from "react-router-dom";
import AppRoutes from "./App.routes";

const queryClient = new QueryClient();

// Detect if we're on GitHub Pages (contains modern-shaved-ice-refresh in path)
const isGitHubPages = window.location.href.includes('github.io');

const App = () => {
  // Use HashRouter for GitHub Pages to handle client-side routing
  const Router = isGitHubPages ? HashRouter : BrowserRouter;
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <AppRoutes />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
