// import React, { Component } from "react";

// export default class MainContent extends Component {
//   state = {
//     pageTitle: "Customers",
//     customersCount: 5,
//     customers: [
//       {
//         id: 1,
//         name: "Scott",
//         phone: "123-456",
//         address: { city: "New Dehli" },
//         photo: "https://picsum.photos/id/1010/60",
//       },
//       {
//         id: 2,
//         name: "John",
//         phone: "173-477",
//         address: { city: "London" },
//         photo: "https://picsum.photos/id/1011/60",
//       },
//       {
//         id: 3,
//         name: "Sasy",
//         phone: "144-458",
//         address: { city: "New York" },
//         photo: "https://picsum.photos/id/1012/60",
//       },
//       {
//         id: 4,
//         name: "Allen",
//         phone: null,
//         address: { city: "Berlin" },
//         photo: "https://picsum.photos/id/1013/60",
//       },
//       {
//         id: 5,
//         name: "James",
//         phone: null,
//         address: { city: "Tokyo" },
//         photo: "https://picsum.photos/id/1014/60",
//       },
//     ],
//   };

// // customerNameStyle =(custName) =>{
// // if(custName.startsWith('S')) return 'green-hightlight border-left';
// // else if(custName.startsWith('J')) return 'red-hightlight border-right';
// // else return'';
// // };


//   render() {
//     return (
//       <div>
//         <h4 className="m-1 p-1">
//           {this.state.pageTitle}
//           <span className="btn btn-secondary m-2">
//             {this.state.customersCount}
//           </span>

//           <button className="btn btn-info" onClick={this.onRefreshClick}>
//             Refresh
//           </button>
//         </h4>

//         <table className="table">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>photo</th>
//               <th>Customer Name</th>
//               <th>Phone</th>
//               <th>City</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.getCustomerRow()}
//             {/* {this.state.customers.map((cust) => {
//               return (
//                 <tr key={cust.id}>
//                   <td>{cust.id}</td>
//                   <td>{cust.name}</td> */}
//             {/* <td>{cust.phone == null ?  <div className='bg-warning p-2 text-center'>No phone</div>  : cust.phone}</td> */}
//             {/* <td>{this.getPhoneToRender(cust.phone)}</td>
//                   <td>{cust.address.city}</td>
//                 </tr>
//               );
//             })} */}
//           </tbody>
//         </table>
//       </div>
//     );
//   }

//   onRefreshClick = () => {
//     //console.log('Refresh clicker');
//     this.setState({
//       customersCount: 7,
//     });
//   };

//   getPhoneToRender = (phone) => {
//     if (phone) return phone;
//     else {
//       return <div className="bg-warning p-2 text-center">No phone</div>;
//     }
//   };

//   getCustomerRow = () => {
//     return this.state.customers.map((cust, index) => {
//       return (
//         <tr key={cust.id}>
//           <td>{cust.id}</td>
//           <td><img src={cust.photo} alt='Customer'/>
//           <div>
//               <button className='btn btn-sm btn-secondary' onClick={() =>{this.onChangePictureClick(cust, index);}}>Change Picture</button>
//           </div>
//           </td>
//           <td>{cust.name}</td>
//           <td>{this.getPhoneToRender(cust.phone)}</td>
//           <td>{cust.address.city}</td>
//         </tr>
//       );
//     });
//   };

//   onChangePictureClick = (cust, index) =>{
//     //console.log(cust);

//     var custArr = this.state.customers;
//     custArr[index].photo ='https://picsum.photos/id/104/60';
//     this.setState({customers:custArr});
//    };
// }


