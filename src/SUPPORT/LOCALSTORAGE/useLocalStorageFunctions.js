export default function useLocalStorageFunctions() {

    const deleteStorage = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        localStorage.removeItem('role');
        localStorage.removeItem('access_level');
        localStorage.removeItem('rendfokozat');
        localStorage.removeItem('ezred_rovid');
        localStorage.removeItem('ezred_hosszu');
        localStorage.removeItem('ezred_rovid');
        localStorage.removeItem('zaszloalj_rovid');
        localStorage.removeItem('zaszloalj_hosszu');
        localStorage.removeItem('megye');
        localStorage.removeItem('reszleg');
        localStorage.removeItem('pozicio_nev');
        localStorage.removeItem('pozicio');
    };

    const setStorage = (token, id, name, role, access_level, rendfokozat, ezred_rovid, ezred_hosszu, zaszloalj_rovid, zaszloalj_hosszu, megye, reszleg, pozicio_nev, pozicio) => {
        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('role', role);
        localStorage.setItem('access_level', access_level);
        localStorage.setItem('rendfokozat', rendfokozat);
        localStorage.setItem('ezred_rovid', ezred_rovid);
        localStorage.setItem('ezred_hosszu', ezred_hosszu);
        localStorage.setItem('ezred_rovid', ezred_rovid);
        localStorage.setItem('zaszloalj_rovid', zaszloalj_rovid);
        localStorage.setItem('zaszloalj_hosszu', zaszloalj_hosszu);
        localStorage.setItem('megye', megye);
        localStorage.setItem('reszleg', reszleg);
        localStorage.setItem('pozicio_nev', pozicio_nev);
        localStorage.setItem('pozicio', pozicio);
    };

    return {deleteStorage, setStorage}
}