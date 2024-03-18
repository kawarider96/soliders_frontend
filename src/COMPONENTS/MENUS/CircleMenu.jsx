import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import SettingsIcon from '@mui/icons-material/Settings';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useSelector, useDispatch } from 'react-redux';
import { useFilterFunctions } from '../../CUSTOM_FUNCTIONS/FILTER/useFilterFunctions';
import { useAxiosFunctions } from '../../SUPPORT/SERVER/useAxiosFunctions';

export default function CircleMenu() {
    const styleMode = useSelector(state => state.booleans.styleMode);
    const {changeStyle} = useFilterFunctions();
    const {getExport} = useAxiosFunctions();

    const setStyleMode = () => {
      changeStyle(!styleMode);
    }

    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy', action:setStyleMode},
        { icon: <SaveIcon />, name: 'Save', action:setStyleMode},
        { icon: <PrintIcon />, name: 'Export Excel', action:getExport},
        { icon: <FilterAltIcon />, name: 'Filter', action:setStyleMode},
      ];
      
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, position:'fixed', zIndex:999, bottom:'10px', right:'10px' }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SettingsIcon/>}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.action}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}