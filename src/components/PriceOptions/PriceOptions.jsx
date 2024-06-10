import PriceOption from "../PriceOption/PriceOption";



const PriceOptions = () => {

  const priceItems = [ {
    "1": {
      "id": 1,
      "name": "Basic Membership",
      "price": 29.99,
      "features": [
        "Access to gym facilities during standard hours",
        "Use of cardio and weightlifting equipment",
        "Locker room access"
      ]
    },
    "2": {
      "id": 2,
      "name": "Premium Membership",
      "price": 49.99,
      "features": [
        "24/7 access to gym facilities",
        "Access to group fitness classes",
        "Personal training session discount"
      ]
    },
    "3": {
      "id": 3,
      "name": "Executive Membership",
      "price": 79.99,
      "features": [
        "Access to VIP facilities",
        "Priority booking for group fitness classes",
        "Complimentary towel service",
        "Sauna and steam room access"
      ]
    },
    "4": {
      "id": 4,
      "name": "Student Membership",
      "price": 24.99,
      "features": [
        "Access to gym facilities during off-peak hours",
        "Discounted rates for students",
        "Limited access to group fitness classes"
      ]
    },
    "5": {
      "id": 5,
      "name": "Family Membership",
      "price": 99.99,
      "features": [
        "Access for up to four family members",
        "Discounted rates for additional family members",
        "Access to family-oriented fitness programs"
      ]
    },
    "6": {
      "id": 6,
      "name": "Corporate Membership",
      "price": 69.99,
      "features": [
        "Discounted rates for employees of partnered companies",
        "Access to corporate wellness programs",
        "Specialized group fitness classes"
      ]
    }
  }
] ;

    
    return (
        <div>
            <h2 className="text-2xl">Best price in the town</h2>
            {
                priceItems.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }

           
        </div>
    );
};

export default PriceOptions;