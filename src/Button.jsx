import ReactDOM from 'react-dom';
const Button = () => {
    return ( 
        <button onClick={
            (e)=>{
                e.preventDefault()
                //e.stopPropagation()
                console.log('kliknuto dugme');
            }
        }>
            KLIKNI ME
        </button>
     );
}
 
export default Button;