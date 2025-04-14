import { Outlet } from 'react-router-dom';
import { Secciones } from './Components/CV/Secciones';
import { Home } from './Components/Home/Home';
import { LanguageDropdown } from './locale/LanguageDropdown';

export default function Layout() {
  return (
    <div className="manu-principal-container">
      <div className="manu-container-1">
        <div className="info-container">
            <LanguageDropdown />
            <Home />
            <Secciones />
        </div>
      </div>
      <div className="manu-container-2">
        <div className="info-container">
            <Outlet />
        </div>
      </div>
    </div>
  );
}
