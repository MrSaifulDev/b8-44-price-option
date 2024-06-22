import { FaCircle } from "react-icons/fa";

const Feature = ({feature}) => {


    return (
        <div>
            <p className="flex items-center "> <FaCircle className="text-green-500 mr-4 " />{feature}</p>
        </div>
    );
};

export default Feature;