import AddButton from "@/components/AddButton";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import Client from "@/core/Client";

export default function Home() {

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

  return (
    <div className="
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    ">
      <Layout title="Cadastro Simples">
        <div className="flex justify-end">
          <AddButton classnName="mb-4" color="green">Novo Cliente</AddButton>
        </div>
        <Table clients={clients} selectedClient={selectedClient} deletedClient={deletedClient} />
      </Layout>
    </div>

  );
}
