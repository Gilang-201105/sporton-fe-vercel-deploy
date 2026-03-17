"use client";

import CardWithHeader from "../ui/card-with-header";
import { CustomerInfo } from "@/app/hooks/use-cart-store";

type TOrderInformation = {
  formData: CustomerInfo;
  setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>;
};

const OrderInformation = ({ formData, setFormData }: TOrderInformation) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });
  };

  return (
    <CardWithHeader title="Order Information">
      <div className="p-5 space-y-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="customerName" className="font-semibold text-gray-700">Full Name</label>
          <input
            type="text"
            placeholder="Type your full name"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="customerContact" className="font-semibold text-gray-700">Whatsapp Number</label>
          <input
            id="customerContact"
            name="customerContact"
            value={String(formData.customerContact ?? "")}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="customerAddress" className="font-semibold text-gray-700">Shipping Address</label>
          <textarea
            placeholder="Type your shipping address"
            id="customerAddress"
            name="customerAddress"
            rows={5}
            value={formData.customerAddress}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;