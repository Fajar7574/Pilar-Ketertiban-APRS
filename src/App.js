import React from 'react';
//import styles from './table.css';
import Home from './component/Home.jsx';
import NotFound from './component/NotFound.jsx';
import AlurPerizinan from './component/AlurPerizinan.jsx';
import AlurPerizinan24Jam from './component/AlurPerizinan24Jam.jsx';
import AlurPunisment from './component/AlurPunisment.jsx';
import CekPerizinan from './component/CekPerizinan.jsx';
import Dsahboard from './component/Dashboard.jsx';
import FormIzin from './component/FormIzin.jsx';
import FormMenginap from './component/FormMenginap.jsx';
import FormPergi from './component/FormPergi';
import Login from './component/Login.jsx';
import PengisianBerhasil from './component/PengisianBerhasil.jsx';
import PengisianBerhasil24 from './component/PengisianBerhasil24.jsx';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './component/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/alur-perizinan" element={<AlurPerizinan/>} />
        <Route exact path="/alur-perizinan-24-jam" element={<AlurPerizinan24Jam/>} />
        <Route exact path="/alur-punisment" element={<AlurPunisment/>} />
        <Route exact path="/cek-perizinan" element={<CekPerizinan/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/form-izin-jam-malam" element={<FormIzin/>} />
        <Route exact path="/form-izin-menginap" element={<FormMenginap/>} />
        <Route exact path="/form-izin-berpergian" element={<FormPergi/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/form-izin/berhasil" element={<PengisianBerhasil/>} />
        <Route exact path="/form-izin-24-jam/berhasil" element={<PengisianBerhasil24/>} />
        <Route path="*" element={<NotFound/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
