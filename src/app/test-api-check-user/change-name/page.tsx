// import { auth0 } from "@/lib/auth0";
// import axios from "axios";

// const changeName = async () => {
//   const sessionId = (await auth0.getSession())?.user.sub;
//   const response = await axios.post(
//     "http://localhost:8080/retailer-dashboard/find-retailer",
//     {
//       userId: sessionId,
//     },
//   );

//   const retailersId = response.data.id;
//   console.log(retailersId);

//   const r = await axios.post(
//     "http://localhost:8080/retailer-dashboard/get-orders",
//     {
//       retailer_id: retailersId,
//     },
//   );
//   console.log(r.data);
//   const ProdId = r.data["0"].productId;
//   console.log("PID ", ProdId);
//   const changeName = await axios.post(
//     "http://localhost:8080/product/change-name",
//     {
//       product_id: ProdId,
//       name: "TEST",
//     },
//   );

//   console.log(changeName.data);
//   //   const r1 = await axios.post("http://localhost:8080/product/create-product", {
//   //     name: "TEST W Stock 100 a-t s-f ",
//   //     description: "This is a test product",
//   //     priceInCents: 5000,
//   //     stock: 100,
//   //     isAvailable: true,
//   //     isShowing: false,
//   //     userId: "9c7773e3-c0a9-4c3e-ae5a-d5ae31ac7dfe",
//   //   });
//   //   console.log(r1.data);
// };

// export default changeName;
