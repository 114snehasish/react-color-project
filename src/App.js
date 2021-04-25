import Palette from './Palette';
import seedColors from './seedColors';

function App() {
  return (
    <div>
      <Palette {...seedColors[8]} />
    </div>
  );
}

export default App;
