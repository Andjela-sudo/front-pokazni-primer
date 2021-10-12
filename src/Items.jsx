const Items = ({items}) => {
    return ( 
        <div>
            {items.map(item => <p key={item.id}>{item.text}</p>)}
        </div>
     );
}
 
export default Items;