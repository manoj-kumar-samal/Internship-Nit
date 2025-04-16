


export default function Movie({item}){
    return(
        <div>
            <div className="card w-50">
                <img src={item.image} height="150px"></img>
                <div className="card-body">{item.title}</div>
            </div>
        </div>
    )
}