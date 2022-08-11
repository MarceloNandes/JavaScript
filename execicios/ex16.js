function calculadora (A,operador,B) {
   switch (operador) {
      case '+':
        console.log(A + B)
        break
      case '-':
        console.log(A - B)
        break
      case '*':
        console.log(A * B)
        break
      case '/':
        console.log(A / B)
        break
      default:'operação invalida'
   }
}

calculadora(2, '+', 3)
calculadora(2, '-', 3)
calculadora(2, '*', 3)
calculadora(2, '/', 3)