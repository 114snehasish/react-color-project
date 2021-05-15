import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[0])} />
    </div>
  );
}

export default App;
