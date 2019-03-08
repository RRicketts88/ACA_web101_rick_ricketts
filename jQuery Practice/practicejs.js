// once the page is ready, it will run a function, starting with no value in the block
$(document).ready(function() {
  let $block = null;

  // if any of the rows are clicked on, it will run this function
  $('[data-row]').click(function() {
    if ($block) {
      // below we either do nothing or move the block to another row if an appropriate block is clicked on
      $(this).append($block);
      $block = null;
    } else {
      $block = $(this).children().last().detach();
    }
  })
})