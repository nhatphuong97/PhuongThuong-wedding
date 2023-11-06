import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axiosClient from "../../../axios/axiosClient";
import categoriesApi from "../../../axios/categoryApi";
import queryString from "query-string";
import "./style.scss";
import { Card, Typography } from "@material-tailwind/react";
CategoriesPage.propTypes = {};

function CategoriesPage(props) {
  const [categories, setCategories] = useState();
  useEffect(() => {
    const getAllCategory = async () => {
      setCategories(await categoriesApi.getAll());
    };

    getAllCategory();
  }, []);
  return (
    <div className="category">
      <h1 className="hello">Hello Page Categories</h1>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {categories?.map((head) => (
                <th
                  key={`head-${head.id}`}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70 "
                  >
                    {head.name}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {categories?.map(({ name, job, date }, index) => (
              <tr key={name} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {job}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {date}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Edit
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default CategoriesPage;
