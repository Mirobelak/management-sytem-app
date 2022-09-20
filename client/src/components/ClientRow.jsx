import {FaTrash} from "react-icons/fa"
import { DELETE_CLIENT } from "./mutations/ClientMutations"
import { useMutation } from "@apollo/client"
import {GET_CLIENTS} from "../queries/ClientQueries"
import { GET_PROJECTS } from "../queries/ProjectQueries"

const ClientRow = ({client}) => {
    
    const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: {id: client.id},
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });
  return (
    <tr>
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td> <button className="btn btn-danger btn-sm" onClick={deleteClient}>
            <FaTrash/>
            </button>
        </td>
    </tr>
  )
}

export default ClientRow