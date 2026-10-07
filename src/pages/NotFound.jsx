import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import PageHeader from "@/components/PageHeader";

export function Component() {
  return (
    <>
      <Seo page="notFound" />
      <PageHeader eyebrow="404" title="This page doesn't exist">
        <p>The link may be old or mistyped. Try one of these instead:</p>
      </PageHeader>
      <div className="wrap section flex flex-col gap-3 sm:flex-row">
        <Link to="/" className="btn-primary">Go to the home page</Link>
        <Link to="/services" className="btn-ghost">See packages and prices</Link>
        <Link to="/work" className="btn-ghost">See my work</Link>
      </div>
    </>
  );
}
