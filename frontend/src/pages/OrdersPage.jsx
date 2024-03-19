import React from "react";
import { Grid } from "@mui/material";
import OrderCard from "../component/OrderCard";
const orderStatus = [
  { label: "On The Way", value: "on_the_value" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: " cancelled" },
  { label: "Return", value: "return" },
];

const OrdersPage = () => {
  return (
    <div className="lg:mx-10 mt-10 border">
      <Grid container spacing={8} >
        <Grid item xs={2.5}>
          <div className="shadow-lg bg-white p-4">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>
             {orderStatus.map((option)=> <div className="flex items-center ">
                <input
                  type="checkbox"
                  defaultValue={option.value}
                  className="h-4 w-4 border-gray-400 "
                />
                <label htmlFor="" className="ml-3 text-sm text-gray-500">
                  {" "}
                  {option.label}
                </label>
              </div>)}
            </div>
          </div>
        </Grid>

        <Grid item xs={9.5} className="space-y-4" >
          {
            [1,1,1,1,1].map((item)=>  <OrderCard/>)
          }
           
        </Grid>
      </Grid>
    </div>
  );
};

export default OrdersPage;
