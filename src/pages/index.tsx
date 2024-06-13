import CustomButton from "@/components/CustomButton";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/Client";
import { useState } from "react";

export default function Home() {

  const [type, setType] = useState<'table' | 'form'>('table');

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Joana', 22, '2'),
    new Client('Leonardo', 26, '3'),
    new Client('Iza', 15, '4'),
  ];

  function selectedClient(client: Client){
    console.log(`Nome do cliente: ${client.name}`);
  }

  function deletedClient(client: Client){
    console.log(`Cliente excluido: ${client.name}`);
  }

  function saveClient(client: Client){
    console.log(client);
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
            client={clients[0]}  
            canceled={()=>setType('table')}
            onClientChanged={saveClient}
          />
        )

        }
      </Layout>
    </div>

  );
}
