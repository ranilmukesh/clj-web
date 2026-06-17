
const ShippingExchange = () => {
  return (
    <div className="container mx-auto py-12 prose">
      <h1>Shipping & Exchange Policy</h1>
      <p><em>Last Updated: {new Date().toLocaleDateString()}</em></p>
      
      <h2>Shipping</h2>
      <p>We offer secure, insured shipping on all orders. Shipping times may vary based on your location and product availability. You will receive a tracking number once your order has been dispatched.</p>

      <h2>Exchange Policy</h2>
      <p>We want you to be completely satisfied with your purchase. We offer a 7-day exchange policy for unused and undamaged items in their original packaging. Custom-made orders are not eligible for exchange.</p>
      <p>To initiate an exchange, please contact our customer service team with your order details. The customer is responsible for return shipping costs.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about our shipping or exchange policies, please contact us at contact@chandralekhajewels.com.</p>
    </div>
  );
};
export default ShippingExchange;
