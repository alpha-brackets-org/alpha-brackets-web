import WebLayout from "@/components/common/WebLayout";
import { headers } from "next/headers";

export const metadata = {
  title: "Alpha Brackets",
  icons: {
    icon: "/assets/imgs/favicon.ico",
    shortcut: "/assets/imgs/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const headersList = headers();
  const pathname =
    headersList.get("x-pathname") || headersList.get("x-url") || "";
  const isCms = pathname.includes("/cms");

  return (
    <html lang="en">
      <body>{isCms ? children : <WebLayout>{children}</WebLayout>}</body>
    </html>
  );
}
