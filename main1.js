function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function calculatePrimeSum() {
  const numA = parseInt(document.getElementById("numA").value);
  const numB = parseInt(document.getElementById("numB").value);
  let primeSum = 0;

  for (let i = numA; i <= numB; i++) {
    if (isPrime(i)) {
      primeSum += i;
    }
  }

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `<p>Tổng các chữ số giữa 2 số ${numA} và ${numB}: ${primeSum}</p>`;
}
