import './style.css';

export default function Button(props) {
    const { nameButton, fetch } = props;
    
    function handleClick() {       
        fetch();       
    }   
    
    return (
        <button className="button" onClick={handleClick}>
            <span>{nameButton}</span>
        </button>
    );    
}