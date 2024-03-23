import { 
  SET_SOLIDERS, 
  SET_SELECTED_SOLIDERS, 
  SET_COLUMN_DATA,
  SET_FILTER_DATA,
  SET_INPUT_VALUE} from '../actions/soliderspageActions';

const initialState = {
  soliders: [],
  selectedSoliders:[],
  columnData: [ 
      {id:0, label:'státusz', table:null, column:'jogviszony_statusz'},
      {id:1, label:'sztsz', table:null, column:'sztsz'},
      {id:2, label:'név', table:'personal', column:'teljes_nev'},
      {id:3, label:'állomány', table:null, column:'jogviszony_tipus'},
      {id:4, label:'rendfokozat', table:'work', column:'viselt_rendfokozat_hosszu'},
      {id:5, label:'kiképzettség', table:'graduate', column:'alapfelkeszites_foka'},
  ],
  filterData: [],
  inputValue: '',
  selectedColumns: [],
};


export default function solidersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SOLIDERS:
      return {
        ...state,
        soliders: action.payload,
      };
      
    case SET_SELECTED_SOLIDERS:
      return {
        ...state,
        selectedSoliders: action.payload,
      };
      case SET_COLUMN_DATA:
      return {
        ...state,
        columnData: state.columnData.map(item =>
          item.id === action.payload.id ? { ...item, label: action.payload.label, table: action.payload.table, column: action.payload.column } : item
        ),
      };
      case SET_FILTER_DATA: 
        return {
          ...state,
          filterData: action.payload,
        };
      case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload, // Állapot frissítése az akcióval kapott értékkel
      };
    default:
      return state;
  }
}