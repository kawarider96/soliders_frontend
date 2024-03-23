import { useSelector, useDispatch } from "react-redux"
import MotherAxiosFunctions from "./MotherAxiosFunctions"
import useLocalStorageFunctions from "../LOCALSTORAGE/useLocalStorageFunctions";
import { useNavigate } from "react-router-dom";
import { setSelectedSoliders } from "../redux/actions/soliderspageActions";
import { setSoliders } from "../redux/actions/soliderspageActions";
import { setOptions } from "../redux/actions/optionsActions";
import { setMessage } from "../redux/actions/messageActions";
import { setPaginationData } from "../redux/actions/paginationActions";
import { setContactData, setCourseSkills, setDriveCategory, setMissionSkills, setPhysicalState, setQualificationSkills, setResidenceData, setSelectedSolider, setShootingSkills, setVehicleCategory } from "../redux/actions/datapageActions";
import { setLoadingMode } from "../redux/actions/booleansActions";

export function useAxiosFunctions() {
const {PostRequest, GetRequest, PutRequest, DeleteRequest, LoginRequest} = MotherAxiosFunctions();
const {setStorage, deleteStorage} = useLocalStorageFunctions();
const navigate = useNavigate();
const dispatch = useDispatch();
const message = useSelector(state => state.message);
const selectedSolider = useSelector(state => state.datapage.selectedSolider);
const paginationData = useSelector(state => state.pagination);
const inputValue = useSelector(state => state.inputValue);
const filterData = useSelector(state => state.soliders.filterData);

//TODO: HIBAKEZELÉS
function handleApiError(error) {
  let errorMessage = "Ismeretlen hiba történt";
  
  if (error.response) {
      // A szerver válaszolt valamilyen status kóddal
      errorMessage = `Hiba a kérés során: ${error.response.status} ${error.response.statusText}`;
      if (error.response.data && error.response.data.message) {
          errorMessage += ` - ${error.response.data.message}`;
      } else if (error.response.data) {
          errorMessage += ` - ${JSON.stringify(error.response.data)}`;
      }
  } else if (error.request) {
      // A kérés elküldve, de válasz nem érkezett
      errorMessage = "Nem érkezett válasz a szerverről";
  } else {
      // Valami más hiba történt a kérés létrehozása során
      errorMessage = `Hiba történt a kérés létrehozásakor: ${error.message}`;
  }

  return errorMessage;
};

//TODO: EGYEDI FÜGGVÉNYEK 
//url átirányítás az adatbázis adatainak excelben való exportálásához
const getExport = async (action) => {
  window.location.href = 'http://127.0.0.1:8000/api/export';
};

//TODO: KATONÁK LAP FÜGGVÉNYEK 
//(Dropdown.jsx) a katonák lapon a gombra kattintva lekéri az adott sor sztsz száma
//alapján a kiválasztott katona adatait és elmenti a selectedsoliders változóba 
const getSelectedSolider = async (action) => {
  try {
      const response = await GetRequest(action);

      dispatch(setSelectedSolider(response.data[0]));
      dispatch(setLoadingMode(false));
  } catch (error) {
      const errorMessage = handleApiError(error);
      console.error(errorMessage);
      dispatch(setMessage(errorMessage, 'error'));
      dispatch(setLoadingMode(false));
  }
};

//leszereli az adott katonát
const deactivateSolider = async (action, id, value) => {

  try {
    const response = await PostRequest(action, {id: id, value:value});

    getSoliders(`filter?page=${paginationData.currentPage}`, filterData);
    getSelectedSolider(`getsolider?id=${id}`);
    if (value === 0) {
    dispatch(setMessage('A katona leszerelve', 'success'));
    }
    if (value === 1) {
    dispatch(setMessage('A katona felszerelve', 'success'));
    }
  } catch (error) {
    const errorMessage = handleApiError(error);
    console.error(errorMessage);
    dispatch(setMessage(errorMessage, 'error'));
    dispatch(setLoadingMode(false));
  }
};

//a menüben a katonák gombra kattintva lekéri az egy oldalon maximum megjelenő katonák
//számát és elmenti a soldiers változóban, eggyúttal beállitja a paginationt is
//és a legelső katonát beállitja selectedsoliders be
const getSoliders = async (action, data) => {
  const dataToSend = {
    filters:data,
  };

  try {
    const response = await PostRequest(action, dataToSend);

      dispatch(setSoliders([]));
      dispatch(setSoliders(response.data));
      dispatch(setSelectedSolider(response.data[0]));
      dispatch(setPaginationData({
          currentPage: response.current_page,
          prevPage: response.current_page - 1,
          nextPage: response.current_page + 1,
          lastPage: response.last_page,
          perPage: response.per_page,
          total: response.total,
        }));
      dispatch(setLoadingMode(false));
    } catch (error) {
      const errorMessage = handleApiError(error);
      console.error(errorMessage);
      dispatch(setMessage(errorMessage, 'error'));
      dispatch(setLoadingMode(false));
    }
};

//lekéri a selectmezők számára az összes lehetőséget az adott táblából
const getColumnDatas = async (action, data) => {
  try {
     const response = await PostRequest(action, data);
    
      //dispatch(setFilterOptions(response.message));
      dispatch(setOptions(response));
      dispatch(setLoadingMode(false));
    } catch (error) {
      const errorMessage = handleApiError(error);
      console.error(errorMessage);
      dispatch(setMessage(errorMessage, 'error'));
      dispatch(setLoadingMode(false));
    }
};

//TODO: AUTHENTIKÁCIÓS FÜGGVÉNYEK 
//bejelentkezés és user adatok mentése a localstorage be
const login = async (action, sztsz, password) => {
    try {
        const response = await LoginRequest(action, sztsz, password);

        const token = response.data.token;
        const id = response.data.id;
        const name = response.data.name;
        const role = response.data.role;
        const access_level = response.data.access_level;
        const rendfokozat = response.data.rendfokozat;
        const ezred_rovid = response.data.ezred_rovid;
        const ezred_hosszu = response.data.ezred_hosszu;
        const zaszloalj_rovid = response.data.zaszloalj_rovid;
        const zaszloalj_hosszu = response.data.zaszloalj_hosszu;
        const megye = response.data.megye;
        const reszleg = response.data.reszleg;
        const pozicio_nev = response.data.pozicio_nev;
        const pozicio = response.data.pozicio;

        setStorage(token, id, name, role, access_level, rendfokozat, ezred_rovid, ezred_hosszu, zaszloalj_rovid, zaszloalj_hosszu, megye, reszleg, pozicio_nev, pozicio);
        dispatch(setMessage('Sikeres bejelentkezés!', 'success'));
        navigate('/');
    } catch (error) {
      const errorMessage = handleApiError(error);
      console.error(errorMessage);
      dispatch(setMessage('Hiba történt a bejelentkezés közben!', 'error'));
      dispatch(setLoadingMode(false));
    }
};

//kijelentkezés és useradatok törlése a localstorage ből
const logout = async (action) => {
  try {
    const response = await GetRequest(action);
    
      deleteStorage();
      dispatch(setMessage('Sikeresen kijelentkeztél!', 'success'));
      navigate('/login');
  } catch (error) {
    const errorMessage = handleApiError(error);
    console.error(errorMessage);
    dispatch(setMessage('Hiba történt a kijeletnkezés közben!', 'error'));
    dispatch(setLoadingMode(false));
  }
};

//TODO: ADATLAP FÜGGVÉNYEK 
//lekéri a kiválasztott katona sztsz száma alapján 
//a készségeit (lövészetek, tanfolyamok stb....)
const getSkills= async (action) => {
  try {
      const response = await GetRequest(action);
      
      dispatch(setShootingSkills(response.data.shootings));
      dispatch(setMissionSkills(response.data.missions));
      dispatch(setCourseSkills(response.data.courses));
      dispatch(setQualificationSkills(response.data.qualifications));
      dispatch(setPhysicalState(response.data.physicalStates));
      dispatch(setDriveCategory(response.data.driveCategories));
      dispatch(setVehicleCategory(response.data.vehicleCategories));
      dispatch(setContactData(response.data.contacts));
      dispatch(setResidenceData(response.data.residences));
  } catch (error) {
    const errorMessage = handleApiError(error);
    console.error(errorMessage);
    dispatch(setMessage(errorMessage, 'error'));
    dispatch(setLoadingMode(false));
  }
};


//TODO: KÉSZSÉG ADATLAP FÜGGVÉNYEK 
//adatfrissítést végzi az adatlapon és a skill lapon is
const update = async (action, data) => {
  try {
    const response = await PutRequest(action, data);

    getSelectedSolider(`getsolider?id=${selectedSolider.sztsz}`);
    getSkills(`skills?sztsz=${selectedSolider.sztsz}`);
    dispatch(setMessage('Sikeres Frissítés', 'success'));
  } catch (error) {
    const errorMessage = handleApiError(error);
    console.error(errorMessage);
    dispatch(setMessage(errorMessage, 'error'));
    dispatch(setLoadingMode(false));
  }
}

//új skill -t ment el az adatbázisba
const addNew = async (action, data) => {
  try {
    const response = await PostRequest(action, data);
    
    getSelectedSolider(`getsolider?id=${selectedSolider.sztsz}`);
    getSkills(`skills?sztsz=${selectedSolider.sztsz}`);
    dispatch(setMessage('Új készség sikeresen hozzáadva!', 'success'));
  } catch (error) {
    const errorMessage = handleApiError(error);
    console.error(errorMessage);
    dispatch(setMessage(errorMessage, 'error'));
    dispatch(setLoadingMode(false));
  }
}

//törli az adott skillt a katona skilljei közül
const deleteSkill = async (action) => {
  try {
    const response = await DeleteRequest(action);
     
    getSelectedSolider(`getsolider?id=${selectedSolider.sztsz}`);
    getSkills(`skills?sztsz=${selectedSolider.sztsz}`);
    dispatch(setMessage('Készség törölve!', 'success'));
  } catch (error) {
    const errorMessage = handleApiError(error);
    console.error(errorMessage);
    dispatch(setMessage(errorMessage, 'error'));
    dispatch(setLoadingMode(false));
  }
}
    return { getSelectedSolider, getSoliders, getColumnDatas, getExport, login, logout, getSkills, update, addNew, deleteSkill, deactivateSolider}
}