function Product(props){

console.log(props.product)
    return(
        <li className="product">
            <img src={props.product.image} />
            <h3>{props.product.title}</h3>
            <span>{props.product.price}</span>
        </li>
        
    );

    
}
export default Product;