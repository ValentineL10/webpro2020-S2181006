let account = {
    name: "Valentine",
    expenses: [],
    addExpenses: function(description, amount){
        this.expenses.push({"description": description, "amount": amount});
    },
    getAccountSummary(){
      let total = 0;
      this.expenses.forEach((item)=>{
        total+=item.amount;
      })
      return total;
    }
};
account.addExpenses('Beli Pakaian', 15000);
account.addExpenses('Beli Pulsa_Data', 50000);
account.addExpenses('Beli Sling_bag', 30000);
account.addExpenses('Beli Roti',20000);
console.log("Total pengeluaran" + account.name + 'adalah Rp.' + account.getAccountSummary());