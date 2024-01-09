import { NavBar } from './components/NavBar';
import { StatusCardList } from './components/StatusCardList';

function App() {
  return (
    <div style={{ background: '#D4D4D4' }}>
      <NavBar title='Factory Four Dasboard' />
      <StatusCardList />
    </div>
  );
}

export default App;
