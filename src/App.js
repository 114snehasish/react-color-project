import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import seedColors from './seedColors';
import { generatePalette } from './colorHelper';

import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import Page from './Page';

class App extends React.Component {
  constructor(props) {
    super(props);
    let savedPalettes;
    try {
      savedPalettes = JSON.parse(localStorage.getItem('palettes'));
    } catch (e) {
      console.error(e);
    }
    this.state = {
      palettes: savedPalettes || seedColors,
    };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find((p) => p.id === id);
  }

  deletePalette(id) {
    this.setState(
      (st) => ({ palettes: st.palettes.filter((e) => e.id !== id) }),
      this.syncLocalStorage
    );
  }

  savePalette(newPalette) {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }

  syncLocalStorage() {
    //save palette to localstorage
    localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
  }

  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames='page' timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path='/palette/new'
                  render={(routeProps) => (
                    <Page>
                      <NewPaletteForm
                        palettes={this.state.palettes}
                        savePalette={this.savePalette}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/'
                  render={(routeProps) => (
                    <Page>
                      <PaletteList
                        palettes={this.state.palettes}
                        {...routeProps}
                        deletePalette={this.deletePalette}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/palette/:id'
                  render={(routeProps) => (
                    <Page>
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/palette/:paletteId/:colorId'
                  render={(routeProps) => (
                    <Page>
                      <SingleColorPalette
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                      />
                    </Page>
                  )}
                />
                <Route
                  render={(routeProps) => (
                    <Page>
                      <PaletteList
                        palettes={this.state.palettes}
                        {...routeProps}
                        deletePalette={this.deletePalette}
                      />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
