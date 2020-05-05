myApp.factory('apiFac',function($http) {
    var apiFac ={};

    apiFac.getAccountbyId = function(bankhost, bankBasePath, accountBalanceApiPath, accountId){
        // should fetch account balance and store the response in "accountResponse"
        $http.get("models/united-federation-bank/account/ufbAccount.json");
        //return new Promise(resolve, reject) { resolve(accountResponse)};
        this.accountResponse = {
                                                                   "userId": "320375648",
                                                                   "accountId": "00355642136",
                                                                   "balance": "134267",
                                                                   "bankName": "United Federation Bank",
                                                                   "accountType": "Salary Account",
                                                                   "currency": "INR"
                                                                 };
        var promise = new Promise((resolve, reject) => {

            resolve(accountResponse);
          });
        return promise;
    };

    apiFac.getTransactionsById = function(bankhost, bankBasePath, transactionsApiPath, transactionId){
        // should fetch Transaction details and store the response in "transactionResponse"
        $http.get("models/united-federation-bank/transactions/ufbTransactions.json");
        this.transactionResponse = [
                                         {
                                           "date": "2018-11-21",
                                           "amount": "1500",
                                           "type": "Debit",
                                           "source": "ATM",
                                           "bank": "United Federation Bank"
                                         },
                                         {
                                           "date": "2018-11-01",
                                           "amount": "21000",
                                           "type": "Debit",
                                           "source": "NetBanking",
                                           "bank": "United Federation Bank"
                                         }
                                       ];
      var promise = new Promise((resolve, reject) => {

                  resolve(transactionResponse);
                });
              return promise;
    };

    return apiFac;
  });