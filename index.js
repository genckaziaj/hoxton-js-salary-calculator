let YourGrossSalary = 500;
let pensionContribution = (5 / 100) * YourGrossSalary;

console.log(pensionContribution);

let taxableAmount = YourGrossSalary - pensionContribution;

console.log(taxableAmount);

let personIsTaxed = undefined;

if (YourGrossSalary < 80) {
  personIsTaxed = 0 / 100;
} else if (YourGrossSalary >= 80 && YourGrossSalary < 250) {
  personIsTaxed = 4 / 100;
} else if (YourGrossSalary >= 250 && YourGrossSalary < 450) {
  personIsTaxed = 8 / 100;
} else if (YourGrossSalary >= 450) {
  personIsTaxed = 10 / 100;
}

console.log(personIsTaxed);

let takeHomePay = taxableAmount - personIsTaxed * taxableAmount;

console.log(takeHomePay);
