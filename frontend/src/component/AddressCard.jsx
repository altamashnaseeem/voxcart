import React from "react";

const AddressCard = ({address}) => {
  return (
    <div className="mt-6">
      <div className="space-y-2">
        <p className="font-semibold">{address.firstName+" "+address.lastName}</p>
        <p>{address.state},{address.streetAddress},{address.zipCode}</p>
        <div className="space-y-1">
          <p className="font-semibold">phone number</p>
          <p>{address.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
