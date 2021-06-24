// section for Faqs
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
	const btn = question.querySelector(".question-btn");
	// console.log(btn);

	btn.addEventListener("click", function () {
		// console.log(question);

		questions.forEach(function (item) {
			if (item !== question) {
				item.classList.remove("show-text");
			}
		});

		question.classList.toggle("show-text");
	});
});
// end of faqs section

// back to top button
const backToTopButton = document.querySelector("#back-to-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
	if (window.pageYOffset > 300) {
		if (!backToTopButton.classList.contains("btnEntrance")) {
			backToTopButton.classList.remove("btnExit");
			backToTopButton.classList.add("btnEntrance");
			backToTopButton.style.display = "block";
		}
	} else {
		if (backToTopButton.classList.contains("btnEntrance")) {
			backToTopButton.classList.remove("btnEntrance");
			backToTopButton.classList.add("btnExit");
			backToTopButton.style.display = "none";
		}
	}
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
	window.scrollTo(0, 0);
}

// reviews
// local reviews data
const reviews = [
	{
		id: 1,
		name: "Arti",
		img: "gallery/arti.jpg",
		text:
			"Absolutely outstanding hotel perfectly located. Helpful, friendly staff who go above and beyond to make sure you have the best time. It was my birthday during our stay, which we had not mentioned, but they obviously saw that at the check in. It was a lovely suprise when they left a bottle of champagne in the room! Also an excellent breakfast buffet. We will definetely come back with friends and I would highly recommend this hotel.",
	},
	{
		id: 2,
		name: "anna johnson",
		img:
			"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
		text:
			"Lovely hotel. Very comfortable. 10 minute walk to the old town. Breakfast was really good. Would definitely stay again.",
	},
	{
		id: 3,
		name: "Stiles",
		img:
			"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
		text:
			"We had a 3 night stay to enjoy the Wuse Christmas Markets, and were very satisfied with every aspect of the hotel. The staff are very friendly, helpful, and knowledgeable regarding places to visit in capital city. The hotel is very clean throughout, and our room was spacious with everything that we needed. Breakfast was substantial, and suited all tastes. The hotel is quiet, and is situated near to numerous restaurants, and a main supermarket, and within easy walking distance from the Christmas Markets. We would highly recommend a stay at this hotel..eww!",
	},
	{
		id: 4,
		name: "Egbon Mayowa",
		img:
			"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
		text: "Perfect place to chill and practice programming. ",
	},
];
// select items
const img = document.getElementById("person-img");
const guest = document.getElementById("guest");
const guest_review = document.getElementById("guest_review");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
	const item = reviews[currentItem];
	img.src = item.img;
	guest.textContent = item.name;
	guest_review.textContent = item.text;
});

// show person based on item
function showPerson(person) {
	const item = reviews[person];
	img.src = item.img;
	guest.textContent = item.name;
	guest_review.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
	console.log("hello");

	currentItem = Math.floor(Math.random() * reviews.length);
	showPerson(currentItem);
});

// end of reviews
