import { useSelector, useDispatch } from "react-redux";
import { setFilterData } from "../../SUPPORT/redux/actions/soliderspageActions";
import { setSelectedSoliders } from "../../SUPPORT/redux/actions/soliderspageActions";
import { setStyleMode } from "../../SUPPORT/redux/actions/booleansActions";

export function useFilterFunctions() {
    const filterMode = useSelector(state => state.booleans.filterMode);
    const filterData = useSelector(state => state.soliders.filterData);
    const columnData = useSelector(state => state.soliders.columnData);
    
    const dispatch = useDispatch();

    const changeStyle = (mode) => {
        dispatch(setStyleMode(mode));
    }

    // Új szűrő létrehozása
    //Beállítja az alapértelmezett operátort 
    //ha a value érték string akkor LIKE ra ha integer akkor = jelre
    //az új szűrőfeltétel alapértelmezett értéke a kiválasztott oszlop tábla neve amit az id ből vesz
    //a kiválasztott oszlop neve amit szintén az id ből vesz, a beállított operátor és ugye az érték
    function createNewFilter(selectedValue, id) {
        const operator = typeof selectedValue === 'string' ? 'LIKE' : '=';
        return {
            table: columnData[id].table || 'workdata',
            column: columnData[id].column,
            operator: operator,
            value: [selectedValue],
        };
    };

    // Meglévő szűrő keresése
    //meghatározza hogy létezik e a filterData tömbjében olyan táblanév és oszlopnév ami a
    //hozzáadni kívánt új szűrőben van ha létezik akkor a tömbből az elem indexét beállítja
    //az existingIndex be tehát az értéke minimum 0 lesz vagy nagyobb
    function findExistingFilterIndex(newFilter, newFilterData) {
        return newFilterData.findIndex(filter =>
            filter.table === newFilter.table &&
            filter.column === newFilter.column
        );
    };

    // Szűrő értékének frissítése
    //ellenőrizzük hogy a létező szűrőnek azaz az existingFilternek a value értéke tömb e
    //ha esetleg nem akkor tömbbé alakítjuk, ez csak azért kell hogy mindig konzisztensek maradjunk
    function updateFilterValue(existingFilter, selectedValue) {
        if (!Array.isArray(existingFilter.value)) {
            existingFilter.value = [existingFilter.value];
        }
        //megnézzük hogy az existingFilter értéke tartalmazza e az új hozzáadni kívánt értéket
        //ha nem akkor -1 et fog vissza adni mivel nincs olyan indexű elem ami megegyezni a hozzá
        //adni kívánt elemmel, ha igen akkor pedig a meglévő value érték indexét fogja vissza adni
        const valueIndex = existingFilter.value.findIndex(value => 
            String(value) === String(selectedValue)
        );
        return valueIndex;
    };

    // Operátor beállítása
    function setExistingOperator(existingFilter, selectedValue) {
        if (existingFilter.value.length > 1) {
            existingFilter.operator = 'IN';
          } else if (existingFilter.value.length === 1 && typeof selectedValue === 'string') {
            existingFilter.operator = 'LIKE';
          } else if (existingFilter.value.length === 1 && typeof selectedValue === 'number') {
            existingFilter.operator = '=';
          }
    };

    // Operátor beállítása
    function setNewFilterOperator(newFilter, selectedValue) {
        if (newFilter.value.length > 1) {
            newFilter.operator = 'IN';
          } else if (newFilter.value.length === 1 && typeof selectedValue === 'string') {
            newFilter.operator = 'LIKE';
          } else if (newFilter.value.length === 1 && typeof selectedValue === 'number') {
            newFilter.operator = '=';
          }
    };

    const removeEmptyValues = (newFilterData) => {
        for (let i = newFilterData.length - 1; i >= 0; i--) {
            if (newFilterData[i].value.length === 0) {
                newFilterData.splice(i, 1);
            }
        }
        return newFilterData;
    };
    

    const updateFilterData = (selectedValue, id) => {
        const newFilterData = [...filterData]; //a fliterData tömböt lemásolja hogy tudjunk vele itt bűvészkedni
        const newFilter = createNewFilter(selectedValue, id); //új szűrő tömb létrehozása
        const existingIndex = findExistingFilterIndex(newFilter, newFilterData); //létező tábla és oszlop név kombináció esetén az adott elem indexének meghatározása
        
        if (existingIndex > -1) { //ha az existingIndex értéke nagyobb mint -1 akkor létezik olyan oszlop és táblanév kombó amit hozzá akarunk adni 
            const existingFilter = newFilterData[existingIndex]; //ha létezik olyan tábla és oszlop név kombó a filterDataban amit hozzá szeretnénk adni akkor a filterData tömbnek azt az elemét elmentjük egy változóba az existingFilterbe
            const valueIndex = updateFilterValue(existingFilter, selectedValue); //newFilterData value tömbjének ellenörzése hogy tömb e és meghatározza hogy a value tömbje tartalmazza e a hozzáadni kívánt értéket
            
            if (valueIndex > -1) {
                existingFilter.value.splice(valueIndex, 1);
                removeEmptyValues(newFilterData);  // Ha az érték már szerepel, akkor eltávolítjuk, a splice metódus eltávolitja a valueIndex ben tárolt számú értéket a filterData value tömbjéből és a függvény véget ér
                dispatch(setFilterData(newFilterData));
            } else {
                existingFilter.value.push(selectedValue); //ha az existingFilter value értéke nem nagyobb -1 akkor nincs olyan érték, ellenőrizzük hogy az operátor tuti megfelelő legyen majd a value tömbben amit hozzá akarunk adni tehát hozzáadjuk dispatcheljük az eredeti filterData ba
                setExistingOperator(existingFilter, newFilter, selectedValue);
                removeEmptyValues(newFilterData); 
                dispatch(setFilterData(newFilterData));
            }
        
        } else {
            setNewFilterOperator(newFilter, selectedValue);
            newFilterData.push({...newFilter});  //Ha nem talál egyező table, column értékeket akkor egy teljesen új filter elemről van szó tehát csak simán hozzáadjuk
            removeEmptyValues(newFilterData); 
            dispatch(setFilterData(newFilterData));
        }
    };

    const checkOperator = (newFilter) => {
        newFilter.forEach((filter) => {
            if (filter.value.length === 1) {
                const value = filter.value[0];
                if (typeof value === 'string') {
                    filter.operator = 'LIKE';
                } else if (typeof value === 'number') {
                    filter.operator = '=';
                }
            } else {
                filter.operator = 'IN';
            }
        });
    };

    
    
    
    return {changeStyle, updateFilterData, removeEmptyValues, checkOperator}
}