import { 
SET_DATA_MODUL, 
UPDATE_WORK_DATA, 
UPDATE_PERSONAL_DATA, 
UPDATE_CONTACT_DATA,
UPDATE_GRADUATE_DATA,
UPDATE_SKILL_DATA,
UPDATE_NEW_SKILL,
SET_SHOOTING_SKILLS,
SET_MISSION_SKILLS,
SET_COURSE_SKILLS,
SET_QUALIFICATION_SKILLS,
SET_UPDATED_SKILL,
SET_NEW_SKILL,
SET_SELECTED_SOLIDER } from "../actions/datapageActions";

const initialState = {
 dataModul: null,
 selectedSolider: [],
 shootingSkills: [],
 missionSkills: [],
 courseSkills: [],
 qualificationSkills: [],
 updatedSkill: null,
 newSkill: null,
};

export default function datapageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DATA_MODUL:
            return {...state, dataModul: action.payload};
        case SET_SELECTED_SOLIDER:
            return {...state, selectedSolider: action.payload,};
        case UPDATE_WORK_DATA:
                return {
                  ...state,
                  selectedSolider: {
                    ...state.selectedSolider,
                    [action.payload.fieldName]: action.payload.value
                  },
                };
        case UPDATE_PERSONAL_DATA:
        return {
            ...state,
            selectedSolider: {
            ...state.selectedSolider,
            personaldata: {
                ...state.selectedSolider.personaldata,
                [action.payload.fieldName]: action.payload.value
            }
            }
        };
        case UPDATE_CONTACT_DATA:
        return {
            ...state,
            selectedSolider: {
            ...state.selectedSolider,
            contact: {
                ...state.selectedSolider.contact,
                [action.payload.fieldName]: action.payload.value
            }
            }
        };
        case UPDATE_GRADUATE_DATA:
        return {
            ...state,
            selectedSolider: {
            ...state.selectedSolider,
            graduatedata: {
                ...state.selectedSolider.graduatedata,
                [action.payload.fieldName]: action.payload.value
            }
            }
        };
        case UPDATE_SKILL_DATA:
        return {
            ...state,
            updatedSkill: {
                ...state.updatedSkill,
                [action.payload.fieldName]: action.payload.value
            }
        };
        case UPDATE_NEW_SKILL:
        return {
            ...state,
            newSkill: {
                ...state.newSkill,
                [action.payload.fieldName]: action.payload.value
            }
        };
        case SET_SHOOTING_SKILLS:
        return {
            ...state,
            shootingSkills: action.payload,
        };
        case SET_MISSION_SKILLS:
        return {
            ...state,
            missionSkills: action.payload,
        };
        case SET_COURSE_SKILLS:
        return {
            ...state,
            courseSkills: action.payload,
        };
        case SET_QUALIFICATION_SKILLS:
        return {
            ...state,
            qualificationSkills: action.payload,
        };
        case SET_UPDATED_SKILL:
        return {
            ...state,
            updatedSkill: action.payload,
        };
        case SET_NEW_SKILL:
        return {
            ...state,
            newSkill: action.payload,
        };
        default:
            return state;
    }
}