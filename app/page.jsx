import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";
const HomePage = async () => {
  return (
    <>
      <div className="m-5">
        <Navbar />
      </div>
      <ProductList />
    </>
  );
};
export default HomePage;
