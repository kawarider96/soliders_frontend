import { useDispatch, useSelector } from "react-redux";
import { updatePersonalData } from "../redux/actions/datapageActions";
import { updateContactData } from "../redux/actions/datapageActions";
import { updateGraduateData } from "../redux/actions/datapageActions";
import { updateWorkData } from "../redux/actions/datapageActions";
import { updateSkillData } from "../redux/actions/datapageActions";
import { useEffect } from "react";

//first data dialog skill module datas //
export const places = ['52.TVZ','ADAPTÍV HUSZÁR','MOONSTAR','EMELT SZINTŰ LÖVÉSZ'];
export const skillNames = ['alap lőgyakorlat','szakalap lőgyakorlat','1.sz. lőgyakorlat','2.sz. lőgyakorlat','3.sz. lőgyakorlat','4.sz. lőgyakorlat','békeműveleti lőgyakorlat', 'gránátdobás','robbantás'];
export const results = ['megfelelt','jó','kiváló'];
export const weapons = ['','AK 63D','P9 RC','CZ BREN','CZ P9','PKM','támadó gránát','védekező gránát','gyakorló gránát'];
export const types = ['lövészet', 'misszió', 'tanfolyam', 'szakképesítés'];
export const missionPlaces = ['Koszovó', 'Irak', 'Bosznia'];
export const missionNames = ['KFOR', 'IKBK', 'EUFOR'];
export const trainingNames = ['vezénylőzászlósi tanfolyam', 'STANAG 2.2.2 nyelvtanfolyam', 'tereptan','FOSZAB','őrkiképzés','gránátdobás','robbantás'];
export const posts = ['századparancsnok', 'vezénylőzászlós', 'sofőr', 'mesterlövész'];

//KATONÁK ADATAINAK OSZLOP VÁLASZTÓJA a katonák lapon
export const workColumns = [
    {label:'pozíció', table:null, column:'position'},
    {label:'sztsz', table:null, column:'sztsz'},
    {label:'teljes név', table:null, column:'fullname'},
    {label:'tudományos fokozat', table:null, column:'science_level'},
    {label:'vezetéknév', table:null, column:'firstname'},
    {label:'keresztnév', table:null, column:'lastname'},
    {label:'név 2', table:null, column:'name2'},
    {label:'név 3', table:null, column:'name3'},
    {label:'viselt rendfokozat', table:null, column:'actual_rank'},
    {label:'szerződés kezdete', table:null, column:'serve_start'},
    {label:'szerződés lejárta', table:null, column:'serve_end'},
    {label:'szolg. igazolvány', table:null, column:'serve_id'},
    {label:'leszerelési parancs', table:null, column:'deactivate_number'},
    {label:'állománykategória', table:null, column:'type'},
    {label:'státusz', table:null, column:'active'},
];

export const personalColumns = [
     {label:'szül idő', table:'personaldata', column:'birth_date'},
     {label:'szül hely', table:'personaldata', column:'birth_place'},
     {label:'szül név', table:'personaldata', column:'birth_name'},
     {label:'anyja neve', table:'personaldata', column:'mother_name'},
     {label:'nem', table:'personaldata', column:'sex'},
     {label:'kor', table:'personaldata', column:'age'},
     {label:'személyi szám', table:'personaldata', column:'personal_id'},
     {label:'személyi igazolvány', table:'personaldata', column:'personal_card_id'},
     {label:'személyi ig. érvényessége', table:'personaldata', column:'personal_card_end'},
     {label:'tajszám', table:'personaldata', column:'taj'},
     {label:'adószám', table:'personaldata', column:'tax'},
     {label:'jogosítvány', table:'personaldata', column:'drive_licence'},
];

export const graduateColumns = [
    {label:'végzettség', table:'graduatedata', column:'graduate'},
    {label:'katonai végzettség', table:'graduatedata', column:'military_graduate'},
    {label:'kiképzettség', table:'graduatedata', column:'modul'},
    {label:'kiképzettség dátuma', table:'graduatedata', column:'trained_date'},
    {label:'kiképzettség igazolása', table:'graduatedata', column:'nyt_number'},
    {label:'tiszti/altiszti tanfolyam I.', table:'graduatedata', column:'sergeant_1'},
    {label:'tiszti/altiszti tanfolyam II.', table:'graduatedata', column:'sergeant_2'},
];

export const contactColumns = [
    {label:'irányítószám', table:'contact', column:'zipcode'},
    {label:'város', table:'contact', column:'city'},
    {label:'utcanév', table:'contact', column:'street'},
    {label:'közterület jellege', table:'contact', column:'street_type'},
    {label:'házszám', table:'contact', column:'house_number'},
    {label:'irányítószám tarthely', table:'contact', column:'zipcode2'},
    {label:'város tarthely', table:'contact', column:'city2'},
    {label:'utcanév tarthely', table:'contact', column:'street2'},
    {label:'közterület jellege tarthely', table:'contact', column:'street_type2'},
    {label:'házszám tarthely', table:'contact', column:'house_number2'},
    {label:'telefon', table:'contact', column:'phone'},
    {label:'email', table:'contact', column:'email'},
];
export const baseColumns = [
    {label:'rendszeresített rendfokozat', table:'basedata', column:'base_rank'},
    {label:'járási század', table:'basedata', column:'squad'},
    {label:'járási város', table:'basedata', column:'squad_city'},
    {label:'szakasz', table:'basedata', column:'platoon'},
    {label:'raj', table:'basedata', column:'team'},
    {label:'beosztás', table:'basedata', column:'post'},
    {label:'mak kód', table:'basedata', column:'mak'},
    {label:'fizetési fokozat', table:'basedata', column:'post_type'},
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

    const solider = [
        {value:selectedSolider.fullname || '', label:'név'},
        {value:selectedSolider.type || '', label:'állomány'},
        {value:selectedSolider.actual_rank || '', label:'rendfokozat'},
        {value:selectedSolider.sztsz || '', label:'sztsz'},
        {value:selectedSolider.position || '', label:'pozíció'},
        {value:selectedSolider.serve_start || '', label:'jogviszony kezdete'},
        {value:selectedSolider.basedata.post || '', label:'beosztás'},
        {value:selectedSolider.graduatedata.modul || '', label:'kiképzettség'},
    ];
    
    const soliderData = [
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
    ];

    return {solider, soliderData, updateSkill, updateContact, updateGraduate, updatePersonal, updateWork }
}