import Header from "../components/header.jsx";
import { ConvexClientProvider } from "../components/convex-client-provider";
import "./globals.css";

export const metadata = {
  title: "DevHistory",
  keywords:
    "DevHistory, career history, developer portfolio, tech career, programming journey, professional growth, skills documentation, career milestones, developer achievements, career tracking, software engineering history, tech industry,, career documenttion, personal development, career reflection, software projects, coding journey, developer stories",
  description:
    "DevHistory is a platform dedicated to documenting the history of your career in software development or any other field of interest.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <ConvexClientProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
