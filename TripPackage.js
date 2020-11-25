 import React from 'react';

export default function TripPackage(){
    return (
        <div>
          <h1 className=" text-info text-center text-capitalize m-2 p-2">Holiday Packages</h1>
<table class="table table-hover text-center bordered">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Package Name</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Goa Holiday Packages</td>
      <td>25110</td>
     
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Bengaluru Holiday Packages</td>
      <td>22000</td>
     
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Kashmir Holiday Packages</td>
      <td>50000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Ooty Holiday Packages</td>
      <td>25000</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}
