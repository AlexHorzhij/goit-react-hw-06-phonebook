import {SelectTitle, SelectInput} from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { contactFilter } from 'redux/contactsSlice';


export function Filter() {
    const serchName = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    const findContact = (e) => {
        const serchName = e.target.value;
        dispatch(contactFilter(serchName));
    };


    return <><SelectTitle> Find contacts by name</SelectTitle> 
        <SelectInput type="text" name="serch" value={serchName} onChange={findContact}/>
          </>
};