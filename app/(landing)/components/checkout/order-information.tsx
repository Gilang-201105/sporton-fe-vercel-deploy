import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
  return (
    <CardWithHeader title="Order Information">
      <div className="p-5 space-y-4">
        <div className="input-group">
          <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input 
            type="text" 
            placeholder="Type your full name" 
            id="full_name"
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="input-group">
          <label htmlFor="wa_number" className="block text-sm font-medium text-gray-700 mb-2">Whatsapp Number</label>
          <input
            type="text"
            placeholder="Type your whatsapp number"
            id="wa_number"
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="input-group">
          <label htmlFor="shipping_address" className="block text-sm font-medium text-gray-700 mb-2">Shipping Address</label>
          <textarea
            placeholder="Type your shipping address"
            id="shipping_address"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;