/* Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions */

const transaction:number[]= [50000,-2000,3000,-15000,-200,-300,4000,-3000]
let amtCredit:number=0;
let amtDebit:number=0;
let totalCreditAmt:number=0;
let totalDebitAmt:number=0;
let suspiciousTransaction:number=0;
 for(const amount of transaction){

    if(amount>0)
    {
        amtCredit++
        totalCreditAmt+=amount;
        if(amount>10000)
        {
            suspiciousTransaction++;
        }

    }
    if(amount<0)
    {
        amtDebit++;
        totalDebitAmt-=amount
        if(amount<-10000)
        {
            suspiciousTransaction++;
        }
    }
 }

 const finalBalance= totalCreditAmt - totalDebitAmt;

 console.log("--Transaction Summary--")
 console.log("Credit transaction", amtCredit)
 console.log("Debit transaction", amtDebit)
 console.log("Total Credit ", totalCreditAmt)
 console.log("Total Debit ", totalDebitAmt)
 console.log("Final balance", finalBalance)
  console.log("Suspicious credit", suspiciousTransaction)
  