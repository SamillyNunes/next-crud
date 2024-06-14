import ClientCollection from "@/backend/db/ClientCollection";
import CustomButton from "@/components/CustomButton";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/Client";
import ClientRepository from "@/core/ClientRepository";
import { useEffect, useState } from "react";

export default function Home() {

  const [type, setType] = useState<'table' | 'form'>('table');
  const [currentClient, setCurrentClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);

  const repo: ClientRepository = new ClientCollection();

  useEffect(getAllClients, []);

  function selectedClient(client: Client){
    setCurrentClient(client);
    setType('form');
  }

  async function deletedClient(client: Client){
    await repo.delete(client);
    getAllClients();
    console.log(`Cliente excluido: ${client.name}`);
  }

  function getAllClients(){
    
    repo.getAll().then((clients)=> {
      setClients(clients);
      setType('table');
    });
  }

  async function saveClient(client: Client){
    await repo.save(client);
    getAllClients();
    
  }

  function cancelForm(){
    setType('table');
    setCurrentClient(Client.empty);
  }

  return (
    <div className="
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    ">
      <Layout title="Cadastro Simples">
        {type==='table' ? (
          <>
            <div className="flex justify-end">
              <CustomButton 
                onClick={()=> setType('form')}
                className="mb-4" 
                color="green"
              >
                Novo Cliente
              </CustomButton>
            </div>
            <Table clients={clients} selectedClient={selectedClient} deletedClient={deletedClient} />
          </>
        ) : (

          <Form 
            client={currentClient}  
            canceled={cancelForm}
            onClientChanged={saveClient}
          />
        )

        }
      </Layout>
    </div>

  );
}
