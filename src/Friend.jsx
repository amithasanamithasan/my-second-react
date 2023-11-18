export default function Friend({friend}){
    console.log(friend);
    const {name, email,address} = friend;
    return (
        <div className="user">
            <h4>Name: {name} </h4>
            <p>Email: {email}</p>
            <p>Address:{address.city}</p>
        </div>
    )
}