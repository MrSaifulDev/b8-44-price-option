import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {

    

  const { name, price, features } = option;

  return (
    <div className="bg-blue-500 rounded-md p-4 text-white text-center  flex flex-col">
      <h2 className="">
        <span className="  md:text-7xl">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center">{name}</h4>

    <div className="pt-6 flex-grow" >
    {
        features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
      }
    </div>

    <button className="mt-12 bg-green-600 p-3 w-full font-bold rounded-lg hover:bg-green-900">buy now</button>

    </div>
  );
};

export default PriceOption;



