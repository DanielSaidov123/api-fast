import AllUsers from "../components/AllUsers";
import GetUserById from "../components/GetUserById";
import { RegisterComponents } from "../components/RegisterComponents";

export default function RegisterAdmin() {
  return (
    <div>
        <h1>create user</h1>
        <RegisterComponents/>
        <GetUserById/>
        <AllUsers/>
    </div>
  )
}
