import { useDispatch, useSelector } from "react-redux";
import { updatePersonalData } from "../redux/actions/datapageActions";
import { updateContactData } from "../redux/actions/datapageActions";
import { updateGraduateData } from "../redux/actions/datapageActions";
import { updateWorkData } from "../redux/actions/datapageActions";
import { updateSkillData } from "../redux/actions/datapageActions";
import { useEffect } from "react";

//KATONÁK ADATAINAK OSZLOP VÁLASZTÓJA a katonák lapon
export const workColumns = [
    {label:'rendf rövid', table:'work', column:'viselt_rendfokozat_rovid'},
    {label:'rendf hosszú', table:'work', column:'viselt_rendfokozat_hosszu'},
    {label:'szolg idő kezdete', table:'work', column:'szolgido_kezdete'},
    {label:'szolg idő vége', table:'work', column:'szolgido_vege'},
    {label:'szolg igazolvány', table:'work', column:'szolg_igazolvany'},
    {label:'profilkép', table:'work', column:'profilkep'},
];

export const personalColumns = [
     {label:'teljes név', table:'personal', column:'teljes_nev'},
     {label:'tudományos fokozat', table:'personal', column:'tudomanyos_fokozat'},
     {label:'vezetéknév', table:'personal', column:'vezeteknev'},
     {label:'keresztnév', table:'personal', column:'keresztnev'},
     {label:'név 3', table:'personal', column:'nev_3'},
     {label:'név 4', table:'personal', column:'nev_4'},
     {label:'születési idő', table:'personal', column:'szul_ido'},
     {label:'születési hely', table:'personal', column:'szul_hely'},
     {label:'születési név', table:'personal', column:'szul_nev'},
     {label:'anyja neve', table:'personal', column:'anyja_neve'},
     {label:'nem', table:'personal', column:'nem'},
     {label:'kor', table:'personal', column:'kor'},
     {label:'személyi szám', table:'personal', column:'szemelyi_szam'},
     {label:'szem ig szám', table:'personal', column:'szemelyi_igazolvany_szam'},
     {label:'adószám', table:'personal', column:'adoszam'},
     {label:'tajszám', table:'personal', column:'taj'},
     {label:'jogosítvány', table:'personal', column:'jogositvany_kategoria'},
];

export const graduateColumns = [
    {label:'végzettség foka', table:'graduate', column:'vegzettseg_foka'},
    {label:'alapfelkészítes foka', table:'graduate', column:'alapfelkeszites_foka'},
    {label:'alapfelkészítés ideje', table:'graduate', column:'alapfelkeszites_ideje'},
    {label:'alapfelkészítés igazolása', table:'graduate', column:'alapfelkeszites_igazolas_szama'},
];

export const baseColumns = [
    {label:'ezred', table:null, column:'ezred_rovid'},
    {label:'zaszloalj', table:null, column:'zaszloalj_rovid'},
    {label:'megye', table:null, column:'megye'},
    {label:'részleg', table:null, column:'reszleg'},
    {label:'beosztás', table:null, column:'pozicio_nev'},
    {label:'pozíciószám', table:null, column:'pozicio'},
    {label:'rendsz rendfokozat', table:null, column:'maximum_rendfokozat_rovid'},
    {label:'jogviszony fajta', table:null, column:'jogivszony_tipus'},
    {label:'jogviszony típus', table:null, column:'jogviszony_altipus'},
    {label:'állomány kategória', table:null, column:'allomany_kategoria'},
    {label:'jogviszony státusz', table:null, column:'jogivszony_statusz'},
];

export function useDataSource() {
    const selectedSolider = useSelector(state => state.datapage.selectedSolider);
    const shootingSkills = useSelector(state => state.datapage.shootingSkills);
    const missionSkills = useSelector(state => state.datapage.missionSkills);
    const courseSkills = useSelector(state => state.datapage.courseSkills);
    const qualificationSkills = useSelector(state => state.datapage.qualificationSkills);
    const dispatch = useDispatch();
    
    const updatePersonal = (event) => {
        const { name, value } = event.target;
        dispatch(updatePersonalData(name, value));
    };

    const updateContact = (event) => {
        const { name, value } = event.target;
        dispatch(updateContactData(name, value));
    };

    const updateGraduate = (event) => {
        const { name, value } = event.target;
        dispatch(updateGraduateData(name, value));
    };

    const updateWork = (event) => {
        const { name, value } = event.target;
        dispatch(updateWorkData(name, value));
    };

    const updateSkill = (event) => {
        const { name, value } = event.target;
        dispatch(updateSkillData(name, value));
    };
    
    /*const soliderData = [
        {
        dialogName: 'workdata', 
        label:'MUNKAHELYI ADATOK', 
        image:'work_solider.png', 
        items:[
            {label:'sztsz', value:selectedSolider.sztsz || '', name:'sztsz', col:'sztsz', action:updateWork},
            {label:'pozíciószám', value:selectedSolider.position || '', name:'position', col:'position', action:updateWork},
            {label:'tudományos fokozat', value:selectedSolider.science_level || '', name:'science_level', col:'science_level', action:updateWork},
            {label:'vezetéknév', value:selectedSolider.firstname || '', name:'firstname', col:'firstname', action:updateWork},
            {label:'keresztnév', value:selectedSolider.lastname || '', name:'lastname', col:'lastname', action:updateWork},
            {label:'név2', value:selectedSolider.name2 || '', name:'name2', col:'name2', action:updateWork},
            {label:'név3', value:selectedSolider.name3 || '', name:'name3', col:'name3', action:updateWork},
            {label:'rendfokozat', value:selectedSolider.actual_rank || '', name:'actual_rank', col:'actual_rank', action:updateWork},
            {label:'szolgidő kezdete', value:selectedSolider.serve_start || '', name:'serve_start', col:'serve_start', action:updateWork},
            {label:'szolgidő érvényesség', value:selectedSolider.serve_end || '', name:'serve_end', col:'serve_end', action:updateWork},
            {label:'szolg igazolvány', value:selectedSolider.serve_id || '', name:'serve_id', col:'serve_id', action:updateWork},
            {label:'profilkép', value:selectedSolider.image || '', name:'image', col:'image', action:updateWork},
            {label:'státusz', value:selectedSolider.active || '', name:'active', col:'active', action:updateWork},
        ]},
        {
        dialogName:'personaldata', 
        label:'SZEMÉLYES ADATOK', 
        image:'home_solider.png', 
        items:[
            {label:'születési év', value:selectedSolider.personaldata.birth_date || '', name:'birth_date', action:updatePersonal},
            {label:'születési hely', value:selectedSolider.personaldata.birth_place || '', name:'birth_place', action:updatePersonal},
            {label:'születési név', value:selectedSolider.personaldata.birth_name || '', name:'birth_name', action:updatePersonal},
            {label:'anyja neve', value:selectedSolider.personaldata.mother_name || '', name:'mother_name', action:updatePersonal},
            {label:'nem', value:selectedSolider.personaldata.sex || '', name:'sex', action:updatePersonal},
            {label:'kor', value:selectedSolider.personaldata.age || '', name:'age', action:updatePersonal},
            {label:'szeméyi szám', value:selectedSolider.personaldata.personal_id || '', name:'personal_id', action:updatePersonal},
            {label:'személyi igazolvány szám', value:selectedSolider.personaldata.personal_card_id || '', name:'personal_card_id', action:updatePersonal},
            {label:'személyi ig érvényesség', value:selectedSolider.personaldata.personal_card_end || '', name:'personal_card_end', action:updatePersonal},
            {label:'tajszám', value:selectedSolider.personaldata.taj || '', name:'taj', action:updatePersonal},
            {label:'adószám', value:selectedSolider.personaldata.tax || '', name:'tax', action:updatePersonal},
            {label:'jogosítvány', value:selectedSolider.personaldata.drive_licence || '', name:'drive_licence', action:updatePersonal},
        ]},
        {
        dialogName:'contact', 
        label:'KAPCSOLAT', 
        image:'phone_solider.png', 
        items:[
            {label:'irányítószám', value:selectedSolider.contact.zipcode || '', name:'zipcode', action:updateContact},
            {label:'város', value:selectedSolider.contact.city || '', name:'city', action:updateContact},
            {label:'utcanév', value:selectedSolider.contact.street || '', name:'street', action:updateContact},
            {label:'közterület jellege', value:selectedSolider.contact.street_type || '', name:'street_type', action:updateContact},
            {label:'házszám', value:selectedSolider.contact.house_number || '', name:'house_number', action:updateContact},
            {label:'irányítószám 2', value:selectedSolider.contact.zipcode2 || '', name:'zipcode2', action:updateContact},
            {label:'város 2', value:selectedSolider.contact.city2 || '', name:'city2', action:updateContact},
            {label:'utcanév 2', value:selectedSolider.contact.street2 || '', name:'street2', action:updateContact},
            {label:'közterület jellege 2', value:selectedSolider.contact.street_type2 || '', name:'street_type2', action:updateContact},
            {label:'házszám 2', value:selectedSolider.contact.house_number2 || '', name:'house_number2', action:updateContact},
            {label:'telefonszám', value:selectedSolider.contact.phone || '', name:'phone', action:updateContact},
            {label:'email', value:selectedSolider.contact.email || '', name:'email', action:updateContact},
        ]},
        {
        dialogName:'graduatedata', 
        label:'VÉGZETTSÉGEK', 
        image:'study_solider.png', 
        items:[
            {label:'végzettség', value:selectedSolider.graduatedata.graduate || '', name:'graduate', action:updateGraduate},
            {label:'katonai végzettség', value:selectedSolider.graduatedata.military_graduate || '', name:'military_graduate', action:updateGraduate},
            {label:'kiképzettség', value:selectedSolider.graduatedata.modul || '', name:'modul', action:updateGraduate},
            {label:'kiképzettség dátuma', value:selectedSolider.graduatedata.trained_date || '', name:'trained_date', action:updateGraduate},
            {label:'kiképzettségi igazolás száma', value:selectedSolider.graduatedata.nyt_number || '', name:'nyt_number', action:updateGraduate},
            {label:'tiszti/altiszti tanfolyam I.', value:selectedSolider.graduatedata.sergeant_1 || '', name:'sergeant_1', action:updateGraduate},
            {label:'tiszti/altiszti tanfolyam II.', value:selectedSolider.graduatedata.sergeant_2 || '', name:'sergeant_2', action:updateGraduate},
        ]},
        {
        dialogName:'shootingskills', 
        label:'LÖVÉSZETEK', 
        image:'shot_solider.png',
        items:shootingSkills
        },
        {
        dialogName:'missionskills', 
        label:'MISSZIÓK', 
        image:'mission_solider.png',
        items:missionSkills
        },
        {
        dialogName:'courseskills', 
        label:'TANFOLYAMOK', 
        image:'course_solider.png',
        items:courseSkills
        },
        {
        dialogName:'qualificationskills', 
        label:'SZAKKÉPESÍTÉSEK', 
        image:'school_solider.png',
        items:qualificationSkills
        },
    ];*/

    return { updateSkill, updateContact, updateGraduate, updatePersonal, updateWork }
}