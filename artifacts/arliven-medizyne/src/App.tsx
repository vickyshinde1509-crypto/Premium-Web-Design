import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Components
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Export from "@/pages/Export";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

function ScrollToTop() {
  // A simple component to scroll to top on route change could be added here
  // but Wouter's simple setup usually requires a custom hook. 
  // Native smooth scroll in CSS handles most basic needs.
  return null;
}

function Router() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <div className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/export" component={Export} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
