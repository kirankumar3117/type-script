function caluculateTax(income:number):number{
   if (income<50_000) return income*1.3;
   return income*12;

}