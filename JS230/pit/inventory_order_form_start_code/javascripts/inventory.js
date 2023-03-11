

var inventory;

(function() {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function() {
      var date = new Date();
      document.querySelector('#order_date').textContent = date.toUTCString();
      // $("#order_date").text(date.toUTCString());
    },
    cacheTemplate: function() {
      // var $iTmpl = $("#inventory_item").remove();
      // this.template = $iTmpl.html();
      this.template = document.querySelector("#inventory_item").innerHTML; //tr
      document.querySelector("#inventory_item").remove();
    },
    add: function() {
      this.lastId++;
      let item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      var found_item;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },
    update: function(item) {
      var id = this.findID(item),
          colItem = this.get(id);

          colItem.name = item.querySelector("[name^=item_name]").value;
          colItem.stock_number = item.querySelector("[name^=item_stock_number]").value;
          colItem.quantity = item.querySelector("[name^=item_quantity]").value;
    },
    newItem: function(e) {
      // e.preventDefault();
      // var item = this.add(),
      //     $item = $(this.template.replace(/ID/g, item.id));

      // $("#inventory").append($item);
      e.preventDefault();
      var item = this.add();
          item = this.template.replace(/ID/g, item.id);
      console.log(item);
      document.querySelector("#inventory").insertAdjacentHTML('beforeend',item);
      console.log(this.collection);
    },
    findParent: function(currentNode) {
      while (true) {
        if (currentNode.tagName === 'TR') {
          return currentNode
        } else {
          currentNode = currentNode.parentElement;
        }
      }
      // return $(e.target).closest("tr");
    },
    findID: function(item) {
      return Number(item.querySelector("input[type=hidden]").value);
    },
    deleteItem: function(e) {
      e.preventDefault();
      let currentNode = e.target;
      if (currentNode.className === "delete") {
        let item = this.findParent(currentNode);
        item.remove();
        this.remove(this.findID(item));
      }
      // e.preventDefault();
      // var $item = this.findParent(e).remove();

      // this.remove(this.findID($item));
    },
    updateItem: function(e) {
      e.preventDefault();
      let currentNode = e.target;
      // debugger;
      if (currentNode.tagName === 'INPUT') {
        var item = this.findParent(currentNode);
        this.update(item);
      }
      // var $item = this.findParent(e);
      // this.update($item);
    },
    bindEvents: function() {
      // $("#add_item").on("click", $.proxy(this.newItem, this));
      document.querySelector("#add_item").addEventListener("click", this.newItem.bind(this));
      // $("#inventory").on("click", "a.delete", $.proxy(this.deleteItem, this));
      document.querySelector("#inventory").addEventListener("click", this.deleteItem.bind(this));
      // $("#inventory").on("blur", ":input", $.proxy(this.updateItem, this));
      document.querySelector("#inventory").addEventListener("mouseout",this.updateItem.bind(this));
    },
    init: function() {
      let self = this;
      document.addEventListener('DOMContentLoaded', () => {
        self.setDate();
        self.cacheTemplate();
        self.bindEvents();
      })
    }
  };
})();

// $($.proxy(inventory.init, inventory));
inventory.init.call(inventory);
