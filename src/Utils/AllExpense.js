 
import useExpense from '../hooks/useExpense';

export  const allExpenses = () => {
    
    const [allExpense, allExpenseLoading, refetch] = useExpense();
  // console.log(allExpense);
  let totalBallExpense = 0;
  let totalTapeExpense = 0;
  allExpense.forEach((element) => {
    // console.log(element);
    totalBallExpense = totalBallExpense + element.ballCost;
    totalTapeExpense = totalTapeExpense + element.tapeCost;
  });
  // console.log(totalBallExpense, totalTapeExpense);
const totalExpense=totalBallExpense + totalTapeExpense;

return totalExpense;

};

 