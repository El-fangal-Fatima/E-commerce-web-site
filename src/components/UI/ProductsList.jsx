// import ProductsCard from "./ProductsCard"
// const ProductsList = ({data}) => {
//   return (
//     <>
// {data?.map((item ,index)=>(
//             <ProductsCard item={item} key={index}/>
//     ))}



//     </>
//   );
// };

// export default ProductsList;

import PropTypes from 'prop-types';
import ProductsCard from "./ProductsCard";

const ProductsList = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => (
        <ProductsCard item={item} key={index} />
      ))}
    </>
  );
}

ProductsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      imgUrl: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      // Add more prop validations for other properties if needed
    })
  ),
};

export default ProductsList;

