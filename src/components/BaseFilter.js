import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const BaseFilter = ({ callback, sumPrizeAmount }) => {
  const [allYears, setAllYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState();
  useEffect(() => {
    getYear();
  }, []);
  function getYear() {
    const currentYear = new Date().getFullYear();
    const startYear = 1901;
    const years = [];
    for (let year = startYear; year <= currentYear; year++) {
      years.push(year);
    }
    setAllYears(years.reverse());
  }
  const handleYearChange = (event) => {
    // Invoke the callback function
    const { value } = event.target;
    setSelectedYear(value);
  };
  const applyFilter = () => {
    callback(selectedYear);
  };
  return (
    <div>
      <div className="p-4">
        <p>เลือกตัวกรอง</p>
        <hr />
        <p>ปี</p>
        <Form.Select
          onChange={handleYearChange}
          aria-label="Default select example"
          name="year"
        >
          <option value="">ทั้งหมด</option>
          {allYears.map((value) => {
            return (
              <option key={value} value={value}>
                {value}
              </option>
            );
          })}
        </Form.Select>
        <div className="py-4">
          <div className="d-grid gap-2">
            <Button onClick={applyFilter} variant="secondary">
              Apply Filter
            </Button>
          </div>
        </div>
        {}
        <div className="py-4">
          <p>total prize: {sumPrizeAmount.toLocaleString() || ""}</p>
        </div>
      </div>
    </div>
  );
};

export default BaseFilter;
