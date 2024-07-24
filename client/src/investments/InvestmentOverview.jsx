// import React from 'react';
// import { gql, useQuery } from '@apollo/client';
// import { useParams } from 'react-router-dom';

// const GET_INVESTMENT_DETAILS = gql`
//   query GetInvestmentDetails($id: ID!) {
//     investment(id: $id) {
//       id
//       name
//       type
//       currentValue
//       initialInvestment
//       date
//       description
//     }
//   }
// `;

// const InvestmentDetails = () => {
//   const { id } = useParams();
//   const { loading, error, data } = useQuery(GET_INVESTMENT_DETAILS, {
//     variables: { id },
//   });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const { investment } = data;

//   return (
//     <div>
//       <h2>{investment.name}</h2>
//       <p>Type: {investment.type}</p>
//       <p>Current Value: ${investment.currentValue.toFixed(2)}</p>
//       <p>Initial Investment: ${investment.initialInvestment.toFixed(2)}</p>
//       <p>Date: {new Date(investment.date).toLocaleDateString()}</p>
//       <p>Description: {investment.description}</p>
//     </div>
//   );
// };

// export default InvestmentDetails;
