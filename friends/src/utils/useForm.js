import { useState } from 'react';


const useForm = () => {

    const [state, setState] = useState({});

    const handleChange = e => {
        e.persist();
        setState(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const clearForm = e => {
        setState({});
    }

    return [state, handleChange, clearForm]
}

export default useForm;