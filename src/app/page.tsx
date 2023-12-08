"use client";
import React, { useState, useEffect } from "react";
import { MachineModel } from "@prisma/client";
import sendForm from "./sendForm";

const Home = () => {
  const [batchForm, setBatchForm] = useState({
    model: null as MachineModel | null,
    deliveryDate: new Date(),
    quantity: 0,
    licenseLevel: 0,
    comment: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendForm(batchForm);
    } catch (error) {
      console.error("Error creating sample data:", error);
    }
  };

  return (
    <div className="custom-border rounded px-16 py-8 w-full md:w-6/12 lg:w-5/12 ">
      <div className="row mb-10">
        <span className="text-3xl font-semibold">Batch Form</span>
      </div>
      {/**Form*/}
      <form onSubmit={(e) => handleSubmit(e)}>
        {/**Model */}
        <div className="row mb-3 border rounded bg-white">
          <select
            className="w-full border-none p-2 text-black bg-white"
            onChange={(e) =>
              setBatchForm((prev) => ({
                ...prev,
                model: e.target.value as MachineModel,
              }))
            }
            required
          >
            <option value="" hidden>
              Model
            </option>
            <option value={MachineModel.MODEL_1}>Model 1</option>
            <option value={MachineModel.MODEL_2}>Model 2</option>
            <option value={MachineModel.MODEL_3}>Model 3</option>
          </select>
        </div>
        {/**Date */}
        <div className="row mb-3 border rounded">
          <input
            type="date"
            className="w-full border-none p-2 text-black"
            onChange={(e) =>
              setBatchForm((prev) => ({
                ...prev,
                deliveryDate: new Date(e.target.value),
              }))
            }
            required
          />
        </div>
        {/**Quantity */}
        <div className="row mb-3 border rounded">
          <input
            type="number"
            className="w-full border-none p-2 text-black appearance-none"
            required
            placeholder="Quantity"
            value={batchForm.quantity === 0 ? "Quantity" : batchForm.quantity}
            onChange={(e) => {
              const inputValue = e.target.value;
              if (!/[0-9]/.test(inputValue)) {
                e.preventDefault();
              } else {
                setBatchForm((prev) => ({
                  ...prev,
                  quantity: parseInt(e.target.value),
                }));
              }
            }}
          />
        </div>
        {/**License level */}
        <div className="row mb-3 border rounded bg-white">
          <select
            className="w-full border-none p-2 text-black bg-white"
            onChange={(e) => {
              setBatchForm((prev) => ({
                ...prev,
                licenseLevel: parseInt(e.target.value),
              }));
            }}
            required
          >
            <option value="" hidden>
              License Level
            </option>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => (
              <option value={level} key={`licence-level-${level}`}>
                {level}
              </option>
            ))}
          </select>
        </div>
        {/**Comment not required */}
        <div className="row mb-3 border rounded">
          <input
            type="text"
            className="w-full border-none p-2 text-black"
            placeholder="Comment (not required)"
            onChange={(e) =>
              setBatchForm((prev) => ({ ...prev, comment: e.target.value }))
            }
          />
        </div>

        {/**Submit button */}
        <div className="row mt-10">
          <button
            type="submit"
            className="bg-6e5634 hover:bg-4c3b25 text-white py-2 px-4 rounded w-full  "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
