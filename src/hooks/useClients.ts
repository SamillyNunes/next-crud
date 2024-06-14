import ClientCollection from "@/backend/db/ClientCollection";
import Client from "@/core/Client";
import ClientRepository from "@/core/ClientRepository";
import { useEffect, useState } from "react";
import useVisibilityType from "./useVisibilityType";

export default function useClients(){
  

    const { tableIsVisible, showForms, showTable } = useVisibilityType();

    const [currentClient, setCurrentClient] = useState<Client>(Client.empty());
    const [clients, setClients] = useState<Client[]>([]);

    const repo: ClientRepository = new ClientCollection();


  useEffect(getAllClients, []);

  function onClientSelected(client: Client){
    setCurrentClient(client);
    showForms();
  }

  async function deletedClient(client: Client){
    await repo.delete(client);
    getAllClients();
  }

  function getAllClients(){
    
    repo.getAll().then((clients)=> {
      setClients(clients);
      showTable();
    });
  }

  async function saveClient(client: Client){
    await repo.save(client);
    getAllClients();
    
  }

  function resetClient(){
    setCurrentClient(Client.empty());
  }

  return {
    saveClient,
    deletedClient,
    onClientSelected,
    clients,
    currentClient,
    resetClient,
    tableIsVisible,
    showTable,
    showForms,
  }
}