import React from "react";
import Toggle from "../inputs/Toggle";
export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="px-4 mb-2 grid grid-cols-2 gap-x-8 gap-y-4">
      <Toggle name="state" checked={filter.state} onChange={setFilter} />
      <Toggle name="city" checked={filter.city} onChange={setFilter} />
      <Toggle
        name="city_district"
        checked={filter.city_district}
        onChange={setFilter}
      />
      <Toggle name="postcode" checked={filter.postcode} onChange={setFilter} />
    </div>
  );
}
