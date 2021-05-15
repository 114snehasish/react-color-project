import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelper';
import { Route, Switch } from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  findPalette(id) {
    return seedColors.find((p) => p.id === id);
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h>Pallette List goes here</h>} />
        <Route
          exact
          path='/palette/:id'
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
