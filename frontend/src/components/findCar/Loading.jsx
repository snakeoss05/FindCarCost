import React from "react";

export default function Loading() {
  return (
    <div class="flex flex-row gap-4 w-full px-4">
      <div class="flex gap-4 items-center">
        <div class="skeleton w-16 h-16 rounded-full shrink-0"></div>
        <div class="flex flex-col gap-4">
          <div class="skeleton h-4 w-20"></div>
          <div class="skeleton h-4 w-28"></div>
        </div>
      </div>
      <div class="skeleton h-8 w-8 ms-auto me-4"></div>
    </div>
  );
}
