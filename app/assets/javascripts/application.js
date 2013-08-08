//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function(){
  $("body").on("change", "#member_level", intervalLevel)
  $("body").on("change", "#member_overall", intervalOverall)
})

function intervalLevel(){
  $(".level_field").val(this.value)
}

function intervalOverall(){
  $(".overall_field").val(this.value)
}
