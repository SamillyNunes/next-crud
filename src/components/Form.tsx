import { useState } from "react";
import Input from "./Input";
import Client from "@/core/Client";
import CustomButton from "./CustomButton";

interface FormProps{
    client?: Client
}

export default function Form(props: FormProps){
    const id = props.client?.id!== '' ? props.client?.id : null;

    const c = props.client;

    const [name, setName] = useState(c?.name ?? '');
    const [age, setAge] = useState(c?.age ?? 0);

    return (
        <div>
            {id && (
                <Input 
                    label="Código" 
                    value={id} 
                    readonly 
                    className="mb-4"
                />
            )}
            <Input 
                label="Nome" 
                value={name} 
                onChange={setName} 
                className="mb-4"
            />
            <Input 
                label="Idade" 
                type="number" 
                value={age} 
                onChange={setAge} 
            />

            <div className="flex justify-end mt-7">
                <CustomButton color="blue" className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </CustomButton>
                <CustomButton>
                    Cancelar
                </CustomButton>
            </div>
        </div>
    );
}