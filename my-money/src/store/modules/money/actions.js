export function addMoney(money) {
  return {
    type: 'ADD_MONEY',
    money,
  };
}

export function removeMoney(id) {
  return {
    type: 'REMOVE_MONEY',
    id,
  };
}
