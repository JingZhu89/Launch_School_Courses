let invoices = {
  unpaid: [],
  paid: [],

  add: function(name, price) {
    this.unpaid.push({name, price});
  },

  totalDue: function() {
    return this.unpaid.reduce((total, currentElement) => {
      return total + currentElement.price;
    }, 0);
  },

  totalPaid: function() {
    return this.paid.reduce((total, currentElement) => {
      return total + currentElement.price;
    }, 0);
  },

  payInvoice: function(name) {
    let newUnpaid = [];
    this.unpaid.forEach(element => {
      if (element.name !== name) {
        newUnpaid.push(element);
      } else {
        this.paid.push(element)
      }
    })
    this.unpaid = newUnpaid;
  }
};

invoices.add('Due north development', 250);
invoices.add('Moonbeam iterative', 187.50);
invoices.add('Slough Digital', 300);
invoices.payInvoice('Due north development');
invoices.payInvoice('Due north development');
invoices.payInvoice('Slough Digital');
console.log(invoices.totalDue())
console.log(invoices.totalPaid())

