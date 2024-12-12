import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Browse from "./components/Browse";
import Contact from "./components/Contact";
import Home from "./components/Home";
import JobDescription from "./components/JobDescription";
import Jobs from "./components/Jobs";
import PrivacyPolicy from "./components/Policies/PrivacyPolicy";
import RefundAndReturnPolicy from "./components/Policies/RefundAndReturnPolicy";
import TermsAndConditions from "./components/Policies/TermsAndConditions";
import Profile from "./components/Profile";
import { JobDetailsProvider } from "./context/JobDetailsContext";

import Dashboard from "./components/admin/Dashboard";
import PostJob from "./components/admin/PostJob";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/apply",
    element:<MainApply />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/policy/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/policy/refund-policy",
    element: <RefundAndReturnPolicy />,
  },
  {
    path: "/policy/terms-and-conditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/report-job/:id",
    element: <ReportJob />,
  },
  {
    path: "/recruiter/post-job",
    element: <PostJob />,
  },
  //Pull req. check..... (change by ankush sir)...
  // complete this project at saturday
]);

function App() {
  return (
    <div>
      <JobDetailsProvider>
        <RouterProvider router={appRouter} />
      </JobDetailsProvider>
    </div>
  );
}

export default App;
