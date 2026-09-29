import Link from "next/link";

export default function NotFound() {
  return (
    <div className="error-page">
      <div>
        <span className="eyebrow">404</span>
        <h1>Deze pagina is niet gevonden</h1>
        <p className="lead">
          De pagina die je zoekt bestaat niet (meer) of is verplaatst.
        </p>
        <div className="hero__actions" style={{ justifyContent: "center" }}>
          <Link className="btn btn--primary" href="/">
            Terug naar de homepage
          </Link>
          <Link className="btn btn--outline" href="/contact">
            Neem contact op
          </Link>
        </div>
      </div>
    </div>
  );
}
