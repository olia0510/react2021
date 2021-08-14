export default function Simpson({name, surname, age, info, photo}) {
    return(
        <div className={'simpson'}>
            <h2>{name}</h2>
            <h3>{surname}</h3>
            <h4>{age}</h4>
            <p>{info}</p>
            <img src={photo} alt=""/>
            <hr/>
        </div>
    );
}