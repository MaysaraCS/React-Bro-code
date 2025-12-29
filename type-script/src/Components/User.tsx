export enum Countries {
  Brazil = "Brazil",
  egypt = "egypt",
  malaysia = "malaysia",
  spain = "spain",
}

interface UserProps {
  name: string;
  age: number;
  isMarried: boolean;
  country: Countries;
}

const User = (props: UserProps) => {
    // const {users, updateUser, addUser, deleteUser} = useContext(UserContext)
  return (
    <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>This Person {props.isMarried ? "is married": "is single"}</p>
        <p>Country is : {props.country}</p>
    </div>
  )
}

export default User