import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
import MyReviewRow from "./MyreviewRow";

const MyReview = () => {
    useTitle('Myreview')
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://kh-organic-food-server.vercel.app/review?email=${user?.email}`,
      {
        headers: {
          autuorization: `Bearer ${localStorage.getItem("food-token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You sure Delete Your Review");

    if (proceed) {
      fetch(`https://kh-organic-food-server.vercel.app/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted your review successfully");
            const remaining = reviews.filter((rvw) => rvw._id !== id);
            setReviews(remaining);
          }
        });
    }
  };
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/review/edit/${id}`);
  };

  return (
    <div>
      {reviews?.length > 0 ? (
        <h1 className="text-2xl text-center">
          See Your All Reviews {reviews.length}
        </h1>
      ) : (
        <h2 className="text-2xl text-center">No reviews were added</h2>
      )}

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            {reviews.map((review) => (
              <MyReviewRow
                key={review._id}
                review={review}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              ></MyReviewRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
