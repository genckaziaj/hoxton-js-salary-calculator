let yourGrossSalary = 500;
let pensionContribution = (5 / 100) * yourGrossSalary;

console.log(pensionContribution);

let taxableAmount = yourGrossSalary - pensionContribution;

console.log(taxableAmount);

let personIsTaxed = undefined;

if (yourGrossSalary >= 0 && yourGrossSalary) {
  personIsTaxed = 0 / 100;
} else if (yourGrossSalary >= 80 && yourGrossSalary < 250) {
  personIsTaxed = 4 / 100;
} else if (yourGrossSalary >= 250 && yourGrossSalary < 450) {
  personIsTaxed = 8 / 100;
} else if (yourGrossSalary >= 450) {
  personIsTaxed = 10 / 100;
}

console.log(personIsTaxed);

let takeHomePay = taxableAmount - personIsTaxed * taxableAmount;

console.log(takeHomePay);

// Challenge
