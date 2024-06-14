import CustomButton from "@/components/CustomButton";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import useClients from "@/hooks/useClients";

export default function Home() {
  
  const { 
    saveClient, 
    deletedClient, 
    onClientSelected, 
    clients, 
    currentClient, 
    resetClient,
    showTable,
    showForms,
    tableIsVisible,
  } = useClients();


  function cancelForm(){
    showTable();
    resetClient();

  }

  function addNewClient(){
    resetClient();
    showForms();
  }

  return (
    <div className="
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    ">
      <Layout title="Cadastro Simples">
        {tableIsVisible ? (
          <>
            <div className="flex justify-end">
              <CustomButton 
                onClick={addNewClient}
                className="mb-4" 
                color="green"
              >
                Novo Cliente
              </CustomButton>
            </div>
            <Table clients={clients} selectedClient={onClientSelected} deletedClient={deletedClient} />
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
