import { useResolvedPath, useMatch, Link } from 'react-router-dom'

const NavLink =({ to, text, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={`font-semibold ${match ? 'text-indigo-400' : ''}`}
        to={to}
        {...props}
      >
        {text}
      </Link>
    </div>
  );
}

export default NavLink