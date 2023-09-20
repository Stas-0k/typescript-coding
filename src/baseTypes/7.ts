/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY,
}

function isWeekend (dayName: Day) {
  if(dayName===Day.SATURDAY || dayName===Day.SUNDAY) {
    console.log(true)
    
  } else {
    console.log(false)
  }
 
}




isWeekend(Day.WEDNESDAY)


export {};