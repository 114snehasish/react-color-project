import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';

function App() {
  console.log(generatePalette(seedColors[8]));
  return (
    <div>
      <Palette {...seedColors[8]} />
    </div>
  );
}

export default App;
