export const SET_SOLIDERS = 'SET_SOLIDERS';
export const SET_SELECTED_SOLIDERS = 'SET_SELECTED_SOLIDERS';
export const SET_COLUMN_DATA = 'SET_COLUMN_DATA';
export const SET_FILTER_DATA = 'SET_FILTER_DATA';
export const SET_SELECTED_COLUMNS = 'SET_SELECTED_COLUMNS';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

//TODO: KIVÁLASZTOTT OSZLOPOK A SOLIDERS PAGE FEJLÉCÉHEZ
export const setSelectedColumns = (selectedColumns) => ({
  type: SET_SELECTED_COLUMNS,
  payload: selectedColumns,
});

export const setColumnData = (id, label, table, column) => ({
  type: SET_COLUMN_DATA,
  payload: { id, label, table, column },
});

//TODO: SEARCH MEZŐ ÉRTÉKÉT ÁLLÍTJA BE
export const setInputValue = (value) => ({
  type: SET_INPUT_VALUE,
  payload: value,
});

//TODO: AZ ÖSSZES KATONA ADAT ÁLLAPOTA ALAPÉRTELMEZETT LEKÉRDEZÉSHEZ
export const setSoliders = (soliders) => ({
  type: SET_SOLIDERS,
  payload: soliders,
});

//TODO: A SOLDIERS LAPON A NEVÜK MELLETTI CHECKBOXAL KIJELÖLT KATONÁK ADATAI 
export const setSelectedSoliders = (selectedSoliders) => ({
  type: SET_SELECTED_SOLIDERS,
  payload: selectedSoliders,
});

//TODO: FILTER FELTÉTELEK AMIKET A SZERVERRE KÜLDÜNK
export const setFilterData = (newFilter) => ({
  type: SET_FILTER_DATA,
  payload: newFilter,
});


