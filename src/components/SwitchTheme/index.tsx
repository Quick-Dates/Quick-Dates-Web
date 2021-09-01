import Switch from 'react-switch';
import { shade } from 'polished';

import './styles.css';
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

interface IResponseContext {
  toggleThemeMode: () => void,
  theme: string;
}

export function SwitchTheme() {
  const { toggleThemeMode, theme } = useContext(ThemeContext) as IResponseContext;
  return (
    <div className="box">
      <Switch
        onChange={toggleThemeMode}
        checked={theme === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        width={40}
        height={15}
        handleDiameter={20}
        offColor={shade(0.15, '#247D7E')}
        onColor="#202024"
      />
    </div>

  );
}
