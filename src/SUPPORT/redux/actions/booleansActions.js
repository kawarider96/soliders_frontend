export const SET_NAVBAR_MODE = 'SET_NAVBAR_MODE';
export const SET_STYLE_MODE = 'SET_STYLE_MODE';
export const SET_LOADING_MODE = 'SET_LOADING_MODE';
export const SET_DATA_MODE = 'SET_DATA_MODE';
export const SET_SKILL_EDIT_MODE = 'SET_SKILL_EDIT_MODE';

//TODO: NAVBAR OPEN/CLOSE
export const setNavbarMode = (navbarMode) => ({
    type: SET_NAVBAR_MODE,
    payload: navbarMode,
});

//TODO: KIVÁLASZTOTT TÉMA
export const setStyleMode = (styleMode) => ({
    type: SET_STYLE_MODE,
    payload: styleMode,
});

//TODO: LOADING KEZELÉSE
export const setLoadingMode = (loadingMode) => ({
    type: SET_LOADING_MODE,
    payload: loadingMode,
});

//TODO: ÁLTALÁNOS ADATOK SZERKESZTŐ MÓDJA
export const setDataMode = (dataMode) => ({
    type: SET_DATA_MODE,
    payload: dataMode,
})

//TODO: AZ ADOTT SKILL SZERKESZTŐ MÓDJA
export const setSkillEditMode = (skillEditMode) => ({
    type: SET_SKILL_EDIT_MODE,
    payload: skillEditMode,
});