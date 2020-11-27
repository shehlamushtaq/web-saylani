const MediaCard = ({title , body, image}) => {
    return(
    <div style={{width:'50%', margin:'auto', border:'2px solid black'}}>

    <h2>{title}</h2>

    <p> {body}</p>

    <img src={image} width="200px" height="200px"/>
    </div>
    )}
   

export default MediaCard