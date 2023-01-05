import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import GreetingTitle from './components/GreetingTitle/GreetingTitle.jsx';


import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';
import IntroductionPage from './pages/IntroductionPage/IntroductionPage.jsx';
import VaraiablesPage from './pages/VaraiablesPage/VaraiablesPage.jsx';
import DataTypesPage from './pages/DataTypesPage/DataTypesPage.jsx';
import ExpressionsAndOperatorsPage from './pages/ExpressionsAndOperatorsPage/ExpressionsAndOperatorsPage.jsx'
import ConditionsPage from './pages/ConditionsPage/ConditionsPage.jsx';
import StructuredDatasPage from './pages/StructuredDatasPage/StructuredDatasPage.jsx';
import CyclesPage from './pages/CyclesPage/CyclesPage.jsx';
import FunctionsPage from './pages/FunctionsPage/FunctionsPage.jsx';

import VariablesLinkedPage from './pages/VariablesLinkedPage/VariablesLinkedPage.jsx';
import ConstantsLinkedPage from './pages/ConstantsLinkedPage/ConstantsLinkedPage.jsx';
import VisibilityAreaLinkedPage from './pages/VisibilityAreaLinkedPage/VisibilityAreaLinkedPage.jsx';
import DataTypesLinkedPage from './pages/DataTypesLinkedPage/DataTypesLinkedPage.jsx';
import BitOperationsLinkedPage from './pages/BitOperationsLinkedPage/BitOperationsLinkedPage.jsx';
import LogicalOperationsLinkedPage from './pages/LogicalOperationsLinkedPage/LogicalOperationsLinkedPage.jsx';
import TernaryOperatorLinkedPage from './pages/TernaryOperatorLinkedPage/TernaryOperatorLinkedPage.jsx';
import RegularConditionalOperatorsLinkedPage from './pages/RegularConditionalOperatorsLinkedPage/RegularConditionalOperatorsLinkedPage.jsx';
import SwitchOperatorLinkedPage from './pages/SwitchOperatorLinkedPage/SwitchOperatorLinkedPage.jsx';
import ArraysLinkedPage from './pages/ArraysLinkedPage/ArraysLinkedPage.jsx';
import ObjectsLinkedPage from './pages/ObjectsLinkedPage/ObjectsLinkedPage.jsx';
import SetsLinkedPage from './pages/SetsLinkedPage/SetsLinkedPage.jsx';
import MapsLinkedPage from './pages/MapsLinkedPage/MapsLinkedPage.jsx';
import FunctionsLinkedPage from './pages/FunctionsLinkedPage/FunctionsLinkedPage.jsx';

import ScrollToTop from './utils/scrollToTop.js';


import './App.css';

function App(props) {
  return (
    <div className="App">
      <GreetingTitle />
      <Router>
        <ScrollToTop />
        <Routes>  
          <Route path="/" element={<CatalogPage catalogPage={props.state.catalogPage} />}></Route>
          <Route path="/introduction" element={<IntroductionPage introductionPage={props.state.introductionPage} />}></Route>
          <Route path="/variables" element={<VaraiablesPage variablesPage={props.state.variablesPage} />}></Route>
          <Route path="/dataTypes" element={<DataTypesPage dataTypesPage={props.state.dataTypesPage} />}></Route>
          <Route path="/expressions&operators" element={<ExpressionsAndOperatorsPage expressionsAndOperatorsPage={props.state.expressionsAndOperatorsPage} />}></Route>
          <Route path="/conditions" element={<ConditionsPage conditionsPage={props.state.conditionsPage} />}></Route>
          <Route path="/structuredData" element={<StructuredDatasPage structuredDatasPage={props.state.structuredDatasPage} />}></Route>
          <Route path="/cycles" element={<CyclesPage cyclesPage={props.state.cyclesPage} />}></Route>
          <Route path="/functions" element={<FunctionsPage functionsPage={props.state.functionsPage} />}></Route>

          <Route path="/variablesLinkedPage" element={<VariablesLinkedPage variablesLinkedPage={props.state.variablesLinkedPage} />}></Route>
          <Route path="/constantsLinkedPage" element={<ConstantsLinkedPage constantsLinkedPage={props.state.constantsLinkedPage} />}></Route>
          <Route path="/visibilityAreaLinkedPage" element={<VisibilityAreaLinkedPage visibilityAreaLinkedPage={props.state.visibilityAreaLinkedPage} />}></Route>
          <Route path="/dataTypesLinkedPage" element={<DataTypesLinkedPage dataTypesLinkedPage={props.state.dataTypesLinkedPage} />}></Route>
          <Route path="/bitOperationsLinkedPage" element={<BitOperationsLinkedPage bitOperationsLinkedPage={props.state.bitOperationsLinkedPage} />}></Route>
          <Route path="/logicalOperationsLinkedPage" element={<LogicalOperationsLinkedPage logicalOperationsLinkedPage={props.state.logicalOperationsLinkedPage} />}></Route>
          <Route path="/ternaryOperatorLinkedPage" element={<TernaryOperatorLinkedPage ternaryOperatorLinkedPage={props.state.ternaryOperatorLinkedPage} />}></Route>
          <Route path="/regularConditionalOperatorsLinkedPage" element={<RegularConditionalOperatorsLinkedPage regularConditionalOperatorsLinkedPage={props.state.regularConditionalOperatorsLinkedPage} />}></Route>
          <Route path="/switchOperatorLinkedPage" element={<SwitchOperatorLinkedPage switchOperatorLinkedPage={props.state.switchOperatorLinkedPage} />}></Route>
          <Route path="/arraysLinkedPage" element={<ArraysLinkedPage arraysLinkedPage={props.state.arraysLinkedPage} />}></Route>
          <Route path="/objectsLinkedPage" element={<ObjectsLinkedPage objectsLinkedPage={props.state.objectsLinkedPage} />}></Route>
          <Route path="/setsLinkedPage" element={<SetsLinkedPage setsLinkedPage={props.state.setsLinkedPage} />}></Route>
          <Route path="/mapsLinkedPage" element={<MapsLinkedPage mapsLinkedPage={props.state.mapsLinkedPage} />}></Route>
          <Route path="/functionsLinkedPage" element={<FunctionsLinkedPage functionsLinkedPage={props.state.functionsLinkedPage} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
