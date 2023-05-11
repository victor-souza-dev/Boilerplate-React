import { useDispatch } from 'react-redux';
import { switchTheme } from '../../store/reducers/themeMode';
import { HomeContainer } from './Home.style';

export function Home() {
  const dispatch = useDispatch();
  return (
    <HomeContainer>
      <button onClick={() => dispatch(switchTheme())}>Clique aqui</button>
    </HomeContainer>
  );
}
