import PriceOption from "../PriceOption/PriceOption";



const PriceOptions = () => {

  const priceItems = [ 
     {
      "id": 1,
      "name": "Basic Membership",
      "price": 29.99,
      "features": [
        "Access to gym facilities during standard hours",
        "Use of cardio and weightlifting equipment",
        "Locker room access"
      ]
    },
     {
      "id": 2,
      "name": "Premium Membership",
      "price": 49.99,
      "features": [
        "24/7 access to gym facilities",
        "Access to group fitness classes",
        "Personal training session discount"
      ]
    },
     {
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
    {
      "id": 4,
      "name": "Student Membership",
      "price": 24.99,
      "features": [
        "Access to gym facilities during off-peak hours",
        "Discounted rates for students",
        "Limited access to group fitness classes"
      ]
    },
    {
      "id": 5,
      "name": "Family Membership",
      "price": 99.99,
      "features": [
        "Access for up to four family members",
        "Discounted rates for additional family members",
        "Access to family-oriented fitness programs"
      ]
    },
    {
      "id": 6,
      "name": "Corporate Membership",
      "price": 69.99,
      "features": [
        "Discounted rates for employees of partnered companies",
        "Access to corporate wellness programs",
        "Specialized group fitness classes"
      ]
    }
  
] ;

    
  

    return (
        <div>
          
            
           <div className="grid md:grid-cols-3 gap-4"> 
              {
                    priceItems.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
           </div>

           
        </div>
    );
};

export default PriceOptions;