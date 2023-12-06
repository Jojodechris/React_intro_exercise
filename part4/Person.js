const Person = (props) => {
    let reply;
    if (props.age < 18) {
      reply = <span> 
      you must be 18
      <img src="https://media1.giphy.com/media/9Jb0EeNzxzKNHofekT/200w.webp?cid=ecf05e47zb9yshvci65z9kiocfr3hzw11229fjak5zkiok2e&ep=v1_gifs_search&rid=200w.webp&ct=g" 
      />
        </span>
    } else if (props.age > 18) {
      reply = <span> 
        please go vote!
      <img src="https://media1.giphy.com/media/3ibA9NgxKgeSEwffgh/200w.webp?cid=ecf05e47hjbapp7197bcjfb2pu20v3fp1pioc59skmvmdnz9&ep=v1_gifs_search&rid=200w.webp&ct=g" 
      />
       </span>
    } else {
      reply = <span>
        Come in, you CAN drink!
        <img src="https://media.giphy.com/media/eXg8Ij7JgnyDu/giphy.gif" />
      </span>
    }
    let goodname;
    if(props.name.length > 8 ){
        goodname= (props.name.substring(0, 5));
    } else {
        goodname=props.name;
    }

    return (
        
      <div>
          <h1>let's get to know  this guy</h1> 
        <p>
          Age: {props.age} years old
        </p>
        <p>
          Name: {props.name} years old
        </p>
        <p>
          <b>Bouncer: NICE TO meet you {goodname}</b> 
          <h1>{reply}</h1>
        </p>
      </div>
    )
  }