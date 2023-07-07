export default function Navigation({ children }) {
  return <ul class="navigation">{children}</ul>;
}

export function NavLink({ children, href, state = "" }) {
  return (
    <>
      <li>
        <a className={`nav__link nav__link--${state}`} href={href}>
          {children}
        </a>
        <span className={`nav__counter nav__counter--${state}`}>3</span>
      </li>
    </>
  );
}
