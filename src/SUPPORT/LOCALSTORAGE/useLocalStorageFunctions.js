export default function useLocalStorageFunctions() {

    const deleteStorage = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        localStorage.removeItem('role');
    };

    const setStorage = (token, id, name, role) => {
        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('role', role);
    };

    return {deleteStorage, setStorage}
}