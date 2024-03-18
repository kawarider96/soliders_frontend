import { useSelector, useDispatch } from "react-redux";
import { setSelectedSoliders } from "../../SUPPORT/redux/actions/soliderspageActions";

export function useSoliderPageFunctions() {
    const dispatch = useDispatch();
    const selectedSoliders = useSelector(state => state.soliders.selectedSoliders);
    
    const handleCheckboxChange = (sztsz) => {
        const isSelected = selectedSoliders.includes(sztsz);
        let newSelectedSoliders;
      
        if (isSelected) {
          // Eltávolítja az sztsz-t, ha már benne van
          newSelectedSoliders = selectedSoliders.filter(item => item !== sztsz);
        } else {
          // Hozzáadja az sztsz-t, ha még nincs benne
          newSelectedSoliders = [...selectedSoliders, sztsz];
        }
      
        // Frissíti a Redux state-et az új kiválasztott sztsz-ekkel
        dispatch(setSelectedSoliders(newSelectedSoliders));
      };

    return {handleCheckboxChange}
}