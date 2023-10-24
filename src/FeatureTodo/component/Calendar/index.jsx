import React from "react";
import PropTypes from "prop-types";

Calendar.propTypes = {};

const listTitle = [
  { key: "Sun" },
  { key: "Mon" },
  { key: "Tue" },
  { key: "Wed" },
  { key: "Thu" },
  { key: "Fri" },
  { key: "Sat" },
];
const listDate1 = [
  { key: "31" },
  { key: "1" },
  { key: "2" },
  { key: "3" },
  { key: "4" },
  { key: "5" },
  { key: "6" },
];

const listDate2 = [
  { key: "7" },
  { key: "8" },
  { key: "9" },
  { key: "10" },
  { key: "11" },
  { key: "12" },
  { key: "13" },
];
const listDate3 = [
  { key: "14" },
  { key: "15" },
  { key: "16" },
  { key: "17" },
  { key: "18" },
  { key: "19" },
  { key: "20" },
];
const listDate4 = [
  { key: "21" },
  { key: "22" },
  { key: "23" },
  { key: "24" },
  { key: "25" },
  { key: "26" },
  { key: "27" },
];
const listDate5 = [
  { key: "28" },
  { key: "29" },
  { key: "30" },
  { key: "31" },
  { key: "1" },
  { key: "2" },
  { key: "3" },
];

function Calendar(props) {
  return (
    <div className="items-center justify-center flex">
      <table className="w-max text-sm text-left block table-auto font-cuprum">
        <thead className="text-base text-red-500">
          <tr>
            {/* <th scope="col" class="px-6 py-3">
              Product name
            </th>
            <th scope="col" class="px-6 py-3">
              Color
            </th>
            <th scope="col" class="px-6 py-3">
              Category
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th> */}
            {listTitle.map((value, i) => (
              <th
                scope="col"
                className="px-2 py-3"
                key={`listTitle ${value.key}`}
              >
                {value.key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-base text-white">
          <tr>
            {listDate1.map((value, i) => (
              <th
                scope="row"
                className={`px-2 text-center ${
                  i === 6 ? "bg-white rounded-lg text-red-400" : ""
                } `}
                key={`listDate1 ${value.key}`}
              >
                {value.key}
              </th>
            ))}
          </tr>
          <tr>
            {listDate2.map((value, i) => (
              <th
                scope="row"
                className="px-2 text-center"
                key={`listDate2 ${value.key}`}
              >
                {value.key}
              </th>
            ))}
          </tr>
          <tr>
            {listDate3.map((value, i) => (
              <th
                scope="row"
                className="px-2 text-center"
                key={`listDate3 ${value.key}`}
              >
                {value.key}
              </th>
            ))}
          </tr>
          <tr>
            {listDate4.map((value, i) => (
              <th
                scope="row"
                className="px-2 text-center"
                key={`listDate4 ${value.key}`}
              >
                {value.key}
              </th>
            ))}
          </tr>
          <tr>
            {listDate5.map((value, i) => (
              <th
                scope="row"
                className="px-2 text-center"
                key={`listDate5 ${value.key}`}
              >
                {value.key}
              </th>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
