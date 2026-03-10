import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

import HomePage from "./pages/HomePage";
import OverviewPage from "./pages/OverviewPage";
import MembersPage from "./pages/MembersPage";
import SciencePage from "./pages/SciencePage";
import PublicationsPage from "./pages/PublicationsPage";
import EducationPage from "./pages/EducationPage";
import OutreachPage from "./pages/OutreachPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "overview", element: <OverviewPage /> },
      { path: "members", element: <MembersPage /> },
      { path: "science", element: <SciencePage /> },
      { path: "publications", element: <PublicationsPage /> },
      { path: "education", element: <EducationPage /> },
      { path: "outreach", element: <OutreachPage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);