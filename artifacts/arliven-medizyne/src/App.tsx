import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { useEffect, useRef } from "react";

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

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919049175132"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{ zIndex: 9999 }}
      className="fixed bottom-6 right-5 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-2xl cursor-pointer select-none"
    >
      {/* Pulsing ring */}
      <span className="absolute w-14 h-14 rounded-full bg-[#25D366] animate-ping opacity-40" />
      {/* WhatsApp SVG icon */}
      <svg viewBox="0 0 32 32" className="w-8 h-8 relative z-10 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.004 2C8.28 2 2 8.28 2 16.004c0 2.47.648 4.786 1.778 6.793L2 30l7.394-1.742A13.955 13.955 0 0016.004 30C23.72 30 30 23.72 30 16.004 30 8.28 23.72 2 16.004 2zm0 25.455a11.413 11.413 0 01-5.822-1.594l-.418-.248-4.388 1.034 1.059-4.277-.272-.44A11.412 11.412 0 014.545 16.004c0-6.318 5.14-11.459 11.459-11.459s11.459 5.14 11.459 11.46c0 6.317-5.14 11.45-11.459 11.45zm6.286-8.574c-.344-.172-2.038-1.005-2.353-1.12-.316-.115-.546-.172-.776.173-.23.344-.89 1.12-1.09 1.35-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.021-.53.15-.701.154-.154.344-.4.516-.6.172-.2.23-.344.344-.573.115-.23.058-.43-.029-.602-.086-.172-.776-1.871-1.063-2.562-.28-.672-.563-.58-.776-.59l-.66-.012c-.23 0-.602.086-.917.43-.315.344-1.205 1.177-1.205 2.868s1.234 3.326 1.406 3.555c.172.23 2.428 3.706 5.882 5.196.822.355 1.464.567 1.964.726.825.263 1.576.226 2.17.137.662-.1 2.038-.833 2.325-1.637.287-.804.287-1.492.201-1.637-.086-.144-.315-.23-.66-.402z"/>
      </svg>
    </a>
  );
}

const SCROLL_STORE = "arliven_scroll_v1";

function readStore(): Record<string, number> {
  try { return JSON.parse(sessionStorage.getItem(SCROLL_STORE) || "{}"); }
  catch { return {}; }
}
function writeStore(path: string, y: number) {
  try {
    const s = readStore();
    s[path] = y;
    sessionStorage.setItem(SCROLL_STORE, JSON.stringify(s));
  } catch {}
}
function getSaved(path: string): number {
  return readStore()[path] ?? 0;
}

function ScrollManager() {
  const [location] = useLocation();
  const navStack = useRef<string[]>([]);
  const isBackFlag = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // One-time setup
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    document.documentElement.style.scrollBehavior = "auto";
    // popstate = browser back/forward button
    const onPop = () => { isBackFlag.current = true; };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Continuously write scroll position to sessionStorage — independent of navigation timing
  useEffect(() => {
    let raf = 0;
    let lastY = -1;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (window.scrollY !== lastY) {
          lastY = window.scrollY;
          writeStore(location, window.scrollY);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      // Final save when leaving this page
      writeStore(location, window.scrollY);
    };
  }, [location]);

  // Handle each navigation
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    const stack = navStack.current;
    // Back = popstate fired OR current page is one step behind top of stack
    const isBack = isBackFlag.current || (stack.length >= 2 && stack[stack.length - 2] === location);
    isBackFlag.current = false;

    if (isBack) {
      // Pop stack
      if (stack.length >= 2) navStack.current = stack.slice(0, -1);
      const saved = getSaved(location);
      // Wait for page to re-render, then snap — no smooth scroll, instant jump
      timerRef.current = setTimeout(() => {
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo({ top: saved, behavior: "instant" as ScrollBehavior });
        // Retry once in case images/fonts shifted the layout
        setTimeout(() => window.scrollTo({ top: saved, behavior: "instant" as ScrollBehavior }), 120);
      }, 100);
    } else {
      navStack.current = [...stack, location];
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);
    }
  }, [location]);

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
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollManager />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
