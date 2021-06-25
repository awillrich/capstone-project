export default function GetTests() {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiYzdkMzAyMjhiOGM3Y2M3ZGZhMmU0YjkyNzg3YzUzMDZlNmJkMjc2NjdjYTIyMWQyZmIyNGRhYTc3ZjE1MjMzM2U3MGFlYTU5NmNlMDJmNTAiLCJpYXQiOjE2MjM0MTc4MDAsIm5iZiI6MTYyMzQxNzgwMCwiZXhwIjoxNjU0OTUzODAwLCJzdWIiOiI3NDJmY2QwNS1jOTg1LTQ5NGEtYjY5ZC1hYTQ1NDdmYzIwY2EiLCJzY29wZXMiOltdfQ.wO4aezDkyDetB1BuNpFYJ1BtXbtjs8r_WIBTgCT4mRUaO9O90ffGh0QCZXD4eE_WVITSta0J_-BeLfB1D8rA30iUCrzWMWfMuEaYLcB-uE2z1cEG6DHV8khrI0IcRAlORvIsCMj87X9FU7MJo1gwwD_s_Ah6LvVKPEZnNi9Vpdac33vd4P4oZcohFSnThqohoUN1DvEDQs1nW5YMpR6G6whAziHnOw_iRsvL4fZUUQhZpqQNQ2VHRToLNJheLMMXSZCVByWtODkRbAlBhQUUkWXnWM4zerUCh9YBV2DC8zONFguRyzMT5SmbdEuPanZEq2y2sFGisv__QM9CHhxGlL9Pb1MzbCtmMF3l2DuHbdMVbrv39AtCQR7BSt3XRQ_EaYn0aT_Rq8lgoRv6IRzFRc3J2AneNCNhViR8tGXI2oyOdFPN9KZGWw3r7NxX3fv2zFBC8Tj6tixld4HgwnEs61_HCdLrZ2kyNG-R5ae5tzXSSJo1l2l1TAr1kTWO1_e6Ly4nzghjJ-U326TNrskisVw_P0-CNdw_NbBU8H2rmuag4kPz1958tlPp88k5ZB6tSLU6Vd2lAUMSVsdA_DGw6Oo5JylmS7bFfawzo2dy2AP-cY_zHF2eWj6ELRK2eCnNDXSgVGzeEoTzZ8Oe_WQhYvSUu4RnRnBursxIEeUCN_Q"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("http://localhost:8000/api/tests", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
