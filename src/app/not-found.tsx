import Error from "@/components/sections/page-404/Error";

export const metadata = {
  title: "404 - Page Not Found | Alpha Brackets",
};

export default function NotFound() {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main className="main-bg o-hidden">
          <Error />
        </main>
      </div>
    </div>
  );
}
