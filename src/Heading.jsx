let Heading = () => {
    return(
        <div className="heading">
            <img src="data:image/jpeg;base64,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" style = {{height:"19rem",width:"86rem"}}></img>
            <div class="centered">RISE AND GRIND</div>
            <div class="bottom">Drink Coffee $ Start Doing Stupid Things Even Faster</div>
            
         </div>
    )
    
}
export default Heading