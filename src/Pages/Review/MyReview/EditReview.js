import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditReview = () => {
  const router = useParams();
  const { refresh, setRefresh } = useState(false);
  const [review, setReview] = useState({});
  const { id } = router;
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://kh-organic-food-server.vercel.app/allfood/${review}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setReview(data);
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  }, [refresh, id]);

  const handleEditFood = async (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form?.message.value;

    const edtReview = {
      message,
    };

    fetch(`https://kh-organic-food-server.vercel.app/review/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.data);
          navigate("/review");
        } else {
          toast.error(data.error);
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <form onSubmit={handleEditFood}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-10">
          <input
            type="text"
            name="message"
            placeholder="review"
            defaultValue={review?.message}
            className="input input-bordered input-primary rounded-lg "
          />
        </div>
        <div className="flex justify-center m-4">
          <button
            type="submit"
            className="btn btn-outline btn-warning rounded-lg"
          >
            Edit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditReview;
