import { useEffect } from "react";
import { Box, Button, CssBaseline } from "@mui/material"
import { BrowserRouter, Router, Routes, Route, useLocation } from 'react-router-dom';
import { PublicRoute } from "./SUPPORT/AUTH_ROUTES/PublicRoute";
import { ProtectedRoute } from "./SUPPORT/AUTH_ROUTES/ProtectedRoute";
import { OpenMenuBTN } from "./COMPONENTS/BUTTONS/OpenMenuBTN";
import CircleMenu from "./COMPONENTS/MENUS/CircleMenu";
import { FilterWindow } from "./COMPONENTS/HELPER_WINDOWS/FilterWindow";
import { StyleChanger } from "./COMPONENTS/HELPER_WINDOWS/StyleChanger";
import { Home } from "./PAGES/HOME/Home";
import { Navbar } from "./COMPONENTS/NAVBAR/Navbar";
import Login from "./PAGES/AUTH/LOGIN/Login";
import { DataPage } from "./PAGES/DATASHEET/DataPage";
import { Soliders } from "./PAGES/SOLIDERS/Soliders";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from '@mui/material'
import { theme, theme2, theme3 } from "./SUPPORT/STYLES/AppTheme";
import './main.css';
import { MessageWindow } from "./COMPONENTS/HELPER_WINDOWS/MessageWindow";
import { setMessage } from "./SUPPORT/redux/actions/messageActions";

function App() {
  const dispatch = useDispatch();
  //TODO: BOOLEANS REDUCER
  const navbarMode = useSelector(state => state.booleans.navbarMode);
  const styleMode = useSelector(state => state.booleans.styleMode);
  const loadingMode = useSelector(state => state.booleans.loadingMode);
  const dataMode = useSelector(state => state.booleans.dataMode);
  const skillEditMode = useSelector(state => state.booleans.skillEditMode);
  //TODO: DATAPAGE REDUCER
  const dataModul = useSelector(state => state.datapage.dataModul);
  const selectedSolider = useSelector(state => state.datapage.selectedSolider);
  const shootingSkills = useSelector(state => state.datapage.shootingSkills);
  const missionSkills = useSelector(state => state.datapage.missionSkills);
  const courseSkills = useSelector(state => state.datapage.courseSkills);
  const qualificationSkills = useSelector(state => state.datapage.qualificationSkills);
  const updatedSkill = useSelector(state => state.datapage.updatedSkill);
  const newSkill = useSelector(state => state.datapage.newSkill);
  //TODO: MESSAGE REDUCER
  const message = useSelector(state => state.message.message);
  //TODO: OPTIONS REDUCER
  const options = useSelector(state => state.options.options);
  //TODO: PAGINATION REDUCER
  const paginationData = useSelector(state => state.pagination);
  //TODO: SOLIDERS REDUCER
  const soliders = useSelector(state => state.soliders.soliders);
  const selectedSoliders = useSelector(state => state.soliders.selectedSoliders);
  const columnData = useSelector(state => state.soliders.columnData);
  const filterData = useSelector(state => state.soliders.filterData);
  const inputValue = useSelector(state => state.soliders.inputValue);
  //TODO: STYLE REDUCER
  const style = useSelector(state => state.style.style);
  
  

  useEffect(() => {
    console.group("selectedSolider");
    console.log("selectedSolider:", selectedSolider);
    console.log("felhasználás:", 'datapage komponens');
    console.log("munka:", 'ebbe mentjük el a kiválasztott katona adatait');
    console.groupEnd();
  },[selectedSolider]);
  
  useEffect(() => {
    console.group("dataModul");
    console.log("dataModul:", dataModul);
    console.log("felhasználás:", 'dataWindows komponens');
    console.log("munka:", 'datapage -en lévő adatkártyáknak jelzi, hogy melyik típusú adatokat kell az adott kártyába betölteni');
    console.groupEnd();
  },[dataModul]);
  
  /*
  useEffect(() => {
    console.group("navbarMode");
    console.log("navbarMode:", navbarMode);
    console.log("felhasználás:", 'navbar komponens');
    console.log("munka:", 'navbar nyitása/zárása');
    console.groupEnd();
  },[navbarMode]);

  useEffect(() => {
    console.group("styleMode");
    console.log("styleMode:", styleMode);
    console.log("felhasználás:", 'circleMenu komponens');
    console.log("munka:", 'témaválasztó nyitása/zárása');
    console.groupEnd();
  },[styleMode]);

  useEffect(() => {
    console.group("loadingMode");
    console.log("loadingMode:", loadingMode);
    console.log("felhasználás:", 'sokhelyen');
    console.log("munka:", 'töltési/várakozási mód jelzése');
    console.groupEnd();
  },[loadingMode]);

  useEffect(() => {
    console.group("dataMode");
    console.log("dataMode:", dataMode);
    console.log("felhasználás:", 'dataWindows komponens');
    console.log("munka:", 'alapvető adatok szerkesztésének módja');
    console.groupEnd();
  },[dataMode]);

  useEffect(() => {
    console.group("skillEditMode");
    console.log("skillEditMode:", skillEditMode);
    console.log("felhasználás:", 'dataWindows');
    console.log("munka:", 'az adott skill szerkesztési módjának jelzése');
    console.groupEnd();
  },[skillEditMode]);

  useEffect(() => {
    console.group("dataModul");
    console.log("dataModul:", dataModul);
    console.log("felhasználás:", 'dataWindows komponens');
    console.log("munka:", 'datapage -en lévő adatkártyáknak jelzi, hogy melyik típusú adatokat kell az adott kártyába betölteni');
    console.groupEnd();
  },[dataModul]);

  useEffect(() => {
    console.group("selectedSolider");
    console.log("selectedSolider:", selectedSolider);
    console.log("felhasználás:", 'datapage komponens');
    console.log("munka:", 'ebbe mentjük el a kiválasztott katona adatait');
    console.groupEnd();
  },[selectedSolider]);

  useEffect(() => {
    console.group("shootingSkills");
    console.log("shootingSkills:", shootingSkills);
    console.log("felhasználás:", 'datapage');
    console.log("munka:", 'szerverről jövő skillekből a lövészeteket mentjük bele');
    console.groupEnd();
  },[shootingSkills]);

  useEffect(() => {
    console.group("missionSkills");
    console.log("missionSkills:", missionSkills);
    console.log("felhasználás:", 'datapage');
    console.log("munka:", 'szerverről jövő skillekből a missziókat mentjük bele');
    console.groupEnd();
  },[missionSkills]);

  useEffect(() => {
    console.group("courseSkills");
    console.log("courseSkills:", courseSkills);
    console.log("felhasználás:", 'datapage');
    console.log("munka:", 'szerverről jövő skillekből a tanfolyamokat mentjük bele');
    console.groupEnd();
  },[courseSkills]);

  useEffect(() => {
    console.group("qualificationSkills");
    console.log("qualificationSkills:", qualificationSkills);
    console.log("felhasználás:", 'datapage');
    console.log("munka:", 'szerverről jövő skillekből a szakképesítéséket mentjük bele');
    console.groupEnd();
  },[qualificationSkills]);

  useEffect(() => {
    console.group("updatedSkill");
    console.log("updatedSkill:", updatedSkill);
    console.log("felhasználás:", 'datapage');
    console.log("munka:", 'az a skill elem amit a szerverre küldünk frissítés/törlés céljából');
    console.groupEnd();
  },[updatedSkill]);

  useEffect(() => {
    console.group("newSkill");
    console.log("newSkill:", newSkill);
    console.log("felhasználás:", 'datapage');
    console.log("munka:", 'az a skill elem amit a szerverre küldünk hogy új skill elemet mentsünk el');
    console.groupEnd();
  },[newSkill]);

  useEffect(() => {
    console.group("message");
    console.log("message:", message);
    console.log("felhasználás:", 'sokhelyen');
    console.log("munka:", 'szerverről jövő és egyéb saját válaszok kijelzése a felhasznáéó számára');
    console.groupEnd();
  },[message]);

  useEffect(() => {
    console.group("options");
    console.log("options:", options);
    console.log("felhasználás:", 'sokhelyen');
    console.log("munka:", 'a selectmezők értékeinek tárolása');
    console.groupEnd();
  },[options]);
  
  useEffect(() => {
    console.group("paginationData");
    console.log("paginationData:", paginationData);
    console.log("felhasználás:", 'soliders komponens');
    console.log("munka:", 'lapozáshoz szükséges adatok a datagridben');
    console.groupEnd();
  },[paginationData]);

  useEffect(() => {
    console.group("soliders");
    console.log("soliders:", soliders);
    console.log("felhasználás:", 'soliders');
    console.log("munka:", 'ide mentjük a lekérdezett katonák adatait');
    console.groupEnd();
  },[soliders]);

  useEffect(() => {
    console.group("selectedSoliders");
    console.log("selectedSoliders:", selectedSoliders);
    console.log("felhasználás:", 'soliders');
    console.log("munka:", 'azok a kiválasztott katonák adatai akiket a datagrid checkboxával jelölünk ki');
    console.groupEnd();
  },[selectedSoliders]);

  useEffect(() => {
    console.group("columnData");
    console.log("columnData:", columnData);
    console.log("felhasználás:", 'soliders');
    console.log("munka:", 'a datagrid fejlécében az oszlopválasztó mezők értékeit tárolja');
    console.groupEnd();
  },[columnData]);

  useEffect(() => {
    console.group("filterData");
    console.log("filterData:", filterData);
    console.log("felhasználás:", 'soliders');
    console.log("munka:", 'a datagrid és keresőmező által kiválasztott szűrőfeltételeket tárolja');
    console.groupEnd();
  },[filterData]);

  useEffect(() => {
    console.group("inputValue");
    console.log("inputValue:", inputValue);
    console.log("felhasználás:", 'soliders');
    console.log("munka:", '');
    console.groupEnd();
  },[inputValue]);

  useEffect(() => {
    console.group("style");
    console.log("style:", style);
    console.log("felhasználás:", 'styleChanger');
    console.log("munka:", 'a választott témát tárolja');
    console.groupEnd();
  },[style]);
*/
  function selectTheme(style) {
    switch(style) {
      case 1:
        return theme;
      case 2:
        return theme2;
      case 3:
        return theme3;
      default: 
        return theme;
    }
  };

  const selectedTheme = selectTheme(style);

  useEffect(() => {
    if (message.content) {
      const timer = setTimeout(() => {
        dispatch(setMessage(null, null));
      }, 5000);
  
      return () => clearTimeout(timer);
    }
  }, [message.content, dispatch]);

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline/>
      <Box sx={{height:'100vh', overflow:'hidden'}}>
        <BrowserRouter>
        <StyleChanger/>
        <OpenMenuBTN/>    
        <Navbar/>
        <CircleMenu/>
        <MessageWindow/>
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
            <Route path="/soliders" element={<ProtectedRoute><Soliders/></ProtectedRoute>}/>
            <Route path="/data" element={<ProtectedRoute><DataPage/></ProtectedRoute>}/>
            <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
            {/*<Route path="/stat" element={<ProtectedRoute><StatPage/></ProtectedRoute>}/>
            <Route path="/soliders" element={<ProtectedRoute><SolidersPage/></ProtectedRoute>}/>
            <Route path="/datapage" element={<ProtectedRoute><DataPageController/></ProtectedRoute>}/>*/}
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  )
}

export default App
