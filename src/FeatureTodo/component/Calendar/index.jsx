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
const listData = [
  { id: 1, name: "sleep", status: "new" },
  { id: 2, name: "do work", status: "new" },
  { id: 3, name: "code", status: "new" },
];

function Calendar(props) {
  return (
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 inline-block">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 flex">
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
            <th scope="col" class="px-2 py-3 flex-1" key={i}>
              {value.key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr class=" border-b ">
          <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap ">
            Apple MacBook Pro 17"
          </th>
          <td class="px-6 py-4">Silver</td>
          <td class="px-6 py-4">Laptop</td>
          <td class="px-6 py-4">$2999</td>
        </tr>
        <tr class=" border-b ">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Microsoft Surface Pro
          </th>
          <td class="px-6 py-4">White</td>
          <td class="px-6 py-4">Laptop PC</td>
          <td class="px-6 py-4">$1999</td>
        </tr>
        <tr class="bg-white dark:bg-gray-800">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Magic Mouse 2
          </th>
          <td class="px-6 py-4">Black</td>
          <td class="px-6 py-4">Accessories</td>
          <td class="px-6 py-4">$99</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Calendar;
