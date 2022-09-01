import "./globals.css";
import Page from "@/ui/page";

export default function App({ Component, pageProps }) {
  return (
    <Page
      id="0001-datatables-in-react-sort-filter-page"
      videoId="TODO"
      title="UGC Table"
      description="">
      <Component {...pageProps} />
    </Page>
  );
}
