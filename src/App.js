import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/' render={() => <h>Pallette List goes here</h>} />
      <Route
        exact
        path='/palette/:id'
        render={() => <Palette palette={generatePalette(seedColors[0])} />}
      />
    </Switch>
  );
}

export default App;
