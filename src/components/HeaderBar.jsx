import React from "react";
import { Link } from "gatsby";
import useSiteMetadata from "../hooks/useSiteMetadata"


const HeaderBar = (props) => {

  const { headerMenu } = useSiteMetadata()

  const linkstyles = {
      color: 'black',
      fontWeight: "normal"
  }

  // 使う？？
  const activestyles = {
  }

  const menu = headerMenu.map((item) => {
      const page_link = item.slug;
      return (
          <li key={page_link}>
              <Link to={page_link} style={linkstyles}>
                  {item.name}
              </Link>
          </li>
      )
  });

  return (
    <header>
      <nav>
        <div>
          <ul>
            {menu}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeaderBar;
