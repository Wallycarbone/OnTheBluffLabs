import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

import Puppies from "@/pages/puppies";
import BreedingDogs from "@/pages/breeding-dogs";
import HealthTesting from "@/pages/health-testing";
import Training from "@/pages/training";
import Boarding from "@/pages/boarding";
import Facilities from "@/pages/facilities";
import DogFood from "@/pages/dog-food";
import Contact from "@/pages/contact";
import PuppyApplication from "@/pages/puppy-application";
import Admin from "@/pages/admin";
import AdminLogin from "@/pages/admin-login";
import SimpleAdminLogin from "@/pages/simple-admin-login";
import FileEditor from "@/pages/file-editor";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      <Route path="/puppies" component={Puppies} />
      <Route path="/puppy-application" component={PuppyApplication} />
      <Route path="/breeding-dogs" component={BreedingDogs} />
      <Route path="/health-testing" component={HealthTesting} />
      <Route path="/training" component={Training} />
      <Route path="/boarding" component={Boarding} />
      <Route path="/facilities" component={Facilities} />
      <Route path="/dog-food" component={DogFood} />
      <Route path="/contact" component={Contact} />
      <Route path="/admin/login" component={SimpleAdminLogin} />
      <Route path="/admin" component={Admin} />
      <Route path="/admin/files" component={FileEditor} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
