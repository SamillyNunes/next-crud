import Client from "@/core/Client";
import { EditIcon, TrashIcon } from "./Icons";
import ActionButton from "./ActionButton";

interface TableProps{
    clients: Client[]
    selectedClient?: (client: Client) => void
    deletedClient?: (client: Client) => void

}

export default function Table(props: TableProps){

    const showActions = props.deletedClient || props.selectedClient;

    function renderHead(){
        return (
            <thead className="
                bg-gradient-to-r from-purple-500 to-purple-800
                text-gray-100
            ">
                <tr>
                    <th className="text-left p-4">Código</th>
                    <th className="text-left p-4">Nome</th>
                    <th className="text-left p-4">Idade</th>
                    {showActions && <th className="p-4">Ações</th>}
                </tr>
            </thead>
        );
    }
    function renderData(){
        return props.clients?.map((client, index)=> (
            <tr key={client.id} className={`
                ${index%2===0 ? 'bg-purple-200' : 'bg-purple-100'}
            `}>
                <td className="text-left p-4">{client.id}</td>
                <td className="text-left p-4">{client.name}</td>
                <td className="text-left p-4">{client.age}</td>
                {showActions && renderActions(client)}
            </tr>
        ));
    }

    function renderActions(client: Client){
        return (
            <td className="flex justify-center">
                {props.selectedClient && 
                    <ActionButton 
                        icon={EditIcon} 
                        iconColor="text-green-600" 
                        onClick={()=> props.selectedClient?.(client)} 
                    />}
                {props.deletedClient && 
                    <ActionButton 
                        icon={TrashIcon} 
                        iconColor="text-red-600" 
                        onClick={()=> props.deletedClient?.(client)} 
                    />}
            </td>
        );
    }

    return props.clients?.length>0 ? (
            <table className="w-full rounded-xl overflow-hidden">
                {renderHead()}
                <tbody>
                    {renderData()}
                </tbody>
            </table>
        ) : (
            <h1 className="text-lg flex justify-center ">
                Nenhum registro de cliente ainda. 
            </h1>
        )

        
    
}