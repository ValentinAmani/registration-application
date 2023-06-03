import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/" className="header-link">
          APPLICATION D'EMARGEMENT
        </NavLink>

        <div>
          <NavLink to="/">Enregistrement</NavLink>
          <NavLink to="/show">Consulter la liste</NavLink>
        </div>
      </nav>
    </header>
  );
}
