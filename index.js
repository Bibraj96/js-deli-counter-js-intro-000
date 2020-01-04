function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katsDeliLine.length > 0) return `Currently serving ${katsDeliLine.shift().}`;
  else return "There is nobody waiting to be served!";
}
