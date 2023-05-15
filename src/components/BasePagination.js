import React from "react";
import { Pagination } from "react-bootstrap";

const BasePagination = ({ currentPage, totalPages, callback }) => {
  const renderPagination = () => {
    const pages = [];

    // ปุ่มแรกและปุ่มก่อนหน้า
    pages.push(
      <Pagination.First
        key="first"
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      />
    );
    pages.push(
      <Pagination.Prev
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
    );

    // รายการจุดไข่ปลาสำหรับผลลัพธ์ก่อนหน้า
    if (currentPage > 3) {
      pages.push(<Pagination.Ellipsis key="prevEllipsis" />);
    }

    // Pages
    for (let page = currentPage - 2; page <= currentPage + 2; page++) {
      if (page > 0 && page <= totalPages) {
        pages.push(
          <Pagination.Item
            key={page}
            active={currentPage === page}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Pagination.Item>
        );
      }
    }

    // รายการจุดไข่ปลาสำหรับผลลัพธ์ต่อเนื่อง
    if (currentPage + 2 < totalPages) {
      pages.push(<Pagination.Ellipsis key="nextEllipsis" />);
    }

    // ปุ่มถัดไปและปุ่มสุดท้าย
    pages.push(
      <Pagination.Next
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    );
    pages.push(
      <Pagination.Last
        key="last"
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      />
    );

    return pages;
  };
  const handlePageChange = (pageNumber) => {
    callback(pageNumber);
  };

  return (
    <div>
      <Pagination>{renderPagination()}</Pagination>
    </div>
  );
};

export default BasePagination;
