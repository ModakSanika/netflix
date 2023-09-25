function Card(props){
    console.log(props);
    return (
        <>
           <div className='cards'>
    <div className='card'>
      <img src={props.imgsrc} alt='my_pic'className="card_img" ></img>
      <div className='card_info'>{props.sname} <br />
        <span className='card_category' > {props.title}</span>
        <h3 className='card_titile'></h3>
        <a href={props.link}>
          <button>Watch Now</button>
        </a>

      </div>
    </div>

  </div> 
  </>
    )
}export default Card;