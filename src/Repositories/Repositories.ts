import axios from "axios"
import { User } from "../components/Interfaces/interfaces";

export const LoginRepositories = {
    getDataLogin(){
        return axios.get<User[]>(`http://localhost:3000/login`);
    }
}