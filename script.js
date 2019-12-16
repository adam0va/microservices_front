function clearItem(arg) {
	$(arg).empty();
}
function makeTitle () { 
	$("<h1/>", {
		"id": "readers",
		"class": "title"
	}).text("READERS").appendTo(".title_wrap");
	$("<h1/>", {
		"id": "books",
		"class": "title"
	}).text("BOOKS").appendTo(".title_wrap");
	$("<h1/>", {
		"id": "authors",
		"class": "title"
	}).text("AUTHORS").appendTo(".title_wrap");
}


function makeReadersTitle () {
	$("<div/>").text("name").appendTo(".content_title");
	$("<div/>").text("surname").appendTo(".content_title");
	$("<div/>").text("date of birth").appendTo(".content_title");
	$("<div/>").text("uuid").appendTo(".content_title");
};
function makeAuthorsTitle () {
	$("<div/>").text("name").appendTo(".content_title");
	$("<div/>").text("surname").appendTo(".content_title");
	$("<div/>").text("date of birth").appendTo(".content_title");
	$("<div/>").text("country").appendTo(".content_title");
	$("<div/>").text("uuid").appendTo(".content_title");
};
function makeBooksTitle () {
	$("<div/>").text("title").appendTo(".content_title");
	$("<div/>").text("author name").appendTo(".content_title");
	$("<div/>").text("author surname").appendTo(".content_title");
	$("<div/>").text("book uuid").appendTo(".content_title");
	$("<div/>").text("status").appendTo(".content_title");
};
function makeBooksTitleAlone () {
	$("<div/>").text("title").appendTo(".content_title");
	$("<div/>").text("book uuid").appendTo(".content_title");
	$("<div/>").text("status").appendTo(".content_title");
}

function readersLoad () {
	clearItem(".title_wrap")
	clearItem(".content_title")
	clearItem(".content");
	clearItem(".form_wrap");
	$( ".bookdetails" ).remove();
	makeTitle();
	makeReadersTitle();
	$.get('http://127.0.0.1:8000/readers/', function(data) {
  		$.each(data, function(key, val) {
  			var items = [];
  			items.push("<div id='" + key +"'>" + val.name + "</div>");
  			items.push("<div id='" + key +"'>" + val.surname + "</div>");
  			items.push("<div id='" + key +"'>" + val.date_of_birth + "</div>");
  			items.push("<div id='uuidclass'>" + val.uuid + "</div>");	
	  		$("<div/>", {
	  			"class": "content_element",
	  			"id": "element_reader",
	  			html: items.join("")
	  		}).appendTo(".content");
	  	});
  	});
  	makePostFormReaders();
}
function authorsLoad () {
	clearItem(".title_wrap")
	clearItem(".content_title")
	clearItem(".content");
	clearItem(".form_wrap");
	$( ".bookdetails" ).remove();
	makeTitle();
	makeAuthorsTitle();
	$.get('http://127.0.0.1:8000/authors/', function(data) {
  		$.each(data, function(key, val) {
  			var items = [];
  			items.push("<div id='" + key +"'>" + val.name + "</div>");
  			items.push("<div id='" + key +"'>" + val.surname + "</div>");
  			items.push("<div id='" + key +"'>" + val.date_of_birth + "</div>");
  			items.push("<div id='" + key +"'>" + val.country + "</div>");
  			items.push("<div id='uuidclass'>" + val.uuid + "</div>");		
	  		$("<div/>", {
	  			"class": "content_element",
	  			"id": "element_authors",
	  			html: items.join("")
	  		}).appendTo(".content");
	  	});
  	});
  	makePostFormAuthors();
}
function booksLoad () {
	clearItem(".title_wrap")
	clearItem(".content_title")
	clearItem(".content");
	clearItem(".form_wrap");
	$( ".bookdetails" ).remove();
	makeTitle();
	makeBooksTitle();
	$.get('http://127.0.0.1:8000/books/', function(data) {
  		$.each(data, function(key, val) {
  			var items = [];
				items.push("<div id='" + key +"'>" + val.title + "</div>");
				if (val.author_uuid == null) {
	  			items.push("<div id='" + key +"'>" + "---" + "</div>");
	  			items.push("<div id='" + key +"'>" + "---" + "</div>");
				} else {
	  			items.push("<div id='" + key +"'>" + val.author.name + "</div>");
	  			items.push("<div id='" + key +"'>" + val.author.surname + "</div>");
				}
  			items.push("<div id='uuidclass'>" + val.uuid + "</div>");
			if (val.reader_uuid == null) {
				items.push("<div>avaliable</div>");
			} else {
				items.push("<div>not avaliable</div>");
			}
	  		$("<div/>", {
	  			"class": "content_element",
	  			"id": "element_books",
	  			html: items.join(""),
	  		}).appendTo(".content");
	  	});
  	});
  	makePostFormBooks();
}


function uuidreadersLoad (tracker) {
	clearItem(".content");
	clearItem(".form_wrap");
	$.get('http://127.0.0.1:8000/readers/' + tracker + '/', function(data) {
			var items = [];
			items.push("<div>" + data.name + "</div>");
			items.push("<div>" + data.surname + "</div>");
			items.push("<div>" + data.date_of_birth + "</div>");
			items.push("<div id='uuidclass'>" + data.uuid + "</div>");	
  		$("<div/>", {
  			"class": "content_element_alone",
  			html: items.join("")
  		}).appendTo(".content");
  		$("<div/>", {
  			"class": "content_element_button_delete_readers",
  		}).text("DELETE").appendTo(".content_element_alone");
  	});
  	makePatchFormReaders();		
}
function uuidauthorsLoad (tracker) {
	clearItem(".content");
	clearItem(".form_wrap");
	$.get('http://127.0.0.1:8000/authors/' + tracker + '/', function(data) {
			var items = [];
  			items.push("<div>" + data.name + "</div>");
  			items.push("<div>" + data.surname + "</div>");
  			items.push("<div>" + data.date_of_birth + "</div>");
  			items.push("<div>" + data.country + "</div>");
  			items.push("<div id='uuidclass'>" + data.uuid + "</div>");		
  		$("<div/>", {
  			"class": "content_element_alone",
  			html: items.join("")
  		}).appendTo(".content");
  		$("<div/>", {
  			"class": "content_element_button_delete_authors",
  		}).text("DELETE").appendTo(".content_element_alone");
  	});
  	makePatchFormAuthors();		
}
function uuidbooksLoad (tracker) {
	clearItem(".content");
	clearItem(".form_wrap");
	clearItem(".content_title");
	$(".bookdetails").remove();
	makeBooksTitleAlone();
	$.get('http://127.0.0.1:8000/books/' + tracker, function(data) {
			var items = [];
		items.push("<div>" + data.title + "</div>");
		items.push("<div id='uuidclass'>" + data.uuid + "</div>");
		if (data.reader_uuid == null) {
			items.push("<div>avaliable</div>");
		} else {
			items.push("<div>not avaliable</div>");
		}
  		$("<div/>", {
  			"class": "content_element_alone",
  			html: items.join("")
  		}).appendTo(".content");
  		$("<div/>", {
  			"class": "content_element_button_delete_books"
  		}).text("DELETE").appendTo(".content_element_alone");
  		var subitems = [];
  		$("<div/>", {
  			"class": "bookdetails",
  		}).appendTo(".content_wrap");
  		if (data.author_uuid == null) {
  			subitems.push("<h1>AUTHOR</h1>");
  			subitems.push("<div>" + "---" + "</div>");
  			subitems.push("<div>" + "---" + "</div>");
  			subitems.push("<div>" + "---" + "</div>");
  		} else {
  			subitems.push("<h1>AUTHOR</h1>");
  			subitems.push("<div>" + data.author.name + "</div>");
  			subitems.push("<div>" + data.author.surname + "</div>");
  			subitems.push("<div>" + data.author_uuid + "</div>");
  		}
  		$("<div/>", {
  			"class": "content_element_alone_passive",
  			html: subitems.join("")
  		}).appendTo(".bookdetails");
  		var subitemssmall = [];
  		if (data.reader_uuid == null) {
  			subitemssmall.push("<h1>READER</h1>");
  			subitemssmall.push("<div>" + "---" + "</div>");
  			subitemssmall.push("<div>" + "---" + "</div>");
  			subitemssmall.push("<div>" + "---" + "</div>");
  		} else {
  			subitemssmall.push("<h1>READER</h1>");
  			subitemssmall.push("<div>" + data.reader.name + "</div>");
  			subitemssmall.push("<div>" + data.reader.surname + "</div>");
  			subitemssmall.push("<div>" + data.reader_uuid + "</div>");
  		}
  		$("<div/>", {
  			"class": "content_element_alone_passive",
  			html: subitemssmall.join("")
  		}).appendTo(".bookdetails");
  	});
  	makePatchFormBooks();		
}


function makePatchFormReaders () {
	clearItem("#form_wrap");
	$("<form/>", {
		"id": "patch_form",
		"action": "",
		"method": ""
	}).appendTo(".form_wrap");
	$("<input/>", {
		"type": "text",
		"name": "name",
		"id": "formName",
		"placeholder": "user name"
	}).appendTo("#patch_form");
	$("<input/>", {
		"type": "text",
		"name": "surname",
		"id": "formSurname",
		"placeholder": "user surname"
	}).appendTo("#patch_form");
	$("<input/>", {
		"type": "text",
		"name": "date_of_birth",
		"id": "formDate",
		"placeholder": "user birth date"
	}).appendTo("#patch_form");
	$("<button/>", {
		"id": "submit_patch_readers",
		"type": "button",
		"name": "submit",
		"value": "submit"
	}).text("edit").appendTo("#patch_form");
	validateFormCall();
}
function makePatchFormBooks () {
	clearItem("#form_wrap");
	$("<form/>", {
		"id": "patch_form",
		"action": "",
		"method": ""
	}).appendTo(".form_wrap");
	$("<input/>", {
		"type": "text",
		"name": "title",
		"id": "formTitle",
		"placeholder": "title"
	}).appendTo("#patch_form");
	$("<input/>", {
		"type": "text",
		"name": "author_uuid",
		"id": "formAuthorUUID",
		"placeholder": "author uuid"
	}).appendTo("#patch_form");
	$("<input/>", {
		"type": "text",
		"name": "reader_uuid",
		"id": "formReaderUUID",
		"placeholder": "reader uuid"
	}).appendTo("#patch_form");
	$("<button/>", {
		"id": "submit_patch_books",
		"type": "button",
		"name": "submit",
		"value": "submit"
	}).text("edit").appendTo("#patch_form");
	validateFormCall();
}
function makePatchFormAuthors () {
	clearItem("#form_wrap");
	$("<form/>", {
		"id": "patch_form",
		"action": "",
		"method": ""
	}).appendTo(".form_wrap");
	$("<input/>", {
		"type": "text",
		"name": "name",
		"id": "formName",
		"placeholder": "user name"
	}).appendTo("#patch_form");
	$("<input/>", {
		"type": "text",
		"name": "surname",
		"id": "formSurname",
		"placeholder": "user surname"
	}).appendTo("#patch_form");
	$("<input/>", {
		"type": "text",
		"name": "date_of_birth",
		"id": "formDate",
		"placeholder": "user birth date"
	}).appendTo("#patch_form");
	$("<input/>", {
		"type": "text",
		"name": "country",
		"id": "formCountry",
		"placeholder": "author country"
	}).appendTo("#patch_form");
	$("<button/>", {
		"id": "submit_patch_authors",
		"type": "button",
		"name": "submit",
		"value": "submit"
	}).text("edit").appendTo("#patch_form");
	validateFormCall();
}


function makePostFormReaders () {
	clearItem("#form_wrap");
	$("<form/>", {
		"id": "post_form",
		"action": "POST",
		"method": ""
	}).appendTo(".form_wrap");
	$("<input/>", {
		"type": "text",
		"name": "name",
		"id": "formName",
		"placeholder": "user name",
	}).appendTo("#post_form");
	$("<input/>", {
		"type": "text",
		"name": "surname",
		"id": "formSurname",
		"placeholder": "user surname",
	}).appendTo("#post_form");
	$("<input/>", {
		"type": "text",
		"name": "date_of_birth",
		"id": "formDate",
		"placeholder": "user date of birth"
	}).appendTo("#post_form");
	$("<button/>", {
		"id": "submit_post_readers",
		"type": "button",
		"name": "submit",
		"value": "submit"
	}).text("add user").appendTo("#post_form");
	validateFormCall();
}
function makePostFormBooks () {
	clearItem("#form_wrap");
	$("<form/>", {
		"id": "post_form",
		"action": "POST",
		"method": ""
	}).appendTo(".form_wrap");
	$("<input/>", {
		"type": "text",
		"name": "title",
		"id": "formTitle",
		"placeholder": "title"
	}).appendTo("#post_form");
	$("<input/>", {
		"type": "text",
		"name": "author_uuid",
		"id": "formAuthorUUID",
		"placeholder": "author uuid"
	}).appendTo("#post_form");
	$("<input/>", {
		"type": "text",
		"name": "reader_uuid",
		"id": "formReaderUUID",
		"placeholder": "reader uuid"
	}).appendTo("#post_form");
	$("<button/>", {
		"id": "submit_post_books",
		"type": "button",
		"name": "submit",
		"value": "submit"
	}).text("add book").appendTo("#post_form");
	validateFormCall();
}
function makePostFormAuthors () {
	clearItem("#form_wrap");
	$("<form/>", {
		"id": "post_form",
		"action": "POST",
		"method": ""
	}).appendTo(".form_wrap");
	$("<input/>", {
		"type": "text",
		"name": "name",
		"id": "formName",
		"placeholder": "author name"
	}).appendTo("#post_form");
	$("<input/>", {
		"type": "text",
		"name": "surname",
		"id": "formSurname",
		"placeholder": "author surname"
	}).appendTo("#post_form");
	$("<input/>", {
		"type": "text",
		"name": "date_of_birth",
		"id": "formDate",
		"placeholder": "author birth date"
	}).appendTo("#post_form");
	$("<input/>", {
		"type": "text",
		"name": "country",
		"id": "formCountry",
		"placeholder": "author country"
	}).appendTo("#post_form");
	$("<button/>", {
		"id": "submit_post_authors",
		"type": "button",
		"name": "submit",
		"value": "submit"
	}).text("add author").appendTo("#post_form");
	validateFormCall();
}


function patchReaders (idtracker) {
	$.ajax({
		url: 'http://127.0.0.1:8000/readers/' + idtracker + '/',
		method: "PATCH",
		dataType: 'json',
		data: $("#patch_form").serialize(),
		success: function(result) {
			console.log(result + "addet");
		},
		error: function(xhr, resp, text) {
			alert("Status code: " + xhr.status + " " + text);
		}
	});
}
function patchBooks (idtracker) {
	$.ajax({
		url: 'http://127.0.0.1:8000/books/' + idtracker + '/',
		method: "PATCH",
		dataType: 'json',
		data: $("#patch_form").serialize(),
		success: function(result) {
			console.log(result + "addet");
		},
		error: function(xhr, resp, text) {
			alert("Status code: " + xhr.status + " " + text);
		}
	});
}
function patchAuthors (idtracker) {
	$.ajax({
		url: 'http://127.0.0.1:8000/authors/' + idtracker + '/',
		method: "PATCH",
		dataType: 'json',
		data: $("#patch_form").serialize(),
		success: function(result) {
			console.log(result + "addet");
		},
		error: function(xhr, resp, text) {
			alert("Status code: " + xhr.status + " " + text);
		}
	});
}


function submitReaders () {
	$.ajax({
		url: 'http://127.0.0.1:8000/readers/',
		method: "POST",
		dataType: 'json',
		data: $("#post_form").serialize(),
		success: function(result) {
			console.log(result + "addet");
		},
		error: function(xhr, resp, text) {
			alert("Status code: " + xhr.status + " " + text);
		}
	});
}
function submitAuthors () {
	$.ajax({
		url: 'http://127.0.0.1:8000/authors/',
		method: "POST",
		dataType: 'json',
		data: $("#post_form").serialize(),
		success: function(result) {
			console.log(result + "addet");
		},
		error: function(xhr, resp, text) {
			alert("Status code: " + xhr.status + " " + text);
		}
	});
}
function submitBooks () {
	$.ajax({
		url: 'http://127.0.0.1:8000/books/',
		method: "POST",
		dataType: 'json',
		data: $("#post_form").serialize(),
		success: function(result) {
			console.log(result + "addet");
		},
		error: function(xhr, resp, text) {
			alert("Status code: " + xhr.status + " " + text);
		}
	});
}


function deleteReaders (idtracker) {
	$.ajax({
		url: 'http://127.0.0.1:8000/readers/' + idtracker +'/',
		method: "DELETE",
		success: function(result) {
			console.log(result + "addet");
		},
		error: function(xhr, resp, text) {
			alert("Status code: " + xhr.status + " " + text);
		}
	});
}
function deleteAuthors (idtracker) {
	$.ajax({
		url: 'http://127.0.0.1:8000/authors/' + idtracker +'/',
		method: "DELETE",
		success: function(result) {
			console.log(result + "addet");
		},
		error: function(xhr, resp, text) {
			alert("Status code: " + xhr.status + " " + text);
		}
	});
}
function deleteBooks (idtracker) {
	$.ajax({
		url: 'http://127.0.0.1:8000/books/' + idtracker +'/',
		method: "DELETE",
		success: function(result) {
			console.log(result + "addet");
		},
		error: function(xhr, resp, text) {
			alert("Status code: " + xhr.status + " " + text);
		}
	});
}
/* event handlers */

$(document).on('click','#element_reader', function() {
	var uuidAlone = $(this).find("#uuidclass").text();
	uuidreadersLoad(uuidAlone);
});
$(document).on('click','#element_authors', function() {
	var uuidAlone = $(this).find("#uuidclass").text();
	uuidauthorsLoad(uuidAlone);
});
$(document).on('click','#element_books', function() {
	var uuidAlone = $(this).find("#uuidclass").text();
	uuidbooksLoad(uuidAlone);
});



$(document).on('click', '#submit_post_readers', function() {
	submitReaders();
	readersLoad();
});
$(document).on('click', '#submit_post_authors', function() {
	submitAuthors();
	authorsLoad();
});
$(document).on('click', '#submit_post_books', function() {
	submitBooks();
	booksLoad();
});


$(document).on('click','#submit_patch_readers', function() {
	var uuidAlone = $(".content_element_alone").find("#uuidclass").text();
	patchReaders(uuidAlone);
	$(".content_element_alone").remove();
	uuidreadersLoad(uuidAlone);
});
$(document).on('click','#submit_patch_books', function() {
	var uuidAlone = $(".content_element_alone").find("#uuidclass").text();
	patchBooks(uuidAlone);
	$(".content_element_alone").remove();
	uuidbooksLoad(uuidAlone);
});
$(document).on('click','#submit_patch_authors', function() {
	var uuidAlone = $(".content_element_alone").find("#uuidclass").text();
	patchAuthors(uuidAlone);
	$(".content_element_alone").remove();
	uuidauthorsLoad(uuidAlone);
});


$(document).on('click', '.content_element_button_delete_readers', function() {
	var uuidBye = $(".content_element_alone").find("#uuidclass").text();
	deleteReaders(uuidBye);
	readersLoad();
});
$(document).on('click', '.content_element_button_delete_authors', function() {
	var uuidBye = $(".content_element_alone").find("#uuidclass").text();
	deleteAuthors(uuidBye);
	authorsLoad();
});
$(document).on('click', '.content_element_button_delete_books', function() {
	var uuidBye = $(".content_element_alone").find("#uuidclass").text();
	deleteBooks(uuidBye);
	booksLoad();
});


$(document).on('click', '#readers', function() {
	readersLoad();
	$("#readers").addClass("title_active");
	$("#authors").removeClass("title_active");
	$("#books").removeClass("title_active");
});
$(document).on('click', '#authors', function() {
	authorsLoad();
	$("#readers").removeClass("title_active");
	$("#authors").addClass("title_active");
	$("#books").removeClass("title_active");
});
$(document).on('click', '#books', function() {
	booksLoad();
	$("#readers").removeClass("title_active");
	$("#authors").removeClass("title_active");
	$("#books").addClass("title_active");
});

/* page ready func */

$(document).ready(function() {
	makeTitle();
	jQuery.validator.addMethod("lettersonly", function(value, element) {
		return this.optional(element) || /^[a-z\s]+$/i.test(value);
	}, "Letters only allowed");
	jQuery.validator.addMethod("uuidvalidate", function(value, element) {
		return this.optional(element) || /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/.test(value);
	}, "Enter uuid or leave empty");
});

/* validation plugin*/

function validateFormCall() {
	$("#post_form").validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 20,
				lettersonly: true,
			},
			surname: {
				required: true,
				minlength: 2,
				maxlength: 20,
				lettersonly: true,
			},
			date_of_birth: {
				required: true,
				date: true
			},
			title: {
				required: true,
				minlength: 3,
				maxlength: 50,
				lettersonly: true,
			},
			author_uuid: {
				uuidvalidate: true,
			},
			reader_uuid: {
				uuidvalidate: true,
			},
			country: {
				required: true,
				minlength: 3,
				maxlength: 20,
				lettersonly: true,
			}
		}
	});
	$("#patch_form").validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 20,
				lettersonly: true,
			},
			surname: {
				required: true,
				minlength: 2,
				maxlength: 20,
				lettersonly: true,
			},
			date_of_birth: {
				required: true,
				date: true
			},
			title: {
				required: true,
				minlength: 3,
				maxlength: 50,
				lettersonly: true,
			},
			author_uuid: {
				uuidvalidate: true,
			},
			reader_uuid: {
				uuidvalidate: true,
			},
			country: {
				required: true,
				minlength: 3,
				maxlength: 20,
				lettersonly: true,
			}
		}
	});
};