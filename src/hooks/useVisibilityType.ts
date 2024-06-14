import { useState } from "react";

export default function useVisibilityType(){
    
    const [type, setType] = useState<'table' | 'form'>('table');

    const showTable = () => setType('table');

    const showForms = () => setType('form');

    return {
        formsIsVisible: type==='form',
        tableIsVisible: type==='table',
        showForms,
        showTable
    }  
}