import { Col, Row } from "react-bootstrap";
import "./App.css";
import BaseHeader from "./components/BaseHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import BasePagination from "./components/BasePagination";
import BaseFilter from "./components/BaseFilter";
import BaseLoading from "./components/BaseLoading";
import NoData from "./components/NoData";
import NobelPrizesDetail from "./components/NobelPrizesDetail";

function App() {
  const [isLoading, setIsLoading] = useState([]);
  const [nobelPrizes, setNobelPrizes] = useState([]);
  const [currentYear, setCurrentYear] = useState();
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(0);
  const [sumPrizeAmount, setsumPrizeAmount] = useState(0);
  async function getNobelPrizes() {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=${
        currentYear || ""
      }&offset=${offset || 0}`
    );
    setNobelPrizes(data.nobelPrizes);
    setLimit(data.meta.limit);

    // คำนวนผลรวมของ page
    const totalPage = Math.ceil(data.meta.count / data.meta.limit);
    setTotalPages(totalPage);

    // คำนวนผลรวม ของ prizeAmount
    const result = data.nobelPrizes.reduce((sum, obj) => {
      return sum + obj.prizeAmount;
    }, 0);
    setsumPrizeAmount(result);
    setIsLoading(false);
  }

  // รอรับค่า offset
  const handleCallbackOffset = (pageNumber) => {
    // คำนวน offset เพือกำหนดการดึงข้อมูล
    const calOffset = pageNumber * limit - limit;
    setCurrentPage(pageNumber);
    setOffset(calOffset);
  };

  const handleCallbackSelectedYear = (year) => {
    setCurrentYear(year);
    setOffset(0);
    setTotalPages(0);
    setCurrentPage(1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getNobelPrizes();
  }, [currentYear, offset]);
  return (
    <div className="p-4">
      <BaseHeader selectedYear={currentYear} />
      <Row className="my-3 mx-0 p-0">
        <Col md={3} className="bg-light">
          <BaseFilter
            callback={handleCallbackSelectedYear}
            sumPrizeAmount={sumPrizeAmount}
          />
        </Col>
        <Col md={9} className="p-0">
          <div className="px-4 content">
            {isLoading ? (
              <BaseLoading />
            ) : (
              <div className="px-4 content">
                {nobelPrizes.length === 0 ? (
                  <NoData />
                ) : (
                  <div>
                    {nobelPrizes.map((nobelPrize, index) => {
                      return (
                        <NobelPrizesDetail
                          key={index}
                          awardYear={nobelPrize?.awardYear}
                          categoryFullName={nobelPrize?.categoryFullName?.en}
                          laureates={nobelPrize?.laureates}
                        />
                      );
                    })}
                    <div className="d-flex w-100 justify-content-center mt-4">
                      <BasePagination
                        currentPage={currentPage}
                        callback={handleCallbackOffset}
                        totalPages={totalPages}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
