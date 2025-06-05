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
        {/* <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header> */}
        <ConvexClientProvider>
          {/* <Header /> */}
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
