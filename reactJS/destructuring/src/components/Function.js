import react from 'react';


export default function Function (props){
/*destructurin*/
    const {userInfo, saludarFn} = props;
    const {nombre,edad = "Anonimo"} = userInfo;
    console.log(userInfo);
    return (
        <div>
            <button onClick={() => saludarFn(nombre,edad)}>Saludar 2</button>
        </div>
    );
}