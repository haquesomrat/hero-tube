const categoryContainer = document.getElementById("category-list");
const cardContainer = document.getElementById("card-container");
const sortBtn = document.getElementById("sort-by-views");
const categoryUrl =
  "https://openapi.programming-hero.com/api/videos/categories";
const cardUrl = "https://openapi.programming-hero.com/api/videos/category";

//create human readable time
const timesAgo = (duration) => {
  let durationInNumber = Number(duration);
  let hours = Math.floor(durationInNumber / 3600);
  let minutes = Math.floor((durationInNumber % 3600) / 60);

  let time = `${hours === 0 ? "" : hours} hours ${
    minutes === 0 ? "" : minutes
  } minutes ago`;
  if (hours !== 0 && minutes !== 0) {
    return time;
  } else {
    return "";
  }
};

// sort by views
const sortByViews = (data) => {
  const sortedData = data.sort((a, b) => {
    return parseFloat(b.others.views) - parseFloat(a.others.views);
  });
  return sortedData;
};

// get category id
const getCategoryId = function (container, element, activeClass) {
  const btnList = Array.from(container.querySelectorAll(element));
  const currentBtn = btnList.find((btn) => {
    return btn.classList.contains(activeClass);
  });
  return currentBtn.getAttribute("data-category-id");
};

// fetch data
const fetchData = async function (url) {
  const res = await fetch(url);
  const jsonData = await res.json();
  return jsonData.data;
};

// render categories
const renderCategories = async function () {
  let outputHtml = "";

  const categories = await fetchData(categoryUrl);

  categories.forEach((item) => {
    outputHtml += `<button class="button ${
      item.category_id === "1000" ? "button-active" : ""
    }" data-category-id="${item.category_id}">${item.category}</button>`;
  });
  categoryContainer.innerHTML = outputHtml;
};

// render cards
const renderCards = async function (data = []) {
  let outputHtml = "";

  if (data.length > 0) {
    data.forEach(function (card) {
      outputHtml += `<div class="card col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 rounded-none">
              <figure class="aspect-video rounded-lg relative">
                <img src="${card.thumbnail}" alt="${card.title}" />
                <p
                  class="absolute bottom-2 right-2 text-xs bg px-1 rounded-md bg-dark-black text-white"
                >
                ${timesAgo(card.others.posted_date)}
                </p>
              </figure>
              <div class="card-body px-0 py-5">
                <div class="flex gap-3">
                  <div class="flex basis-3/12">
                    <img
                      class="rounded-full w-10 h-10 pt-1 object-fill"
                      src="${card.authors[0].profile_picture}"
                      alt="${card.authors[0].profile_name}"
                    />
                  </div>
                  <div class="space-y-2">
                    <h5 class="text-base text-dark-black font-bold">
                      Building a Winning UX Strategy Using the Kano Model
                    </h5>
                    <div class="flex gap-2 items-center">
                      <span class="text-sm text-gray-7">${
                        card.authors[0].profile_name
                      }</span>
                      <span>${
                        card.authors[0].verified
                          ? `<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_11_34)">
                          <path
                            d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z"
                            fill="#2568EF"
                          />
                          <path
                            d="M12.7094 7.20637L9.14062 10.7751L7.29062 8.92668C6.88906 8.52512 6.2375 8.52512 5.83594 8.92668C5.43437 9.32824 5.43437 9.97981 5.83594 10.3814L8.43125 12.9767C8.82187 13.3673 9.45625 13.3673 9.84687 12.9767L14.1625 8.66106C14.5641 8.25949 14.5641 7.60793 14.1625 7.20637C13.7609 6.80481 13.1109 6.80481 12.7094 7.20637Z"
                            fill="#FFFCEE"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_11_34">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg> `
                          : ""
                      }</span>
                    </div>
                    <p class="text-sm text-gray-7">${
                      card.others.views
                    } views</p>
                  </div>
                </div>
              </div>
            </div>
      `;
    });
  } else {
    outputHtml += `<div class="col-span-12 p-20 lg:p-52 flex flex-col gap-8 items-center justify-center">
    <img class="shrink-0" src="./img/Icon.png" alt="not found" />
    <h3 class="text-2xl lg:text-4xl font-semibold text-center text-dark-black">
      Oops!! Sorry, <br />  There is no content.
    </h3>
    </div>`;
  }
  // console.log(data);

  cardContainer.innerHTML = outputHtml;
};

// fetch cards
const fetchCards = async function (categoryId = "1000") {
  const url = `${cardUrl}/${categoryId}`;
  const data = await fetchData(url);
  renderCards(data);
};

// change active button
categoryContainer.addEventListener("click", function (event) {
  const btn = event.target.closest("button");
  const btnList = this.querySelectorAll("button");

  if (!btn) {
    return;
  }

  btnList.forEach(function (button) {
    button.classList.remove("button-active");
  });

  btn.classList.add("button-active");

  let categoryId = btn.getAttribute("data-category-id");

  fetchCards(categoryId);
});

// sort button
sortBtn.addEventListener("click", async function () {
  const categoryId = getCategoryId(
    categoryContainer,
    "button",
    "button-active"
  );
  const url = `${cardUrl}/${categoryId}`;
  const data = await fetchData(url);
  const sortedData = sortByViews(data);

  renderCards(sortedData);
});

renderCategories();
fetchCards();
