// import { Controller } from "cx/ui";
// // import Control

// export default class LoanController  extends Controller{
//   init() {
//     this.addTrigger("calculate", ["P0", "N", "ir"], (P0, N, ir) => {
//       if (P0 > 0 && N > 0 && ir > 0) {
//         var payments = Array.from({ length: N + 1 });
//         var r = ir / 100 / 12;

//         var c = r / (1 - Math.pow(1 + r, -N)) * P0;
//         var total = c * N;

//         var remainingPrincipal = P0;

//         payments[0] = {
//           index: 0,
//           amount: 0,
//           principal: 0,
//           interest: 0,
//           remainingAmount: total
//         };

//         for (var i = 1; i <= N; i++) {
//           var interest = remainingPrincipal * r;

//           payments[i] = {
//             index: i,
//             amount: c,
//             principal: c - interest,
//             interest: interest,
//             remainingAmount: total - c * i
//           };
//           remainingPrincipal -= c - interest;
//         }

//         this.store.set("result", { payments, total, c, interest: total - P0 });
//       }
//     });
//   }
// }