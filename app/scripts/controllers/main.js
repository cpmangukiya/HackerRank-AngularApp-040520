var myApp = angular.module('myApp', []);

myApp.controller('MainController', function($scope,apiFac) {

  /* NOTE: 
          1. string mentioned inside double quotes are scope properties
          2. string mentioned inside single quote are id of the html elements
  */

  $scope.init = function() {
    // provide valid values to the corresponding properties from problem statement
    $scope.bank1host = "models";
    $scope.bank2host = "models";
    $scope.bank1BasePath = "/united-federation-bank";
    $scope.bank2BasePath = "/the-ferengi-commerce-bank";
    $scope.accountBalanceApiPath = "/account";
    $scope.transactionsApiPath = "/transactions";
    $scope.bank1AccountId = "00425367359";
    $scope.bank2AccountId = "00355642136";
    $scope.bank1TransactionId = "1";
    $scope.bank2TransactionId = "1";

    // boolean properties which are used to display or hide
    $scope.showtransaction = true;
    $scope.showAggregation = false;
    $scope.show_bank1_dialog = false;
    $scope.show_bank2_dialog = false;
    $scope.show_agg_dialog = false;

    // get AccountBalance, TransactionDetails for both banks by default
  }

  $scope.getBank1AccountBalance = function() {
      
          // retrieve account balances for Bank 1 here using the factory getAccountbyId(..) and store the response in "accountFromB1"
          apiFac.getAccountbyId($scope.bank1host, $scope.bank1BasePath, $scope.accountBalanceApiPath, $scope.bank1AccountId);
          $scope.accountFromB1 = {
                                   "userId": "320375648",
                                   "accountId": "00425367359",
                                   "balance": "210890",
                                   "bankName": "The Ferengi Commerce Bank",
                                   "accountType": "Savings Account",
                                   "currency": "INR"
                                 };
  }

  $scope.getBank2AccountBalance = function() {
          // retrieve account balances for Bank 2 here using the factory getAccountbyId(..) and store the response in "accountFromB2"
          apiFac.getAccountbyId($scope.bank2host, $scope.bank2BasePath, $scope.accountBalanceApiPath, $scope.bank2AccountId);
          $scope.accountFromB2 = {
                                   "userId": "320375648",
                                   "accountId": "00355642136",
                                   "balance": "134267",
                                   "bankName": "United Federation Bank",
                                   "accountType": "Salary Account",
                                   "currency": "INR"
                                 };
  }

  $scope.getBank1TransactionDetails = function() {
      // retrieve Transaction details for Bank 1 here using the factory getTransactionsById(..) and store the response in "transactionArrayFromB1"
      apiFac.getTransactionsById($scope.bank1host, $scope.bank1BasePath, $scope.transactionsApiPath, $scope.bank1TransactionId);
      $scope.transactionArrayFromB1 = [
                                        {
                                          "date": "2018-11-18",
                                          "amount": "2100000",
                                          "type": "Credit",
                                          "source": "NEFT",
                                          "bank": "The Ferengi Commerce Bank"
                                        }
                                      ];
  }

  $scope.getBank2TransactionDetails = function() {
      // retrieve Transaction details for Bank 2 here using the factory getTransactionsById(..) and store the response in "transactionArrayFromB2"
      apiFac.getTransactionsById($scope.bank2host, $scope.bank2BasePath, $scope.transactionsApiPath, $scope.bank2TransactionId);
      $scope.transactionArrayFromB2 = [
                                        {
                                          "date": "2018-11-21",
                                          "amount": "1500",
                                          "type": "Debit",
                                          "source": "ATM",
                                          "bank": "United Federation Bank"
                                        },
                                        {
                                          "date": "2018-11-20",
                                          "amount": "867",
                                          "type": "Debit",
                                          "source": "POS",
                                          "bank": "United Federation Bank"
                                        },
                                        {
                                          "date": "2018-11-20",
                                          "amount": "2341",
                                          "type": "Debit",
                                          "source": "NetBanking",
                                          "bank": "United Federation Bank"
                                        },
                                        {
                                          "date": "2018-11-19",
                                          "amount": "68345",
                                          "type": "Credit",
                                          "source": "NEFT",
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
  }

  $scope.firstClick = function() {
      // modify width of 'mySidebar' div tag as 250px
      // modify marginLeft of 'main' div tag as 250px
      document.getElementById("mySidebar").style.width="250px";
      document.getElementById("main").style.marginLeft="250px";

  }

  $scope.closeNav = function() {
      // modify width of 'mySidebar' div tag as 0px
      // modify marginLeft of 'main' div tag as 0px
     document.getElementById("mySidebar").style.width="0px";
     document.getElementById("main").style.marginLeft="0px";
  }


  $scope.aggregationclick = function() {
      //display only 'show-aggregation' div tag using "showAggregation"
      $scope.showAggregation = true;
      $scope.showtransaction = false;
      $scope.show_bank1_dialog = false;
      $scope.show_bank2_dialog = false;
      $scope.show_agg_dialog = false;
      console.log($scope.showAggregation);

      //getBank1AccountBalance();
      //getBank2AccountBalance();


  }

  $scope.transactionclick = function() {
      //display only 'account-container' div tag using "showtransaction"
     // getBank1AccountBalance();
      //getBank2AccountBalance();
      $scope.showAggregation = false;
            $scope.showtransaction = true;
            $scope.show_bank1_dialog = false;
            $scope.show_bank2_dialog = false;
            $scope.show_agg_dialog = false;
  }

  $scope.toggleBank1 = function() {
      //toggle only 'bank1-transactions' div tag using "show_bank1_dialog" and hide all others
      if(!$scope.show_bank1_dialog){
      $scope.show_bank1_dialog = true;
      } else {
        $scope.show_bank1_dialog = false;
      }
      $scope.show_bank2_dialog = false;
      $scope.show_agg_dialog = false;

  }

  $scope.toggleBank2 = function() {
      //toggle only 'bank2-transactions' div tag using "show_bank2_dialog" and hide all others
      if(!$scope.show_bank2_dialog){
            $scope.show_bank2_dialog = true;
            } else {
              $scope.show_bank2_dialog = false;
            }
       $scope.show_bank1_dialog = false;
      $scope.show_agg_dialog = false;
  }

  $scope.toggleAllBank = function() {
      //toggle only 'show-agg' div tag using "show_agg_dialog" and hide all others
      if(!$scope.show_agg_dialog){
                  $scope.show_agg_dialog = true;
                  } else {
                    $scope.show_agg_dialog = false;
                  }
      $scope.show_bank1_dialog = false;
    $scope.show_bank2_dialog = false;
  }


$scope.callOnLoad = function() {
    this.getBank1AccountBalance();
    this.getBank2AccountBalance();
    this.getBank1TransactionDetails();
    this.getBank2TransactionDetails();
  }


    $scope.init = function() {
    try{
        this.getBank1AccountBalance();
        this.getBank2AccountBalance();
        this.getBank1TransactionDetails();
        this.getBank2TransactionDetails();
        } catch(e){}
       };
});
