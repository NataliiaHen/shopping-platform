import ProductList from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';

const HomePage = async () => {
  const latestProducts = getLatestProducts();
  console.log(latestProducts);

  return <ProductList data={latestProducts} title='Newest arrivals' />;
};

export default HomePage;
