// Dummy data for colleges
const colleges = [
  {
    cdRank: 1,
    name: "IIT-Madras - Indian Institute of Technology -[IITM], Chennai",
    courseFee: "₹1,20,000",
    placement: "90%",
    userReview: "8.6/10 (Based on 289 User reviews)",
    ranking: "#3rd/131 in India (India Today 2023)",
    featured: true,
    logo: "https://tse2.mm.bing.net/th?id=OIP.fvAM6ZdgiOvUwyKOGxXMPAHaHa&pid=Api&P=0&h=180" 
  },
  {
    cdRank: 2,
    name: "IIT-Bombay - Indian Institute of Technology, Mumbai",
    courseFee: "₹1,40,000",
    placement: "92%",
    userReview: "9.1/10 (Based on 300 User reviews)",
    ranking: "#2nd/131 in India (India Today 2023)",
    featured: false,
    logo: "https://tse2.mm.bing.net/th?id=OIP.2suPt9eRLRe38pPAualinwAAAA&pid=Api&P=0&h=180" 
  },
  {
    cdRank: 3,
    name: "IIT-Delhi - Indian Institute of Technology, New Delhi",
    courseFee: "₹1,20,000",
    placement: "93%",
    userReview: "8.9/10 (Based on 250 User reviews)",
    ranking: "#1st/131 in India (India Today 2023)",
    featured: false,
    logo: "https://tse2.mm.bing.net/th?id=OIP.SiOFGI2w0B1679obVLuTmgHaHa&pid=Api&P=0&h=180" 
  },
  {
    cdRank: 4,
    name: "IISc Bangalore - Indian Institute of Science, Bangalore",
    courseFee: "₹2,00,000",
    placement: "95%",
    userReview: "9.0/10 (Based on 200 User reviews)",
    ranking: "#4th/131 in India (India Today 2023)",
    featured: true,
    logo: "https://onlinecourses-archive.nptel.ac.in/iitmtestcourse_4/assets/img/iitlogos_(1).jpg" 
  },
  {
    cdRank: 5,
    name: "BITS Pilani - Birla Institute of Technology and Science, Pilani",
    courseFee: "₹1,80,000",
    placement: "91%",
    userReview: "8.5/10 (Based on 220 User reviews)",
    ranking: "#5th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://tse2.mm.bing.net/th?id=OIP.nR6K4Rjh8Mg1Kq6LlbXoAwAAAA&pid=Api&P=0&h=180" 
  },
  {
    cdRank: 6,
    name: "NIT Trichy - National Institute of Technology, Tiruchirappalli",
    courseFee: "₹1,30,000",
    placement: "88%",
    userReview: "8.2/10 (Based on 180 User reviews)",
    ranking: "#6th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://tse2.mm.bing.net/th?id=OIP.VfJu5Z8hDYvrbHusByqe-gHaDz&pid=Api&P=0&h=180" 
  },
  {
    cdRank: 7,
    name: "VIT Vellore - VIT University, Vellore",
    courseFee: "₹1,40,000",
    placement: "87%",
    userReview: "8.0/10 (Based on 150 User reviews)",
    ranking: "#7th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://example.com/logos/vit_vellore.png" 
  },
  {
    cdRank: 8,
    name: "DTU - Delhi Technological University, Delhi",
    courseFee: "₹1,60,000",
    placement: "95%",
    userReview: "10/10 (Based on 170 User reviews)",
    ranking: "#8th/131 in India (India Today 2023)",
    featured: true,
    logo: "https://tse4.mm.bing.net/th?id=OIP.nSmDOENn8ztJM_g2W-96tQHaHa&pid=Api&P=0&h=180" 
  },
  {
    cdRank: 9,
    name: "IIIT Hyderabad - International Institute of Information Technology, Hyderabad",
    courseFee: "₹1,70,000",
    placement: "94%",
    userReview: "9.2/10 (Based on 240 User reviews)",
    ranking: "#9th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://example.com/logos/iiit_hyderabad.png" 
  },
  {
    cdRank: 10,
    name: "NIT Suratkal - National Institute of Technology, Surathkal",
    courseFee: "₹1,90,000",
    placement: "86%",
    userReview: "8.3/10 (Based on 160 User reviews)",
    ranking: "#10th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://example.com/logos/nit_suratkal.png" // Replace with actual logo URL
  },
  {
    cdRank: 11,
    name: "IIT Kharagpur - Indian Institute of Technology, Kharagpur",
    courseFee: "₹1,70,000",
    placement: "89%",
    userReview: "8.8/10 (Based on 250 User reviews)",
    ranking: "#11th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://tse2.mm.bing.net/th?id=OIP.LWRtuUhbrMuFp8R9AMJ0gAHaIS&pid=Api&P=0&h=180" // Replace with actual logo URL
  },
  {
    cdRank: 12,
    name: "NIT Warangal - National Institute of Technology, Warangal",
    courseFee: "₹1,40,000",
    placement: "85%",
    userReview: "8.1/10 (Based on 160 User reviews)",
    ranking: "#12th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://tse1.mm.bing.net/th?id=OIP.rF-yr_sX_6UClH1hN1_OXgAAAA&pid=Api&P=0&h=180" // Replace with actual logo URL
  },
  {
    cdRank: 13,
    name: "IIT Gandhinagar - Indian Institute of Technology, Gandhinagar",
    courseFee: "₹1,20,000",
    placement: "84%",
    userReview: "8.0/10 (Based on 120 User reviews)",
    ranking: "#13th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://example.com/logos/iit_gandhinagar.png" // Replace with actual logo URL
  },
  {
    cdRank: 14,
    name: "Thapar Institute of Engineering and Technology, Patiala",
    courseFee: "₹1,50,000",
    placement: "83%",
    userReview: "8.4/10 (Based on 130 User reviews)",
    ranking: "#14th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://tse2.mm.bing.net/th?id=OIP.b1reS_xUg8A-2uUNdwWncwHaGC&pid=Api&P=0&h=180" // Replace with actual logo URL
  },
  {
    cdRank: 15,
    name: "SRM Institute of Science and Technology, Chennai",
    courseFee: "₹1,00,000",
    placement: "82%",
    userReview: "8.5/10 (Based on 140 User reviews)",
    ranking: "#15th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://example.com/logos/srm_institute.png" // Replace with actual logo URL
  },
  {
    cdRank: 16,
    name: "Shiv Nadar University, Greater Noida",
    courseFee: "₹1,20,000",
    placement: "81%",
    userReview: "8.7/10 (Based on 110 User reviews)",
    ranking: "#16th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://example.com/logos/shiv_nadar_university.png" // Replace with actual logo URL
  },
  {
    cdRank: 17,
    name: "Manipal Institute of Technology, Manipal",
    courseFee: "₹1,30,000",
    placement: "80%",
    userReview: "8.3/10 (Based on 115 User reviews)",
    ranking: "#17th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://example.com/logos/manipal_institute.png" // Replace with actual logo URL
  },
  {
    cdRank: 18,
    name: "UPES Dehradun - University of Petroleum and Energy Studies",
    courseFee: "₹1,10,000",
    placement: "79%",
    userReview: "8.1/10 (Based on 105 User reviews)",
    ranking: "#18th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://tse2.mm.bing.net/th?id=OIP.zVYvpVJlnL-MqoNOJY-T6AAAAA&pid=Api&P=0&h=180" // Replace with actual logo URL
  },
  {
    cdRank: 19,
    name: "NMIMS Mukesh Patel School of Technology Management & Engineering, Mumbai",
    courseFee: "₹1,60,000",
    placement: "78%",
    userReview: "8.6/10 (Based on 125 User reviews)",
    ranking: "#19th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://tse1.mm.bing.net/th?id=OIP.3PIsteqWwilyq-Z-79COcgAAAA&pid=Api&P=0&h=180" // Replace with actual logo URL
  },
  {
    cdRank: 20,
    name: "Nirma University, Ahmedabad",
    courseFee: "₹1,40,000",
    placement: "76%",
    userReview: "8.2/10 (Based on 90 User reviews)",
    ranking: "#20th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://example.com/logos/nirma_university.png" // Replace with actual logo URL
  },
  // Additional colleges with logos
  {
    cdRank: 21,
    name: "LPU - Lovely Professional University, Punjab",
    courseFee: "₹1,00,000",
    placement: "80%",
    userReview: "8.4/10 (Based on 200 User reviews)",
    ranking: "#30th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://example.com/logos/lpu.png" // Replace with actual logo URL
  },
  {
    cdRank: 22,
    name: "MIT Pune - Maharashtra Institute of Technology, Pune",
    courseFee: "₹1,25,000",
    placement: "85%",
    userReview: "8.3/10 (Based on 150 User reviews)",
    ranking: "#40th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://tse3.mm.bing.net/th?id=OIP.oTNu4bXmLOC_ITfLqLCWQAAAAA&pid=Api&P=0&h=180" // Replace with actual logo URL
  },
  {
    cdRank: 23,
    name: "Shivaji University, Kolhapur",
    courseFee: "₹1,10,000",
    placement: "75%",
    userReview: "8.0/10 (Based on 100 User reviews)",
    ranking: "#50th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://example.com/logos/shivaji_university.png" // Replace with actual logo URL
  },
  {
    cdRank: 24,
    name: "KLE Technological University, Hubli",
    courseFee: "₹1,20,000",
    placement: "82%",
    userReview: "8.5/10 (Based on 130 User reviews)",
    ranking: "#45th/131 in India (India Today 2023)",
    featured: false,
    logo: "https://example.com/logos/kle_technological_university.png" // Replace with actual logo URL
  },
];

let currentPage = 0; // For infinite scroll
const collegesPerPage = 10; // Number of colleges to display per page

function populateTable(data) {
  const tableBody = document.querySelector("#collegeTable tbody");
  const start = currentPage * collegesPerPage;
  const end = start + collegesPerPage;
  const currentColleges = data.slice(start, end);

  currentColleges.forEach((college) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${college.cdRank}</td>
      <td>
        <img src="${college.logo}" alt="${college.name} logo" style="width: 50px; height: auto;" /> 
        ${college.name} ${college.featured ? '' : ""
    }
        <div class="button-container">
          <button class="button">Apply Now</button>
          <button class="button">Download Brochure</button>
          <button class="button">Add to Compare</button>
        </div>
      </td>
      <td class="green-text">${college.courseFee}</td>
      <td>${college.placement}</td>
      <td>${college.userReview}</td>
      <td>${college.ranking}</td>
    `;

    tableBody.appendChild(row);
  });
}

// Event listener for scroll
window.addEventListener("scroll", () => {
  const tableBody = document.querySelector("#collegeTable tbody");
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    currentPage++;
    if (currentPage * collegesPerPage < colleges.length) {
      populateTable(colleges);
    }
  }
});

// Event listener for search input
document.getElementById("searchInput").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchTerm)
  );

  currentPage = 0; // Reset current page
  document.querySelector("#collegeTable tbody").innerHTML = ""; // Clear table
  populateTable(filteredColleges);
});

// Event listener for sorting
document.getElementById("sortSelect").addEventListener("change", function () {
  const sortValue = this.value;
  let sortedColleges = [...colleges]; // Create a copy of the original array

  switch (sortValue) {
    case "rankAsc":
      sortedColleges.sort((a, b) => a.cdRank - b.cdRank);
      break;
    case "rankDesc":
      sortedColleges.sort((a, b) => b.cdRank - a.cdRank);
      break;
    case "feeAsc":
      sortedColleges.sort(
        (a, b) =>
          parseInt(a.courseFee.replace(/₹|,/g, "")) -
          parseInt(b.courseFee.replace(/₹|,/g, ""))
      );
      break;
    case "feeDesc":
      sortedColleges.sort(
        (a, b) =>
          parseInt(b.courseFee.replace(/₹|,/g, "")) -
          parseInt(a.courseFee.replace(/₹|,/g, ""))
      );
      break;
    case "reviewAsc":
      sortedColleges.sort(
        (a, b) => parseFloat(a.userReview) - parseFloat(b.userReview)
      );
      break;
    case "reviewDesc":
      sortedColleges.sort(
        (a, b) => parseFloat(b.userReview) - parseFloat(a.userReview)
      );
      break;
    default:
      break;
  }

  currentPage = 0; // Reset current page
  document.querySelector("#collegeTable tbody").innerHTML = ""; // Clear table
  populateTable(sortedColleges);
});

// Call this function to load initial data
populateTable(colleges.slice(0, collegesPerPage));
