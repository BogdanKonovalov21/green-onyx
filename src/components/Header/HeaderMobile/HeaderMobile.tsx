import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-scroll';

import './HeaderMobile.css';

const HeaderMobile: React.FC = (): JSX.Element => {
  const mobileMenuList = [
    { label: 'Головна', link: 'home' },
    { label: 'Послуги', link: 'servicesMobile' },
    { label: 'Про нас', link: 'companyMobile' },
    { label: 'Наша робот', link: 'portfolio' },
    { label: "Зв'яжіться з нами", link: 'contactUs' },
  ];
  return (
    <Menu className="flex flex-col text-white z-50" right noOverlay>
      {mobileMenuList.map((link, index) => {
        return (
          <Link
            key={index}
            to={link.link}
            smooth={true}
            duration={1000}
            spy={true}
            className={`text-lg cursor-pointer relative link `}
          >
            {link.label}
          </Link>
        );
      })}
    </Menu>
  );
};

export default HeaderMobile;
