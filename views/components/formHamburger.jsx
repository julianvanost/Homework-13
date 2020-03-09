const React = require('react');

function FormHamburger() {
  return (
    <form>
      <div class="form-group">
        <label for="inputHamburgerTextArea">Enter Burger Type</label>
        <p><textarea class="form-control" id="inputHamburgerTextArea" rows="3"></textarea></p>
        <p><button type="button" class="btn btn-primary btn-lg" id="submitHamburger">Add to Menu</button></p>
      </div>
    </form>
  );
}
module.exports = FormHamburger;