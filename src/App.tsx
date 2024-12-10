import React from "react";
import "./App.css";
import AppProviders from "components/Providers/AppProviders";
import MuiMode from "components/MuiMode";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
