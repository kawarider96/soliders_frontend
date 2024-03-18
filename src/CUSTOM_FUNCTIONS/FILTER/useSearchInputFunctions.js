import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export function useSearchInputFunctions() {
    const dispatch = useDispatch();
    const options = useSelector(state => state.options.options);
    const loadingMode = useSelector(state => state.booleans.loadingMode);
    const paginationData = useSelector(state => state.pagination);
    const filterData = useSelector(state => state.soliders.filterData);

    const findData = {
        table:'workdata',
        column:'fullname',
    };
    
    const [inputValue, setInputValue] = useState({
        sztsz:'',
        actual_rank:'',
        fullname:'',
        type:'',
        value:'',
        selectMode:'',
    });

    const handleChange = (event) => {
        const newValue = event.target.value;
        setInputValue({
        sztsz:'',
        actual_rank: '',
        fullname: newValue,
        type: '',
        value: newValue,
        selectMode:0,
        });
    };

    const setListItem = (item) => {
        setInputValue({
        sztsz:item.sztsz,
        actual_rank:item.actual_rank,
        fullname:item.fullname,
        type:item.type,
        value:`${item.sztsz} ${item.fullname} ${item.type} ${item.actual_rank}`,
        selectMode:1,
        })
    };

    return {paginationData, filterData, options, loadingMode, findData, inputValue, setInputValue, handleChange, setListItem}
}