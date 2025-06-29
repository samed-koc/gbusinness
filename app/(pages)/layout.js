import "../globals.css";
import Sidebar from "../ui/bars/Sidebar";

export default function RootLayout({ children }) {
  return <Sidebar>{children}</Sidebar>;
}
