module.exports = app => {
  const controller = app.controllers.customerWallets;

  app.route('/api/v1/customer-wallets')
    .get(controller.listCustomerWallets)
    .post(controller.saveCustomerWallets);

  app.route('/api/v1/customer-wallets/:customerId')
    .delete(controller.removeCustomerWallets)
    .put(controller.updateCustomerWallets);
}