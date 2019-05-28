import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { Triangle } from './triangle-tracker.js';
import './styles.css';

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var triangle = new Triangle(side1, side2, side3);
    var result = triangle.checkType();

    $(".triangle_type").text(result);

    $("#result").show();

    event.preventDefault();
  });
});