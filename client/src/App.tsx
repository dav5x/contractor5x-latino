import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import SolutionsPage from "./pages/SolutionsPage";
import SolutionDetailPage from "./pages/SolutionDetailPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import TradesPage from "./pages/TradesPage";
import TradePage from "./pages/TradePage";
import PricingPage from "./pages/PricingPage";
import ResultsPage from "./pages/ResultsPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import VideoPage from "./pages/Video";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/solutions" component={SolutionsPage} />
      <Route path="/solutions/:id" component={SolutionDetailPage} />
      <Route path="/learn" component={BlogPage} />
      <Route path="/learn/:slug" component={BlogPostPage} />
      <Route path="/trades" component={TradesPage} />
      <Route path="/trades/:tradeId" component={TradePage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/results" component={ResultsPage} />
      <Route path="/results/:slug" component={CaseStudyPage} />
      <Route path="/404" component={NotFound} />
      <Route path="/video" component={VideoPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
