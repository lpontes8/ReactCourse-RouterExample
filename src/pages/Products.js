import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <section>
            <h1>The Products Page</h1>
            <ul>
                <li to='/products/p1'>
                    <Link>A book</Link>
                </li>
                <li>
                    <Link to='/products/p2'>A Carpet</Link>
                </li>
                <li>
                    <Link to='/products/p3'>An Online Course</Link>
                </li>
            </ul>
        </section>        
    );
}

export default Products;