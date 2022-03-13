import axios from "axios"


   const url=`http://localhost:3003/Patients`;

   export const getData =async () => {
    return await axios.get(`${url}`)
        }

export const postData =async (info) => {
    return await axios.post(`${url}`,info)
        }

                                